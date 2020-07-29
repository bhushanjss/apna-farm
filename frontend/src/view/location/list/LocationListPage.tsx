import React from 'react';
import { i18n } from 'src/i18n';
import LocationListFilter from 'src/view/location/list/LocationListFilter';
import LocationListTable from 'src/view/location/list/LocationListTable';
import LocationListToolbar from 'src/view/location/list/LocationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LocationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.location.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.location.list.title')}
        </PageTitle>

        <LocationListToolbar />
        <LocationListFilter />
        <LocationListTable />
      </ContentWrapper>
    </>
  );
}

export default LocationListPage;
