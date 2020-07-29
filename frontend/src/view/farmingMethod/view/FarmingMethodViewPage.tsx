import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farmingMethod/view/farmingMethodViewActions';
import selectors from 'src/modules/farmingMethod/view/farmingMethodViewSelectors';
import FarmingMethodView from 'src/view/farmingMethod/view/FarmingMethodView';
import FarmingMethodViewToolbar from 'src/view/farmingMethod/view/FarmingMethodViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingMethodPage() {
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
          [i18n('entities.farmingMethod.menu'), '/farming-method'],
          [i18n('entities.farmingMethod.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmingMethod.view.title')}
        </PageTitle>

        <FarmingMethodViewToolbar match={match} />

        <FarmingMethodView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FarmingMethodPage;
