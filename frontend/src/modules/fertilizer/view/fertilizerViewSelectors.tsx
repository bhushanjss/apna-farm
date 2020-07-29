import { createSelector } from 'reselect';

const selectRaw = (state) => state.fertilizer.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

export default {
  selectLoading,
  selectRecord,
  selectRaw,
};
