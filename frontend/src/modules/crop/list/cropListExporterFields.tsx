import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.crop.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.crop.fields.name'),
  },
  {
    name: 'category',
    label: i18n('entities.crop.fields.category'),
  },
  {
    name: 'fertilizer',
    label: i18n('entities.crop.fields.fertilizer'),
  },
  {
    name: 'climate',
    label: i18n('entities.crop.fields.climate'),
  },
  {
    name: 'irrigationTimes',
    label: i18n('entities.crop.fields.irrigationTimes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.crop.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.crop.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
