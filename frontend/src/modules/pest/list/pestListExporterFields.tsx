import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.pest.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.pest.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.pest.fields.description'),
  },
  {
    name: 'crops',
    label: i18n('entities.pest.fields.crops'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plants',
    label: i18n('entities.pest.fields.plants'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'remedy',
    label: i18n('entities.pest.fields.remedy'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.pest.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.pest.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
