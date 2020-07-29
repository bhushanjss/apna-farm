import { DataTypes } from 'sequelize';

/**
 * Plant database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const plant = sequelize.define(
    'plant',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.ENUM,
        values: [
          "Vegetable",
          "Fruit",
          "Medicine",
          "Spice",
          "Flower",
          "Other"
        ],
      },
      soilDescription: {
        type: DataTypes.TEXT,
      },
      climate: {
        type: DataTypes.TEXT,
      },
      fertilizer: {
        type: DataTypes.TEXT,
      },
      irrigationTimes: {
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

  plant.associate = (models) => {



    
    models.plant.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.plant.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.plant.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return plant;
}
