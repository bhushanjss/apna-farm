import list from 'src/modules/plant/list/plantListReducers';
import form from 'src/modules/plant/form/plantFormReducers';
import view from 'src/modules/plant/view/plantViewReducers';
import destroy from 'src/modules/plant/destroy/plantDestroyReducers';
import importerReducer from 'src/modules/plant/importer/plantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
