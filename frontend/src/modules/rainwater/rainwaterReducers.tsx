import list from 'src/modules/rainwater/list/rainwaterListReducers';
import form from 'src/modules/rainwater/form/rainwaterFormReducers';
import view from 'src/modules/rainwater/view/rainwaterViewReducers';
import destroy from 'src/modules/rainwater/destroy/rainwaterDestroyReducers';
import importerReducer from 'src/modules/rainwater/importer/rainwaterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
