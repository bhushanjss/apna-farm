import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'person',
    label: i18n('entities.farmer.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.farmer.fields.person'),
      {},
    ),
  },
  {
    name: 'agent',
    label: i18n('entities.farmer.fields.agent'),
    schema: schemas.relationToOne(
      i18n('entities.farmer.fields.agent'),
      {},
    ),
  },
  {
    name: 'area',
    label: i18n('entities.farmer.fields.area'),
    schema: schemas.string(
      i18n('entities.farmer.fields.area'),
      {},
    ),
  },
  {
    name: 'lands',
    label: i18n('entities.farmer.fields.lands'),
    schema: schemas.relationToMany(
      i18n('entities.farmer.fields.lands'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.farmer.fields.label'),
    schema: schemas.string(
      i18n('entities.farmer.fields.label'),
      {},
    ),
  },
];