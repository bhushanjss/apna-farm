import express from 'express';
import cors from 'cors';
import { authMiddleware } from '../middlewares/authMiddleware';
import { tenantMiddleware } from '../middlewares/tenantMiddleware';
import { databaseMiddleware } from '../middlewares/databaseMiddleware';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();

// Initializes and adds the database middleware.
app.use(databaseMiddleware);

// Enables CORS
app.use(cors({ origin: true }));

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Parses the body of POST/PUT request
// to JSON
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      const url = (<any>req).originalUrl;
      if (url.startsWith('/api/plan/stripe/webhook')) {
        // Stripe Webhook needs the body raw in order
        // to validate the request
        (<any>req).rawBody = buf.toString();
      }
    },
  }),
);

// Configure the Entity routes
const routes = express.Router();

require('./auditLog').default(routes);
require('./auth').default(routes);
require('./plan').default(routes);
require('./tenant').default(routes);
require('./file').default(routes);
require('./user').default(routes);
require('./settings').default(routes);
require('./person').default(routes);
require('./location').default(routes);
require('./land').default(routes);
require('./farmer').default(routes);
require('./agent').default(routes);
require('./question').default(routes);
require('./answer').default(routes);
require('./crop').default(routes);
require('./cropVariety').default(routes);
require('./plant').default(routes);
require('./plantVariety').default(routes);
require('./farmingMethod').default(routes);
require('./farming').default(routes);
require('./irrigation').default(routes);
require('./weed').default(routes);
require('./herbicide').default(routes);
require('./insect').default(routes);
require('./insecticide').default(routes);
require('./pest').default(routes);
require('./pesticide').default(routes);
require('./soil').default(routes);
require('./disease').default(routes);
require('./fertilizer').default(routes);
require('./organicFertilizer').default(routes);
require('./harvest').default(routes);
require('./rainwater').default(routes);

// Loads the Tenant if the :tenantId param is passed
routes.param('tenantId', tenantMiddleware);

// Add the routes to the /api endpoint
app.use('/api', routes);

export default app;
