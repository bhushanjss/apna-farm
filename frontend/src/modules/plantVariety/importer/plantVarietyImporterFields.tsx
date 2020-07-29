import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'plant',
    label: i18n('entities.plantVariety.fields.plant'),
    schema: schemas.relationToOne(
      i18n('entities.plantVariety.fields.plant'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.plantVariety.fields.name'),
    schema: schemas.string(
      i18n('entities.plantVariety.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.plantVariety.fields.description'),
    schema: schemas.string(
      i18n('entities.plantVariety.fields.description'),
      {},
    ),
  },
  {
    name: 'duration',
    label: i18n('entities.plantVariety.fields.duration'),
    schema: schemas.integer(
      i18n('entities.plantVariety.fields.duration'),
      {},
    ),
  },
  {
    name: 'plantYield',
    label: i18n('entities.plantVariety.fields.plantYield'),
    schema: schemas.integer(
      i18n('entities.plantVariety.fields.plantYield'),
      {},
    ),
  },
];