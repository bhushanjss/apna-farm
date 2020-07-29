import list from 'src/modules/herbicide/list/herbicideListReducers';
import form from 'src/modules/herbicide/form/herbicideFormReducers';
import view from 'src/modules/herbicide/view/herbicideViewReducers';
import destroy from 'src/modules/herbicide/destroy/herbicideDestroyReducers';
import importerReducer from 'src/modules/herbicide/importer/herbicideImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
