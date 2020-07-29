import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'farmer',
    label: i18n('entities.answer.fields.farmer'),
    schema: schemas.relationToOne(
      i18n('entities.answer.fields.farmer'),
      {},
    ),
  },
  {
    name: 'question',
    label: i18n('entities.answer.fields.question'),
    schema: schemas.relationToOne(
      i18n('entities.answer.fields.question'),
      {},
    ),
  },
  {
    name: 'answer',
    label: i18n('entities.answer.fields.answer'),
    schema: schemas.string(
      i18n('entities.answer.fields.answer'),
      {},
    ),
  },
];