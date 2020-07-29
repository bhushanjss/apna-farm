import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farmer/view/farmerViewActions';
import selectors from 'src/modules/farmer/view/farmerViewSelectors';
import FarmerView from 'src/view/farmer/view/FarmerView';
import FarmerViewToolbar from 'src/view/farmer/view/FarmerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmerPage() {
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
          [i18n('entities.farmer.menu'), '/farmer'],
          [i18n('entities.farmer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmer.view.title')}
        </PageTitle>

        <FarmerViewToolbar match={match} />

        <FarmerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FarmerPage;
