import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.irrigation.fields.id'),
  },
  {
    name: 'land',
    label: i18n('entities.irrigation.fields.land'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'source',
    label: i18n('entities.irrigation.fields.source'),
  },
  {
    name: 'hours',
    label: i18n('entities.irrigation.fields.hours'),
  },
  {
    name: 'rate',
    label: i18n('entities.irrigation.fields.rate'),
  },
  {
    name: 'machine',
    label: i18n('entities.irrigation.fields.machine'),
  },
  {
    name: 'volume',
    label: i18n('entities.irrigation.fields.volume'),
  },
  {
    name: 'start',
    label: i18n('entities.irrigation.fields.start'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'end',
    label: i18n('entities.irrigation.fields.end'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'label',
    label: i18n('entities.irrigation.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.irrigation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.irrigation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
