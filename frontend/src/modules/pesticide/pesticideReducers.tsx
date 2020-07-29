import list from 'src/modules/pesticide/list/pesticideListReducers';
import form from 'src/modules/pesticide/form/pesticideFormReducers';
import view from 'src/modules/pesticide/view/pesticideViewReducers';
import destroy from 'src/modules/pesticide/destroy/pesticideDestroyReducers';
import importerReducer from 'src/modules/pesticide/importer/pesticideImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
