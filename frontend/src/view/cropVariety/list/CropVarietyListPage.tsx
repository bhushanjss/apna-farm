import React from 'react';
import { i18n } from 'src/i18n';
import CropVarietyListFilter from 'src/view/cropVariety/list/CropVarietyListFilter';
import CropVarietyListTable from 'src/view/cropVariety/list/CropVarietyListTable';
import CropVarietyListToolbar from 'src/view/cropVariety/list/CropVarietyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CropVarietyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cropVariety.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cropVariety.list.title')}
        </PageTitle>

        <CropVarietyListToolbar />
        <CropVarietyListFilter />
        <CropVarietyListTable />
      </ContentWrapper>
    </>
  );
}

export default CropVarietyListPage;
