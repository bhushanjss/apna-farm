import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.agent.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.agent.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'farmers',
    label: i18n('entities.agent.fields.farmers'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'locations',
    label: i18n('entities.agent.fields.locations'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'label',
    label: i18n('entities.agent.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.agent.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.agent.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
