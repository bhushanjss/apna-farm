import FarmerService from 'src/modules/farmer/farmerService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'FARMER_FORM';

const actions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: actions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await FarmerService.find(id);
      }

      dispatch({
        type: actions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.INIT_ERROR,
      });

      getHistory().push('/farmer');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: actions.CREATE_STARTED,
      });

      await FarmerService.create(values);

      dispatch({
        type: actions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.farmer.create.success'),
      );

      getHistory().push('/farmer');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actions.UPDATE_STARTED,
      });

      await FarmerService.update(id, values);

      dispatch({
        type: actions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.farmer.update.success'),
      );

      getHistory().push('/farmer');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.UPDATE_ERROR,
      });
    }
  },
};

export default actions;
