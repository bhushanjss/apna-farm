import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/rainwater/importer/rainwaterImporterSelectors';
import RainwaterService from 'src/modules/rainwater/rainwaterService';
import fields from 'src/modules/rainwater/importer/rainwaterImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'RAINWATER_IMPORTER',
  selectors,
  RainwaterService.import,
  fields,
  i18n('entities.rainwater.importer.fileName'),
);
