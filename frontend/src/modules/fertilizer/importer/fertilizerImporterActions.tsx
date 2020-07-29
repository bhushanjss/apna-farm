import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/fertilizer/importer/fertilizerImporterSelectors';
import FertilizerService from 'src/modules/fertilizer/fertilizerService';
import fields from 'src/modules/fertilizer/importer/fertilizerImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'FERTILIZER_IMPORTER',
  selectors,
  FertilizerService.import,
  fields,
  i18n('entities.fertilizer.importer.fileName'),
);
