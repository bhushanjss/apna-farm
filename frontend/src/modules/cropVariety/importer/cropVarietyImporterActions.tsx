import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cropVariety/importer/cropVarietyImporterSelectors';
import CropVarietyService from 'src/modules/cropVariety/cropVarietyService';
import fields from 'src/modules/cropVariety/importer/cropVarietyImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'CROPVARIETY_IMPORTER',
  selectors,
  CropVarietyService.import,
  fields,
  i18n('entities.cropVariety.importer.fileName'),
);
