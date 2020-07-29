import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plantVariety/list/plantVarietyListActions';
import selectors from 'src/modules/plantVariety/list/plantVarietyListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  plant: yupFilterSchemas.relationToOne(
    i18n('entities.plantVariety.fields.plant'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.plantVariety.fields.name'),
  ),
});

function PlantVarietyListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      plant: null,
      name: undefined,

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
              <PlantAutocompleteFormItem  
                name="plant"
                label={i18n('entities.plantVariety.fields.plant')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.plantVariety.fields.name')}      
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

export default PlantVarietyListFilter;