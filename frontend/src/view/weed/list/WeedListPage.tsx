import React from 'react';
import { i18n } from 'src/i18n';
import WeedListFilter from 'src/view/weed/list/WeedListFilter';
import WeedListTable from 'src/view/weed/list/WeedListTable';
import WeedListToolbar from 'src/view/weed/list/WeedListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WeedListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.weed.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.weed.list.title')}
        </PageTitle>

        <WeedListToolbar />
        <WeedListFilter />
        <WeedListTable />
      </ContentWrapper>
    </>
  );
}

export default WeedListPage;
