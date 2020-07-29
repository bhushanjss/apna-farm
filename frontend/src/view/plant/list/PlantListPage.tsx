import React from 'react';
import { i18n } from 'src/i18n';
import PlantListFilter from 'src/view/plant/list/PlantListFilter';
import PlantListTable from 'src/view/plant/list/PlantListTable';
import PlantListToolbar from 'src/view/plant/list/PlantListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plant.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plant.list.title')}
        </PageTitle>

        <PlantListToolbar />
        <PlantListFilter />
        <PlantListTable />
      </ContentWrapper>
    </>
  );
}

export default PlantListPage;
