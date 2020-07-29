import { DataTypes } from 'sequelize';

/**
 * Answer database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const answer = sequelize.define(
    'answer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      answer: {
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

  answer.associate = (models) => {
    models.answer.belongsTo(models.farmer, {
      as: 'farmer',
      constraints: false,
    });

    models.answer.belongsTo(models.question, {
      as: 'question',
      constraints: false,
    });


    
    models.answer.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.answer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.answer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return answer;
}
