import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.plant.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.plant.fields.name'),
  },
  {
    name: 'category',
    label: i18n('entities.plant.fields.category'),
  },
  {
    name: 'soilDescription',
    label: i18n('entities.plant.fields.soilDescription'),
  },
  {
    name: 'climate',
    label: i18n('entities.plant.fields.climate'),
  },
  {
    name: 'fertilizer',
    label: i18n('entities.plant.fields.fertilizer'),
  },
  {
    name: 'irrigationTimes',
    label: i18n('entities.plant.fields.irrigationTimes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.plant.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.plant.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
