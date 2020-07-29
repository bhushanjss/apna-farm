import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/harvest/importer/harvestImporterSelectors';
import HarvestService from 'src/modules/harvest/harvestService';
import fields from 'src/modules/harvest/importer/harvestImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'HARVEST_IMPORTER',
  selectors,
  HarvestService.import,
  fields,
  i18n('entities.harvest.importer.fileName'),
);
