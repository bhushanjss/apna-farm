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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import farmingMethodEnumerators from 'src/modules/farmingMethod/farmingMethodEnumerators';
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  farmingType: yupFormSchemas.enumerator(
    i18n('entities.farmingMethod.fields.farmingType'),
    {
      "options": farmingMethodEnumerators.farmingType
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.farmingMethod.fields.description'),
    {},
  ),
  sowingMethod: yupFormSchemas.enumerator(
    i18n('entities.farmingMethod.fields.sowingMethod'),
    {
      "options": farmingMethodEnumerators.sowingMethod
    },
  ),
  crops: yupFormSchemas.relationToMany(
    i18n('entities.farmingMethod.fields.crops'),
    {},
  ),
  plants: yupFormSchemas.relationToMany(
    i18n('entities.farmingMethod.fields.plants'),
    {},
  ),
});

function FarmingMethodForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      farmingType: record.farmingType,
      description: record.description,
      sowingMethod: record.sowingMethod,
      crops: record.crops || [],
      plants: record.plants || [],
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
              <SelectFormItem
                name="farmingType"
                label={i18n('entities.farmingMethod.fields.farmingType')}
                options={farmingMethodEnumerators.farmingType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farmingMethod.enumerators.farmingType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.farmingMethod.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="sowingMethod"
                label={i18n('entities.farmingMethod.fields.sowingMethod')}
                options={farmingMethodEnumerators.sowingMethod.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farmingMethod.enumerators.sowingMethod.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CropAutocompleteFormItem  
                name="crops"
                label={i18n('entities.farmingMethod.fields.crops')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PlantAutocompleteFormItem  
                name="plants"
                label={i18n('entities.farmingMethod.fields.plants')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default FarmingMethodForm;
