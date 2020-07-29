import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.soil.fields.id'),
  },
  {
    name: 'land',
    label: i18n('entities.soil.fields.land'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'type',
    label: i18n('entities.soil.fields.type'),
  },
  {
    name: 'pH',
    label: i18n('entities.soil.fields.pH'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'temperature',
    label: i18n('entities.soil.fields.temperature'),
  },
  {
    name: 'organicCarbon',
    label: i18n('entities.soil.fields.organicCarbon'),
  },
  {
    name: 'cec',
    label: i18n('entities.soil.fields.cec'),
  },
  {
    name: 'nitrogen',
    label: i18n('entities.soil.fields.nitrogen'),
  },
  {
    name: 'phosphorus',
    label: i18n('entities.soil.fields.phosphorus'),
  },
  {
    name: 'potassium',
    label: i18n('entities.soil.fields.potassium'),
  },
  {
    name: 'other',
    label: i18n('entities.soil.fields.other'),
  },
  {
    name: 'label',
    label: i18n('entities.soil.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.soil.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.soil.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
