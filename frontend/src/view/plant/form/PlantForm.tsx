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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import plantEnumerators from 'src/modules/plant/plantEnumerators';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.plant.fields.name'),
    {},
  ),
  category: yupFormSchemas.enumerator(
    i18n('entities.plant.fields.category'),
    {
      "options": plantEnumerators.category
    },
  ),
  soilDescription: yupFormSchemas.string(
    i18n('entities.plant.fields.soilDescription'),
    {},
  ),
  climate: yupFormSchemas.string(
    i18n('entities.plant.fields.climate'),
    {},
  ),
  fertilizer: yupFormSchemas.string(
    i18n('entities.plant.fields.fertilizer'),
    {},
  ),
  irrigationTimes: yupFormSchemas.string(
    i18n('entities.plant.fields.irrigationTimes'),
    {},
  ),
});

function PlantForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      category: record.category,
      soilDescription: record.soilDescription,
      climate: record.climate,
      fertilizer: record.fertilizer,
      irrigationTimes: record.irrigationTimes,
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
                label={i18n('entities.plant.fields.name')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="category"
                label={i18n('entities.plant.fields.category')}
                options={plantEnumerators.category.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.plant.enumerators.category.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="soilDescription"
                label={i18n('entities.plant.fields.soilDescription')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="climate"
                label={i18n('entities.plant.fields.climate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="fertilizer"
                label={i18n('entities.plant.fields.fertilizer')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="irrigationTimes"
                label={i18n('entities.plant.fields.irrigationTimes')}  
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

export default PlantForm;
