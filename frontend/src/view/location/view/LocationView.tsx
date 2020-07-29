import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function LocationView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.location.fields.state')}
          value={record.state}
        />

        <TextViewItem
          label={i18n('entities.location.fields.district')}
          value={record.district}
        />

        <TextViewItem
          label={i18n('entities.location.fields.tehsil')}
          value={record.tehsil}
        />

        <TextViewItem
          label={i18n('entities.location.fields.village')}
          value={record.village}
        />

        <TextViewItem
          label={i18n('entities.location.fields.coords')}
          value={record.coords}
        />

        <TextViewItem
          label={i18n('entities.location.fields.label')}
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

export default LocationView;
