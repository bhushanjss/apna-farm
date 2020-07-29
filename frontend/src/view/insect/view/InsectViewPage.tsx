import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/insect/view/insectViewActions';
import selectors from 'src/modules/insect/view/insectViewSelectors';
import InsectView from 'src/view/insect/view/InsectView';
import InsectViewToolbar from 'src/view/insect/view/InsectViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsectPage() {
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
          [i18n('entities.insect.menu'), '/insect'],
          [i18n('entities.insect.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insect.view.title')}
        </PageTitle>

        <InsectViewToolbar match={match} />

        <InsectView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InsectPage;
