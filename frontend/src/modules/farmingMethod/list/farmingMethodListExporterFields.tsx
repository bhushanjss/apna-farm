import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.farmingMethod.fields.id'),
  },
  {
    name: 'farmingType',
    label: i18n('entities.farmingMethod.fields.farmingType'),
  },
  {
    name: 'description',
    label: i18n('entities.farmingMethod.fields.description'),
  },
  {
    name: 'sowingMethod',
    label: i18n('entities.farmingMethod.fields.sowingMethod'),
  },
  {
    name: 'crops',
    label: i18n('entities.farmingMethod.fields.crops'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plants',
    label: i18n('entities.farmingMethod.fields.plants'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.farmingMethod.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.farmingMethod.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
