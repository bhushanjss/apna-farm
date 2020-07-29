import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.fertilizer.fields.name'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.name'),
      {},
    ),
  },
  {
    name: 'npk',
    label: i18n('entities.fertilizer.fields.npk'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.npk'),
      {},
    ),
  },
  {
    name: 'nutrients',
    label: i18n('entities.fertilizer.fields.nutrients'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.nutrients'),
      {},
    ),
  },
  {
    name: 'brand',
    label: i18n('entities.fertilizer.fields.brand'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.brand'),
      {},
    ),
  },
  {
    name: 'crops',
    label: i18n('entities.fertilizer.fields.crops'),
    schema: schemas.relationToMany(
      i18n('entities.fertilizer.fields.crops'),
      {},
    ),
  },
  {
    name: 'plants',
    label: i18n('entities.fertilizer.fields.plants'),
    schema: schemas.relationToMany(
      i18n('entities.fertilizer.fields.plants'),
      {},
    ),
  },
  {
    name: 'method',
    label: i18n('entities.fertilizer.fields.method'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.method'),
      {},
    ),
  },
  {
    name: 'result',
    label: i18n('entities.fertilizer.fields.result'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.result'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.fertilizer.fields.price'),
    schema: schemas.integer(
      i18n('entities.fertilizer.fields.price'),
      {},
    ),
  },
  {
    name: 'composition',
    label: i18n('entities.fertilizer.fields.composition'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.composition'),
      {},
    ),
  },
  {
    name: 'dosage',
    label: i18n('entities.fertilizer.fields.dosage'),
    schema: schemas.string(
      i18n('entities.fertilizer.fields.dosage'),
      {},
    ),
  },
];