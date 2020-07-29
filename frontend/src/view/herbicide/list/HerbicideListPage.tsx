import React from 'react';
import { i18n } from 'src/i18n';
import HerbicideListFilter from 'src/view/herbicide/list/HerbicideListFilter';
import HerbicideListTable from 'src/view/herbicide/list/HerbicideListTable';
import HerbicideListToolbar from 'src/view/herbicide/list/HerbicideListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HerbicideListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.herbicide.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.herbicide.list.title')}
        </PageTitle>

        <HerbicideListToolbar />
        <HerbicideListFilter />
        <HerbicideListTable />
      </ContentWrapper>
    </>
  );
}

export default HerbicideListPage;
