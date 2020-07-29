import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.organicFertilizer.fields.name'),
    schema: schemas.string(
      i18n('entities.organicFertilizer.fields.name'),
      {},
    ),
  },
  {
    name: 'n',
    label: i18n('entities.organicFertilizer.fields.n'),
    schema: schemas.integer(
      i18n('entities.organicFertilizer.fields.n'),
      {},
    ),
  },
  {
    name: 'p',
    label: i18n('entities.organicFertilizer.fields.p'),
    schema: schemas.integer(
      i18n('entities.organicFertilizer.fields.p'),
      {},
    ),
  },
  {
    name: 'k',
    label: i18n('entities.organicFertilizer.fields.k'),
    schema: schemas.integer(
      i18n('entities.organicFertilizer.fields.k'),
      {},
    ),
  },
  {
    name: 'nutrients',
    label: i18n('entities.organicFertilizer.fields.nutrients'),
    schema: schemas.string(
      i18n('entities.organicFertilizer.fields.nutrients'),
      {},
    ),
  },
  {
    name: 'method',
    label: i18n('entities.organicFertilizer.fields.method'),
    schema: schemas.string(
      i18n('entities.organicFertilizer.fields.method'),
      {},
    ),
  },
  {
    name: 'result',
    label: i18n('entities.organicFertilizer.fields.result'),
    schema: schemas.string(
      i18n('entities.organicFertilizer.fields.result'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.organicFertilizer.fields.price'),
    schema: schemas.integer(
      i18n('entities.organicFertilizer.fields.price'),
      {},
    ),
  },
];