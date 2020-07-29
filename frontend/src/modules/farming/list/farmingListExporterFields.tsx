import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.farming.fields.id'),
  },
  {
    name: 'year',
    label: i18n('entities.farming.fields.year'),
  },
  {
    name: 'season',
    label: i18n('entities.farming.fields.season'),
  },
  {
    name: 'farmer',
    label: i18n('entities.farming.fields.farmer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'land',
    label: i18n('entities.farming.fields.land'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plantType',
    label: i18n('entities.farming.fields.plantType'),
  },
  {
    name: 'farmingMethod',
    label: i18n('entities.farming.fields.farmingMethod'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dateSown',
    label: i18n('entities.farming.fields.dateSown'),
  },
  {
    name: 'irrigations',
    label: i18n('entities.farming.fields.irrigations'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'labors',
    label: i18n('entities.farming.fields.labors'),
  },
  {
    name: 'mixedFarming',
    label: i18n('entities.farming.fields.mixedFarming'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'cropRotation',
    label: i18n('entities.farming.fields.cropRotation'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'cropsRotated',
    label: i18n('entities.farming.fields.cropsRotated'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.farming.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.farming.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
