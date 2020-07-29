import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farming/importer/farmingImporterActions';
import fields from 'src/modules/farming/importer/farmingImporterFields';
import selectors from 'src/modules/farming/importer/farmingImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.farming.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farming.menu'), '/farming'],
          [i18n('entities.farming.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farming.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FarmingImportPage;
