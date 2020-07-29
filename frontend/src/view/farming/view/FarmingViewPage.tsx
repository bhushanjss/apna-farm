import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farming/view/farmingViewActions';
import selectors from 'src/modules/farming/view/farmingViewSelectors';
import FarmingView from 'src/view/farming/view/FarmingView';
import FarmingViewToolbar from 'src/view/farming/view/FarmingViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingPage() {
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
          [i18n('entities.farming.menu'), '/farming'],
          [i18n('entities.farming.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farming.view.title')}
        </PageTitle>

        <FarmingViewToolbar match={match} />

        <FarmingView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FarmingPage;
