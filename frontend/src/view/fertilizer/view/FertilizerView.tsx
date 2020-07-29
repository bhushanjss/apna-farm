import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CropViewItem from 'src/view/crop/view/CropViewItem';
import PlantViewItem from 'src/view/plant/view/PlantViewItem';

function FertilizerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.fertilizer.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.npk')}
          value={record.npk}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.nutrients')}
          value={record.nutrients}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.brand')}
          value={record.brand}
        />

        <CropViewItem
          label={i18n('entities.fertilizer.fields.crops')}
          value={record.crops}
        />

        <PlantViewItem
          label={i18n('entities.fertilizer.fields.plants')}
          value={record.plants}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.method')}
          value={record.method}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.result')}
          value={record.result}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.price')}
          value={record.price}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.composition')}
          value={record.composition}
        />

        <TextViewItem
          label={i18n('entities.fertilizer.fields.dosage')}
          value={record.dosage}
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

export default FertilizerView;
