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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.name'),
    {},
  ),
  npk: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.npk'),
    {},
  ),
  nutrients: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.nutrients'),
    {},
  ),
  brand: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.brand'),
    {},
  ),
  crops: yupFormSchemas.relationToMany(
    i18n('entities.fertilizer.fields.crops'),
    {},
  ),
  plants: yupFormSchemas.relationToMany(
    i18n('entities.fertilizer.fields.plants'),
    {},
  ),
  method: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.method'),
    {},
  ),
  result: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.result'),
    {},
  ),
  price: yupFormSchemas.integer(
    i18n('entities.fertilizer.fields.price'),
    {},
  ),
  composition: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.composition'),
    {},
  ),
  dosage: yupFormSchemas.string(
    i18n('entities.fertilizer.fields.dosage'),
    {},
  ),
});

function FertilizerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      npk: record.npk,
      nutrients: record.nutrients,
      brand: record.brand,
      crops: record.crops || [],
      plants: record.plants || [],
      method: record.method,
      result: record.result,
      price: record.price,
      composition: record.composition,
      dosage: record.dosage,
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
              <InputFormItem
                name="name"
                label={i18n('entities.fertilizer.fields.name')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="npk"
                label={i18n('entities.fertilizer.fields.npk')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="nutrients"
                label={i18n('entities.fertilizer.fields.nutrients')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="brand"
                label={i18n('entities.fertilizer.fields.brand')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CropAutocompleteFormItem  
                name="crops"
                label={i18n('entities.fertilizer.fields.crops')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PlantAutocompleteFormItem  
                name="plants"
                label={i18n('entities.fertilizer.fields.plants')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="method"
                label={i18n('entities.fertilizer.fields.method')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="result"
                label={i18n('entities.fertilizer.fields.result')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="price"
                label={i18n('entities.fertilizer.fields.price')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="composition"
                label={i18n('entities.fertilizer.fields.composition')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="dosage"
                label={i18n('entities.fertilizer.fields.dosage')}  
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

export default FertilizerForm;
