import { DataTypes } from 'sequelize';

/**
 * Location database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const location = sequelize.define(
    'location',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      district: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      tehsil: {
        type: DataTypes.TEXT,
      },
      village: {
        type: DataTypes.TEXT,
      },
      coords: {
        type: DataTypes.TEXT,
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

  location.associate = (models) => {



    
    models.location.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.location.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.location.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return location;
}
