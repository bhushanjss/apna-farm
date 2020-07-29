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

const schema = yup.object().shape({
  crop: yupFormSchemas.relationToOne(
    i18n('entities.cropVariety.fields.crop'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.cropVariety.fields.name'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.cropVariety.fields.description'),
    {},
  ),
  cropDuration: yupFormSchemas.integer(
    i18n('entities.cropVariety.fields.cropDuration'),
    {},
  ),
  cropYield: yupFormSchemas.integer(
    i18n('entities.cropVariety.fields.cropYield'),
    {},
  ),
  seedRate: yupFormSchemas.integer(
    i18n('entities.cropVariety.fields.seedRate'),
    {},
  ),
  seedPlantationTime: yupFormSchemas.string(
    i18n('entities.cropVariety.fields.seedPlantationTime'),
    {},
  ),
});

function CropVarietyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      crop: record.crop,
      name: record.name,
      description: record.description,
      cropDuration: record.cropDuration,
      cropYield: record.cropYield,
      seedRate: record.seedRate,
      seedPlantationTime: record.seedPlantationTime,
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
              <CropAutocompleteFormItem  
                name="crop"
                label={i18n('entities.cropVariety.fields.crop')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.cropVariety.fields.name')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.cropVariety.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="cropDuration"
                label={i18n('entities.cropVariety.fields.cropDuration')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="cropYield"
                label={i18n('entities.cropVariety.fields.cropYield')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="seedRate"
                label={i18n('entities.cropVariety.fields.seedRate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="seedPlantationTime"
                label={i18n('entities.cropVariety.fields.seedPlantationTime')}  
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

export default CropVarietyForm;
