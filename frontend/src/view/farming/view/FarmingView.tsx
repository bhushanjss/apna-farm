import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FarmerViewItem from 'src/view/farmer/view/FarmerViewItem';
import LandViewItem from 'src/view/land/view/LandViewItem';
import FarmingMethodViewItem from 'src/view/farmingMethod/view/FarmingMethodViewItem';
import IrrigationViewItem from 'src/view/irrigation/view/IrrigationViewItem';

function FarmingView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.farming.fields.year')}
          value={record.year}
        />

        <TextViewItem
          label={i18n('entities.farming.fields.season')}
          value={
            record.season &&
            i18n(
              `entities.farming.enumerators.season.${record.season}`,
            )
          }
        />

        <FarmerViewItem
          label={i18n('entities.farming.fields.farmer')}
          value={record.farmer}
        />

        <LandViewItem
          label={i18n('entities.farming.fields.land')}
          value={record.land}
        />

        <TextViewItem
          label={i18n('entities.farming.fields.plantType')}
          value={
            record.plantType &&
            i18n(
              `entities.farming.enumerators.plantType.${record.plantType}`,
            )
          }
        />

        <FarmingMethodViewItem
          label={i18n('entities.farming.fields.farmingMethod')}
          value={record.farmingMethod}
        />

        <TextViewItem
          label={i18n('entities.farming.fields.dateSown')}
          value={record.dateSown}
        />

        <IrrigationViewItem
          label={i18n('entities.farming.fields.irrigations')}
          value={record.irrigations}
        />

        <TextViewItem
          label={i18n('entities.farming.fields.labors')}
          value={record.labors}
        />

        <TextViewItem
          label={i18n('entities.farming.fields.mixedFarming')}
          value={
            record.mixedFarming
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.farming.fields.cropRotation')}
          value={
            record.cropRotation
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.farming.fields.cropsRotated')}
          value={record.cropsRotated}
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

export default FarmingView;
