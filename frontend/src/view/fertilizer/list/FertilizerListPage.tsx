import React from 'react';
import { i18n } from 'src/i18n';
import FertilizerListFilter from 'src/view/fertilizer/list/FertilizerListFilter';
import FertilizerListTable from 'src/view/fertilizer/list/FertilizerListTable';
import FertilizerListToolbar from 'src/view/fertilizer/list/FertilizerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FertilizerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fertilizer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fertilizer.list.title')}
        </PageTitle>

        <FertilizerListToolbar />
        <FertilizerListFilter />
        <FertilizerListTable />
      </ContentWrapper>
    </>
  );
}

export default FertilizerListPage;
