import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fertilizer/view/fertilizerViewActions';
import selectors from 'src/modules/fertilizer/view/fertilizerViewSelectors';
import FertilizerView from 'src/view/fertilizer/view/FertilizerView';
import FertilizerViewToolbar from 'src/view/fertilizer/view/FertilizerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FertilizerPage() {
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
          [i18n('entities.fertilizer.menu'), '/fertilizer'],
          [i18n('entities.fertilizer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fertilizer.view.title')}
        </PageTitle>

        <FertilizerViewToolbar match={match} />

        <FertilizerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FertilizerPage;
