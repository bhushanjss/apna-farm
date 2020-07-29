import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.insecticide.fields.name'),
    schema: schemas.string(
      i18n('entities.insecticide.fields.name'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.insecticide.fields.type'),
    schema: schemas.string(
      i18n('entities.insecticide.fields.type'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.insecticide.fields.description'),
    schema: schemas.string(
      i18n('entities.insecticide.fields.description'),
      {},
    ),
  },
  {
    name: 'materials',
    label: i18n('entities.insecticide.fields.materials'),
    schema: schemas.string(
      i18n('entities.insecticide.fields.materials'),
      {},
    ),
  },
  {
    name: 'insects',
    label: i18n('entities.insecticide.fields.insects'),
    schema: schemas.relationToMany(
      i18n('entities.insecticide.fields.insects'),
      {},
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.insecticide.fields.cost'),
    schema: schemas.integer(
      i18n('entities.insecticide.fields.cost'),
      {},
    ),
  },
];