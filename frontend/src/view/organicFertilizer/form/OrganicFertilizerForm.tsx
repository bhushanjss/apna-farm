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

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.organicFertilizer.fields.name'),
    {},
  ),
  n: yupFormSchemas.integer(
    i18n('entities.organicFertilizer.fields.n'),
    {},
  ),
  p: yupFormSchemas.integer(
    i18n('entities.organicFertilizer.fields.p'),
    {},
  ),
  k: yupFormSchemas.integer(
    i18n('entities.organicFertilizer.fields.k'),
    {},
  ),
  nutrients: yupFormSchemas.string(
    i18n('entities.organicFertilizer.fields.nutrients'),
    {},
  ),
  method: yupFormSchemas.string(
    i18n('entities.organicFertilizer.fields.method'),
    {},
  ),
  result: yupFormSchemas.string(
    i18n('entities.organicFertilizer.fields.result'),
    {},
  ),
  price: yupFormSchemas.integer(
    i18n('entities.organicFertilizer.fields.price'),
    {},
  ),
});

function OrganicFertilizerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      n: record.n,
      p: record.p,
      k: record.k,
      nutrients: record.nutrients,
      method: record.method,
      result: record.result,
      price: record.price,
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
                label={i18n('entities.organicFertilizer.fields.name')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="n"
                label={i18n('entities.organicFertilizer.fields.n')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="p"
                label={i18n('entities.organicFertilizer.fields.p')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="k"
                label={i18n('entities.organicFertilizer.fields.k')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="nutrients"
                label={i18n('entities.organicFertilizer.fields.nutrients')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="method"
                label={i18n('entities.organicFertilizer.fields.method')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="result"
                label={i18n('entities.organicFertilizer.fields.result')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="price"
                label={i18n('entities.organicFertilizer.fields.price')}  
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

export default OrganicFertilizerForm;
