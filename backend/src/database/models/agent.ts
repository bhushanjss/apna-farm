import { DataTypes } from 'sequelize';

/**
 * Agent database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const agent = sequelize.define(
    'agent',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  agent.associate = (models) => {
    models.agent.belongsTo(models.person, {
      as: 'person',
      constraints: false,
    });

    models.agent.belongsToMany(models.farmer, {
      as: 'farmers',
      constraints: false,
      through: 'agentFarmersFarmer',
    });

    models.agent.belongsToMany(models.location, {
      as: 'locations',
      constraints: false,
      through: 'agentLocationsLocation',
    });


    
    models.agent.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.agent.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.agent.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return agent;
}
