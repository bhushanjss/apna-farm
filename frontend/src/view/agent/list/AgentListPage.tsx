import React from 'react';
import { i18n } from 'src/i18n';
import AgentListFilter from 'src/view/agent/list/AgentListFilter';
import AgentListTable from 'src/view/agent/list/AgentListTable';
import AgentListToolbar from 'src/view/agent/list/AgentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AgentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.agent.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.agent.list.title')}
        </PageTitle>

        <AgentListToolbar />
        <AgentListFilter />
        <AgentListTable />
      </ContentWrapper>
    </>
  );
}

export default AgentListPage;
