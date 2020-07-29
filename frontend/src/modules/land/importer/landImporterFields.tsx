import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'location',
    label: i18n('entities.land.fields.location'),
    schema: schemas.relationToOne(
      i18n('entities.land.fields.location'),
      {},
    ),
  },
  {
    name: 'area',
    label: i18n('entities.land.fields.area'),
    schema: schemas.decimal(
      i18n('entities.land.fields.area'),
      {},
    ),
  },
  {
    name: 'farmer',
    label: i18n('entities.land.fields.farmer'),
    schema: schemas.relationToOne(
      i18n('entities.land.fields.farmer'),
      {},
    ),
  },
  {
    name: 'groundwaterAvailable',
    label: i18n('entities.land.fields.groundwaterAvailable'),
    schema: schemas.boolean(
      i18n('entities.land.fields.groundwaterAvailable'),
      {},
    ),
  },
  {
    name: 'groundwaterDepth',
    label: i18n('entities.land.fields.groundwaterDepth'),
    schema: schemas.integer(
      i18n('entities.land.fields.groundwaterDepth'),
      {},
    ),
  },
  {
    name: 'canalAccess',
    label: i18n('entities.land.fields.canalAccess'),
    schema: schemas.boolean(
      i18n('entities.land.fields.canalAccess'),
      {},
    ),
  },
  {
    name: 'waterAcidity',
    label: i18n('entities.land.fields.waterAcidity'),
    schema: schemas.string(
      i18n('entities.land.fields.waterAcidity'),
      {},
    ),
  },
  {
    name: 'downpour',
    label: i18n('entities.land.fields.downpour'),
    schema: schemas.boolean(
      i18n('entities.land.fields.downpour'),
      {},
    ),
  },
  {
    name: 'downpourRate',
    label: i18n('entities.land.fields.downpourRate'),
    schema: schemas.string(
      i18n('entities.land.fields.downpourRate'),
      {},
    ),
  },
  {
    name: 'hailstorm',
    label: i18n('entities.land.fields.hailstorm'),
    schema: schemas.boolean(
      i18n('entities.land.fields.hailstorm'),
      {},
    ),
  },
  {
    name: 'flood',
    label: i18n('entities.land.fields.flood'),
    schema: schemas.boolean(
      i18n('entities.land.fields.flood'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.land.fields.label'),
    schema: schemas.string(
      i18n('entities.land.fields.label'),
      {},
    ),
  },
];