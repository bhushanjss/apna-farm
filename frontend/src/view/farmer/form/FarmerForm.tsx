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
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import AgentAutocompleteFormItem from 'src/view/agent/autocomplete/AgentAutocompleteFormItem';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.farmer.fields.person'),
    {
      "required": true
    },
  ),
  agent: yupFormSchemas.relationToOne(
    i18n('entities.farmer.fields.agent'),
    {},
  ),
  area: yupFormSchemas.string(
    i18n('entities.farmer.fields.area'),
    {
      "required": true
    },
  ),
  lands: yupFormSchemas.relationToMany(
    i18n('entities.farmer.fields.lands'),
    {
      "required": true
    },
  ),
  label: yupFormSchemas.string(
    i18n('entities.farmer.fields.label'),
    {},
  ),
});

function FarmerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      agent: record.agent,
      area: record.area,
      lands: record.lands || [],
      label: record.person,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    const { person } = values;
    const personAr = person.split(";");
    const recordValues = {...values, person: personAr[0], label: personAr[1]};
    props.onSubmit(props.record?.id, recordValues);
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
              <PersonAutocompleteFormItem  
                name="person"
                label={i18n('entities.farmer.fields.person')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AgentAutocompleteFormItem  
                name="agent"
                label={i18n('entities.farmer.fields.agent')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="area"
                label={i18n('entities.farmer.fields.area')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <LandAutocompleteFormItem  
                name="lands"
                label={i18n('entities.farmer.fields.lands')}
                required={true}
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

export default FarmerForm;
