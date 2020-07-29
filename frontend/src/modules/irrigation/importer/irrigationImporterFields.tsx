import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import irrigationEnumerators from 'src/modules/irrigation/irrigationEnumerators';

export default [
  {
    name: 'land',
    label: i18n('entities.irrigation.fields.land'),
    schema: schemas.relationToOne(
      i18n('entities.irrigation.fields.land'),
      {},
    ),
  },
  {
    name: 'source',
    label: i18n('entities.irrigation.fields.source'),
    schema: schemas.enumerator(
      i18n('entities.irrigation.fields.source'),
      {
        "options": irrigationEnumerators.source
      },
    ),
  },
  {
    name: 'hours',
    label: i18n('entities.irrigation.fields.hours'),
    schema: schemas.integer(
      i18n('entities.irrigation.fields.hours'),
      {},
    ),
  },
  {
    name: 'rate',
    label: i18n('entities.irrigation.fields.rate'),
    schema: schemas.integer(
      i18n('entities.irrigation.fields.rate'),
      {},
    ),
  },
  {
    name: 'machine',
    label: i18n('entities.irrigation.fields.machine'),
    schema: schemas.string(
      i18n('entities.irrigation.fields.machine'),
      {},
    ),
  },
  {
    name: 'volume',
    label: i18n('entities.irrigation.fields.volume'),
    schema: schemas.integer(
      i18n('entities.irrigation.fields.volume'),
      {},
    ),
  },
  {
    name: 'start',
    label: i18n('entities.irrigation.fields.start'),
    schema: schemas.datetime(
      i18n('entities.irrigation.fields.start'),
      {},
    ),
  },
  {
    name: 'end',
    label: i18n('entities.irrigation.fields.end'),
    schema: schemas.datetime(
      i18n('entities.irrigation.fields.end'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.irrigation.fields.label'),
    schema: schemas.string(
      i18n('entities.irrigation.fields.label'),
      {},
    ),
  },
];