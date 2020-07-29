import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/farming/importer/farmingImporterSelectors';
import FarmingService from 'src/modules/farming/farmingService';
import fields from 'src/modules/farming/importer/farmingImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'FARMING_IMPORTER',
  selectors,
  FarmingService.import,
  fields,
  i18n('entities.farming.importer.fileName'),
);
