import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CropViewItem from 'src/view/crop/view/CropViewItem';
import PlantViewItem from 'src/view/plant/view/PlantViewItem';

function DiseaseView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.disease.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.disease.fields.description')}
          value={record.description}
        />

        <CropViewItem
          label={i18n('entities.disease.fields.crops')}
          value={record.crops}
        />

        <PlantViewItem
          label={i18n('entities.disease.fields.plants')}
          value={record.plants}
        />

        <TextViewItem
          label={i18n('entities.disease.fields.remedy')}
          value={record.remedy}
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

export default DiseaseView;
