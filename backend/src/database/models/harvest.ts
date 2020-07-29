import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Harvest database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const harvest = sequelize.define(
    'harvest',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      unit: {
        type: DataTypes.TEXT,
      },
      valueType: {
        type: DataTypes.ENUM,
        values: [
          "Expected",
          "Actual"
        ],
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('date')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  harvest.associate = (models) => {
    models.harvest.belongsTo(models.farmer, {
      as: 'farmer',
      constraints: false,
    });

    models.harvest.belongsTo(models.land, {
      as: 'land',
      constraints: false,
    });

    models.harvest.belongsTo(models.crop, {
      as: 'crop',
      constraints: false,
    });

    models.harvest.belongsTo(models.plant, {
      as: 'plant',
      constraints: false,
    });


    
    models.harvest.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.harvest.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.harvest.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return harvest;
}
