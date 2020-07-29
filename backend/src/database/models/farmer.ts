import { DataTypes } from 'sequelize';

/**
 * Farmer database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const farmer = sequelize.define(
    'farmer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      area: {
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

  farmer.associate = (models) => {
    models.farmer.belongsTo(models.person, {
      as: 'person',
      constraints: false,
    });

    models.farmer.belongsTo(models.agent, {
      as: 'agent',
      constraints: false,
    });

    models.farmer.belongsToMany(models.land, {
      as: 'lands',
      constraints: false,
      through: 'farmerLandsLand',
    });


    
    models.farmer.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.farmer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.farmer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return farmer;
}
