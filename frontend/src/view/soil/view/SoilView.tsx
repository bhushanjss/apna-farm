import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import LandViewItem from 'src/view/land/view/LandViewItem';

function SoilView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <LandViewItem
          label={i18n('entities.soil.fields.land')}
          value={record.land}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.type')}
          value={
            record.type &&
            i18n(
              `entities.soil.enumerators.type.${record.type}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.soil.fields.pH')}
          value={record.pH}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.temperature')}
          value={record.temperature}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.organicCarbon')}
          value={record.organicCarbon}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.cec')}
          value={record.cec}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.nitrogen')}
          value={record.nitrogen}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.phosphorus')}
          value={record.phosphorus}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.potassium')}
          value={record.potassium}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.other')}
          value={record.other}
        />

        <TextViewItem
          label={i18n('entities.soil.fields.label')}
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

export default SoilView;
