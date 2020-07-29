import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'state',
    label: i18n('entities.location.fields.state'),
    schema: schemas.string(
      i18n('entities.location.fields.state'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'district',
    label: i18n('entities.location.fields.district'),
    schema: schemas.string(
      i18n('entities.location.fields.district'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'tehsil',
    label: i18n('entities.location.fields.tehsil'),
    schema: schemas.string(
      i18n('entities.location.fields.tehsil'),
      {},
    ),
  },
  {
    name: 'village',
    label: i18n('entities.location.fields.village'),
    schema: schemas.string(
      i18n('entities.location.fields.village'),
      {},
    ),
  },
  {
    name: 'coords',
    label: i18n('entities.location.fields.coords'),
    schema: schemas.string(
      i18n('entities.location.fields.coords'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.location.fields.label'),
    schema: schemas.string(
      i18n('entities.location.fields.label'),
      {},
    ),
  },
];