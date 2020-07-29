import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PestViewItem from 'src/view/pest/view/PestViewItem';

function PesticideView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.pesticide.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.pesticide.fields.type')}
          value={record.type}
        />

        <TextViewItem
          label={i18n('entities.pesticide.fields.decription')}
          value={record.decription}
        />

        <TextViewItem
          label={i18n('entities.pesticide.fields.materials')}
          value={record.materials}
        />

        <PestViewItem
          label={i18n('entities.pesticide.fields.pests')}
          value={record.pests}
        />

        <TextViewItem
          label={i18n('entities.pesticide.fields.cost')}
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

export default PesticideView;
