import { DataTypes } from 'sequelize';

/**
 * Weed database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const weed = sequelize.define(
    'weed',
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

  weed.associate = (models) => {
    models.weed.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'weedCropsCrop',
    });

    models.weed.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'weedPlantsPlant',
    });


    
    models.weed.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.weed.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.weed.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return weed;
}
