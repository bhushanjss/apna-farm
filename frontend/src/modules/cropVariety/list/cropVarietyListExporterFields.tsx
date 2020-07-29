import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cropVariety.fields.id'),
  },
  {
    name: 'crop',
    label: i18n('entities.cropVariety.fields.crop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.cropVariety.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.cropVariety.fields.description'),
  },
  {
    name: 'cropDuration',
    label: i18n('entities.cropVariety.fields.cropDuration'),
  },
  {
    name: 'cropYield',
    label: i18n('entities.cropVariety.fields.cropYield'),
  },
  {
    name: 'seedRate',
    label: i18n('entities.cropVariety.fields.seedRate'),
  },
  {
    name: 'seedPlantationTime',
    label: i18n('entities.cropVariety.fields.seedPlantationTime'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cropVariety.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cropVariety.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
