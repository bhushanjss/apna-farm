import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import LandViewItem from 'src/view/land/view/LandViewItem';

function IrrigationView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <LandViewItem
          label={i18n('entities.irrigation.fields.land')}
          value={record.land}
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.source')}
          value={
            record.source &&
            i18n(
              `entities.irrigation.enumerators.source.${record.source}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.hours')}
          value={record.hours}
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.rate')}
          value={record.rate}
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.machine')}
          value={record.machine}
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.volume')}
          value={record.volume}
        />

        <TextViewItem
          label={i18n(
            'entities.irrigation.fields.start',
          )}
          value={moment(record.start).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n(
            'entities.irrigation.fields.end',
          )}
          value={moment(record.end).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n('entities.irrigation.fields.label')}
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

export default IrrigationView;
