import React from 'react';
import { i18n } from 'src/i18n';
import InsecticideListFilter from 'src/view/insecticide/list/InsecticideListFilter';
import InsecticideListTable from 'src/view/insecticide/list/InsecticideListTable';
import InsecticideListToolbar from 'src/view/insecticide/list/InsecticideListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsecticideListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.insecticide.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insecticide.list.title')}
        </PageTitle>

        <InsecticideListToolbar />
        <InsecticideListFilter />
        <InsecticideListTable />
      </ContentWrapper>
    </>
  );
}

export default InsecticideListPage;
