import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/farmingMethod/importer/farmingMethodImporterSelectors';
import FarmingMethodService from 'src/modules/farmingMethod/farmingMethodService';
import fields from 'src/modules/farmingMethod/importer/farmingMethodImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'FARMINGMETHOD_IMPORTER',
  selectors,
  FarmingMethodService.import,
  fields,
  i18n('entities.farmingMethod.importer.fileName'),
);
