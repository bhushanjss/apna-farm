import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/harvest/importer/harvestImporterActions';
import fields from 'src/modules/harvest/importer/harvestImporterFields';
import selectors from 'src/modules/harvest/importer/harvestImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HarvestImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.harvest.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.harvest.menu'), '/harvest'],
          [i18n('entities.harvest.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.harvest.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default HarvestImportPage;
