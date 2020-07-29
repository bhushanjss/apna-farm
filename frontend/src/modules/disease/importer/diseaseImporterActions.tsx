import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/disease/importer/diseaseImporterSelectors';
import DiseaseService from 'src/modules/disease/diseaseService';
import fields from 'src/modules/disease/importer/diseaseImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'DISEASE_IMPORTER',
  selectors,
  DiseaseService.import,
  fields,
  i18n('entities.disease.importer.fileName'),
);
