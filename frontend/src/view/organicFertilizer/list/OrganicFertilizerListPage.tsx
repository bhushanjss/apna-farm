import React from 'react';
import { i18n } from 'src/i18n';
import OrganicFertilizerListFilter from 'src/view/organicFertilizer/list/OrganicFertilizerListFilter';
import OrganicFertilizerListTable from 'src/view/organicFertilizer/list/OrganicFertilizerListTable';
import OrganicFertilizerListToolbar from 'src/view/organicFertilizer/list/OrganicFertilizerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganicFertilizerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.organicFertilizer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organicFertilizer.list.title')}
        </PageTitle>

        <OrganicFertilizerListToolbar />
        <OrganicFertilizerListFilter />
        <OrganicFertilizerListTable />
      </ContentWrapper>
    </>
  );
}

export default OrganicFertilizerListPage;
