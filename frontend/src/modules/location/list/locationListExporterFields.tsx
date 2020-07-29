import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.location.fields.id'),
  },
  {
    name: 'state',
    label: i18n('entities.location.fields.state'),
  },
  {
    name: 'district',
    label: i18n('entities.location.fields.district'),
  },
  {
    name: 'tehsil',
    label: i18n('entities.location.fields.tehsil'),
  },
  {
    name: 'village',
    label: i18n('entities.location.fields.village'),
  },
  {
    name: 'coords',
    label: i18n('entities.location.fields.coords'),
  },
  {
    name: 'label',
    label: i18n('entities.location.fields.label'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.location.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.location.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
