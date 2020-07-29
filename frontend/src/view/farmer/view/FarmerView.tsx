import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';
import AgentViewItem from 'src/view/agent/view/AgentViewItem';
import LandViewItem from 'src/view/land/view/LandViewItem';

function FarmerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PersonViewItem
          label={i18n('entities.farmer.fields.person')}
          value={record.person}
        />

        <AgentViewItem
          label={i18n('entities.farmer.fields.agent')}
          value={record.agent}
        />

        <TextViewItem
          label={i18n('entities.farmer.fields.area')}
          value={record.area}
        />

        <LandViewItem
          label={i18n('entities.farmer.fields.lands')}
          value={record.lands}
        />

        <TextViewItem
          label={i18n('entities.farmer.fields.label')}
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

export default FarmerView;
