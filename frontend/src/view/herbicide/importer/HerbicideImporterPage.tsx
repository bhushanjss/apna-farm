import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/herbicide/importer/herbicideImporterActions';
import fields from 'src/modules/herbicide/importer/herbicideImporterFields';
import selectors from 'src/modules/herbicide/importer/herbicideImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HerbicideImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.herbicide.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.herbicide.menu'), '/herbicide'],
          [i18n('entities.herbicide.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.herbicide.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default HerbicideImportPage;
