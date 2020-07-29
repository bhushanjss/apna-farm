import { DataTypes } from 'sequelize';

/**
 * Pest database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const pest = sequelize.define(
    'pest',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      remedy: {
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

  pest.associate = (models) => {
    models.pest.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'pestCropsCrop',
    });

    models.pest.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'pestPlantsPlant',
    });


    
    models.pest.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.pest.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.pest.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return pest;
}
