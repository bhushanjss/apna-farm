import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.farmer.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.farmer.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'agent',
    label: i18n('entities.farmer.fields.agent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'area',
    label: i18n('entities.farmer.fields.area'),
  },
  {
    name: 'lands',
    label: i18n('entities.farmer.fields.lands'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'label',
    label: i18n('entities.farmer.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.farmer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.farmer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
