import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/rainwater/importer/rainwaterImporterActions';
import fields from 'src/modules/rainwater/importer/rainwaterImporterFields';
import selectors from 'src/modules/rainwater/importer/rainwaterImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RainwaterImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.rainwater.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.rainwater.menu'), '/rainwater'],
          [i18n('entities.rainwater.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rainwater.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RainwaterImportPage;
