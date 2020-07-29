import list from 'src/modules/organicFertilizer/list/organicFertilizerListReducers';
import form from 'src/modules/organicFertilizer/form/organicFertilizerFormReducers';
import view from 'src/modules/organicFertilizer/view/organicFertilizerViewReducers';
import destroy from 'src/modules/organicFertilizer/destroy/organicFertilizerDestroyReducers';
import importerReducer from 'src/modules/organicFertilizer/importer/organicFertilizerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
