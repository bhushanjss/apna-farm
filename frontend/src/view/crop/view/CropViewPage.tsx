import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/crop/view/cropViewActions';
import selectors from 'src/modules/crop/view/cropViewSelectors';
import CropView from 'src/view/crop/view/CropView';
import CropViewToolbar from 'src/view/crop/view/CropViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CropPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.crop.menu'), '/crop'],
          [i18n('entities.crop.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.crop.view.title')}
        </PageTitle>

        <CropViewToolbar match={match} />

        <CropView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CropPage;
