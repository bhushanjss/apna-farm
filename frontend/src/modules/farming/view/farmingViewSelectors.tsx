import { createSelector } from 'reselect';

const selectRaw = (state) => state.farming.view;

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
