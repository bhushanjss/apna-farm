import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import personEnumerators from 'src/modules/person/personEnumerators';

export default [
  {
    name: 'personId',
    label: i18n('entities.person.fields.personId'),
    schema: schemas.integer(
      i18n('entities.person.fields.personId'),
      {},
    ),
  },
  {
    name: 'firstName',
    label: i18n('entities.person.fields.firstName'),
    schema: schemas.string(
      i18n('entities.person.fields.firstName'),
      {
        "min": 2,
        "max": 255,
        "required": true
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.person.fields.lastName'),
    schema: schemas.string(
      i18n('entities.person.fields.lastName'),
      {
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.person.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.gender'),
      {
        "required": true,
        "options": personEnumerators.gender
      },
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.person.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.person.fields.birthdate'),
      {},
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.person.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.person.fields.phoneNumber'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'location',
    label: i18n('entities.person.fields.location'),
    schema: schemas.relationToOne(
      i18n('entities.person.fields.location'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.person.fields.email'),
    schema: schemas.string(
      i18n('entities.person.fields.email'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.person.fields.active'),
    schema: schemas.boolean(
      i18n('entities.person.fields.active'),
      {},
    ),
  },
  {
    name: 'label',
    label: i18n('entities.person.fields.label'),
    schema: schemas.string(
      i18n('entities.person.fields.label'),
      {},
    ),
  },
];