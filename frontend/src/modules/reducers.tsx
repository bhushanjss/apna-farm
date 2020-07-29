import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import person from 'src/modules/person/personReducers';
import location from 'src/modules/location/locationReducers';
import land from 'src/modules/land/landReducers';
import farmer from 'src/modules/farmer/farmerReducers';
import agent from 'src/modules/agent/agentReducers';
import question from 'src/modules/question/questionReducers';
import answer from 'src/modules/answer/answerReducers';
import crop from 'src/modules/crop/cropReducers';
import cropVariety from 'src/modules/cropVariety/cropVarietyReducers';
import plant from 'src/modules/plant/plantReducers';
import plantVariety from 'src/modules/plantVariety/plantVarietyReducers';
import farmingMethod from 'src/modules/farmingMethod/farmingMethodReducers';
import farming from 'src/modules/farming/farmingReducers';
import irrigation from 'src/modules/irrigation/irrigationReducers';
import weed from 'src/modules/weed/weedReducers';
import herbicide from 'src/modules/herbicide/herbicideReducers';
import insect from 'src/modules/insect/insectReducers';
import insecticide from 'src/modules/insecticide/insecticideReducers';
import pest from 'src/modules/pest/pestReducers';
import pesticide from 'src/modules/pesticide/pesticideReducers';
import soil from 'src/modules/soil/soilReducers';
import disease from 'src/modules/disease/diseaseReducers';
import fertilizer from 'src/modules/fertilizer/fertilizerReducers';
import organicFertilizer from 'src/modules/organicFertilizer/organicFertilizerReducers';
import harvest from 'src/modules/harvest/harvestReducers';
import rainwater from 'src/modules/rainwater/rainwaterReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    person,
    location,
    land,
    farmer,
    agent,
    question,
    answer,
    crop,
    cropVariety,
    plant,
    plantVariety,
    farmingMethod,
    farming,
    irrigation,
    weed,
    herbicide,
    insect,
    insecticide,
    pest,
    pesticide,
    soil,
    disease,
    fertilizer,
    organicFertilizer,
    harvest,
    rainwater,
  });
