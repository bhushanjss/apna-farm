import { DataTypes } from 'sequelize';

/**
 * Herbicide database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const herbicide = sequelize.define(
    'herbicide',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      materials: {
        type: DataTypes.TEXT,
      },
      cost: {
        type: DataTypes.INTEGER,
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

  herbicide.associate = (models) => {
    models.herbicide.belongsToMany(models.weed, {
      as: 'weeds',
      constraints: false,
      through: 'herbicideWeedsWeed',
    });


    
    models.herbicide.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.herbicide.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.herbicide.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return herbicide;
}
