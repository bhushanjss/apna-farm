import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.land.fields.id'),
  },
  {
    name: 'location',
    label: i18n('entities.land.fields.location'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'area',
    label: i18n('entities.land.fields.area'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'farmer',
    label: i18n('entities.land.fields.farmer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'groundwaterAvailable',
    label: i18n('entities.land.fields.groundwaterAvailable'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'groundwaterDepth',
    label: i18n('entities.land.fields.groundwaterDepth'),
  },
  {
    name: 'canalAccess',
    label: i18n('entities.land.fields.canalAccess'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'waterAcidity',
    label: i18n('entities.land.fields.waterAcidity'),
  },
  {
    name: 'downpour',
    label: i18n('entities.land.fields.downpour'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'downpourRate',
    label: i18n('entities.land.fields.downpourRate'),
  },
  {
    name: 'hailstorm',
    label: i18n('entities.land.fields.hailstorm'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'flood',
    label: i18n('entities.land.fields.flood'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'label',
    label: i18n('entities.land.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.land.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.land.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
