import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/disease/view/diseaseViewActions';
import selectors from 'src/modules/disease/view/diseaseViewSelectors';
import DiseaseView from 'src/view/disease/view/DiseaseView';
import DiseaseViewToolbar from 'src/view/disease/view/DiseaseViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DiseasePage() {
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
          [i18n('entities.disease.menu'), '/disease'],
          [i18n('entities.disease.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.disease.view.title')}
        </PageTitle>

        <DiseaseViewToolbar match={match} />

        <DiseaseView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DiseasePage;
