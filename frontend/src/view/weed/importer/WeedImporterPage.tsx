import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/weed/importer/weedImporterActions';
import fields from 'src/modules/weed/importer/weedImporterFields';
import selectors from 'src/modules/weed/importer/weedImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WeedImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.weed.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.weed.menu'), '/weed'],
          [i18n('entities.weed.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.weed.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default WeedImportPage;
