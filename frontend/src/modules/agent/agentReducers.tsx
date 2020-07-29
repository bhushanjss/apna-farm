import list from 'src/modules/agent/list/agentListReducers';
import form from 'src/modules/agent/form/agentFormReducers';
import view from 'src/modules/agent/view/agentViewReducers';
import destroy from 'src/modules/agent/destroy/agentDestroyReducers';
import importerReducer from 'src/modules/agent/importer/agentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
