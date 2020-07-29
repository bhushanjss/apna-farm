import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import farmingMethodEnumerators from 'src/modules/farmingMethod/farmingMethodEnumerators';

export default [
  {
    name: 'farmingType',
    label: i18n('entities.farmingMethod.fields.farmingType'),
    schema: schemas.enumerator(
      i18n('entities.farmingMethod.fields.farmingType'),
      {
        "options": farmingMethodEnumerators.farmingType
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.farmingMethod.fields.description'),
    schema: schemas.string(
      i18n('entities.farmingMethod.fields.description'),
      {},
    ),
  },
  {
    name: 'sowingMethod',
    label: i18n('entities.farmingMethod.fields.sowingMethod'),
    schema: schemas.enumerator(
      i18n('entities.farmingMethod.fields.sowingMethod'),
      {
        "options": farmingMethodEnumerators.sowingMethod
      },
    ),
  },
  {
    name: 'crops',
    label: i18n('entities.farmingMethod.fields.crops'),
    schema: schemas.relationToMany(
      i18n('entities.farmingMethod.fields.crops'),
      {},
    ),
  },
  {
    name: 'plants',
    label: i18n('entities.farmingMethod.fields.plants'),
    schema: schemas.relationToMany(
      i18n('entities.farmingMethod.fields.plants'),
      {},
    ),
  },
];