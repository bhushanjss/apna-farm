import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import plantEnumerators from 'src/modules/plant/plantEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.plant.fields.name'),
    schema: schemas.string(
      i18n('entities.plant.fields.name'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.plant.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.plant.fields.category'),
      {
        "options": plantEnumerators.category
      },
    ),
  },
  {
    name: 'soilDescription',
    label: i18n('entities.plant.fields.soilDescription'),
    schema: schemas.string(
      i18n('entities.plant.fields.soilDescription'),
      {},
    ),
  },
  {
    name: 'climate',
    label: i18n('entities.plant.fields.climate'),
    schema: schemas.string(
      i18n('entities.plant.fields.climate'),
      {},
    ),
  },
  {
    name: 'fertilizer',
    label: i18n('entities.plant.fields.fertilizer'),
    schema: schemas.string(
      i18n('entities.plant.fields.fertilizer'),
      {},
    ),
  },
  {
    name: 'irrigationTimes',
    label: i18n('entities.plant.fields.irrigationTimes'),
    schema: schemas.string(
      i18n('entities.plant.fields.irrigationTimes'),
      {},
    ),
  },
];