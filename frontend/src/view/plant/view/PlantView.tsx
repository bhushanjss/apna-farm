import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function PlantView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.plant.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.plant.fields.category')}
          value={
            record.category &&
            i18n(
              `entities.plant.enumerators.category.${record.category}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.plant.fields.soilDescription')}
          value={record.soilDescription}
        />

        <TextViewItem
          label={i18n('entities.plant.fields.climate')}
          value={record.climate}
        />

        <TextViewItem
          label={i18n('entities.plant.fields.fertilizer')}
          value={record.fertilizer}
        />

        <TextViewItem
          label={i18n('entities.plant.fields.irrigationTimes')}
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

export default PlantView;
