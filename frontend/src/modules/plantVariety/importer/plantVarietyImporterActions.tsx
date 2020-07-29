import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/plantVariety/importer/plantVarietyImporterSelectors';
import PlantVarietyService from 'src/modules/plantVariety/plantVarietyService';
import fields from 'src/modules/plantVariety/importer/plantVarietyImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'PLANTVARIETY_IMPORTER',
  selectors,
  PlantVarietyService.import,
  fields,
  i18n('entities.plantVariety.importer.fileName'),
);
