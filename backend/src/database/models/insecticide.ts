import { DataTypes } from 'sequelize';

/**
 * Insecticide database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const insecticide = sequelize.define(
    'insecticide',
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

  insecticide.associate = (models) => {
    models.insecticide.belongsToMany(models.insect, {
      as: 'insects',
      constraints: false,
      through: 'insecticideInsectsInsect',
    });


    
    models.insecticide.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.insecticide.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.insecticide.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return insecticide;
}
