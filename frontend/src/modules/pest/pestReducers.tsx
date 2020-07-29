import list from 'src/modules/pest/list/pestListReducers';
import form from 'src/modules/pest/form/pestFormReducers';
import view from 'src/modules/pest/view/pestViewReducers';
import destroy from 'src/modules/pest/destroy/pestDestroyReducers';
import importerReducer from 'src/modules/pest/importer/pestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
