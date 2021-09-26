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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import LocationAutocompleteFormItem from 'src/view/location/autocomplete/LocationAutocompleteFormItem';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';

const schema = yup.object().shape({
  location: yupFormSchemas.relationToOne(
    i18n('entities.land.fields.location'),
    {
      "required": true
    },
  ),
  area: yupFormSchemas.decimal(
    i18n('entities.land.fields.area'),
    {
      "required": true
    },
  ),
  farmer: yupFormSchemas.relationToOne(
    i18n('entities.land.fields.farmer'),
    {},
  ),
  groundwaterAvailable: yupFormSchemas.boolean(
    i18n('entities.land.fields.groundwaterAvailable'),
    {},
  ),
  groundwaterDepth: yupFormSchemas.integer(
    i18n('entities.land.fields.groundwaterDepth'),
    {},
  ),
  canalAccess: yupFormSchemas.boolean(
    i18n('entities.land.fields.canalAccess'),
    {},
  ),
  waterAcidity: yupFormSchemas.string(
    i18n('entities.land.fields.waterAcidity'),
    {},
  ),
  downpour: yupFormSchemas.boolean(
    i18n('entities.land.fields.downpour'),
    {},
  ),
  downpourRate: yupFormSchemas.string(
    i18n('entities.land.fields.downpourRate'),
    {},
  ),
  hailstorm: yupFormSchemas.boolean(
    i18n('entities.land.fields.hailstorm'),
    {},
  ),
  flood: yupFormSchemas.boolean(
    i18n('entities.land.fields.flood'),
    {},
  ),
  label: yupFormSchemas.string(
    i18n('entities.land.fields.label'),
    {},
  ),
});

function LandForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      location: record.location,
      area: record.area,
      farmer: record.farmer,
      groundwaterAvailable: record.groundwaterAvailable,
      groundwaterDepth: record.groundwaterDepth,
      canalAccess: record.canalAccess,
      waterAcidity: record.waterAcidity,
      downpour: record.downpour,
      downpourRate: record.downpourRate,
      hailstorm: record.hailstorm,
      flood: record.flood,
      label: `${record.farmer}, ${record.location}, ${record.area}`,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    const valuesNew = {
      ...values, label: `${values.farmer}, ${values.location}, ${values.area}`}
    props.onSubmit(props.record?.id, valuesNew);
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
              <LocationAutocompleteFormItem  
                name="location"
                label={i18n('entities.land.fields.location')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="area"
                label={i18n('entities.land.fields.area')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.land.fields.farmer')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="groundwaterAvailable"
                label={i18n('entities.land.fields.groundwaterAvailable')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="groundwaterDepth"
                label={i18n('entities.land.fields.groundwaterDepth')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="canalAccess"
                label={i18n('entities.land.fields.canalAccess')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="waterAcidity"
                label={i18n('entities.land.fields.waterAcidity')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="downpour"
                label={i18n('entities.land.fields.downpour')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="downpourRate"
                label={i18n('entities.land.fields.downpourRate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hailstorm"
                label={i18n('entities.land.fields.hailstorm')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="flood"
                label={i18n('entities.land.fields.flood')}
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

export default LandForm;
