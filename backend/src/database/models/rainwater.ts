import { DataTypes } from 'sequelize';

/**
 * Rainwater database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const rainwater = sequelize.define(
    'rainwater',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      waterReceived: {
        type: DataTypes.INTEGER,
      },
      waterUsedRabi: {
        type: DataTypes.INTEGER,
      },
      waterUsedKharif: {
        type: DataTypes.INTEGER,
      },
      waterSourceKharif: {
        type: DataTypes.ENUM,
        values: [
          "Groundwater",
          "Canal",
          "River",
          "Pond",
          "Lake"
        ],
      },
      waterUsedZaid: {
        type: DataTypes.INTEGER,
      },
      waterSourceZaid: {
        type: DataTypes.ENUM,
        values: [
          "Groundwater",
          "Canal",
          "River",
          "Pond",
          "Lake"
        ],
      },
      extraRainwater: {
        type: DataTypes.INTEGER,
      },
      rainwaterHarvestingAllowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  rainwater.associate = (models) => {
    models.rainwater.belongsTo(models.land, {
      as: 'land',
      constraints: false,
    });


    
    models.rainwater.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.rainwater.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.rainwater.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return rainwater;
}
