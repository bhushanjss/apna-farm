import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import soilEnumerators from 'src/modules/soil/soilEnumerators';

export default [
  {
    name: 'land',
    label: i18n('entities.soil.fields.land'),
    schema: schemas.relationToOne(
      i18n('entities.soil.fields.land'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.soil.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.soil.fields.type'),
      {
        "options": soilEnumerators.type
      },
    ),
  },
  {
    name: 'pH',
    label: i18n('entities.soil.fields.pH'),
    schema: schemas.decimal(
      i18n('entities.soil.fields.pH'),
      {
        "min": 0,
        "max": 14
      },
    ),
  },
  {
    name: 'temperature',
    label: i18n('entities.soil.fields.temperature'),
    schema: schemas.integer(
      i18n('entities.soil.fields.temperature'),
      {},
    ),
  },
  {
    name: 'organicCarbon',
    label: i18n('entities.soil.fields.organicCarbon'),
    schema: schemas.string(
      i18n('entities.soil.fields.organicCarbon'),
      {},
    ),
  },
  {
    name: 'cec',
    label: i18n('entities.soil.fields.cec'),
    schema: schemas.string(
      i18n('entities.soil.fields.cec'),
      {},
    ),
  },
  {
    name: 'nitrogen',
    label: i18n('entities.soil.fields.nitrogen'),
    schema: schemas.string(
      i18n('entities.soil.fields.nitrogen'),
      {},
    ),
  },
  {
    name: 'phosphorus',
    label: i18n('entities.soil.fields.phosphorus'),
    schema: schemas.string(
      i18n('entities.soil.fields.phosphorus'),
      {},
    ),
  },
  {
    name: 'potassium',
    label: i18n('entities.soil.fields.potassium'),
    schema: schemas.string(
      i18n('entities.soil.fields.potassium'),
      {},
    ),
  },
  {
    name: 'other',
    label: i18n('entities.soil.fields.other'),
    schema: schemas.string(
      i18n('entities.soil.fields.other'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.soil.fields.label'),
    schema: schemas.string(
      i18n('entities.soil.fields.label'),
      {},
    ),
  },
];