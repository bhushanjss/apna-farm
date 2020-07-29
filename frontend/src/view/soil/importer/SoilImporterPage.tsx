import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/soil/importer/soilImporterActions';
import fields from 'src/modules/soil/importer/soilImporterFields';
import selectors from 'src/modules/soil/importer/soilImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SoilImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.soil.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.soil.menu'), '/soil'],
          [i18n('entities.soil.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.soil.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SoilImportPage;
