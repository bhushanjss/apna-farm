import list from 'src/modules/fertilizer/list/fertilizerListReducers';
import form from 'src/modules/fertilizer/form/fertilizerFormReducers';
import view from 'src/modules/fertilizer/view/fertilizerViewReducers';
import destroy from 'src/modules/fertilizer/destroy/fertilizerDestroyReducers';
import importerReducer from 'src/modules/fertilizer/importer/fertilizerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
