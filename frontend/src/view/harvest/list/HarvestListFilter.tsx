import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/harvest/list/harvestListActions';
import selectors from 'src/modules/harvest/list/harvestListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import harvestEnumerators from 'src/modules/harvest/harvestEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';
import PlantAutocompleteFormItem from 'src/view/plant/autocomplete/PlantAutocompleteFormItem';

const schema = yup.object().shape({
  farmer: yupFilterSchemas.relationToOne(
    i18n('entities.harvest.fields.farmer'),
  ),
  land: yupFilterSchemas.relationToOne(
    i18n('entities.harvest.fields.land'),
  ),
  crop: yupFilterSchemas.relationToOne(
    i18n('entities.harvest.fields.crop'),
  ),
  plant: yupFilterSchemas.relationToOne(
    i18n('entities.harvest.fields.plant'),
  ),
  valueType: yupFilterSchemas.enumerator(
    i18n('entities.harvest.fields.valueType'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.harvest.fields.dateRange'),
  ),
});

function HarvestListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      farmer: null,
      land: null,
      crop: null,
      plant: null,
      valueType: undefined,
      dateRange: [],

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
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.harvest.fields.farmer')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <LandAutocompleteFormItem  
                name="land"
                label={i18n('entities.harvest.fields.land')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CropAutocompleteFormItem  
                name="crop"
                label={i18n('entities.harvest.fields.crop')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <PlantAutocompleteFormItem  
                name="plant"
                label={i18n('entities.harvest.fields.plant')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="valueType"
                label={i18n('entities.harvest.fields.valueType')}
                options={harvestEnumerators.valueType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.harvest.enumerators.valueType.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <DatePickerRangeFormItem
                name="dateRange"
                label={i18n('entities.harvest.fields.dateRange')}    
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

export default HarvestListFilter;