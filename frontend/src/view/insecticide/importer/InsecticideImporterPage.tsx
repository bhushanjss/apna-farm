import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/insecticide/importer/insecticideImporterActions';
import fields from 'src/modules/insecticide/importer/insecticideImporterFields';
import selectors from 'src/modules/insecticide/importer/insecticideImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsecticideImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.insecticide.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.insecticide.menu'), '/insecticide'],
          [i18n('entities.insecticide.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insecticide.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default InsecticideImportPage;
