import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/agent/importer/agentImporterSelectors';
import AgentService from 'src/modules/agent/agentService';
import fields from 'src/modules/agent/importer/agentImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'AGENT_IMPORTER',
  selectors,
  AgentService.import,
  fields,
  i18n('entities.agent.importer.fileName'),
);
