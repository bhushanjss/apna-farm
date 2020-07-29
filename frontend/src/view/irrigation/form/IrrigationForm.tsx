import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import irrigationEnumerators from 'src/modules/irrigation/irrigationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFormSchemas.relationToOne(
    i18n('entities.irrigation.fields.land'),
    {},
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.irrigation.fields.source'),
    {
      "options": irrigationEnumerators.source
    },
  ),
  hours: yupFormSchemas.integer(
    i18n('entities.irrigation.fields.hours'),
    {},
  ),
  rate: yupFormSchemas.integer(
    i18n('entities.irrigation.fields.rate'),
    {},
  ),
  machine: yupFormSchemas.string(
    i18n('entities.irrigation.fields.machine'),
    {},
  ),
  volume: yupFormSchemas.integer(
    i18n('entities.irrigation.fields.volume'),
    {},
  ),
  start: yupFormSchemas.datetime(
    i18n('entities.irrigation.fields.start'),
    {},
  ),
  end: yupFormSchemas.datetime(
    i18n('entities.irrigation.fields.end'),
    {},
  ),
  label: yupFormSchemas.string(
    i18n('entities.irrigation.fields.label'),
    {},
  ),
});

function IrrigationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      land: record.land,
      source: record.source,
      hours: record.hours,
      rate: record.rate,
      machine: record.machine,
      volume: record.volume,
      start: record.start ? moment(record.start, 'YYYY-MM-DD HH:mm') : null,
      end: record.end ? moment(record.end, 'YYYY-MM-DD HH:mm') : null,
      label: record.label,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <LandAutocompleteFormItem  
                name="land"
                label={i18n('entities.irrigation.fields.land')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="source"
                label={i18n('entities.irrigation.fields.source')}
                options={irrigationEnumerators.source.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.irrigation.enumerators.source.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="hours"
                label={i18n('entities.irrigation.fields.hours')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="rate"
                label={i18n('entities.irrigation.fields.rate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="machine"
                label={i18n('entities.irrigation.fields.machine')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="volume"
                label={i18n('entities.irrigation.fields.volume')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="start"
                label={i18n('entities.irrigation.fields.start')}
                required={false}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="end"
                label={i18n('entities.irrigation.fields.end')}
                required={false}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.irrigation.fields.label')}  
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default IrrigationForm;
