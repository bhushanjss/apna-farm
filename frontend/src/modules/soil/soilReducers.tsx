import list from 'src/modules/soil/list/soilListReducers';
import form from 'src/modules/soil/form/soilFormReducers';
import view from 'src/modules/soil/view/soilViewReducers';
import destroy from 'src/modules/soil/destroy/soilDestroyReducers';
import importerReducer from 'src/modules/soil/importer/soilImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
