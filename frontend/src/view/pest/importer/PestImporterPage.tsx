import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pest/importer/pestImporterActions';
import fields from 'src/modules/pest/importer/pestImporterFields';
import selectors from 'src/modules/pest/importer/pestImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PestImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.pest.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pest.menu'), '/pest'],
          [i18n('entities.pest.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pest.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PestImportPage;
