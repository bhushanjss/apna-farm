import { createSelector } from 'reselect';

const selectRaw = (state) => state.tenant.invitation;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectWarningMessage = createSelector(
  [selectRaw],
  (raw) => raw.warningMessage,
);

export default {
  selectLoading,
  selectRaw,
  selectWarningMessage,
};
