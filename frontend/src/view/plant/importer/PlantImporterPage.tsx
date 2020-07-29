import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plant/importer/plantImporterActions';
import fields from 'src/modules/plant/importer/plantImporterFields';
import selectors from 'src/modules/plant/importer/plantImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlantImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.plant.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plant.menu'), '/plant'],
          [i18n('entities.plant.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plant.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PlantImportPage;
