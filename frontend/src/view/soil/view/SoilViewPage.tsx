import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/soil/view/soilViewActions';
import selectors from 'src/modules/soil/view/soilViewSelectors';
import SoilView from 'src/view/soil/view/SoilView';
import SoilViewToolbar from 'src/view/soil/view/SoilViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SoilPage() {
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
          [i18n('entities.soil.menu'), '/soil'],
          [i18n('entities.soil.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.soil.view.title')}
        </PageTitle>

        <SoilViewToolbar match={match} />

        <SoilView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SoilPage;
