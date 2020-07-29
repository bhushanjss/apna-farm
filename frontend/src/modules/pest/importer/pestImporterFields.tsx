import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.pest.fields.name'),
    schema: schemas.string(
      i18n('entities.pest.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.pest.fields.description'),
    schema: schemas.string(
      i18n('entities.pest.fields.description'),
      {},
    ),
  },
  {
    name: 'crops',
    label: i18n('entities.pest.fields.crops'),
    schema: schemas.relationToMany(
      i18n('entities.pest.fields.crops'),
      {},
    ),
  },
  {
    name: 'plants',
    label: i18n('entities.pest.fields.plants'),
    schema: schemas.relationToMany(
      i18n('entities.pest.fields.plants'),
      {},
    ),
  },
  {
    name: 'remedy',
    label: i18n('entities.pest.fields.remedy'),
    schema: schemas.string(
      i18n('entities.pest.fields.remedy'),
      {},
    ),
  },
];