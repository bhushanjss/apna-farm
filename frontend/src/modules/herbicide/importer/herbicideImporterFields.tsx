import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.herbicide.fields.name'),
    schema: schemas.string(
      i18n('entities.herbicide.fields.name'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.herbicide.fields.type'),
    schema: schemas.string(
      i18n('entities.herbicide.fields.type'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.herbicide.fields.description'),
    schema: schemas.string(
      i18n('entities.herbicide.fields.description'),
      {},
    ),
  },
  {
    name: 'materials',
    label: i18n('entities.herbicide.fields.materials'),
    schema: schemas.string(
      i18n('entities.herbicide.fields.materials'),
      {},
    ),
  },
  {
    name: 'weeds',
    label: i18n('entities.herbicide.fields.weeds'),
    schema: schemas.relationToMany(
      i18n('entities.herbicide.fields.weeds'),
      {},
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.herbicide.fields.cost'),
    schema: schemas.integer(
      i18n('entities.herbicide.fields.cost'),
      {},
    ),
  },
];