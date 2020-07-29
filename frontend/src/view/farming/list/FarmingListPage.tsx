import React from 'react';
import { i18n } from 'src/i18n';
import FarmingListFilter from 'src/view/farming/list/FarmingListFilter';
import FarmingListTable from 'src/view/farming/list/FarmingListTable';
import FarmingListToolbar from 'src/view/farming/list/FarmingListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farming.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farming.list.title')}
        </PageTitle>

        <FarmingListToolbar />
        <FarmingListFilter />
        <FarmingListTable />
      </ContentWrapper>
    </>
  );
}

export default FarmingListPage;
