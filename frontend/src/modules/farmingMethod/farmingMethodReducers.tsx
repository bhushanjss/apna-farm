import list from 'src/modules/farmingMethod/list/farmingMethodListReducers';
import form from 'src/modules/farmingMethod/form/farmingMethodFormReducers';
import view from 'src/modules/farmingMethod/view/farmingMethodViewReducers';
import destroy from 'src/modules/farmingMethod/destroy/farmingMethodDestroyReducers';
import importerReducer from 'src/modules/farmingMethod/importer/farmingMethodImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
