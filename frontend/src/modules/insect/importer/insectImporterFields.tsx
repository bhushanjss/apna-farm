import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.insect.fields.name'),
    schema: schemas.string(
      i18n('entities.insect.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.insect.fields.description'),
    schema: schemas.string(
      i18n('entities.insect.fields.description'),
      {},
    ),
  },
  {
    name: 'crops',
    label: i18n('entities.insect.fields.crops'),
    schema: schemas.relationToMany(
      i18n('entities.insect.fields.crops'),
      {},
    ),
  },
  {
    name: 'plants',
    label: i18n('entities.insect.fields.plants'),
    schema: schemas.relationToMany(
      i18n('entities.insect.fields.plants'),
      {},
    ),
  },
  {
    name: 'remedy',
    label: i18n('entities.insect.fields.remedy'),
    schema: schemas.string(
      i18n('entities.insect.fields.remedy'),
      {},
    ),
  },
];