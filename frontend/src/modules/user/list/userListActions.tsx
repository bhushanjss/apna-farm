import UserService from 'src/modules/user/userService';
import selectors from 'src/modules/user/list/userListSelectors';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/user/list/userListExporterFields';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'USER_LIST';

const actions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  DESTROY_ALL_SELECTED_STARTED: `${prefix}_DESTROY_ALL_SELECTED_STARTED`,
  DESTROY_ALL_SELECTED_SUCCESS: `${prefix}_DESTROY_ALL_SELECTED_SUCCESS`,
  DESTROY_ALL_SELECTED_ERROR: `${prefix}_DESTROY_ALL_SELECTED_ERROR`,

  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doClearAllSelected() {
    return {
      type: actions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: actions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: actions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    dispatch(actions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: actions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await UserService.fetchUsers(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('user.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: actions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: actions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(actions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: actions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(actions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    dispatch(actions.doFetch(filter, true));
  },

  doFetch: (filter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.FETCH_STARTED,
        payload: { filter, keepPagination },
      });

      const response = await UserService.fetchUsers(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: actions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.FETCH_ERROR,
      });
    }
  },

  doDestroy: (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actions.DESTROY_STARTED,
      });

      await UserService.destroy([id]);

      dispatch({
        type: actions.DESTROY_SUCCESS,
      });

      Message.success(i18n('user.doDestroySuccess'));

      dispatch(actions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ERROR,
      });

      dispatch(actions.doFetchCurrentFilter());
    }
  },

  doDestroyAllSelected: () => async (
    dispatch,
    getState,
  ) => {
    try {
      const selectedRows = selectors.selectSelectedRows(
        getState(),
      );

      dispatch({
        type: actions.DESTROY_ALL_SELECTED_STARTED,
      });

      await UserService.destroy(
        selectedRows.map((row) => row.id),
      );

      dispatch({
        type: actions.DESTROY_ALL_SELECTED_SUCCESS,
      });

      Message.success(
        i18n('user.doDestroyAllSelectedSuccess'),
      );

      dispatch(actions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ALL_SELECTED_ERROR,
      });

      dispatch(actions.doFetchCurrentFilter());
    }
  },
};

export default actions;
