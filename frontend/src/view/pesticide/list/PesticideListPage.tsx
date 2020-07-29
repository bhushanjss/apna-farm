import React from 'react';
import { i18n } from 'src/i18n';
import PesticideListFilter from 'src/view/pesticide/list/PesticideListFilter';
import PesticideListTable from 'src/view/pesticide/list/PesticideListTable';
import PesticideListToolbar from 'src/view/pesticide/list/PesticideListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PesticideListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pesticide.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pesticide.list.title')}
        </PageTitle>

        <PesticideListToolbar />
        <PesticideListFilter />
        <PesticideListTable />
      </ContentWrapper>
    </>
  );
}

export default PesticideListPage;
