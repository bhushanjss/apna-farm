import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.weed.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.weed.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.weed.fields.description'),
  },
  {
    name: 'crops',
    label: i18n('entities.weed.fields.crops'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plants',
    label: i18n('entities.weed.fields.plants'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'remedy',
    label: i18n('entities.weed.fields.remedy'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.weed.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.weed.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
