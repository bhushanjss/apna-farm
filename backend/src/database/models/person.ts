import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Person database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const person = sequelize.define(
    'person',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      personId: {
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [2, 255],
          notEmpty: true,
        }
      },
      lastName: {
        type: DataTypes.STRING(255),
        validate: {
          len: [2, 255],
        }
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "male",
          "female"
        ],
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('birthdate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('birthdate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      phoneNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      email: {
        type: DataTypes.TEXT,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      label: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'deletedAt'],
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  person.associate = (models) => {
    models.person.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });


    
    models.person.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.person.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.person.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return person;
}
