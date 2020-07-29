import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organicFertilizer/importer/organicFertilizerImporterActions';
import fields from 'src/modules/organicFertilizer/importer/organicFertilizerImporterFields';
import selectors from 'src/modules/organicFertilizer/importer/organicFertilizerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganicFertilizerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.organicFertilizer.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.organicFertilizer.menu'), '/organic-fertilizer'],
          [i18n('entities.organicFertilizer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organicFertilizer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default OrganicFertilizerImportPage;
