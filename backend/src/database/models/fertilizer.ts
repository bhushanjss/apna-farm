import { DataTypes } from 'sequelize';

/**
 * Fertilizer database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const fertilizer = sequelize.define(
    'fertilizer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      npk: {
        type: DataTypes.TEXT,
      },
      nutrients: {
        type: DataTypes.TEXT,
      },
      brand: {
        type: DataTypes.TEXT,
      },
      method: {
        type: DataTypes.TEXT,
      },
      result: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      composition: {
        type: DataTypes.TEXT,
      },
      dosage: {
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

  fertilizer.associate = (models) => {
    models.fertilizer.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'fertilizerCropsCrop',
    });

    models.fertilizer.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'fertilizerPlantsPlant',
    });


    
    models.fertilizer.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.fertilizer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.fertilizer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return fertilizer;
}
