import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/harvest/view/harvestViewActions';
import selectors from 'src/modules/harvest/view/harvestViewSelectors';
import HarvestView from 'src/view/harvest/view/HarvestView';
import HarvestViewToolbar from 'src/view/harvest/view/HarvestViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HarvestPage() {
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
          [i18n('entities.harvest.menu'), '/harvest'],
          [i18n('entities.harvest.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.harvest.view.title')}
        </PageTitle>

        <HarvestViewToolbar match={match} />

        <HarvestView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HarvestPage;
