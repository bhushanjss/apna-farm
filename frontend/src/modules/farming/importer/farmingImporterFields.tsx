import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import farmingEnumerators from 'src/modules/farming/farmingEnumerators';

export default [
  {
    name: 'year',
    label: i18n('entities.farming.fields.year'),
    schema: schemas.integer(
      i18n('entities.farming.fields.year'),
      {
        "min": 2020
      },
    ),
  },
  {
    name: 'season',
    label: i18n('entities.farming.fields.season'),
    schema: schemas.enumerator(
      i18n('entities.farming.fields.season'),
      {
        "options": farmingEnumerators.season
      },
    ),
  },
  {
    name: 'farmer',
    label: i18n('entities.farming.fields.farmer'),
    schema: schemas.relationToOne(
      i18n('entities.farming.fields.farmer'),
      {},
    ),
  },
  {
    name: 'land',
    label: i18n('entities.farming.fields.land'),
    schema: schemas.relationToMany(
      i18n('entities.farming.fields.land'),
      {},
    ),
  },
  {
    name: 'plantType',
    label: i18n('entities.farming.fields.plantType'),
    schema: schemas.enumerator(
      i18n('entities.farming.fields.plantType'),
      {
        "options": farmingEnumerators.plantType
      },
    ),
  },
  {
    name: 'farmingMethod',
    label: i18n('entities.farming.fields.farmingMethod'),
    schema: schemas.relationToOne(
      i18n('entities.farming.fields.farmingMethod'),
      {},
    ),
  },
  {
    name: 'dateSown',
    label: i18n('entities.farming.fields.dateSown'),
    schema: schemas.date(
      i18n('entities.farming.fields.dateSown'),
      {},
    ),
  },
  {
    name: 'irrigations',
    label: i18n('entities.farming.fields.irrigations'),
    schema: schemas.relationToMany(
      i18n('entities.farming.fields.irrigations'),
      {},
    ),
  },
  {
    name: 'labors',
    label: i18n('entities.farming.fields.labors'),
    schema: schemas.integer(
      i18n('entities.farming.fields.labors'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'mixedFarming',
    label: i18n('entities.farming.fields.mixedFarming'),
    schema: schemas.boolean(
      i18n('entities.farming.fields.mixedFarming'),
      {},
    ),
  },
  {
    name: 'cropRotation',
    label: i18n('entities.farming.fields.cropRotation'),
    schema: schemas.boolean(
      i18n('entities.farming.fields.cropRotation'),
      {},
    ),
  },
  {
    name: 'cropsRotated',
    label: i18n('entities.farming.fields.cropsRotated'),
    schema: schemas.string(
      i18n('entities.farming.fields.cropsRotated'),
      {},
    ),
  },
];