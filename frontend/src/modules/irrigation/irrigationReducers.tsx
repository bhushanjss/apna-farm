import list from 'src/modules/irrigation/list/irrigationListReducers';
import form from 'src/modules/irrigation/form/irrigationFormReducers';
import view from 'src/modules/irrigation/view/irrigationViewReducers';
import destroy from 'src/modules/irrigation/destroy/irrigationDestroyReducers';
import importerReducer from 'src/modules/irrigation/importer/irrigationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
