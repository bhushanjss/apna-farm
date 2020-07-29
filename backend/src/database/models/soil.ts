import { DataTypes } from 'sequelize';

/**
 * Soil database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const soil = sequelize.define(
    'soil',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: [
          "Alluvial",
          "Black",
          "Desert",
          "Laterite",
          "Mountain",
          "Peat",
          "Red",
          "Saline",
          "Other"
        ],
      },
      pH: {
        type: DataTypes.DECIMAL,
        validate: {
          max: 14,
        }
      },
      temperature: {
        type: DataTypes.INTEGER,
      },
      organicCarbon: {
        type: DataTypes.TEXT,
      },
      cec: {
        type: DataTypes.TEXT,
      },
      nitrogen: {
        type: DataTypes.TEXT,
      },
      phosphorus: {
        type: DataTypes.TEXT,
      },
      potassium: {
        type: DataTypes.TEXT,
      },
      other: {
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

  soil.associate = (models) => {
    models.soil.belongsTo(models.land, {
      as: 'land',
      constraints: false,
    });


    
    models.soil.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.soil.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.soil.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return soil;
}
