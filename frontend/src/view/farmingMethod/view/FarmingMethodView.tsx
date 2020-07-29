import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CropViewItem from 'src/view/crop/view/CropViewItem';
import PlantViewItem from 'src/view/plant/view/PlantViewItem';

function FarmingMethodView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.farmingMethod.fields.farmingType')}
          value={
            record.farmingType &&
            i18n(
              `entities.farmingMethod.enumerators.farmingType.${record.farmingType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.farmingMethod.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.farmingMethod.fields.sowingMethod')}
          value={
            record.sowingMethod &&
            i18n(
              `entities.farmingMethod.enumerators.sowingMethod.${record.sowingMethod}`,
            )
          }
        />

        <CropViewItem
          label={i18n('entities.farmingMethod.fields.crops')}
          value={record.crops}
        />

        <PlantViewItem
          label={i18n('entities.farmingMethod.fields.plants')}
          value={record.plants}
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

export default FarmingMethodView;
