import list from 'src/modules/weed/list/weedListReducers';
import form from 'src/modules/weed/form/weedFormReducers';
import view from 'src/modules/weed/view/weedViewReducers';
import destroy from 'src/modules/weed/destroy/weedDestroyReducers';
import importerReducer from 'src/modules/weed/importer/weedImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
