import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.insecticide.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.insecticide.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.insecticide.fields.type'),
  },
  {
    name: 'description',
    label: i18n('entities.insecticide.fields.description'),
  },
  {
    name: 'materials',
    label: i18n('entities.insecticide.fields.materials'),
  },
  {
    name: 'insects',
    label: i18n('entities.insecticide.fields.insects'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'cost',
    label: i18n('entities.insecticide.fields.cost'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.insecticide.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.insecticide.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
