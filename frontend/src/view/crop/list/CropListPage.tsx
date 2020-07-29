import React from 'react';
import { i18n } from 'src/i18n';
import CropListFilter from 'src/view/crop/list/CropListFilter';
import CropListTable from 'src/view/crop/list/CropListTable';
import CropListToolbar from 'src/view/crop/list/CropListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CropListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.crop.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.crop.list.title')}
        </PageTitle>

        <CropListToolbar />
        <CropListFilter />
        <CropListTable />
      </ContentWrapper>
    </>
  );
}

export default CropListPage;
