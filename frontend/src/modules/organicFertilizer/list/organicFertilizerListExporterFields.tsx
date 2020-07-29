import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.organicFertilizer.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.organicFertilizer.fields.name'),
  },
  {
    name: 'n',
    label: i18n('entities.organicFertilizer.fields.n'),
  },
  {
    name: 'p',
    label: i18n('entities.organicFertilizer.fields.p'),
  },
  {
    name: 'k',
    label: i18n('entities.organicFertilizer.fields.k'),
  },
  {
    name: 'nutrients',
    label: i18n('entities.organicFertilizer.fields.nutrients'),
  },
  {
    name: 'method',
    label: i18n('entities.organicFertilizer.fields.method'),
  },
  {
    name: 'result',
    label: i18n('entities.organicFertilizer.fields.result'),
  },
  {
    name: 'price',
    label: i18n('entities.organicFertilizer.fields.price'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.organicFertilizer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.organicFertilizer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
