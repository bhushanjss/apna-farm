import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plantVariety/importer/plantVarietyImporterActions';
import fields from 'src/modules/plantVariety/importer/plantVarietyImporterFields';
import selectors from 'src/modules/plantVariety/importer/plantVarietyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantVarietyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.plantVariety.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plantVariety.menu'), '/plant-variety'],
          [i18n('entities.plantVariety.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plantVariety.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PlantVarietyImportPage;
