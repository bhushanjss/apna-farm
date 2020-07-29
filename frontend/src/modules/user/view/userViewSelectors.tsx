import { createSelector } from 'reselect';

const selectRaw = (state) => state.user.view;

const selectUser = createSelector(
  [selectRaw],
  (raw) => raw.user,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectors = {
  selectLoading,
  selectUser,
  selectRaw,
};

export default selectors;
