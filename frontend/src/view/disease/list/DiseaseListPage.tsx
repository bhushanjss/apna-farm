import React from 'react';
import { i18n } from 'src/i18n';
import DiseaseListFilter from 'src/view/disease/list/DiseaseListFilter';
import DiseaseListTable from 'src/view/disease/list/DiseaseListTable';
import DiseaseListToolbar from 'src/view/disease/list/DiseaseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DiseaseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.disease.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.disease.list.title')}
        </PageTitle>

        <DiseaseListToolbar />
        <DiseaseListFilter />
        <DiseaseListTable />
      </ContentWrapper>
    </>
  );
}

export default DiseaseListPage;
