import list from 'src/modules/farming/list/farmingListReducers';
import form from 'src/modules/farming/form/farmingFormReducers';
import view from 'src/modules/farming/view/farmingViewReducers';
import destroy from 'src/modules/farming/destroy/farmingDestroyReducers';
import importerReducer from 'src/modules/farming/importer/farmingImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
