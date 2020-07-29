import React from 'react';
import { i18n } from 'src/i18n';
import IrrigationListFilter from 'src/view/irrigation/list/IrrigationListFilter';
import IrrigationListTable from 'src/view/irrigation/list/IrrigationListTable';
import IrrigationListToolbar from 'src/view/irrigation/list/IrrigationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function IrrigationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.irrigation.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.irrigation.list.title')}
        </PageTitle>

        <IrrigationListToolbar />
        <IrrigationListFilter />
        <IrrigationListTable />
      </ContentWrapper>
    </>
  );
}

export default IrrigationListPage;
