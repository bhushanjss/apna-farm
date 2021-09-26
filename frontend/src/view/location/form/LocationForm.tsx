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

const schema = yup.object().shape({
  state: yupFormSchemas.string(
    i18n('entities.location.fields.state'),
    {
      "required": true
    },
  ),
  district: yupFormSchemas.string(
    i18n('entities.location.fields.district'),
    {
      "required": true
    },
  ),
  tehsil: yupFormSchemas.string(
    i18n('entities.location.fields.tehsil'),
    {},
  ),
  village: yupFormSchemas.string(
    i18n('entities.location.fields.village'),
    {
      "required": true
    },
  ),
  coords: yupFormSchemas.string(
    i18n('entities.location.fields.coords'),
    {},
  ),
  label: yupFormSchemas.string(
    i18n('entities.location.fields.label'),
    {},
  ),
});

function LocationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      state: record.state,
      district: record.district,
      tehsil: record.tehsil,
      village: record.village,
      coords: record.coords,
      label: record.label,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    const { state, district, tehsil, village } = values;
    let label = village;
    if(tehsil) {
      label = `${label}, ${tehsil}`;
    }
    label = `${label}, ${district}, ${state}`;
    const recordValues = {...values, label};
    props.onSubmit(props.record?.id, recordValues);
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
              <InputFormItem
                name="state"
                label={i18n('entities.location.fields.state')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="district"
                label={i18n('entities.location.fields.district')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="tehsil"
                label={i18n('entities.location.fields.tehsil')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="village"
                label={i18n('entities.location.fields.village')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="coords"
                label={i18n('entities.location.fields.coords')}  
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

export default LocationForm;
