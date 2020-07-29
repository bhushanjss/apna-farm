import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/person',
    permissionRequired: permissions.personRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.person.menu'),
  },

  {
    path: '/location',
    permissionRequired: permissions.locationRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.location.menu'),
  },

  {
    path: '/land',
    permissionRequired: permissions.landRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.land.menu'),
  },

  {
    path: '/farmer',
    permissionRequired: permissions.farmerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.farmer.menu'),
  },

  {
    path: '/agent',
    permissionRequired: permissions.agentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.agent.menu'),
  },

  {
    path: '/question',
    permissionRequired: permissions.questionRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.question.menu'),
  },

  {
    path: '/answer',
    permissionRequired: permissions.answerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.answer.menu'),
  },

  {
    path: '/crop',
    permissionRequired: permissions.cropRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.crop.menu'),
  },

  {
    path: '/crop-variety',
    permissionRequired: permissions.cropVarietyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.cropVariety.menu'),
  },

  {
    path: '/plant',
    permissionRequired: permissions.plantRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.plant.menu'),
  },

  {
    path: '/plant-variety',
    permissionRequired: permissions.plantVarietyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.plantVariety.menu'),
  },

  {
    path: '/farming-method',
    permissionRequired: permissions.farmingMethodRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.farmingMethod.menu'),
  },

  {
    path: '/farming',
    permissionRequired: permissions.farmingRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.farming.menu'),
  },

  {
    path: '/irrigation',
    permissionRequired: permissions.irrigationRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.irrigation.menu'),
  },

  {
    path: '/weed',
    permissionRequired: permissions.weedRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.weed.menu'),
  },

  {
    path: '/herbicide',
    permissionRequired: permissions.herbicideRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.herbicide.menu'),
  },

  {
    path: '/insect',
    permissionRequired: permissions.insectRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.insect.menu'),
  },

  {
    path: '/insecticide',
    permissionRequired: permissions.insecticideRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.insecticide.menu'),
  },

  {
    path: '/pest',
    permissionRequired: permissions.pestRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.pest.menu'),
  },

  {
    path: '/pesticide',
    permissionRequired: permissions.pesticideRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.pesticide.menu'),
  },

  {
    path: '/soil',
    permissionRequired: permissions.soilRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.soil.menu'),
  },

  {
    path: '/disease',
    permissionRequired: permissions.diseaseRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.disease.menu'),
  },

  {
    path: '/fertilizer',
    permissionRequired: permissions.fertilizerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.fertilizer.menu'),
  },

  {
    path: '/organic-fertilizer',
    permissionRequired: permissions.organicFertilizerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.organicFertilizer.menu'),
  },

  {
    path: '/harvest',
    permissionRequired: permissions.harvestRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.harvest.menu'),
  },

  {
    path: '/rainwater',
    permissionRequired: permissions.rainwaterRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.rainwater.menu'),
  },
].filter(Boolean);
