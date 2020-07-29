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
import soilEnumerators from 'src/modules/soil/soilEnumerators';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFormSchemas.relationToOne(
    i18n('entities.soil.fields.land'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.soil.fields.type'),
    {
      "options": soilEnumerators.type
    },
  ),
  pH: yupFormSchemas.decimal(
    i18n('entities.soil.fields.pH'),
    {
      "min": 0,
      "max": 14
    },
  ),
  temperature: yupFormSchemas.integer(
    i18n('entities.soil.fields.temperature'),
    {},
  ),
  organicCarbon: yupFormSchemas.string(
    i18n('entities.soil.fields.organicCarbon'),
    {},
  ),
  cec: yupFormSchemas.string(
    i18n('entities.soil.fields.cec'),
    {},
  ),
  nitrogen: yupFormSchemas.string(
    i18n('entities.soil.fields.nitrogen'),
    {},
  ),
  phosphorus: yupFormSchemas.string(
    i18n('entities.soil.fields.phosphorus'),
    {},
  ),
  potassium: yupFormSchemas.string(
    i18n('entities.soil.fields.potassium'),
    {},
  ),
  other: yupFormSchemas.string(
    i18n('entities.soil.fields.other'),
    {},
  ),
  label: yupFormSchemas.string(
    i18n('entities.soil.fields.label'),
    {},
  ),
});

function SoilForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      land: record.land,
      type: record.type,
      pH: record.pH,
      temperature: record.temperature,
      organicCarbon: record.organicCarbon,
      cec: record.cec,
      nitrogen: record.nitrogen,
      phosphorus: record.phosphorus,
      potassium: record.potassium,
      other: record.other,
      label: record.label,
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
                label={i18n('entities.soil.fields.land')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="type"
                label={i18n('entities.soil.fields.type')}
                options={soilEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.soil.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="pH"
                label={i18n('entities.soil.fields.pH')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="temperature"
                label={i18n('entities.soil.fields.temperature')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="organicCarbon"
                label={i18n('entities.soil.fields.organicCarbon')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="cec"
                label={i18n('entities.soil.fields.cec')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="nitrogen"
                label={i18n('entities.soil.fields.nitrogen')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phosphorus"
                label={i18n('entities.soil.fields.phosphorus')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="potassium"
                label={i18n('entities.soil.fields.potassium')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="other"
                label={i18n('entities.soil.fields.other')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.soil.fields.label')}  
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

export default SoilForm;
