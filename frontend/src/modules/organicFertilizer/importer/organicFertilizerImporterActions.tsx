import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/organicFertilizer/importer/organicFertilizerImporterSelectors';
import OrganicFertilizerService from 'src/modules/organicFertilizer/organicFertilizerService';
import fields from 'src/modules/organicFertilizer/importer/organicFertilizerImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'ORGANICFERTILIZER_IMPORTER',
  selectors,
  OrganicFertilizerService.import,
  fields,
  i18n('entities.organicFertilizer.importer.fileName'),
);
