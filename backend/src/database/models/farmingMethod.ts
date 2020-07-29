import { DataTypes } from 'sequelize';

/**
 * FarmingMethod database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const farmingMethod = sequelize.define(
    'farmingMethod',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      farmingType: {
        type: DataTypes.ENUM,
        values: [
          "Traditional",
          "Modern"
        ],
      },
      description: {
        type: DataTypes.TEXT,
      },
      sowingMethod: {
        type: DataTypes.ENUM,
        values: [
          "Seed_Drill",
          "Broadcasting_Method",
          "Zero_Tillage_Drill",
          "Rotavator",
          "Manual",
          "Other"
        ],
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

  farmingMethod.associate = (models) => {
    models.farmingMethod.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'farmingMethodCropsCrop',
    });

    models.farmingMethod.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'farmingMethodPlantsPlant',
    });


    
    models.farmingMethod.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.farmingMethod.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.farmingMethod.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return farmingMethod;
}
