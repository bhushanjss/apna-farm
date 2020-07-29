import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import InsectViewItem from 'src/view/insect/view/InsectViewItem';

function InsecticideView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.insecticide.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.insecticide.fields.type')}
          value={record.type}
        />

        <TextViewItem
          label={i18n('entities.insecticide.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.insecticide.fields.materials')}
          value={record.materials}
        />

        <InsectViewItem
          label={i18n('entities.insecticide.fields.insects')}
          value={record.insects}
        />

        <TextViewItem
          label={i18n('entities.insecticide.fields.cost')}
          value={record.cost}
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

export default InsecticideView;
