import React from 'react';
import { i18n } from 'src/i18n';
import RainwaterListFilter from 'src/view/rainwater/list/RainwaterListFilter';
import RainwaterListTable from 'src/view/rainwater/list/RainwaterListTable';
import RainwaterListToolbar from 'src/view/rainwater/list/RainwaterListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RainwaterListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.rainwater.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rainwater.list.title')}
        </PageTitle>

        <RainwaterListToolbar />
        <RainwaterListFilter />
        <RainwaterListTable />
      </ContentWrapper>
    </>
  );
}

export default RainwaterListPage;
