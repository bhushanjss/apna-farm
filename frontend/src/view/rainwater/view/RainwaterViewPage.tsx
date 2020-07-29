import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/rainwater/view/rainwaterViewActions';
import selectors from 'src/modules/rainwater/view/rainwaterViewSelectors';
import RainwaterView from 'src/view/rainwater/view/RainwaterView';
import RainwaterViewToolbar from 'src/view/rainwater/view/RainwaterViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RainwaterPage() {
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
          [i18n('entities.rainwater.menu'), '/rainwater'],
          [i18n('entities.rainwater.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rainwater.view.title')}
        </PageTitle>

        <RainwaterViewToolbar match={match} />

        <RainwaterView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RainwaterPage;
