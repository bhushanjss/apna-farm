import { DataTypes } from 'sequelize';

/**
 * Pesticide database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const pesticide = sequelize.define(
    'pesticide',
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
      decription: {
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

  pesticide.associate = (models) => {
    models.pesticide.belongsToMany(models.pest, {
      as: 'pests',
      constraints: false,
      through: 'pesticidePestsPest',
    });


    
    models.pesticide.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.pesticide.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.pesticide.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return pesticide;
}
