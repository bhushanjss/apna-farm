import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/question/view/questionViewActions';
import selectors from 'src/modules/question/view/questionViewSelectors';
import QuestionView from 'src/view/question/view/QuestionView';
import QuestionViewToolbar from 'src/view/question/view/QuestionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function QuestionPage() {
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
          [i18n('entities.question.menu'), '/question'],
          [i18n('entities.question.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.question.view.title')}
        </PageTitle>

        <QuestionViewToolbar match={match} />

        <QuestionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default QuestionPage;
