import Roles from './roles';
import Plans from './plans';
import Storage from './storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      personImport: {
        id: 'personImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      personCreate: {
        id: 'personCreate',
        allowedRoles: [roles.admin, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personEdit: {
        id: 'personEdit',
        allowedRoles: [roles.admin, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personDestroy: {
        id: 'personDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      personRead: {
        id: 'personRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      personAutocomplete: {
        id: 'personAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      locationImport: {
        id: 'locationImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      locationCreate: {
        id: 'locationCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      locationEdit: {
        id: 'locationEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      locationDestroy: {
        id: 'locationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      locationRead: {
        id: 'locationRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      locationAutocomplete: {
        id: 'locationAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      landImport: {
        id: 'landImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      landCreate: {
        id: 'landCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      landEdit: {
        id: 'landEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      landDestroy: {
        id: 'landDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      landRead: {
        id: 'landRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      landAutocomplete: {
        id: 'landAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      farmerImport: {
        id: 'farmerImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmerCreate: {
        id: 'farmerCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmerEdit: {
        id: 'farmerEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmerDestroy: {
        id: 'farmerDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmerRead: {
        id: 'farmerRead',
        allowedRoles: [roles.admin, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmerAutocomplete: {
        id: 'farmerAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      agentImport: {
        id: 'agentImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      agentCreate: {
        id: 'agentCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      agentEdit: {
        id: 'agentEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      agentDestroy: {
        id: 'agentDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      agentRead: {
        id: 'agentRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      agentAutocomplete: {
        id: 'agentAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      questionImport: {
        id: 'questionImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionCreate: {
        id: 'questionCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionEdit: {
        id: 'questionEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionDestroy: {
        id: 'questionDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionRead: {
        id: 'questionRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionAutocomplete: {
        id: 'questionAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      answerImport: {
        id: 'answerImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerCreate: {
        id: 'answerCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerEdit: {
        id: 'answerEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerDestroy: {
        id: 'answerDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerRead: {
        id: 'answerRead',
        allowedRoles: [roles.admin, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerAutocomplete: {
        id: 'answerAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      cropImport: {
        id: 'cropImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cropCreate: {
        id: 'cropCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropEdit: {
        id: 'cropEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropDestroy: {
        id: 'cropDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropRead: {
        id: 'cropRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cropAutocomplete: {
        id: 'cropAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      cropVarietyImport: {
        id: 'cropVarietyImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cropVarietyCreate: {
        id: 'cropVarietyCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropVarietyEdit: {
        id: 'cropVarietyEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropVarietyDestroy: {
        id: 'cropVarietyDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cropVarietyRead: {
        id: 'cropVarietyRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cropVarietyAutocomplete: {
        id: 'cropVarietyAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      plantImport: {
        id: 'plantImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      plantCreate: {
        id: 'plantCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantEdit: {
        id: 'plantEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantDestroy: {
        id: 'plantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantRead: {
        id: 'plantRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      plantAutocomplete: {
        id: 'plantAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      plantVarietyImport: {
        id: 'plantVarietyImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      plantVarietyCreate: {
        id: 'plantVarietyCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantVarietyEdit: {
        id: 'plantVarietyEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantVarietyDestroy: {
        id: 'plantVarietyDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      plantVarietyRead: {
        id: 'plantVarietyRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      plantVarietyAutocomplete: {
        id: 'plantVarietyAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      farmingMethodImport: {
        id: 'farmingMethodImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmingMethodCreate: {
        id: 'farmingMethodCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingMethodEdit: {
        id: 'farmingMethodEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingMethodDestroy: {
        id: 'farmingMethodDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingMethodRead: {
        id: 'farmingMethodRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmingMethodAutocomplete: {
        id: 'farmingMethodAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      farmingImport: {
        id: 'farmingImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmingCreate: {
        id: 'farmingCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingEdit: {
        id: 'farmingEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingDestroy: {
        id: 'farmingDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      farmingRead: {
        id: 'farmingRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      farmingAutocomplete: {
        id: 'farmingAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      irrigationImport: {
        id: 'irrigationImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      irrigationCreate: {
        id: 'irrigationCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      irrigationEdit: {
        id: 'irrigationEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      irrigationDestroy: {
        id: 'irrigationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      irrigationRead: {
        id: 'irrigationRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      irrigationAutocomplete: {
        id: 'irrigationAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      weedImport: {
        id: 'weedImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      weedCreate: {
        id: 'weedCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      weedEdit: {
        id: 'weedEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      weedDestroy: {
        id: 'weedDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      weedRead: {
        id: 'weedRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      weedAutocomplete: {
        id: 'weedAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      herbicideImport: {
        id: 'herbicideImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      herbicideCreate: {
        id: 'herbicideCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      herbicideEdit: {
        id: 'herbicideEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      herbicideDestroy: {
        id: 'herbicideDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      herbicideRead: {
        id: 'herbicideRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      herbicideAutocomplete: {
        id: 'herbicideAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      insectImport: {
        id: 'insectImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      insectCreate: {
        id: 'insectCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insectEdit: {
        id: 'insectEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insectDestroy: {
        id: 'insectDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insectRead: {
        id: 'insectRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      insectAutocomplete: {
        id: 'insectAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      insecticideImport: {
        id: 'insecticideImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      insecticideCreate: {
        id: 'insecticideCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insecticideEdit: {
        id: 'insecticideEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insecticideDestroy: {
        id: 'insecticideDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      insecticideRead: {
        id: 'insecticideRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      insecticideAutocomplete: {
        id: 'insecticideAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      pestImport: {
        id: 'pestImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pestCreate: {
        id: 'pestCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pestEdit: {
        id: 'pestEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pestDestroy: {
        id: 'pestDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pestRead: {
        id: 'pestRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pestAutocomplete: {
        id: 'pestAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      pesticideImport: {
        id: 'pesticideImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pesticideCreate: {
        id: 'pesticideCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pesticideEdit: {
        id: 'pesticideEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pesticideDestroy: {
        id: 'pesticideDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pesticideRead: {
        id: 'pesticideRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pesticideAutocomplete: {
        id: 'pesticideAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      soilImport: {
        id: 'soilImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      soilCreate: {
        id: 'soilCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      soilEdit: {
        id: 'soilEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      soilDestroy: {
        id: 'soilDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      soilRead: {
        id: 'soilRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      soilAutocomplete: {
        id: 'soilAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      diseaseImport: {
        id: 'diseaseImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      diseaseCreate: {
        id: 'diseaseCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      diseaseEdit: {
        id: 'diseaseEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      diseaseDestroy: {
        id: 'diseaseDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      diseaseRead: {
        id: 'diseaseRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      diseaseAutocomplete: {
        id: 'diseaseAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      fertilizerImport: {
        id: 'fertilizerImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      fertilizerCreate: {
        id: 'fertilizerCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      fertilizerEdit: {
        id: 'fertilizerEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      fertilizerDestroy: {
        id: 'fertilizerDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      fertilizerRead: {
        id: 'fertilizerRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      fertilizerAutocomplete: {
        id: 'fertilizerAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      organicFertilizerImport: {
        id: 'organicFertilizerImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      organicFertilizerCreate: {
        id: 'organicFertilizerCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      organicFertilizerEdit: {
        id: 'organicFertilizerEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      organicFertilizerDestroy: {
        id: 'organicFertilizerDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      organicFertilizerRead: {
        id: 'organicFertilizerRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      organicFertilizerAutocomplete: {
        id: 'organicFertilizerAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      harvestImport: {
        id: 'harvestImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      harvestCreate: {
        id: 'harvestCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      harvestEdit: {
        id: 'harvestEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      harvestDestroy: {
        id: 'harvestDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      harvestRead: {
        id: 'harvestRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      harvestAutocomplete: {
        id: 'harvestAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      rainwaterImport: {
        id: 'rainwaterImport',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      rainwaterCreate: {
        id: 'rainwaterCreate',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      rainwaterEdit: {
        id: 'rainwaterEdit',
        allowedRoles: [roles.admin, roles.farmer, roles.agent],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      rainwaterDestroy: {
        id: 'rainwaterDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      rainwaterRead: {
        id: 'rainwaterRead',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      rainwaterAutocomplete: {
        id: 'rainwaterAutocomplete',
        allowedRoles: [roles.admin, roles.farmer, roles.agent, roles.researcher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },      
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
