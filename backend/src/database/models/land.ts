import { DataTypes } from 'sequelize';

/**
 * Land database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const land = sequelize.define(
    'land',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      area: {
        type: DataTypes.DECIMAL,
      },
      groundwaterAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      groundwaterDepth: {
        type: DataTypes.INTEGER,
      },
      canalAccess: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      waterAcidity: {
        type: DataTypes.TEXT,
      },
      downpour: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      downpourRate: {
        type: DataTypes.TEXT,
      },
      hailstorm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      flood: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  land.associate = (models) => {
    models.land.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });

    models.land.belongsTo(models.farmer, {
      as: 'farmer',
      constraints: false,
    });


    
    models.land.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.land.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.land.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return land;
}
