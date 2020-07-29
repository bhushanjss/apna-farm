import list from 'src/modules/farmer/list/farmerListReducers';
import form from 'src/modules/farmer/form/farmerFormReducers';
import view from 'src/modules/farmer/view/farmerViewReducers';
import destroy from 'src/modules/farmer/destroy/farmerDestroyReducers';
import importerReducer from 'src/modules/farmer/importer/farmerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
