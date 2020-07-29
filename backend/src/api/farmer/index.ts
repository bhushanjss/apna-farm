export default (app) => {
  app.post(
    `/tenant/:tenantId/farmer`,
    require('./farmerCreate').default,
  );
  app.put(
    `/tenant/:tenantId/farmer/:id`,
    require('./farmerUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/farmer/import`,
    require('./farmerImport').default,
  );
  app.delete(
    `/tenant/:tenantId/farmer`,
    require('./farmerDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/farmer/autocomplete`,
    require('./farmerAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/farmer`,
    require('./farmerList').default,
  );
  app.get(
    `/tenant/:tenantId/farmer/:id`,
    require('./farmerFind').default,
  );
};
