import React from 'react';
import { i18n } from 'src/i18n';
import LandListFilter from 'src/view/land/list/LandListFilter';
import LandListTable from 'src/view/land/list/LandListTable';
import LandListToolbar from 'src/view/land/list/LandListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LandListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.land.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.land.list.title')}
        </PageTitle>

        <LandListToolbar />
        <LandListFilter />
        <LandListTable />
      </ContentWrapper>
    </>
  );
}

export default LandListPage;
