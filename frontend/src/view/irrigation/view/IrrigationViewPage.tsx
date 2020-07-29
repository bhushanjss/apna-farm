import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/irrigation/view/irrigationViewActions';
import selectors from 'src/modules/irrigation/view/irrigationViewSelectors';
import IrrigationView from 'src/view/irrigation/view/IrrigationView';
import IrrigationViewToolbar from 'src/view/irrigation/view/IrrigationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function IrrigationPage() {
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
          [i18n('entities.irrigation.menu'), '/irrigation'],
          [i18n('entities.irrigation.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.irrigation.view.title')}
        </PageTitle>

        <IrrigationViewToolbar match={match} />

        <IrrigationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default IrrigationPage;
