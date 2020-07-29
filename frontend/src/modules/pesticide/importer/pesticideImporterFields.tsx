import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.pesticide.fields.name'),
    schema: schemas.string(
      i18n('entities.pesticide.fields.name'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.pesticide.fields.type'),
    schema: schemas.string(
      i18n('entities.pesticide.fields.type'),
      {},
    ),
  },
  {
    name: 'decription',
    label: i18n('entities.pesticide.fields.decription'),
    schema: schemas.string(
      i18n('entities.pesticide.fields.decription'),
      {},
    ),
  },
  {
    name: 'materials',
    label: i18n('entities.pesticide.fields.materials'),
    schema: schemas.string(
      i18n('entities.pesticide.fields.materials'),
      {},
    ),
  },
  {
    name: 'pests',
    label: i18n('entities.pesticide.fields.pests'),
    schema: schemas.relationToMany(
      i18n('entities.pesticide.fields.pests'),
      {},
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.pesticide.fields.cost'),
    schema: schemas.integer(
      i18n('entities.pesticide.fields.cost'),
      {},
    ),
  },
];