import list from 'src/modules/land/list/landListReducers';
import form from 'src/modules/land/form/landFormReducers';
import view from 'src/modules/land/view/landViewReducers';
import destroy from 'src/modules/land/destroy/landDestroyReducers';
import importerReducer from 'src/modules/land/importer/landImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
