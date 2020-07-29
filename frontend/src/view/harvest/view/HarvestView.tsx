import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FarmerViewItem from 'src/view/farmer/view/FarmerViewItem';
import LandViewItem from 'src/view/land/view/LandViewItem';
import CropViewItem from 'src/view/crop/view/CropViewItem';
import PlantViewItem from 'src/view/plant/view/PlantViewItem';

function HarvestView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <FarmerViewItem
          label={i18n('entities.harvest.fields.farmer')}
          value={record.farmer}
        />

        <LandViewItem
          label={i18n('entities.harvest.fields.land')}
          value={record.land}
        />

        <CropViewItem
          label={i18n('entities.harvest.fields.crop')}
          value={record.crop}
        />

        <PlantViewItem
          label={i18n('entities.harvest.fields.plant')}
          value={record.plant}
        />

        <TextViewItem
          label={i18n('entities.harvest.fields.quantity')}
          value={record.quantity}
        />

        <TextViewItem
          label={i18n('entities.harvest.fields.unit')}
          value={record.unit}
        />

        <TextViewItem
          label={i18n('entities.harvest.fields.valueType')}
          value={
            record.valueType &&
            i18n(
              `entities.harvest.enumerators.valueType.${record.valueType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.harvest.fields.date')}
          value={record.date}
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

export default HarvestView;
