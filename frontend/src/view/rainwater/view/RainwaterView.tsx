import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import LandViewItem from 'src/view/land/view/LandViewItem';

function RainwaterView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <LandViewItem
          label={i18n('entities.rainwater.fields.land')}
          value={record.land}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterReceived')}
          value={record.waterReceived}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterUsedRabi')}
          value={record.waterUsedRabi}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterUsedKharif')}
          value={record.waterUsedKharif}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterSourceKharif')}
          value={
            record.waterSourceKharif &&
            i18n(
              `entities.rainwater.enumerators.waterSourceKharif.${record.waterSourceKharif}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterUsedZaid')}
          value={record.waterUsedZaid}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.waterSourceZaid')}
          value={
            record.waterSourceZaid &&
            i18n(
              `entities.rainwater.enumerators.waterSourceZaid.${record.waterSourceZaid}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.extraRainwater')}
          value={record.extraRainwater}
        />

        <TextViewItem
          label={i18n('entities.rainwater.fields.rainwaterHarvestingAllowed')}
          value={
            record.rainwaterHarvestingAllowed
              ? i18n('common.yes')
              : i18n('common.no')
          }
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

export default RainwaterView;
