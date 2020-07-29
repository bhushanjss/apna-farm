import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/agent/view/agentViewActions';
import selectors from 'src/modules/agent/view/agentViewSelectors';
import AgentView from 'src/view/agent/view/AgentView';
import AgentViewToolbar from 'src/view/agent/view/AgentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AgentPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.agent.menu'), '/agent'],
          [i18n('entities.agent.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.agent.view.title')}
        </PageTitle>

        <AgentViewToolbar match={match} />

        <AgentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AgentPage;
