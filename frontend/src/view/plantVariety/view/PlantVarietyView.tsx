import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PlantViewItem from 'src/view/plant/view/PlantViewItem';

function PlantVarietyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PlantViewItem
          label={i18n('entities.plantVariety.fields.plant')}
          value={record.plant}
        />

        <TextViewItem
          label={i18n('entities.plantVariety.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.plantVariety.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.plantVariety.fields.duration')}
          value={record.duration}
        />

        <TextViewItem
          label={i18n('entities.plantVariety.fields.plantYield')}
          value={record.plantYield}
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

export default PlantVarietyView;
