import { DataTypes } from 'sequelize';

/**
 * PlantVariety database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const plantVariety = sequelize.define(
    'plantVariety',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      plantYield: {
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

  plantVariety.associate = (models) => {
    models.plantVariety.belongsTo(models.plant, {
      as: 'plant',
      constraints: false,
    });


    
    models.plantVariety.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.plantVariety.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.plantVariety.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return plantVariety;
}
