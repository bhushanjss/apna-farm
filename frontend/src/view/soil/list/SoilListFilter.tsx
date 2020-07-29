import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/soil/list/soilListActions';
import selectors from 'src/modules/soil/list/soilListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import soilEnumerators from 'src/modules/soil/soilEnumerators';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFilterSchemas.relationToOne(
    i18n('entities.soil.fields.land'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.soil.fields.type'),
  ),
  organicCarbon: yupFilterSchemas.string(
    i18n('entities.soil.fields.organicCarbon'),
  ),
  cec: yupFilterSchemas.string(
    i18n('entities.soil.fields.cec'),
  ),
  nitrogen: yupFilterSchemas.string(
    i18n('entities.soil.fields.nitrogen'),
  ),
  phosphorus: yupFilterSchemas.string(
    i18n('entities.soil.fields.phosphorus'),
  ),
  potassium: yupFilterSchemas.string(
    i18n('entities.soil.fields.potassium'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.soil.fields.label'),
  ),
});

function SoilListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      land: null,
      type: undefined,
      organicCarbon: undefined,
      cec: undefined,
      nitrogen: undefined,
      phosphorus: undefined,
      potassium: undefined,
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
                label={i18n('entities.soil.fields.land')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
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
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="organicCarbon"
                label={i18n('entities.soil.fields.organicCarbon')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="cec"
                label={i18n('entities.soil.fields.cec')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="nitrogen"
                label={i18n('entities.soil.fields.nitrogen')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="phosphorus"
                label={i18n('entities.soil.fields.phosphorus')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="potassium"
                label={i18n('entities.soil.fields.potassium')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.soil.fields.label')}      
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

export default SoilListFilter;