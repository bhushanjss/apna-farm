import { DataTypes } from 'sequelize';

/**
 * Question database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const question = sequelize.define(
    'question',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      remark: {
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

  question.associate = (models) => {



    
    models.question.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.question.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.question.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return question;
}
