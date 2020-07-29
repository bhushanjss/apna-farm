import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.herbicide.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.herbicide.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.herbicide.fields.type'),
  },
  {
    name: 'description',
    label: i18n('entities.herbicide.fields.description'),
  },
  {
    name: 'materials',
    label: i18n('entities.herbicide.fields.materials'),
  },
  {
    name: 'weeds',
    label: i18n('entities.herbicide.fields.weeds'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'cost',
    label: i18n('entities.herbicide.fields.cost'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.herbicide.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.herbicide.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
