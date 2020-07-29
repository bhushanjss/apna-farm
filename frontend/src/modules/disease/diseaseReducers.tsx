import list from 'src/modules/disease/list/diseaseListReducers';
import form from 'src/modules/disease/form/diseaseFormReducers';
import view from 'src/modules/disease/view/diseaseViewReducers';
import destroy from 'src/modules/disease/destroy/diseaseDestroyReducers';
import importerReducer from 'src/modules/disease/importer/diseaseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
