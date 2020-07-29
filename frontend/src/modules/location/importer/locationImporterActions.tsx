import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/location/importer/locationImporterSelectors';
import LocationService from 'src/modules/location/locationService';
import fields from 'src/modules/location/importer/locationImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'LOCATION_IMPORTER',
  selectors,
  LocationService.import,
  fields,
  i18n('entities.location.importer.fileName'),
);
