import { DataTypes } from 'sequelize';

/**
 * OrganicFertilizer database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const organicFertilizer = sequelize.define(
    'organicFertilizer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      n: {
        type: DataTypes.INTEGER,
      },
      p: {
        type: DataTypes.INTEGER,
      },
      k: {
        type: DataTypes.INTEGER,
      },
      nutrients: {
        type: DataTypes.TEXT,
      },
      method: {
        type: DataTypes.TEXT,
      },
      result: {
        type: DataTypes.TEXT,
      },
      price: {
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

  organicFertilizer.associate = (models) => {



    
    models.organicFertilizer.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.organicFertilizer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.organicFertilizer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return organicFertilizer;
}
