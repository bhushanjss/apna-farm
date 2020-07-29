import React from 'react';
import { i18n } from 'src/i18n';
import PlantVarietyListFilter from 'src/view/plantVariety/list/PlantVarietyListFilter';
import PlantVarietyListTable from 'src/view/plantVariety/list/PlantVarietyListTable';
import PlantVarietyListToolbar from 'src/view/plantVariety/list/PlantVarietyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantVarietyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plantVariety.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plantVariety.list.title')}
        </PageTitle>

        <PlantVarietyListToolbar />
        <PlantVarietyListFilter />
        <PlantVarietyListTable />
      </ContentWrapper>
    </>
  );
}

export default PlantVarietyListPage;
