import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function OrganicFertilizerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.n')}
          value={record.n}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.p')}
          value={record.p}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.k')}
          value={record.k}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.nutrients')}
          value={record.nutrients}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.method')}
          value={record.method}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.result')}
          value={record.result}
        />

        <TextViewItem
          label={i18n('entities.organicFertilizer.fields.price')}
          value={record.price}
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

export default OrganicFertilizerView;
