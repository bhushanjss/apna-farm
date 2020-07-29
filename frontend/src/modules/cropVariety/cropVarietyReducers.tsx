import list from 'src/modules/cropVariety/list/cropVarietyListReducers';
import form from 'src/modules/cropVariety/form/cropVarietyFormReducers';
import view from 'src/modules/cropVariety/view/cropVarietyViewReducers';
import destroy from 'src/modules/cropVariety/destroy/cropVarietyDestroyReducers';
import importerReducer from 'src/modules/cropVariety/importer/cropVarietyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
