import { createSelector } from 'reselect';

const selectRaw = (state) => state.agent.form;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.initLoading),
);

const selectSaveLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.saveLoading),
);

export default {
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectRaw,
};
