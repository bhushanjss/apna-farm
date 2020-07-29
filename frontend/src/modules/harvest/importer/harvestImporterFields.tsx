import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import harvestEnumerators from 'src/modules/harvest/harvestEnumerators';

export default [
  {
    name: 'farmer',
    label: i18n('entities.harvest.fields.farmer'),
    schema: schemas.relationToOne(
      i18n('entities.harvest.fields.farmer'),
      {},
    ),
  },
  {
    name: 'land',
    label: i18n('entities.harvest.fields.land'),
    schema: schemas.relationToOne(
      i18n('entities.harvest.fields.land'),
      {},
    ),
  },
  {
    name: 'crop',
    label: i18n('entities.harvest.fields.crop'),
    schema: schemas.relationToOne(
      i18n('entities.harvest.fields.crop'),
      {},
    ),
  },
  {
    name: 'plant',
    label: i18n('entities.harvest.fields.plant'),
    schema: schemas.relationToOne(
      i18n('entities.harvest.fields.plant'),
      {},
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.harvest.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.harvest.fields.quantity'),
      {},
    ),
  },
  {
    name: 'unit',
    label: i18n('entities.harvest.fields.unit'),
    schema: schemas.string(
      i18n('entities.harvest.fields.unit'),
      {},
    ),
  },
  {
    name: 'valueType',
    label: i18n('entities.harvest.fields.valueType'),
    schema: schemas.enumerator(
      i18n('entities.harvest.fields.valueType'),
      {
        "options": harvestEnumerators.valueType
      },
    ),
  },
  {
    name: 'date',
    label: i18n('entities.harvest.fields.date'),
    schema: schemas.date(
      i18n('entities.harvest.fields.date'),
      {},
    ),
  },
];