import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/irrigation/importer/irrigationImporterSelectors';
import IrrigationService from 'src/modules/irrigation/irrigationService';
import fields from 'src/modules/irrigation/importer/irrigationImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'IRRIGATION_IMPORTER',
  selectors,
  IrrigationService.import,
  fields,
  i18n('entities.irrigation.importer.fileName'),
);
