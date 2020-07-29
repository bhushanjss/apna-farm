import { createSelector } from 'reselect';

const selectRaw = (state) => state.herbicide.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

export default {
  selectLoading,
};
