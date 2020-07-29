import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/insect/importer/insectImporterSelectors';
import InsectService from 'src/modules/insect/insectService';
import fields from 'src/modules/insect/importer/insectImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'INSECT_IMPORTER',
  selectors,
  InsectService.import,
  fields,
  i18n('entities.insect.importer.fileName'),
);
