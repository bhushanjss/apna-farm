import config from 'src/config';
import Errors from 'src/modules/shared/error/errors';
import PlanService from './planService';

const prefix = 'PLAN';

const actions = {
  CHECKOUT_STARTED: `${prefix}_CHECKOUT_STARTED`,
  CHECKOUT_SUCCESS: `${prefix}_CHECKOUT_SUCCESS`,
  CHECKOUT_ERROR: `${prefix}_CHECKOUT_ERROR`,

  PORTAL_STARTED: `${prefix}_PORTAL_STARTED`,
  PORTAL_SUCCESS: `${prefix}_PORTAL_SUCCESS`,
  PORTAL_ERROR: `${prefix}_PORTAL_ERROR`,

  doCheckout: (plan) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actions.CHECKOUT_STARTED,
      });

      const sessionId = await PlanService.fetchCheckoutSessionId(
        plan,
      );

      const stripe = (window as any).Stripe(
        config.stripePublishableKey,
      );
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error.message) {
        throw new Error(result.error.message);
      }

      dispatch({
        type: actions.CHECKOUT_SUCCESS,
      });
    } catch (error) {
      Errors.showMessage(error);

      dispatch({
        type: actions.CHECKOUT_ERROR,
      });
    }
  },

  doPortal: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: actions.PORTAL_STARTED,
      });

      const url = await PlanService.fetchPortalUrl();
      window.location.href = url;

      dispatch({
        type: actions.PORTAL_SUCCESS,
      });
    } catch (error) {
      Errors.showMessage(error);

      dispatch({
        type: actions.PORTAL_ERROR,
      });
    }
  },
};

export default actions;
