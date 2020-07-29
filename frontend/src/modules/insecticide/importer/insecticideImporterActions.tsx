import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/insecticide/importer/insecticideImporterSelectors';
import InsecticideService from 'src/modules/insecticide/insecticideService';
import fields from 'src/modules/insecticide/importer/insecticideImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'INSECTICIDE_IMPORTER',
  selectors,
  InsecticideService.import,
  fields,
  i18n('entities.insecticide.importer.fileName'),
);
