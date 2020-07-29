import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/location/view/locationViewActions';
import selectors from 'src/modules/location/view/locationViewSelectors';
import LocationView from 'src/view/location/view/LocationView';
import LocationViewToolbar from 'src/view/location/view/LocationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LocationPage() {
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
          [i18n('entities.location.menu'), '/location'],
          [i18n('entities.location.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.location.view.title')}
        </PageTitle>

        <LocationViewToolbar match={match} />

        <LocationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default LocationPage;
