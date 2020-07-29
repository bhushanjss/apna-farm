import React from 'react';
import { i18n } from 'src/i18n';
import FarmerListFilter from 'src/view/farmer/list/FarmerListFilter';
import FarmerListTable from 'src/view/farmer/list/FarmerListTable';
import FarmerListToolbar from 'src/view/farmer/list/FarmerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farmer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmer.list.title')}
        </PageTitle>

        <FarmerListToolbar />
        <FarmerListFilter />
        <FarmerListTable />
      </ContentWrapper>
    </>
  );
}

export default FarmerListPage;
