import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farmer/list/farmerListActions';
import selectors from 'src/modules/farmer/list/farmerListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import AgentAutocompleteFormItem from 'src/view/agent/autocomplete/AgentAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.farmer.fields.person'),
  ),
  agent: yupFilterSchemas.relationToOne(
    i18n('entities.farmer.fields.agent'),
  ),
  area: yupFilterSchemas.string(
    i18n('entities.farmer.fields.area'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.farmer.fields.label'),
  ),
});

function FarmerListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      person: null,
      agent: null,
      area: undefined,
      label: undefined,

      ...filter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues)));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const { person } = values;
    let recordValues = values;
    if(person) {
      const personAr = person.split(";");   
      recordValues = {...values, person: personAr[0]};
    }  
    dispatch(actions.doFetch(recordValues));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
    dispatch(actions.doReset());
  };

  return (
    <FilterWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <PersonAutocompleteFormItem  
                name="person"
                label={i18n('entities.farmer.fields.person')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <AgentAutocompleteFormItem  
                name="agent"
                label={i18n('entities.farmer.fields.agent')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="area"
                label={i18n('entities.farmer.fields.area')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.farmer.fields.label')}      
              />
            </Grid>
          </Grid>

          <FilterButtons>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={props.loading}
              startIcon={<SearchIcon />}
              size="small"
            >
              {i18n('common.search')}
            </Button>

            <Button
              type="button"
              onClick={onReset}
              disabled={props.loading}
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>
          </FilterButtons>
        </form>
      </FormProvider>
    </FilterWrapper>
  );
}

export default FarmerListFilter;