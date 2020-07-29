import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function QuestionView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.question.fields.question')}
          value={record.question}
        />

        <TextViewItem
          label={i18n('entities.question.fields.priority')}
          value={record.priority}
        />

        <TextViewItem
          label={i18n('entities.question.fields.remark')}
          value={record.remark}
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

export default QuestionView;
