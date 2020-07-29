import { DataTypes } from 'sequelize';

/**
 * Insect database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const insect = sequelize.define(
    'insect',
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

  insect.associate = (models) => {
    models.insect.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'insectCropsCrop',
    });

    models.insect.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'insectPlantsPlant',
    });


    
    models.insect.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.insect.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.insect.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return insect;
}
