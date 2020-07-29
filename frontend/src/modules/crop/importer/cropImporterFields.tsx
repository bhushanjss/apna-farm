import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import cropEnumerators from 'src/modules/crop/cropEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.crop.fields.name'),
    schema: schemas.string(
      i18n('entities.crop.fields.name'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.crop.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.crop.fields.category'),
      {
        "options": cropEnumerators.category
      },
    ),
  },
  {
    name: 'fertilizer',
    label: i18n('entities.crop.fields.fertilizer'),
    schema: schemas.string(
      i18n('entities.crop.fields.fertilizer'),
      {},
    ),
  },
  {
    name: 'climate',
    label: i18n('entities.crop.fields.climate'),
    schema: schemas.string(
      i18n('entities.crop.fields.climate'),
      {},
    ),
  },
  {
    name: 'irrigationTimes',
    label: i18n('entities.crop.fields.irrigationTimes'),
    schema: schemas.string(
      i18n('entities.crop.fields.irrigationTimes'),
      {},
    ),
  },
];