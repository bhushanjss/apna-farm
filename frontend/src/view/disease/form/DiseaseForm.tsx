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
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.disease.fields.name'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.disease.fields.description'),
    {},
  ),
  crops: yupFormSchemas.relationToMany(
    i18n('entities.disease.fields.crops'),
    {},
  ),
  plants: yupFormSchemas.relationToMany(
    i18n('entities.disease.fields.plants'),
    {},
  ),
  remedy: yupFormSchemas.string(
    i18n('entities.disease.fields.remedy'),
    {},
  ),
});

function DiseaseForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
      crops: record.crops || [],
      plants: record.plants || [],
      remedy: record.remedy,
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
                label={i18n('entities.disease.fields.name')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.disease.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CropAutocompleteFormItem  
                name="crops"
                label={i18n('entities.disease.fields.crops')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PlantAutocompleteFormItem  
                name="plants"
                label={i18n('entities.disease.fields.plants')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="remedy"
                label={i18n('entities.disease.fields.remedy')}  
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

export default DiseaseForm;
