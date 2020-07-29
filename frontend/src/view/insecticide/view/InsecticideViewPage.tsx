import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/insecticide/view/insecticideViewActions';
import selectors from 'src/modules/insecticide/view/insecticideViewSelectors';
import InsecticideView from 'src/view/insecticide/view/InsecticideView';
import InsecticideViewToolbar from 'src/view/insecticide/view/InsecticideViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsecticidePage() {
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
          [i18n('entities.insecticide.menu'), '/insecticide'],
          [i18n('entities.insecticide.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insecticide.view.title')}
        </PageTitle>

        <InsecticideViewToolbar match={match} />

        <InsecticideView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InsecticidePage;
