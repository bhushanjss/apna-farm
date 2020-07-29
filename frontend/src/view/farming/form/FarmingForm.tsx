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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import farmingEnumerators from 'src/modules/farming/farmingEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';
import FarmingMethodAutocompleteFormItem from 'src/view/farmingMethod/autocomplete/FarmingMethodAutocompleteFormItem';
import IrrigationAutocompleteFormItem from 'src/view/irrigation/autocomplete/IrrigationAutocompleteFormItem';

const schema = yup.object().shape({
  year: yupFormSchemas.integer(
    i18n('entities.farming.fields.year'),
    {
      "min": 2020
    },
  ),
  season: yupFormSchemas.enumerator(
    i18n('entities.farming.fields.season'),
    {
      "options": farmingEnumerators.season
    },
  ),
  farmer: yupFormSchemas.relationToOne(
    i18n('entities.farming.fields.farmer'),
    {},
  ),
  land: yupFormSchemas.relationToMany(
    i18n('entities.farming.fields.land'),
    {},
  ),
  plantType: yupFormSchemas.enumerator(
    i18n('entities.farming.fields.plantType'),
    {
      "options": farmingEnumerators.plantType
    },
  ),
  farmingMethod: yupFormSchemas.relationToOne(
    i18n('entities.farming.fields.farmingMethod'),
    {},
  ),
  dateSown: yupFormSchemas.date(
    i18n('entities.farming.fields.dateSown'),
    {},
  ),
  irrigations: yupFormSchemas.relationToMany(
    i18n('entities.farming.fields.irrigations'),
    {},
  ),
  labors: yupFormSchemas.integer(
    i18n('entities.farming.fields.labors'),
    {
      "min": 0
    },
  ),
  mixedFarming: yupFormSchemas.boolean(
    i18n('entities.farming.fields.mixedFarming'),
    {},
  ),
  cropRotation: yupFormSchemas.boolean(
    i18n('entities.farming.fields.cropRotation'),
    {},
  ),
  cropsRotated: yupFormSchemas.string(
    i18n('entities.farming.fields.cropsRotated'),
    {},
  ),
});

function FarmingForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      year: record.year,
      season: record.season,
      farmer: record.farmer,
      land: record.land || [],
      plantType: record.plantType,
      farmingMethod: record.farmingMethod,
      dateSown: record.dateSown ? moment(record.dateSown, 'YYYY-MM-DD') : null,
      irrigations: record.irrigations || [],
      labors: record.labors,
      mixedFarming: record.mixedFarming,
      cropRotation: record.cropRotation,
      cropsRotated: record.cropsRotated,
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
              <InputNumberFormItem
                name="year"
                label={i18n('entities.farming.fields.year')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="season"
                label={i18n('entities.farming.fields.season')}
                options={farmingEnumerators.season.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farming.enumerators.season.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.farming.fields.farmer')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <LandAutocompleteFormItem  
                name="land"
                label={i18n('entities.farming.fields.land')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="plantType"
                label={i18n('entities.farming.fields.plantType')}
                options={farmingEnumerators.plantType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farming.enumerators.plantType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FarmingMethodAutocompleteFormItem  
                name="farmingMethod"
                label={i18n('entities.farming.fields.farmingMethod')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateSown"
                label={i18n('entities.farming.fields.dateSown')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <IrrigationAutocompleteFormItem  
                name="irrigations"
                label={i18n('entities.farming.fields.irrigations')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="labors"
                label={i18n('entities.farming.fields.labors')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="mixedFarming"
                label={i18n('entities.farming.fields.mixedFarming')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="cropRotation"
                label={i18n('entities.farming.fields.cropRotation')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="cropsRotated"
                label={i18n('entities.farming.fields.cropsRotated')}  
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

export default FarmingForm;
