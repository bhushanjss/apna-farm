import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cropVariety/importer/cropVarietyImporterActions';
import fields from 'src/modules/cropVariety/importer/cropVarietyImporterFields';
import selectors from 'src/modules/cropVariety/importer/cropVarietyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CropVarietyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cropVariety.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cropVariety.menu'), '/crop-variety'],
          [i18n('entities.cropVariety.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cropVariety.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CropVarietyImportPage;
