import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pesticide/view/pesticideViewActions';
import selectors from 'src/modules/pesticide/view/pesticideViewSelectors';
import PesticideView from 'src/view/pesticide/view/PesticideView';
import PesticideViewToolbar from 'src/view/pesticide/view/PesticideViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PesticidePage() {
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
          [i18n('entities.pesticide.menu'), '/pesticide'],
          [i18n('entities.pesticide.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pesticide.view.title')}
        </PageTitle>

        <PesticideViewToolbar match={match} />

        <PesticideView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PesticidePage;
