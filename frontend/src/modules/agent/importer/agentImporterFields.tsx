import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'person',
    label: i18n('entities.agent.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.agent.fields.person'),
      {},
    ),
  },
  {
    name: 'farmers',
    label: i18n('entities.agent.fields.farmers'),
    schema: schemas.relationToMany(
      i18n('entities.agent.fields.farmers'),
      {},
    ),
  },
  {
    name: 'locations',
    label: i18n('entities.agent.fields.locations'),
    schema: schemas.relationToMany(
      i18n('entities.agent.fields.locations'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.agent.fields.label'),
    schema: schemas.string(
      i18n('entities.agent.fields.label'),
      {},
    ),
  },
];