import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/weed/importer/weedImporterSelectors';
import WeedService from 'src/modules/weed/weedService';
import fields from 'src/modules/weed/importer/weedImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'WEED_IMPORTER',
  selectors,
  WeedService.import,
  fields,
  i18n('entities.weed.importer.fileName'),
);
