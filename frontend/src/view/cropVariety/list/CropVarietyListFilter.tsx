import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cropVariety/list/cropVarietyListActions';
import selectors from 'src/modules/cropVariety/list/cropVarietyListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import CropAutocompleteFormItem from 'src/view/crop/autocomplete/CropAutocompleteFormItem';

const schema = yup.object().shape({
  crop: yupFilterSchemas.relationToOne(
    i18n('entities.cropVariety.fields.crop'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.cropVariety.fields.name'),
  ),
});

function CropVarietyListFilter(props) {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      crop: null,
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
              <CropAutocompleteFormItem  
                name="crop"
                label={i18n('entities.cropVariety.fields.crop')}        
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.cropVariety.fields.name')}      
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

export default CropVarietyListFilter;