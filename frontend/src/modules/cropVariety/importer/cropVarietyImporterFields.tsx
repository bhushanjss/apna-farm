import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'crop',
    label: i18n('entities.cropVariety.fields.crop'),
    schema: schemas.relationToOne(
      i18n('entities.cropVariety.fields.crop'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.cropVariety.fields.name'),
    schema: schemas.string(
      i18n('entities.cropVariety.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.cropVariety.fields.description'),
    schema: schemas.string(
      i18n('entities.cropVariety.fields.description'),
      {},
    ),
  },
  {
    name: 'cropDuration',
    label: i18n('entities.cropVariety.fields.cropDuration'),
    schema: schemas.integer(
      i18n('entities.cropVariety.fields.cropDuration'),
      {},
    ),
  },
  {
    name: 'cropYield',
    label: i18n('entities.cropVariety.fields.cropYield'),
    schema: schemas.integer(
      i18n('entities.cropVariety.fields.cropYield'),
      {},
    ),
  },
  {
    name: 'seedRate',
    label: i18n('entities.cropVariety.fields.seedRate'),
    schema: schemas.integer(
      i18n('entities.cropVariety.fields.seedRate'),
      {},
    ),
  },
  {
    name: 'seedPlantationTime',
    label: i18n('entities.cropVariety.fields.seedPlantationTime'),
    schema: schemas.string(
      i18n('entities.cropVariety.fields.seedPlantationTime'),
      {},
    ),
  },
];