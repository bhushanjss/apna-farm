import React from 'react';
import { i18n } from 'src/i18n';
import FarmingMethodListFilter from 'src/view/farmingMethod/list/FarmingMethodListFilter';
import FarmingMethodListTable from 'src/view/farmingMethod/list/FarmingMethodListTable';
import FarmingMethodListToolbar from 'src/view/farmingMethod/list/FarmingMethodListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingMethodListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farmingMethod.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmingMethod.list.title')}
        </PageTitle>

        <FarmingMethodListToolbar />
        <FarmingMethodListFilter />
        <FarmingMethodListTable />
      </ContentWrapper>
    </>
  );
}

export default FarmingMethodListPage;
