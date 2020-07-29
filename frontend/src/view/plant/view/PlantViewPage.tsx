import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plant/view/plantViewActions';
import selectors from 'src/modules/plant/view/plantViewSelectors';
import PlantView from 'src/view/plant/view/PlantView';
import PlantViewToolbar from 'src/view/plant/view/PlantViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantPage() {
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
          [i18n('entities.plant.menu'), '/plant'],
          [i18n('entities.plant.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plant.view.title')}
        </PageTitle>

        <PlantViewToolbar match={match} />

        <PlantView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PlantPage;
