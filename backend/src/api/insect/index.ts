export default (app) => {
  app.post(
    `/tenant/:tenantId/insect`,
    require('./insectCreate').default,
  );
  app.put(
    `/tenant/:tenantId/insect/:id`,
    require('./insectUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/insect/import`,
    require('./insectImport').default,
  );
  app.delete(
    `/tenant/:tenantId/insect`,
    require('./insectDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/insect/autocomplete`,
    require('./insectAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/insect`,
    require('./insectList').default,
  );
  app.get(
    `/tenant/:tenantId/insect/:id`,
    require('./insectFind').default,
  );
};
