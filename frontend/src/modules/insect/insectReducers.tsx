import list from 'src/modules/insect/list/insectListReducers';
import form from 'src/modules/insect/form/insectFormReducers';
import view from 'src/modules/insect/view/insectViewReducers';
import destroy from 'src/modules/insect/destroy/insectDestroyReducers';
import importerReducer from 'src/modules/insect/importer/insectImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
