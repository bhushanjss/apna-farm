import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.fertilizer.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.fertilizer.fields.name'),
  },
  {
    name: 'npk',
    label: i18n('entities.fertilizer.fields.npk'),
  },
  {
    name: 'nutrients',
    label: i18n('entities.fertilizer.fields.nutrients'),
  },
  {
    name: 'brand',
    label: i18n('entities.fertilizer.fields.brand'),
  },
  {
    name: 'crops',
    label: i18n('entities.fertilizer.fields.crops'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'plants',
    label: i18n('entities.fertilizer.fields.plants'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'method',
    label: i18n('entities.fertilizer.fields.method'),
  },
  {
    name: 'result',
    label: i18n('entities.fertilizer.fields.result'),
  },
  {
    name: 'price',
    label: i18n('entities.fertilizer.fields.price'),
  },
  {
    name: 'composition',
    label: i18n('entities.fertilizer.fields.composition'),
  },
  {
    name: 'dosage',
    label: i18n('entities.fertilizer.fields.dosage'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.fertilizer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.fertilizer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
