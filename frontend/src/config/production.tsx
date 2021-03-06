// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl =  `https://api.gaiabharat.com/api`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'gaiabharat.com',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};
