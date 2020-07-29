import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/farming/list/farmingListActions';
import selectors from 'src/modules/farming/list/farmingListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import farmingEnumerators from 'src/modules/farming/farmingEnumerators';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';
import FarmingMethodAutocompleteFormItem from 'src/view/farmingMethod/autocomplete/FarmingMethodAutocompleteFormItem';

const schema = yup.object().shape({
  season: yupFilterSchemas.enumerator(
    i18n('entities.farming.fields.season'),
  ),
  farmer: yupFilterSchemas.relationToOne(
    i18n('entities.farming.fields.farmer'),
  ),
  plantType: yupFilterSchemas.enumerator(
    i18n('entities.farming.fields.plantType'),
  ),
  farmingMethod: yupFilterSchemas.relationToOne(
    i18n('entities.farming.fields.farmingMethod'),
  ),
});

function FarmingListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      season: undefined,
      farmer: null,
      plantType: undefined,
      farmingMethod: null,

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
              <SelectFormItem
                name="season"
                label={i18n('entities.farming.fields.season')}
                options={farmingEnumerators.season.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farming.enumerators.season.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.farming.fields.farmer')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="plantType"
                label={i18n('entities.farming.fields.plantType')}
                options={farmingEnumerators.plantType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.farming.enumerators.plantType.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <FarmingMethodAutocompleteFormItem  
                name="farmingMethod"
                label={i18n('entities.farming.fields.farmingMethod')}        
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

export default FarmingListFilter;