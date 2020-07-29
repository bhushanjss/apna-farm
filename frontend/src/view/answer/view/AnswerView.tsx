import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FarmerViewItem from 'src/view/farmer/view/FarmerViewItem';
import QuestionViewItem from 'src/view/question/view/QuestionViewItem';

function AnswerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <FarmerViewItem
          label={i18n('entities.answer.fields.farmer')}
          value={record.farmer}
        />

        <QuestionViewItem
          label={i18n('entities.answer.fields.question')}
          value={record.question}
        />

        <TextViewItem
          label={i18n('entities.answer.fields.answer')}
          value={record.answer}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default AnswerView;
