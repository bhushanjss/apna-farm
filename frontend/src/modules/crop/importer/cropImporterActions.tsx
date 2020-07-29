import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/crop/importer/cropImporterSelectors';
import CropService from 'src/modules/crop/cropService';
import fields from 'src/modules/crop/importer/cropImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'CROP_IMPORTER',
  selectors,
  CropService.import,
  fields,
  i18n('entities.crop.importer.fileName'),
);
