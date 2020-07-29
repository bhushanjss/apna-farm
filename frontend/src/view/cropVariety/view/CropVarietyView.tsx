import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CropViewItem from 'src/view/crop/view/CropViewItem';

function CropVarietyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CropViewItem
          label={i18n('entities.cropVariety.fields.crop')}
          value={record.crop}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.cropDuration')}
          value={record.cropDuration}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.cropYield')}
          value={record.cropYield}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.seedRate')}
          value={record.seedRate}
        />

        <TextViewItem
          label={i18n('entities.cropVariety.fields.seedPlantationTime')}
          value={record.seedPlantationTime}
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

export default CropVarietyView;
