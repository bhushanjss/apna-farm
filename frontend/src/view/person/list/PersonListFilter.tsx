import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/person/list/personListActions';
import selectors from 'src/modules/person/list/personListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import personEnumerators from 'src/modules/person/personEnumerators';
import LocationAutocompleteFormItem from 'src/view/location/autocomplete/LocationAutocompleteFormItem';

const schema = yup.object().shape({
  personId: yupFilterSchemas.integerRange(
    i18n('entities.person.fields.personId'),
  ),
  firstName: yupFilterSchemas.string(
    i18n('entities.person.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.person.fields.lastName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.person.fields.gender'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.person.fields.phoneNumber'),
  ),
  location: yupFilterSchemas.relationToOne(
    i18n('entities.person.fields.location'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.person.fields.email'),
  ),
  active: yupFilterSchemas.boolean(
    i18n('entities.person.fields.active'),
  ),
  label: yupFilterSchemas.string(
    i18n('entities.person.fields.label'),
  ),
});

function PersonListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      personId: undefined,
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      phoneNumber: undefined,
      location: null,
      email: undefined,
      active: undefined,
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
              <InputFormItem
                name="personId"
                label={i18n('entities.person.fields.personId')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="firstName"
                label={i18n('entities.person.fields.firstName')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.person.fields.lastName')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="gender"
                label={i18n('entities.person.fields.gender')}
                options={personEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.gender.${value}`,
                    ),
                  }),
                )}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.person.fields.phoneNumber')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <LocationAutocompleteFormItem  
                name="location"
                label={i18n('entities.person.fields.location')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.person.fields.email')}      
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectFormItem
                name="active"
                label={i18n('entities.person.fields.active')}
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
                label={i18n('entities.person.fields.label')}      
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

export default PersonListFilter;