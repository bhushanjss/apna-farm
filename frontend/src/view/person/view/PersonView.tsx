import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import LocationViewItem from 'src/view/location/view/LocationViewItem';

function PersonView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.person.fields.personId')}
          value={record.id}
        />

        <TextViewItem
          label={i18n('entities.person.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.person.enumerators.gender.${record.gender}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.birthdate')}
          value={record.birthdate}
        />

        <TextViewItem
          label={i18n('entities.person.fields.phoneNumber')}
          value={record.phoneNumber}
        />

        <LocationViewItem
          label={i18n('entities.person.fields.location')}
          value={record.location}
        />

        <TextViewItem
          label={i18n('entities.person.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.person.fields.active')}
          value={
            record.active
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.label')}
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

export default PersonView;
