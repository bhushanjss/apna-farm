import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pesticide/importer/pesticideImporterActions';
import fields from 'src/modules/pesticide/importer/pesticideImporterFields';
import selectors from 'src/modules/pesticide/importer/pesticideImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PesticideImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.pesticide.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pesticide.menu'), '/pesticide'],
          [i18n('entities.pesticide.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pesticide.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PesticideImportPage;
