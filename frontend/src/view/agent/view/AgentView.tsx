import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';
import FarmerViewItem from 'src/view/farmer/view/FarmerViewItem';
import LocationViewItem from 'src/view/location/view/LocationViewItem';

function AgentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PersonViewItem
          label={i18n('entities.agent.fields.person')}
          value={record.person}
        />

        <FarmerViewItem
          label={i18n('entities.agent.fields.farmers')}
          value={record.farmers}
        />

        <LocationViewItem
          label={i18n('entities.agent.fields.locations')}
          value={record.locations}
        />

        <TextViewItem
          label={i18n('entities.agent.fields.label')}
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

export default AgentView;
