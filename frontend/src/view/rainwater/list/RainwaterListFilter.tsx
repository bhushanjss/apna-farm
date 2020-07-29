import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/rainwater/list/rainwaterListActions';
import selectors from 'src/modules/rainwater/list/rainwaterListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import rainwaterEnumerators from 'src/modules/rainwater/rainwaterEnumerators';
import LandAutocompleteFormItem from 'src/view/land/autocomplete/LandAutocompleteFormItem';

const schema = yup.object().shape({
  land: yupFilterSchemas.relationToOne(
    i18n('entities.rainwater.fields.land'),
  ),
  waterSourceKharif: yupFilterSchemas.enumerator(
    i18n('entities.rainwater.fields.waterSourceKharif'),
  ),
  waterSourceZaid: yupFilterSchemas.enumerator(
    i18n('entities.rainwater.fields.waterSourceZaid'),
  ),
  rainwaterHarvestingAllowed: yupFilterSchemas.boolean(
    i18n('entities.rainwater.fields.rainwaterHarvestingAllowed'),
  ),
});

function RainwaterListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      land: null,
      waterSourceKharif: undefined,
      waterSourceZaid: undefined,
      rainwaterHarvestingAllowed: undefined,

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
                label={i18n('entities.rainwater.fields.land')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="waterSourceKharif"
                label={i18n('entities.rainwater.fields.waterSourceKharif')}
                options={rainwaterEnumerators.waterSourceKharif.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.rainwater.enumerators.waterSourceKharif.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="waterSourceZaid"
                label={i18n('entities.rainwater.fields.waterSourceZaid')}
                options={rainwaterEnumerators.waterSourceZaid.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.rainwater.enumerators.waterSourceZaid.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="rainwaterHarvestingAllowed"
                label={i18n('entities.rainwater.fields.rainwaterHarvestingAllowed')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
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

export default RainwaterListFilter;