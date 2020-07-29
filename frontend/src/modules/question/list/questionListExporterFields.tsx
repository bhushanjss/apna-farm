import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.question.fields.id'),
  },
  {
    name: 'question',
    label: i18n('entities.question.fields.question'),
  },
  {
    name: 'priority',
    label: i18n('entities.question.fields.priority'),
  },
  {
    name: 'remark',
    label: i18n('entities.question.fields.remark'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.question.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.question.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
