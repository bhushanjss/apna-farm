import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import WeedViewItem from 'src/view/weed/view/WeedViewItem';

function HerbicideView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.herbicide.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.herbicide.fields.type')}
          value={record.type}
        />

        <TextViewItem
          label={i18n('entities.herbicide.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.herbicide.fields.materials')}
          value={record.materials}
        />

        <WeedViewItem
          label={i18n('entities.herbicide.fields.weeds')}
          value={record.weeds}
        />

        <TextViewItem
          label={i18n('entities.herbicide.fields.cost')}
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

export default HerbicideView;
