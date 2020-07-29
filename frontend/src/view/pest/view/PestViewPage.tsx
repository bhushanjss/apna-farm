import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pest/view/pestViewActions';
import selectors from 'src/modules/pest/view/pestViewSelectors';
import PestView from 'src/view/pest/view/PestView';
import PestViewToolbar from 'src/view/pest/view/PestViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PestPage() {
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
          [i18n('entities.pest.menu'), '/pest'],
          [i18n('entities.pest.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pest.view.title')}
        </PageTitle>

        <PestViewToolbar match={match} />

        <PestView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PestPage;
