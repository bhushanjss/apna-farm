import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.disease.fields.name'),
    schema: schemas.string(
      i18n('entities.disease.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.disease.fields.description'),
    schema: schemas.string(
      i18n('entities.disease.fields.description'),
      {},
    ),
  },
  {
    name: 'crops',
    label: i18n('entities.disease.fields.crops'),
    schema: schemas.relationToMany(
      i18n('entities.disease.fields.crops'),
      {},
    ),
  },
  {
    name: 'plants',
    label: i18n('entities.disease.fields.plants'),
    schema: schemas.relationToMany(
      i18n('entities.disease.fields.plants'),
      {},
    ),
  },
  {
    name: 'remedy',
    label: i18n('entities.disease.fields.remedy'),
    schema: schemas.string(
      i18n('entities.disease.fields.remedy'),
      {},
    ),
  },
];