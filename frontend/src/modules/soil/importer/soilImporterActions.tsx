import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/soil/importer/soilImporterSelectors';
import SoilService from 'src/modules/soil/soilService';
import fields from 'src/modules/soil/importer/soilImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'SOIL_IMPORTER',
  selectors,
  SoilService.import,
  fields,
  i18n('entities.soil.importer.fileName'),
);
