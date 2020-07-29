import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.insect.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.insect.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.insect.fields.description'),
  },
  {
    name: 'crops',
    label: i18n('entities.insect.fields.crops'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plants',
    label: i18n('entities.insect.fields.plants'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'remedy',
    label: i18n('entities.insect.fields.remedy'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.insect.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.insect.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
