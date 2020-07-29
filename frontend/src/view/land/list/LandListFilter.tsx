import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/land/list/landListActions';
import selectors from 'src/modules/land/list/landListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import LocationAutocompleteFormItem from 'src/view/location/autocomplete/LocationAutocompleteFormItem';
import FarmerAutocompleteFormItem from 'src/view/farmer/autocomplete/FarmerAutocompleteFormItem';

const schema = yup.object().shape({
  location: yupFilterSchemas.relationToOne(
    i18n('entities.land.fields.location'),
  ),
  farmer: yupFilterSchemas.relationToOne(
    i18n('entities.land.fields.farmer'),
  ),
  groundwaterAvailable: yupFilterSchemas.boolean(
    i18n('entities.land.fields.groundwaterAvailable'),
  ),
  canalAccess: yupFilterSchemas.boolean(
    i18n('entities.land.fields.canalAccess'),
  ),
  waterAcidity: yupFilterSchemas.string(
    i18n('entities.land.fields.waterAcidity'),
  ),
  downpour: yupFilterSchemas.boolean(
    i18n('entities.land.fields.downpour'),
  ),
  hailstorm: yupFilterSchemas.boolean(
    i18n('entities.land.fields.hailstorm'),
  ),
  flood: yupFilterSchemas.boolean(
    i18n('entities.land.fields.flood'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.land.fields.label'),
  ),
});

function LandListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      location: null,
      farmer: null,
      groundwaterAvailable: undefined,
      canalAccess: undefined,
      waterAcidity: undefined,
      downpour: undefined,
      hailstorm: undefined,
      flood: undefined,
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
              <LocationAutocompleteFormItem  
                name="location"
                label={i18n('entities.land.fields.location')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <FarmerAutocompleteFormItem  
                name="farmer"
                label={i18n('entities.land.fields.farmer')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="groundwaterAvailable"
                label={i18n('entities.land.fields.groundwaterAvailable')}
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
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="canalAccess"
                label={i18n('entities.land.fields.canalAccess')}
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
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="waterAcidity"
                label={i18n('entities.land.fields.waterAcidity')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="downpour"
                label={i18n('entities.land.fields.downpour')}
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
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="hailstorm"
                label={i18n('entities.land.fields.hailstorm')}
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
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="flood"
                label={i18n('entities.land.fields.flood')}
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
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="label"
                label={i18n('entities.land.fields.label')}      
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

export default LandListFilter;