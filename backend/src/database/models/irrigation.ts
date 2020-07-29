import { DataTypes } from 'sequelize';

/**
 * Irrigation database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const irrigation = sequelize.define(
    'irrigation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      source: {
        type: DataTypes.ENUM,
        values: [
          "Groundwater",
          "Canal",
          "River",
          "Pond",
          "Lake"
        ],
      },
      hours: {
        type: DataTypes.INTEGER,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      machine: {
        type: DataTypes.TEXT,
      },
      volume: {
        type: DataTypes.INTEGER,
      },
      start: {
        type: DataTypes.DATE,
      },
      end: {
        type: DataTypes.DATE,
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

  irrigation.associate = (models) => {
    models.irrigation.belongsTo(models.land, {
      as: 'land',
      constraints: false,
    });


    
    models.irrigation.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.irrigation.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.irrigation.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return irrigation;
}
