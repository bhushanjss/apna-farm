import { DataTypes } from 'sequelize';

/**
 * CropVariety database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const cropVariety = sequelize.define(
    'cropVariety',
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
      cropDuration: {
        type: DataTypes.INTEGER,
      },
      cropYield: {
        type: DataTypes.INTEGER,
      },
      seedRate: {
        type: DataTypes.INTEGER,
      },
      seedPlantationTime: {
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

  cropVariety.associate = (models) => {
    models.cropVariety.belongsTo(models.crop, {
      as: 'crop',
      constraints: false,
    });


    
    models.cropVariety.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.cropVariety.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.cropVariety.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return cropVariety;
}
