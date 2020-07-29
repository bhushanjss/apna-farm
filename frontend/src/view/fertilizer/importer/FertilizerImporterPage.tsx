import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fertilizer/importer/fertilizerImporterActions';
import fields from 'src/modules/fertilizer/importer/fertilizerImporterFields';
import selectors from 'src/modules/fertilizer/importer/fertilizerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FertilizerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.fertilizer.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fertilizer.menu'), '/fertilizer'],
          [i18n('entities.fertilizer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fertilizer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FertilizerImportPage;
