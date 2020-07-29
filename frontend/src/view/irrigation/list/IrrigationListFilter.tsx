import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/irrigation/list/irrigationListActions';
import selectors from 'src/modules/irrigation/list/irrigationListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import irrigationEnumerators from 'src/modules/irrigation/irrigationEnumerators';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFilterSchemas.relationToOne(
    i18n('entities.irrigation.fields.land'),
  ),
  source: yupFilterSchemas.enumerator(
    i18n('entities.irrigation.fields.source'),
  ),
  machine: yupFilterSchemas.string(
    i18n('entities.irrigation.fields.machine'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.irrigation.fields.label'),
  ),
});

function IrrigationListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      land: null,
      source: undefined,
      machine: undefined,
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
    dispatch(actions.doFetch(values));
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
              <LandAutocompleteFormItem  
                name="land"
                label={i18n('entities.irrigation.fields.land')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="source"
                label={i18n('entities.irrigation.fields.source')}
                options={irrigationEnumerators.source.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.irrigation.enumerators.source.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="machine"
                label={i18n('entities.irrigation.fields.machine')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.irrigation.fields.label')}      
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

export default IrrigationListFilter;