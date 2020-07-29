import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CropView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.crop.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.crop.fields.category')}
          value={
            record.category &&
            i18n(
              `entities.crop.enumerators.category.${record.category}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.crop.fields.fertilizer')}
          value={record.fertilizer}
        />

        <TextViewItem
          label={i18n('entities.crop.fields.climate')}
          value={record.climate}
        />

        <TextViewItem
          label={i18n('entities.crop.fields.irrigationTimes')}
          value={record.irrigationTimes}
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

export default CropView;
