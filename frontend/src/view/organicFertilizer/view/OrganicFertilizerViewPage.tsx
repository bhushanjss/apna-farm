import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organicFertilizer/view/organicFertilizerViewActions';
import selectors from 'src/modules/organicFertilizer/view/organicFertilizerViewSelectors';
import OrganicFertilizerView from 'src/view/organicFertilizer/view/OrganicFertilizerView';
import OrganicFertilizerViewToolbar from 'src/view/organicFertilizer/view/OrganicFertilizerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganicFertilizerPage() {
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
          [i18n('entities.organicFertilizer.menu'), '/organic-fertilizer'],
          [i18n('entities.organicFertilizer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organicFertilizer.view.title')}
        </PageTitle>

        <OrganicFertilizerViewToolbar match={match} />

        <OrganicFertilizerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OrganicFertilizerPage;
