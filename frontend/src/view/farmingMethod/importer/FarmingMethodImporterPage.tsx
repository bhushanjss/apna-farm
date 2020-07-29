import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farmingMethod/importer/farmingMethodImporterActions';
import fields from 'src/modules/farmingMethod/importer/farmingMethodImporterFields';
import selectors from 'src/modules/farmingMethod/importer/farmingMethodImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FarmingMethodImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.farmingMethod.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.farmingMethod.menu'), '/farming-method'],
          [i18n('entities.farmingMethod.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.farmingMethod.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FarmingMethodImportPage;
