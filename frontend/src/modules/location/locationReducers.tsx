import list from 'src/modules/location/list/locationListReducers';
import form from 'src/modules/location/form/locationFormReducers';
import view from 'src/modules/location/view/locationViewReducers';
import destroy from 'src/modules/location/destroy/locationDestroyReducers';
import importerReducer from 'src/modules/location/importer/locationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
