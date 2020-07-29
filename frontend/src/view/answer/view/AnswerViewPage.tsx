import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answer/view/answerViewActions';
import selectors from 'src/modules/answer/view/answerViewSelectors';
import AnswerView from 'src/view/answer/view/AnswerView';
import AnswerViewToolbar from 'src/view/answer/view/AnswerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnswerPage() {
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
          [i18n('entities.answer.menu'), '/answer'],
          [i18n('entities.answer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answer.view.title')}
        </PageTitle>

        <AnswerViewToolbar match={match} />

        <AnswerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AnswerPage;
