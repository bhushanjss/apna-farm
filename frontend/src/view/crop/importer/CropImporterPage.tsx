import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/crop/importer/cropImporterActions';
import fields from 'src/modules/crop/importer/cropImporterFields';
import selectors from 'src/modules/crop/importer/cropImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CropImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.crop.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.crop.menu'), '/crop'],
          [i18n('entities.crop.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.crop.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CropImportPage;
