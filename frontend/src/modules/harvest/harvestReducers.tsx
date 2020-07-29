import list from 'src/modules/harvest/list/harvestListReducers';
import form from 'src/modules/harvest/form/harvestFormReducers';
import view from 'src/modules/harvest/view/harvestViewReducers';
import destroy from 'src/modules/harvest/destroy/harvestDestroyReducers';
import importerReducer from 'src/modules/harvest/importer/harvestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
