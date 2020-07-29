import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.rainwater.fields.id'),
  },
  {
    name: 'land',
    label: i18n('entities.rainwater.fields.land'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'waterReceived',
    label: i18n('entities.rainwater.fields.waterReceived'),
  },
  {
    name: 'waterUsedRabi',
    label: i18n('entities.rainwater.fields.waterUsedRabi'),
  },
  {
    name: 'waterUsedKharif',
    label: i18n('entities.rainwater.fields.waterUsedKharif'),
  },
  {
    name: 'waterSourceKharif',
    label: i18n('entities.rainwater.fields.waterSourceKharif'),
  },
  {
    name: 'waterUsedZaid',
    label: i18n('entities.rainwater.fields.waterUsedZaid'),
  },
  {
    name: 'waterSourceZaid',
    label: i18n('entities.rainwater.fields.waterSourceZaid'),
  },
  {
    name: 'extraRainwater',
    label: i18n('entities.rainwater.fields.extraRainwater'),
  },
  {
    name: 'rainwaterHarvestingAllowed',
    label: i18n('entities.rainwater.fields.rainwaterHarvestingAllowed'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.rainwater.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.rainwater.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
