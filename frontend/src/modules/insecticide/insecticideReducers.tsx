import list from 'src/modules/insecticide/list/insecticideListReducers';
import form from 'src/modules/insecticide/form/insecticideFormReducers';
import view from 'src/modules/insecticide/view/insecticideViewReducers';
import destroy from 'src/modules/insecticide/destroy/insecticideDestroyReducers';
import importerReducer from 'src/modules/insecticide/importer/insecticideImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
