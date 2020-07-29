import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'question',
    label: i18n('entities.question.fields.question'),
    schema: schemas.string(
      i18n('entities.question.fields.question'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'priority',
    label: i18n('entities.question.fields.priority'),
    schema: schemas.integer(
      i18n('entities.question.fields.priority'),
      {},
    ),
  },
  {
    name: 'remark',
    label: i18n('entities.question.fields.remark'),
    schema: schemas.string(
      i18n('entities.question.fields.remark'),
      {},
    ),
  },
];