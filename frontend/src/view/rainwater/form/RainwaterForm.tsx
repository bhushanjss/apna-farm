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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import rainwaterEnumerators from 'src/modules/rainwater/rainwaterEnumerators';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFormSchemas.relationToOne(
    i18n('entities.rainwater.fields.land'),
    {},
  ),
  waterReceived: yupFormSchemas.integer(
    i18n('entities.rainwater.fields.waterReceived'),
    {},
  ),
  waterUsedRabi: yupFormSchemas.integer(
    i18n('entities.rainwater.fields.waterUsedRabi'),
    {},
  ),
  waterUsedKharif: yupFormSchemas.integer(
    i18n('entities.rainwater.fields.waterUsedKharif'),
    {},
  ),
  waterSourceKharif: yupFormSchemas.enumerator(
    i18n('entities.rainwater.fields.waterSourceKharif'),
    {
      "options": rainwaterEnumerators.waterSourceKharif
    },
  ),
  waterUsedZaid: yupFormSchemas.integer(
    i18n('entities.rainwater.fields.waterUsedZaid'),
    {},
  ),
  waterSourceZaid: yupFormSchemas.enumerator(
    i18n('entities.rainwater.fields.waterSourceZaid'),
    {
      "options": rainwaterEnumerators.waterSourceZaid
    },
  ),
  extraRainwater: yupFormSchemas.integer(
    i18n('entities.rainwater.fields.extraRainwater'),
    {},
  ),
  rainwaterHarvestingAllowed: yupFormSchemas.boolean(
    i18n('entities.rainwater.fields.rainwaterHarvestingAllowed'),
    {},
  ),
});

function RainwaterForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      land: record.land,
      waterReceived: record.waterReceived,
      waterUsedRabi: record.waterUsedRabi,
      waterUsedKharif: record.waterUsedKharif,
      waterSourceKharif: record.waterSourceKharif,
      waterUsedZaid: record.waterUsedZaid,
      waterSourceZaid: record.waterSourceZaid,
      extraRainwater: record.extraRainwater,
      rainwaterHarvestingAllowed: record.rainwaterHarvestingAllowed,
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
                label={i18n('entities.rainwater.fields.land')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="waterReceived"
                label={i18n('entities.rainwater.fields.waterReceived')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="waterUsedRabi"
                label={i18n('entities.rainwater.fields.waterUsedRabi')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="waterUsedKharif"
                label={i18n('entities.rainwater.fields.waterUsedKharif')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="waterSourceKharif"
                label={i18n('entities.rainwater.fields.waterSourceKharif')}
                options={rainwaterEnumerators.waterSourceKharif.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.rainwater.enumerators.waterSourceKharif.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="waterUsedZaid"
                label={i18n('entities.rainwater.fields.waterUsedZaid')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="waterSourceZaid"
                label={i18n('entities.rainwater.fields.waterSourceZaid')}
                options={rainwaterEnumerators.waterSourceZaid.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.rainwater.enumerators.waterSourceZaid.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="extraRainwater"
                label={i18n('entities.rainwater.fields.extraRainwater')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="rainwaterHarvestingAllowed"
                label={i18n('entities.rainwater.fields.rainwaterHarvestingAllowed')}
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

export default RainwaterForm;
