import { DataTypes } from 'sequelize';

/**
 * Disease database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const disease = sequelize.define(
    'disease',
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

  disease.associate = (models) => {
    models.disease.belongsToMany(models.crop, {
      as: 'crops',
      constraints: false,
      through: 'diseaseCropsCrop',
    });

    models.disease.belongsToMany(models.plant, {
      as: 'plants',
      constraints: false,
      through: 'diseasePlantsPlant',
    });


    
    models.disease.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.disease.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.disease.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return disease;
}
