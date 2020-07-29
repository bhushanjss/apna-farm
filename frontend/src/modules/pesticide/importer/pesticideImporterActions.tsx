import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pesticide/importer/pesticideImporterSelectors';
import PesticideService from 'src/modules/pesticide/pesticideService';
import fields from 'src/modules/pesticide/importer/pesticideImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'PESTICIDE_IMPORTER',
  selectors,
  PesticideService.import,
  fields,
  i18n('entities.pesticide.importer.fileName'),
);
