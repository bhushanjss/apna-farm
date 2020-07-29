import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import LocationViewItem from 'src/view/location/view/LocationViewItem';
import FarmerViewItem from 'src/view/farmer/view/FarmerViewItem';

function LandView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <LocationViewItem
          label={i18n('entities.land.fields.location')}
          value={record.location}
        />

        <TextViewItem
          label={i18n('entities.land.fields.area')}
          value={record.area}
        />

        <FarmerViewItem
          label={i18n('entities.land.fields.farmer')}
          value={record.farmer}
        />

        <TextViewItem
          label={i18n('entities.land.fields.groundwaterAvailable')}
          value={
            record.groundwaterAvailable
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.land.fields.groundwaterDepth')}
          value={record.groundwaterDepth}
        />

        <TextViewItem
          label={i18n('entities.land.fields.canalAccess')}
          value={
            record.canalAccess
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.land.fields.waterAcidity')}
          value={record.waterAcidity}
        />

        <TextViewItem
          label={i18n('entities.land.fields.downpour')}
          value={
            record.downpour
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.land.fields.downpourRate')}
          value={record.downpourRate}
        />

        <TextViewItem
          label={i18n('entities.land.fields.hailstorm')}
          value={
            record.hailstorm
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.land.fields.flood')}
          value={
            record.flood
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.land.fields.label')}
          value={record.label}
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

export default LandView;
