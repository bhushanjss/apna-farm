import list from 'src/modules/crop/list/cropListReducers';
import form from 'src/modules/crop/form/cropFormReducers';
import view from 'src/modules/crop/view/cropViewReducers';
import destroy from 'src/modules/crop/destroy/cropDestroyReducers';
import importerReducer from 'src/modules/crop/importer/cropImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
