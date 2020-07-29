import list from 'src/modules/plantVariety/list/plantVarietyListReducers';
import form from 'src/modules/plantVariety/form/plantVarietyFormReducers';
import view from 'src/modules/plantVariety/view/plantVarietyViewReducers';
import destroy from 'src/modules/plantVariety/destroy/plantVarietyDestroyReducers';
import importerReducer from 'src/modules/plantVariety/importer/plantVarietyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
