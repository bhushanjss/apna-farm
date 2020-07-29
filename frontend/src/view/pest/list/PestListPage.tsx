import React from 'react';
import { i18n } from 'src/i18n';
import PestListFilter from 'src/view/pest/list/PestListFilter';
import PestListTable from 'src/view/pest/list/PestListTable';
import PestListToolbar from 'src/view/pest/list/PestListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pest.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pest.list.title')}
        </PageTitle>

        <PestListToolbar />
        <PestListFilter />
        <PestListTable />
      </ContentWrapper>
    </>
  );
}

export default PestListPage;
