import React from 'react';
import { i18n } from 'src/i18n';
import SoilListFilter from 'src/view/soil/list/SoilListFilter';
import SoilListTable from 'src/view/soil/list/SoilListTable';
import SoilListToolbar from 'src/view/soil/list/SoilListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SoilListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.soil.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.soil.list.title')}
        </PageTitle>

        <SoilListToolbar />
        <SoilListFilter />
        <SoilListTable />
      </ContentWrapper>
    </>
  );
}

export default SoilListPage;
