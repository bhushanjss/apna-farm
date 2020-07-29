import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/land/importer/landImporterSelectors';
import LandService from 'src/modules/land/landService';
import fields from 'src/modules/land/importer/landImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'LAND_IMPORTER',
  selectors,
  LandService.import,
  fields,
  i18n('entities.land.importer.fileName'),
);
