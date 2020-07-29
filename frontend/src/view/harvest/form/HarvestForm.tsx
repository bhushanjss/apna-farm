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
import harvestEnumerators from 'src/modules/harvest/harvestEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  farmer: yupFormSchemas.relationToOne(
    i18n('entities.harvest.fields.farmer'),
    {},
  ),
  land: yupFormSchemas.relationToOne(
    i18n('entities.harvest.fields.land'),
    {},
  ),
  crop: yupFormSchemas.relationToOne(
    i18n('entities.harvest.fields.crop'),
    {},
  ),
  plant: yupFormSchemas.relationToOne(
    i18n('entities.harvest.fields.plant'),
    {},
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.harvest.fields.quantity'),
    {},
  ),
  unit: yupFormSchemas.string(
    i18n('entities.harvest.fields.unit'),
    {},
  ),
  valueType: yupFormSchemas.enumerator(
    i18n('entities.harvest.fields.valueType'),
    {
      "options": harvestEnumerators.valueType
    },
  ),
  date: yupFormSchemas.date(
    i18n('entities.harvest.fields.date'),
    {},
  ),
});

function HarvestForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      farmer: record.farmer,
      land: record.land,
      crop: record.crop,
      plant: record.plant,
      quantity: record.quantity,
      unit: record.unit,
      valueType: record.valueType,
      date: record.date ? moment(record.date, 'YYYY-MM-DD') : null,
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
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.harvest.fields.farmer')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <LandAutocompleteFormItem  
                name="land"
                label={i18n('entities.harvest.fields.land')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CropAutocompleteFormItem  
                name="crop"
                label={i18n('entities.harvest.fields.crop')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PlantAutocompleteFormItem  
                name="plant"
                label={i18n('entities.harvest.fields.plant')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="quantity"
                label={i18n('entities.harvest.fields.quantity')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="unit"
                label={i18n('entities.harvest.fields.unit')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="valueType"
                label={i18n('entities.harvest.fields.valueType')}
                options={harvestEnumerators.valueType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.harvest.enumerators.valueType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="date"
                label={i18n('entities.harvest.fields.date')}
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

export default HarvestForm;
