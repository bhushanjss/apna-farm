import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/herbicide/importer/herbicideImporterSelectors';
import HerbicideService from 'src/modules/herbicide/herbicideService';
import fields from 'src/modules/herbicide/importer/herbicideImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'HERBICIDE_IMPORTER',
  selectors,
  HerbicideService.import,
  fields,
  i18n('entities.herbicide.importer.fileName'),
);
