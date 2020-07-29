import React from 'react';
import { i18n } from 'src/i18n';
import HarvestListFilter from 'src/view/harvest/list/HarvestListFilter';
import HarvestListTable from 'src/view/harvest/list/HarvestListTable';
import HarvestListToolbar from 'src/view/harvest/list/HarvestListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HarvestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.harvest.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.harvest.list.title')}
        </PageTitle>

        <HarvestListToolbar />
        <HarvestListFilter />
        <HarvestListTable />
      </ContentWrapper>
    </>
  );
}

export default HarvestListPage;
