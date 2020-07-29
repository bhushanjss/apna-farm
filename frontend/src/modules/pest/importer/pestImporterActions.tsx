import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pest/importer/pestImporterSelectors';
import PestService from 'src/modules/pest/pestService';
import fields from 'src/modules/pest/importer/pestImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'PEST_IMPORTER',
  selectors,
  PestService.import,
  fields,
  i18n('entities.pest.importer.fileName'),
);
