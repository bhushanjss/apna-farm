import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/farmer/importer/farmerImporterSelectors';
import FarmerService from 'src/modules/farmer/farmerService';
import fields from 'src/modules/farmer/importer/farmerImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'FARMER_IMPORTER',
  selectors,
  FarmerService.import,
  fields,
  i18n('entities.farmer.importer.fileName'),
);
