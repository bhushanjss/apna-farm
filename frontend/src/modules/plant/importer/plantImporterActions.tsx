import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/plant/importer/plantImporterSelectors';
import PlantService from 'src/modules/plant/plantService';
import fields from 'src/modules/plant/importer/plantImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'PLANT_IMPORTER',
  selectors,
  PlantService.import,
  fields,
  i18n('entities.plant.importer.fileName'),
);
