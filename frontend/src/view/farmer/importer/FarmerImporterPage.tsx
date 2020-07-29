import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farmer/importer/farmerImporterActions';
import fields from 'src/modules/farmer/importer/farmerImporterFields';
import selectors from 'src/modules/farmer/importer/farmerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.farmer.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farmer.menu'), '/farmer'],
          [i18n('entities.farmer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FarmerImportPage;
