import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.plantVariety.fields.id'),
  },
  {
    name: 'plant',
    label: i18n('entities.plantVariety.fields.plant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.plantVariety.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.plantVariety.fields.description'),
  },
  {
    name: 'duration',
    label: i18n('entities.plantVariety.fields.duration'),
  },
  {
    name: 'plantYield',
    label: i18n('entities.plantVariety.fields.plantYield'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.plantVariety.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.plantVariety.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
