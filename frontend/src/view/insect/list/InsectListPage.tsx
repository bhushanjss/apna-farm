import React from 'react';
import { i18n } from 'src/i18n';
import InsectListFilter from 'src/view/insect/list/InsectListFilter';
import InsectListTable from 'src/view/insect/list/InsectListTable';
import InsectListToolbar from 'src/view/insect/list/InsectListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsectListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.insect.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insect.list.title')}
        </PageTitle>

        <InsectListToolbar />
        <InsectListFilter />
        <InsectListTable />
      </ContentWrapper>
    </>
  );
}

export default InsectListPage;
