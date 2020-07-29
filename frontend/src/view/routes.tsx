import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/person',
    loader: () =>
      import('src/view/person/list/PersonListPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },
  {
    path: '/person/new',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personCreate,
    exact: true,
  },
  {
    path: '/person/importer',
    loader: () =>
      import(
        'src/view/person/importer/PersonImporterPage'
      ),
    permissionRequired: permissions.personImport,
    exact: true,
  },
  {
    path: '/person/:id/edit',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personEdit,
    exact: true,
  },
  {
    path: '/person/:id',
    loader: () =>
      import('src/view/person/view/PersonViewPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },

  {
    path: '/location',
    loader: () =>
      import('src/view/location/list/LocationListPage'),
    permissionRequired: permissions.locationRead,
    exact: true,
  },
  {
    path: '/location/new',
    loader: () =>
      import('src/view/location/form/LocationFormPage'),
    permissionRequired: permissions.locationCreate,
    exact: true,
  },
  {
    path: '/location/importer',
    loader: () =>
      import(
        'src/view/location/importer/LocationImporterPage'
      ),
    permissionRequired: permissions.locationImport,
    exact: true,
  },
  {
    path: '/location/:id/edit',
    loader: () =>
      import('src/view/location/form/LocationFormPage'),
    permissionRequired: permissions.locationEdit,
    exact: true,
  },
  {
    path: '/location/:id',
    loader: () =>
      import('src/view/location/view/LocationViewPage'),
    permissionRequired: permissions.locationRead,
    exact: true,
  },

  {
    path: '/land',
    loader: () =>
      import('src/view/land/list/LandListPage'),
    permissionRequired: permissions.landRead,
    exact: true,
  },
  {
    path: '/land/new',
    loader: () =>
      import('src/view/land/form/LandFormPage'),
    permissionRequired: permissions.landCreate,
    exact: true,
  },
  {
    path: '/land/importer',
    loader: () =>
      import(
        'src/view/land/importer/LandImporterPage'
      ),
    permissionRequired: permissions.landImport,
    exact: true,
  },
  {
    path: '/land/:id/edit',
    loader: () =>
      import('src/view/land/form/LandFormPage'),
    permissionRequired: permissions.landEdit,
    exact: true,
  },
  {
    path: '/land/:id',
    loader: () =>
      import('src/view/land/view/LandViewPage'),
    permissionRequired: permissions.landRead,
    exact: true,
  },

  {
    path: '/farmer',
    loader: () =>
      import('src/view/farmer/list/FarmerListPage'),
    permissionRequired: permissions.farmerRead,
    exact: true,
  },
  {
    path: '/farmer/new',
    loader: () =>
      import('src/view/farmer/form/FarmerFormPage'),
    permissionRequired: permissions.farmerCreate,
    exact: true,
  },
  {
    path: '/farmer/importer',
    loader: () =>
      import(
        'src/view/farmer/importer/FarmerImporterPage'
      ),
    permissionRequired: permissions.farmerImport,
    exact: true,
  },
  {
    path: '/farmer/:id/edit',
    loader: () =>
      import('src/view/farmer/form/FarmerFormPage'),
    permissionRequired: permissions.farmerEdit,
    exact: true,
  },
  {
    path: '/farmer/:id',
    loader: () =>
      import('src/view/farmer/view/FarmerViewPage'),
    permissionRequired: permissions.farmerRead,
    exact: true,
  },

  {
    path: '/agent',
    loader: () =>
      import('src/view/agent/list/AgentListPage'),
    permissionRequired: permissions.agentRead,
    exact: true,
  },
  {
    path: '/agent/new',
    loader: () =>
      import('src/view/agent/form/AgentFormPage'),
    permissionRequired: permissions.agentCreate,
    exact: true,
  },
  {
    path: '/agent/importer',
    loader: () =>
      import(
        'src/view/agent/importer/AgentImporterPage'
      ),
    permissionRequired: permissions.agentImport,
    exact: true,
  },
  {
    path: '/agent/:id/edit',
    loader: () =>
      import('src/view/agent/form/AgentFormPage'),
    permissionRequired: permissions.agentEdit,
    exact: true,
  },
  {
    path: '/agent/:id',
    loader: () =>
      import('src/view/agent/view/AgentViewPage'),
    permissionRequired: permissions.agentRead,
    exact: true,
  },

  {
    path: '/question',
    loader: () =>
      import('src/view/question/list/QuestionListPage'),
    permissionRequired: permissions.questionRead,
    exact: true,
  },
  {
    path: '/question/new',
    loader: () =>
      import('src/view/question/form/QuestionFormPage'),
    permissionRequired: permissions.questionCreate,
    exact: true,
  },
  {
    path: '/question/importer',
    loader: () =>
      import(
        'src/view/question/importer/QuestionImporterPage'
      ),
    permissionRequired: permissions.questionImport,
    exact: true,
  },
  {
    path: '/question/:id/edit',
    loader: () =>
      import('src/view/question/form/QuestionFormPage'),
    permissionRequired: permissions.questionEdit,
    exact: true,
  },
  {
    path: '/question/:id',
    loader: () =>
      import('src/view/question/view/QuestionViewPage'),
    permissionRequired: permissions.questionRead,
    exact: true,
  },

  {
    path: '/answer',
    loader: () =>
      import('src/view/answer/list/AnswerListPage'),
    permissionRequired: permissions.answerRead,
    exact: true,
  },
  {
    path: '/answer/new',
    loader: () =>
      import('src/view/answer/form/AnswerFormPage'),
    permissionRequired: permissions.answerCreate,
    exact: true,
  },
  {
    path: '/answer/importer',
    loader: () =>
      import(
        'src/view/answer/importer/AnswerImporterPage'
      ),
    permissionRequired: permissions.answerImport,
    exact: true,
  },
  {
    path: '/answer/:id/edit',
    loader: () =>
      import('src/view/answer/form/AnswerFormPage'),
    permissionRequired: permissions.answerEdit,
    exact: true,
  },
  {
    path: '/answer/:id',
    loader: () =>
      import('src/view/answer/view/AnswerViewPage'),
    permissionRequired: permissions.answerRead,
    exact: true,
  },

  {
    path: '/crop',
    loader: () =>
      import('src/view/crop/list/CropListPage'),
    permissionRequired: permissions.cropRead,
    exact: true,
  },
  {
    path: '/crop/new',
    loader: () =>
      import('src/view/crop/form/CropFormPage'),
    permissionRequired: permissions.cropCreate,
    exact: true,
  },
  {
    path: '/crop/importer',
    loader: () =>
      import(
        'src/view/crop/importer/CropImporterPage'
      ),
    permissionRequired: permissions.cropImport,
    exact: true,
  },
  {
    path: '/crop/:id/edit',
    loader: () =>
      import('src/view/crop/form/CropFormPage'),
    permissionRequired: permissions.cropEdit,
    exact: true,
  },
  {
    path: '/crop/:id',
    loader: () =>
      import('src/view/crop/view/CropViewPage'),
    permissionRequired: permissions.cropRead,
    exact: true,
  },

  {
    path: '/crop-variety',
    loader: () =>
      import('src/view/cropVariety/list/CropVarietyListPage'),
    permissionRequired: permissions.cropVarietyRead,
    exact: true,
  },
  {
    path: '/crop-variety/new',
    loader: () =>
      import('src/view/cropVariety/form/CropVarietyFormPage'),
    permissionRequired: permissions.cropVarietyCreate,
    exact: true,
  },
  {
    path: '/crop-variety/importer',
    loader: () =>
      import(
        'src/view/cropVariety/importer/CropVarietyImporterPage'
      ),
    permissionRequired: permissions.cropVarietyImport,
    exact: true,
  },
  {
    path: '/crop-variety/:id/edit',
    loader: () =>
      import('src/view/cropVariety/form/CropVarietyFormPage'),
    permissionRequired: permissions.cropVarietyEdit,
    exact: true,
  },
  {
    path: '/crop-variety/:id',
    loader: () =>
      import('src/view/cropVariety/view/CropVarietyViewPage'),
    permissionRequired: permissions.cropVarietyRead,
    exact: true,
  },

  {
    path: '/plant',
    loader: () =>
      import('src/view/plant/list/PlantListPage'),
    permissionRequired: permissions.plantRead,
    exact: true,
  },
  {
    path: '/plant/new',
    loader: () =>
      import('src/view/plant/form/PlantFormPage'),
    permissionRequired: permissions.plantCreate,
    exact: true,
  },
  {
    path: '/plant/importer',
    loader: () =>
      import(
        'src/view/plant/importer/PlantImporterPage'
      ),
    permissionRequired: permissions.plantImport,
    exact: true,
  },
  {
    path: '/plant/:id/edit',
    loader: () =>
      import('src/view/plant/form/PlantFormPage'),
    permissionRequired: permissions.plantEdit,
    exact: true,
  },
  {
    path: '/plant/:id',
    loader: () =>
      import('src/view/plant/view/PlantViewPage'),
    permissionRequired: permissions.plantRead,
    exact: true,
  },

  {
    path: '/plant-variety',
    loader: () =>
      import('src/view/plantVariety/list/PlantVarietyListPage'),
    permissionRequired: permissions.plantVarietyRead,
    exact: true,
  },
  {
    path: '/plant-variety/new',
    loader: () =>
      import('src/view/plantVariety/form/PlantVarietyFormPage'),
    permissionRequired: permissions.plantVarietyCreate,
    exact: true,
  },
  {
    path: '/plant-variety/importer',
    loader: () =>
      import(
        'src/view/plantVariety/importer/PlantVarietyImporterPage'
      ),
    permissionRequired: permissions.plantVarietyImport,
    exact: true,
  },
  {
    path: '/plant-variety/:id/edit',
    loader: () =>
      import('src/view/plantVariety/form/PlantVarietyFormPage'),
    permissionRequired: permissions.plantVarietyEdit,
    exact: true,
  },
  {
    path: '/plant-variety/:id',
    loader: () =>
      import('src/view/plantVariety/view/PlantVarietyViewPage'),
    permissionRequired: permissions.plantVarietyRead,
    exact: true,
  },

  {
    path: '/farming-method',
    loader: () =>
      import('src/view/farmingMethod/list/FarmingMethodListPage'),
    permissionRequired: permissions.farmingMethodRead,
    exact: true,
  },
  {
    path: '/farming-method/new',
    loader: () =>
      import('src/view/farmingMethod/form/FarmingMethodFormPage'),
    permissionRequired: permissions.farmingMethodCreate,
    exact: true,
  },
  {
    path: '/farming-method/importer',
    loader: () =>
      import(
        'src/view/farmingMethod/importer/FarmingMethodImporterPage'
      ),
    permissionRequired: permissions.farmingMethodImport,
    exact: true,
  },
  {
    path: '/farming-method/:id/edit',
    loader: () =>
      import('src/view/farmingMethod/form/FarmingMethodFormPage'),
    permissionRequired: permissions.farmingMethodEdit,
    exact: true,
  },
  {
    path: '/farming-method/:id',
    loader: () =>
      import('src/view/farmingMethod/view/FarmingMethodViewPage'),
    permissionRequired: permissions.farmingMethodRead,
    exact: true,
  },

  {
    path: '/farming',
    loader: () =>
      import('src/view/farming/list/FarmingListPage'),
    permissionRequired: permissions.farmingRead,
    exact: true,
  },
  {
    path: '/farming/new',
    loader: () =>
      import('src/view/farming/form/FarmingFormPage'),
    permissionRequired: permissions.farmingCreate,
    exact: true,
  },
  {
    path: '/farming/importer',
    loader: () =>
      import(
        'src/view/farming/importer/FarmingImporterPage'
      ),
    permissionRequired: permissions.farmingImport,
    exact: true,
  },
  {
    path: '/farming/:id/edit',
    loader: () =>
      import('src/view/farming/form/FarmingFormPage'),
    permissionRequired: permissions.farmingEdit,
    exact: true,
  },
  {
    path: '/farming/:id',
    loader: () =>
      import('src/view/farming/view/FarmingViewPage'),
    permissionRequired: permissions.farmingRead,
    exact: true,
  },

  {
    path: '/irrigation',
    loader: () =>
      import('src/view/irrigation/list/IrrigationListPage'),
    permissionRequired: permissions.irrigationRead,
    exact: true,
  },
  {
    path: '/irrigation/new',
    loader: () =>
      import('src/view/irrigation/form/IrrigationFormPage'),
    permissionRequired: permissions.irrigationCreate,
    exact: true,
  },
  {
    path: '/irrigation/importer',
    loader: () =>
      import(
        'src/view/irrigation/importer/IrrigationImporterPage'
      ),
    permissionRequired: permissions.irrigationImport,
    exact: true,
  },
  {
    path: '/irrigation/:id/edit',
    loader: () =>
      import('src/view/irrigation/form/IrrigationFormPage'),
    permissionRequired: permissions.irrigationEdit,
    exact: true,
  },
  {
    path: '/irrigation/:id',
    loader: () =>
      import('src/view/irrigation/view/IrrigationViewPage'),
    permissionRequired: permissions.irrigationRead,
    exact: true,
  },

  {
    path: '/weed',
    loader: () =>
      import('src/view/weed/list/WeedListPage'),
    permissionRequired: permissions.weedRead,
    exact: true,
  },
  {
    path: '/weed/new',
    loader: () =>
      import('src/view/weed/form/WeedFormPage'),
    permissionRequired: permissions.weedCreate,
    exact: true,
  },
  {
    path: '/weed/importer',
    loader: () =>
      import(
        'src/view/weed/importer/WeedImporterPage'
      ),
    permissionRequired: permissions.weedImport,
    exact: true,
  },
  {
    path: '/weed/:id/edit',
    loader: () =>
      import('src/view/weed/form/WeedFormPage'),
    permissionRequired: permissions.weedEdit,
    exact: true,
  },
  {
    path: '/weed/:id',
    loader: () =>
      import('src/view/weed/view/WeedViewPage'),
    permissionRequired: permissions.weedRead,
    exact: true,
  },

  {
    path: '/herbicide',
    loader: () =>
      import('src/view/herbicide/list/HerbicideListPage'),
    permissionRequired: permissions.herbicideRead,
    exact: true,
  },
  {
    path: '/herbicide/new',
    loader: () =>
      import('src/view/herbicide/form/HerbicideFormPage'),
    permissionRequired: permissions.herbicideCreate,
    exact: true,
  },
  {
    path: '/herbicide/importer',
    loader: () =>
      import(
        'src/view/herbicide/importer/HerbicideImporterPage'
      ),
    permissionRequired: permissions.herbicideImport,
    exact: true,
  },
  {
    path: '/herbicide/:id/edit',
    loader: () =>
      import('src/view/herbicide/form/HerbicideFormPage'),
    permissionRequired: permissions.herbicideEdit,
    exact: true,
  },
  {
    path: '/herbicide/:id',
    loader: () =>
      import('src/view/herbicide/view/HerbicideViewPage'),
    permissionRequired: permissions.herbicideRead,
    exact: true,
  },

  {
    path: '/insect',
    loader: () =>
      import('src/view/insect/list/InsectListPage'),
    permissionRequired: permissions.insectRead,
    exact: true,
  },
  {
    path: '/insect/new',
    loader: () =>
      import('src/view/insect/form/InsectFormPage'),
    permissionRequired: permissions.insectCreate,
    exact: true,
  },
  {
    path: '/insect/importer',
    loader: () =>
      import(
        'src/view/insect/importer/InsectImporterPage'
      ),
    permissionRequired: permissions.insectImport,
    exact: true,
  },
  {
    path: '/insect/:id/edit',
    loader: () =>
      import('src/view/insect/form/InsectFormPage'),
    permissionRequired: permissions.insectEdit,
    exact: true,
  },
  {
    path: '/insect/:id',
    loader: () =>
      import('src/view/insect/view/InsectViewPage'),
    permissionRequired: permissions.insectRead,
    exact: true,
  },

  {
    path: '/insecticide',
    loader: () =>
      import('src/view/insecticide/list/InsecticideListPage'),
    permissionRequired: permissions.insecticideRead,
    exact: true,
  },
  {
    path: '/insecticide/new',
    loader: () =>
      import('src/view/insecticide/form/InsecticideFormPage'),
    permissionRequired: permissions.insecticideCreate,
    exact: true,
  },
  {
    path: '/insecticide/importer',
    loader: () =>
      import(
        'src/view/insecticide/importer/InsecticideImporterPage'
      ),
    permissionRequired: permissions.insecticideImport,
    exact: true,
  },
  {
    path: '/insecticide/:id/edit',
    loader: () =>
      import('src/view/insecticide/form/InsecticideFormPage'),
    permissionRequired: permissions.insecticideEdit,
    exact: true,
  },
  {
    path: '/insecticide/:id',
    loader: () =>
      import('src/view/insecticide/view/InsecticideViewPage'),
    permissionRequired: permissions.insecticideRead,
    exact: true,
  },

  {
    path: '/pest',
    loader: () =>
      import('src/view/pest/list/PestListPage'),
    permissionRequired: permissions.pestRead,
    exact: true,
  },
  {
    path: '/pest/new',
    loader: () =>
      import('src/view/pest/form/PestFormPage'),
    permissionRequired: permissions.pestCreate,
    exact: true,
  },
  {
    path: '/pest/importer',
    loader: () =>
      import(
        'src/view/pest/importer/PestImporterPage'
      ),
    permissionRequired: permissions.pestImport,
    exact: true,
  },
  {
    path: '/pest/:id/edit',
    loader: () =>
      import('src/view/pest/form/PestFormPage'),
    permissionRequired: permissions.pestEdit,
    exact: true,
  },
  {
    path: '/pest/:id',
    loader: () =>
      import('src/view/pest/view/PestViewPage'),
    permissionRequired: permissions.pestRead,
    exact: true,
  },

  {
    path: '/pesticide',
    loader: () =>
      import('src/view/pesticide/list/PesticideListPage'),
    permissionRequired: permissions.pesticideRead,
    exact: true,
  },
  {
    path: '/pesticide/new',
    loader: () =>
      import('src/view/pesticide/form/PesticideFormPage'),
    permissionRequired: permissions.pesticideCreate,
    exact: true,
  },
  {
    path: '/pesticide/importer',
    loader: () =>
      import(
        'src/view/pesticide/importer/PesticideImporterPage'
      ),
    permissionRequired: permissions.pesticideImport,
    exact: true,
  },
  {
    path: '/pesticide/:id/edit',
    loader: () =>
      import('src/view/pesticide/form/PesticideFormPage'),
    permissionRequired: permissions.pesticideEdit,
    exact: true,
  },
  {
    path: '/pesticide/:id',
    loader: () =>
      import('src/view/pesticide/view/PesticideViewPage'),
    permissionRequired: permissions.pesticideRead,
    exact: true,
  },

  {
    path: '/soil',
    loader: () =>
      import('src/view/soil/list/SoilListPage'),
    permissionRequired: permissions.soilRead,
    exact: true,
  },
  {
    path: '/soil/new',
    loader: () =>
      import('src/view/soil/form/SoilFormPage'),
    permissionRequired: permissions.soilCreate,
    exact: true,
  },
  {
    path: '/soil/importer',
    loader: () =>
      import(
        'src/view/soil/importer/SoilImporterPage'
      ),
    permissionRequired: permissions.soilImport,
    exact: true,
  },
  {
    path: '/soil/:id/edit',
    loader: () =>
      import('src/view/soil/form/SoilFormPage'),
    permissionRequired: permissions.soilEdit,
    exact: true,
  },
  {
    path: '/soil/:id',
    loader: () =>
      import('src/view/soil/view/SoilViewPage'),
    permissionRequired: permissions.soilRead,
    exact: true,
  },

  {
    path: '/disease',
    loader: () =>
      import('src/view/disease/list/DiseaseListPage'),
    permissionRequired: permissions.diseaseRead,
    exact: true,
  },
  {
    path: '/disease/new',
    loader: () =>
      import('src/view/disease/form/DiseaseFormPage'),
    permissionRequired: permissions.diseaseCreate,
    exact: true,
  },
  {
    path: '/disease/importer',
    loader: () =>
      import(
        'src/view/disease/importer/DiseaseImporterPage'
      ),
    permissionRequired: permissions.diseaseImport,
    exact: true,
  },
  {
    path: '/disease/:id/edit',
    loader: () =>
      import('src/view/disease/form/DiseaseFormPage'),
    permissionRequired: permissions.diseaseEdit,
    exact: true,
  },
  {
    path: '/disease/:id',
    loader: () =>
      import('src/view/disease/view/DiseaseViewPage'),
    permissionRequired: permissions.diseaseRead,
    exact: true,
  },

  {
    path: '/fertilizer',
    loader: () =>
      import('src/view/fertilizer/list/FertilizerListPage'),
    permissionRequired: permissions.fertilizerRead,
    exact: true,
  },
  {
    path: '/fertilizer/new',
    loader: () =>
      import('src/view/fertilizer/form/FertilizerFormPage'),
    permissionRequired: permissions.fertilizerCreate,
    exact: true,
  },
  {
    path: '/fertilizer/importer',
    loader: () =>
      import(
        'src/view/fertilizer/importer/FertilizerImporterPage'
      ),
    permissionRequired: permissions.fertilizerImport,
    exact: true,
  },
  {
    path: '/fertilizer/:id/edit',
    loader: () =>
      import('src/view/fertilizer/form/FertilizerFormPage'),
    permissionRequired: permissions.fertilizerEdit,
    exact: true,
  },
  {
    path: '/fertilizer/:id',
    loader: () =>
      import('src/view/fertilizer/view/FertilizerViewPage'),
    permissionRequired: permissions.fertilizerRead,
    exact: true,
  },

  {
    path: '/organic-fertilizer',
    loader: () =>
      import('src/view/organicFertilizer/list/OrganicFertilizerListPage'),
    permissionRequired: permissions.organicFertilizerRead,
    exact: true,
  },
  {
    path: '/organic-fertilizer/new',
    loader: () =>
      import('src/view/organicFertilizer/form/OrganicFertilizerFormPage'),
    permissionRequired: permissions.organicFertilizerCreate,
    exact: true,
  },
  {
    path: '/organic-fertilizer/importer',
    loader: () =>
      import(
        'src/view/organicFertilizer/importer/OrganicFertilizerImporterPage'
      ),
    permissionRequired: permissions.organicFertilizerImport,
    exact: true,
  },
  {
    path: '/organic-fertilizer/:id/edit',
    loader: () =>
      import('src/view/organicFertilizer/form/OrganicFertilizerFormPage'),
    permissionRequired: permissions.organicFertilizerEdit,
    exact: true,
  },
  {
    path: '/organic-fertilizer/:id',
    loader: () =>
      import('src/view/organicFertilizer/view/OrganicFertilizerViewPage'),
    permissionRequired: permissions.organicFertilizerRead,
    exact: true,
  },

  {
    path: '/harvest',
    loader: () =>
      import('src/view/harvest/list/HarvestListPage'),
    permissionRequired: permissions.harvestRead,
    exact: true,
  },
  {
    path: '/harvest/new',
    loader: () =>
      import('src/view/harvest/form/HarvestFormPage'),
    permissionRequired: permissions.harvestCreate,
    exact: true,
  },
  {
    path: '/harvest/importer',
    loader: () =>
      import(
        'src/view/harvest/importer/HarvestImporterPage'
      ),
    permissionRequired: permissions.harvestImport,
    exact: true,
  },
  {
    path: '/harvest/:id/edit',
    loader: () =>
      import('src/view/harvest/form/HarvestFormPage'),
    permissionRequired: permissions.harvestEdit,
    exact: true,
  },
  {
    path: '/harvest/:id',
    loader: () =>
      import('src/view/harvest/view/HarvestViewPage'),
    permissionRequired: permissions.harvestRead,
    exact: true,
  },

  {
    path: '/rainwater',
    loader: () =>
      import('src/view/rainwater/list/RainwaterListPage'),
    permissionRequired: permissions.rainwaterRead,
    exact: true,
  },
  {
    path: '/rainwater/new',
    loader: () =>
      import('src/view/rainwater/form/RainwaterFormPage'),
    permissionRequired: permissions.rainwaterCreate,
    exact: true,
  },
  {
    path: '/rainwater/importer',
    loader: () =>
      import(
        'src/view/rainwater/importer/RainwaterImporterPage'
      ),
    permissionRequired: permissions.rainwaterImport,
    exact: true,
  },
  {
    path: '/rainwater/:id/edit',
    loader: () =>
      import('src/view/rainwater/form/RainwaterFormPage'),
    permissionRequired: permissions.rainwaterEdit,
    exact: true,
  },
  {
    path: '/rainwater/:id',
    loader: () =>
      import('src/view/rainwater/view/RainwaterViewPage'),
    permissionRequired: permissions.rainwaterRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
