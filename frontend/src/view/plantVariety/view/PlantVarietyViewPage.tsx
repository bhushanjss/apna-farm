import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plantVariety/view/plantVarietyViewActions';
import selectors from 'src/modules/plantVariety/view/plantVarietyViewSelectors';
import PlantVarietyView from 'src/view/plantVariety/view/PlantVarietyView';
import PlantVarietyViewToolbar from 'src/view/plantVariety/view/PlantVarietyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantVarietyPage() {
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
          [i18n('entities.plantVariety.menu'), '/plant-variety'],
          [i18n('entities.plantVariety.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plantVariety.view.title')}
        </PageTitle>

        <PlantVarietyViewToolbar match={match} />

        <PlantVarietyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PlantVarietyPage;
