import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Farming database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const farming = sequelize.define(
    'farming',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      year: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2020,
        }
      },
      season: {
        type: DataTypes.ENUM,
        values: [
          "Rabi",
          "Kharif",
          "Zaid"
        ],
      },
      plantType: {
        type: DataTypes.ENUM,
        values: [
          "Crop",
          "Plant"
        ],
      },
      dateSown: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateSown')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateSown'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      labors: {
        type: DataTypes.INTEGER,
        validate: {

        }
      },
      mixedFarming: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      cropRotation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      cropsRotated: {
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

  farming.associate = (models) => {
    models.farming.belongsTo(models.farmer, {
      as: 'farmer',
      constraints: false,
    });

    models.farming.belongsToMany(models.land, {
      as: 'land',
      constraints: false,
      through: 'farmingLandLand',
    });

    models.farming.belongsTo(models.farmingMethod, {
      as: 'farmingMethod',
      constraints: false,
    });

    models.farming.belongsToMany(models.irrigation, {
      as: 'irrigations',
      constraints: false,
      through: 'farmingIrrigationsIrrigation',
    });


    
    models.farming.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.farming.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.farming.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return farming;
}
