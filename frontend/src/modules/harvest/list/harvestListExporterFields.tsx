import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.harvest.fields.id'),
  },
  {
    name: 'farmer',
    label: i18n('entities.harvest.fields.farmer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'land',
    label: i18n('entities.harvest.fields.land'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'crop',
    label: i18n('entities.harvest.fields.crop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'plant',
    label: i18n('entities.harvest.fields.plant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.harvest.fields.quantity'),
  },
  {
    name: 'unit',
    label: i18n('entities.harvest.fields.unit'),
  },
  {
    name: 'valueType',
    label: i18n('entities.harvest.fields.valueType'),
  },
  {
    name: 'date',
    label: i18n('entities.harvest.fields.date'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.harvest.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.harvest.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
