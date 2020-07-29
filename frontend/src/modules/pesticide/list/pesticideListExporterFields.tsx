import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.pesticide.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.pesticide.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.pesticide.fields.type'),
  },
  {
    name: 'decription',
    label: i18n('entities.pesticide.fields.decription'),
  },
  {
    name: 'materials',
    label: i18n('entities.pesticide.fields.materials'),
  },
  {
    name: 'pests',
    label: i18n('entities.pesticide.fields.pests'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'cost',
    label: i18n('entities.pesticide.fields.cost'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.pesticide.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.pesticide.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
