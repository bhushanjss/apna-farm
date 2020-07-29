import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import rainwaterEnumerators from 'src/modules/rainwater/rainwaterEnumerators';

export default [
  {
    name: 'land',
    label: i18n('entities.rainwater.fields.land'),
    schema: schemas.relationToOne(
      i18n('entities.rainwater.fields.land'),
      {},
    ),
  },
  {
    name: 'waterReceived',
    label: i18n('entities.rainwater.fields.waterReceived'),
    schema: schemas.integer(
      i18n('entities.rainwater.fields.waterReceived'),
      {},
    ),
  },
  {
    name: 'waterUsedRabi',
    label: i18n('entities.rainwater.fields.waterUsedRabi'),
    schema: schemas.integer(
      i18n('entities.rainwater.fields.waterUsedRabi'),
      {},
    ),
  },
  {
    name: 'waterUsedKharif',
    label: i18n('entities.rainwater.fields.waterUsedKharif'),
    schema: schemas.integer(
      i18n('entities.rainwater.fields.waterUsedKharif'),
      {},
    ),
  },
  {
    name: 'waterSourceKharif',
    label: i18n('entities.rainwater.fields.waterSourceKharif'),
    schema: schemas.enumerator(
      i18n('entities.rainwater.fields.waterSourceKharif'),
      {
        "options": rainwaterEnumerators.waterSourceKharif
      },
    ),
  },
  {
    name: 'waterUsedZaid',
    label: i18n('entities.rainwater.fields.waterUsedZaid'),
    schema: schemas.integer(
      i18n('entities.rainwater.fields.waterUsedZaid'),
      {},
    ),
  },
  {
    name: 'waterSourceZaid',
    label: i18n('entities.rainwater.fields.waterSourceZaid'),
    schema: schemas.enumerator(
      i18n('entities.rainwater.fields.waterSourceZaid'),
      {
        "options": rainwaterEnumerators.waterSourceZaid
      },
    ),
  },
  {
    name: 'extraRainwater',
    label: i18n('entities.rainwater.fields.extraRainwater'),
    schema: schemas.integer(
      i18n('entities.rainwater.fields.extraRainwater'),
      {},
    ),
  },
  {
    name: 'rainwaterHarvestingAllowed',
    label: i18n('entities.rainwater.fields.rainwaterHarvestingAllowed'),
    schema: schemas.boolean(
      i18n('entities.rainwater.fields.rainwaterHarvestingAllowed'),
      {},
    ),
  },
];