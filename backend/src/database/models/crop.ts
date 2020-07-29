import { DataTypes } from 'sequelize';

/**
 * Crop database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const crop = sequelize.define(
    'crop',
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
          "Cereals",
          "Fibre",
          "Fodder",
          "Green_Manure",
          "Oilseed",
          "Pulses",
          "Sugarcane",
          "Other"
        ],
      },
      fertilizer: {
        type: DataTypes.TEXT,
      },
      climate: {
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

  crop.associate = (models) => {



    
    models.crop.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.crop.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.crop.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return crop;
}
