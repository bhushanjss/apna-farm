const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
  },

  app: {
    title: 'Application',
  },

  entities: {
    person: {
        name: 'person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'person_export',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person successfully saved',
        },
        update: {
          success: 'Person successfully saved',
        },
        destroy: {
          success: 'Person successfully deleted',
        },
        destroyAll: {
          success: 'Person(s) successfully deleted',
        },
        edit: {
          title: 'Edit Person',
        },
        fields: {
          id: 'Id',
          'personIdRange': 'PersonId',
          'personId': 'PersonId',
          'firstName': 'First Name',
          'lastName': 'Last Name',
          'gender': 'Gender',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'phoneNumber': 'Phone Number',
          'location': 'Location',
          'email': 'Email',
          'active': 'Active',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        new: {
          title: 'New Person',
        },
        view: {
          title: 'View Person',
        },
        importer: {
          title: 'Import People',
          fileName: 'person_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    location: {
        name: 'location',
        label: 'Locations',
        menu: 'Locations',
        exporterFileName: 'location_export',
        list: {
          menu: 'Locations',
          title: 'Locations',
        },
        create: {
          success: 'Location successfully saved',
        },
        update: {
          success: 'Location successfully saved',
        },
        destroy: {
          success: 'Location successfully deleted',
        },
        destroyAll: {
          success: 'Location(s) successfully deleted',
        },
        edit: {
          title: 'Edit Location',
        },
        fields: {
          id: 'Id',
          'state': 'State',
          'district': 'District',
          'tehsil': 'Tehsil',
          'village': 'Village',
          'coords': 'Coords',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Location',
        },
        view: {
          title: 'View Location',
        },
        importer: {
          title: 'Import Locations',
          fileName: 'location_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    land: {
        name: 'land',
        label: 'Lands',
        menu: 'Lands',
        exporterFileName: 'land_export',
        list: {
          menu: 'Lands',
          title: 'Lands',
        },
        create: {
          success: 'Land successfully saved',
        },
        update: {
          success: 'Land successfully saved',
        },
        destroy: {
          success: 'Land successfully deleted',
        },
        destroyAll: {
          success: 'Land(s) successfully deleted',
        },
        edit: {
          title: 'Edit Land',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          'areaRange': 'Area',
          'area': 'Area',
          'farmer': 'Farmer',
          'groundwaterAvailable': 'Groundwater Available',
          'groundwaterDepthRange': 'Groundwater Depth',
          'groundwaterDepth': 'Groundwater Depth',
          'canalAccess': 'Canal Access',
          'waterAcidity': 'WaterAcidity',
          'downpour': 'Downpour',
          'downpourRate': 'Downpour Rate',
          'hailstorm': 'Hailstorm',
          'flood': 'Flood',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Land',
        },
        view: {
          title: 'View Land',
        },
        importer: {
          title: 'Import Lands',
          fileName: 'land_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    farmer: {
        name: 'farmer',
        label: 'Farmers',
        menu: 'Farmers',
        exporterFileName: 'farmer_export',
        list: {
          menu: 'Farmers',
          title: 'Farmers',
        },
        create: {
          success: 'Farmer successfully saved',
        },
        update: {
          success: 'Farmer successfully saved',
        },
        destroy: {
          success: 'Farmer successfully deleted',
        },
        destroyAll: {
          success: 'Farmer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Farmer',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'agent': 'Agent',
          'area': 'Area',
          'lands': 'Lands',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Farmer',
        },
        view: {
          title: 'View Farmer',
        },
        importer: {
          title: 'Import Farmers',
          fileName: 'farmer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    agent: {
        name: 'agent',
        label: 'Agents',
        menu: 'Agents',
        exporterFileName: 'agent_export',
        list: {
          menu: 'Agents',
          title: 'Agents',
        },
        create: {
          success: 'Agent successfully saved',
        },
        update: {
          success: 'Agent successfully saved',
        },
        destroy: {
          success: 'Agent successfully deleted',
        },
        destroyAll: {
          success: 'Agent(s) successfully deleted',
        },
        edit: {
          title: 'Edit Agent',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'farmers': 'Farmers',
          'locations': 'Locations',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Agent',
        },
        view: {
          title: 'View Agent',
        },
        importer: {
          title: 'Import Agents',
          fileName: 'agent_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    question: {
        name: 'question',
        label: 'Questions',
        menu: 'Questions',
        exporterFileName: 'question_export',
        list: {
          menu: 'Questions',
          title: 'Questions',
        },
        create: {
          success: 'Question successfully saved',
        },
        update: {
          success: 'Question successfully saved',
        },
        destroy: {
          success: 'Question successfully deleted',
        },
        destroyAll: {
          success: 'Question(s) successfully deleted',
        },
        edit: {
          title: 'Edit Question',
        },
        fields: {
          id: 'Id',
          'question': 'Question',
          'priorityRange': 'Priority',
          'priority': 'Priority',
          'remark': 'Remark',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Question',
        },
        view: {
          title: 'View Question',
        },
        importer: {
          title: 'Import Questions',
          fileName: 'question_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    answer: {
        name: 'answer',
        label: 'Answers',
        menu: 'Answers',
        exporterFileName: 'answer_export',
        list: {
          menu: 'Answers',
          title: 'Answers',
        },
        create: {
          success: 'Answer successfully saved',
        },
        update: {
          success: 'Answer successfully saved',
        },
        destroy: {
          success: 'Answer successfully deleted',
        },
        destroyAll: {
          success: 'Answer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Answer',
        },
        fields: {
          id: 'Id',
          'farmer': 'Farmer',
          'question': 'Question',
          'answer': 'Answer',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Answer',
        },
        view: {
          title: 'View Answer',
        },
        importer: {
          title: 'Import Answers',
          fileName: 'answer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    crop: {
        name: 'crop',
        label: 'Crops',
        menu: 'Crops',
        exporterFileName: 'crop_export',
        list: {
          menu: 'Crops',
          title: 'Crops',
        },
        create: {
          success: 'Crop successfully saved',
        },
        update: {
          success: 'Crop successfully saved',
        },
        destroy: {
          success: 'Crop successfully deleted',
        },
        destroyAll: {
          success: 'Crop(s) successfully deleted',
        },
        edit: {
          title: 'Edit Crop',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'fertilizer': 'Fertilizer',
          'climate': 'Climate',
          'irrigationTimes': 'Irrigation Times',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'category': {
            'Cereals': 'Cereals',
            'Fibre': 'Fibre',
            'Fodder': 'Fodder',
            'Green_Manure': 'Green_Manure',
            'Oilseed': 'Oilseed',
            'Pulses': 'Pulses',
            'Sugarcane': 'Sugarcane',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Crop',
        },
        view: {
          title: 'View Crop',
        },
        importer: {
          title: 'Import Crops',
          fileName: 'crop_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    cropVariety: {
        name: 'cropVariety',
        label: 'Crop Varieties',
        menu: 'Crop Varieties',
        exporterFileName: 'cropVariety_export',
        list: {
          menu: 'Crop Varieties',
          title: 'Crop Varieties',
        },
        create: {
          success: 'Crop Variety successfully saved',
        },
        update: {
          success: 'Crop Variety successfully saved',
        },
        destroy: {
          success: 'Crop Variety successfully deleted',
        },
        destroyAll: {
          success: 'Crop Variety(s) successfully deleted',
        },
        edit: {
          title: 'Edit Crop Variety',
        },
        fields: {
          id: 'Id',
          'crop': 'Crop',
          'name': 'Name',
          'description': 'Description',
          'cropDurationRange': 'Crop Duration',
          'cropDuration': 'Crop Duration',
          'cropYieldRange': 'Crop Yield',
          'cropYield': 'Crop Yield',
          'seedRateRange': 'Seed Rate',
          'seedRate': 'Seed Rate',
          'seedPlantationTime': 'Seed Plantation Time',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Crop Variety',
        },
        view: {
          title: 'View Crop Variety',
        },
        importer: {
          title: 'Import Crop Varieties',
          fileName: 'cropVariety_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    plant: {
        name: 'plant',
        label: 'Plants',
        menu: 'Plants',
        exporterFileName: 'plant_export',
        list: {
          menu: 'Plants',
          title: 'Plants',
        },
        create: {
          success: 'Plant successfully saved',
        },
        update: {
          success: 'Plant successfully saved',
        },
        destroy: {
          success: 'Plant successfully deleted',
        },
        destroyAll: {
          success: 'Plant(s) successfully deleted',
        },
        edit: {
          title: 'Edit Plant',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'soilDescription': 'Soil Description',
          'climate': 'Climate',
          'fertilizer': 'Fertilizer',
          'irrigationTimes': 'IrrigationTimes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'category': {
            'Vegetable': 'Vegetable',
            'Fruit': 'Fruit',
            'Medicine': 'Medicine',
            'Spice': 'Spice',
            'Flower': 'Flower',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Plant',
        },
        view: {
          title: 'View Plant',
        },
        importer: {
          title: 'Import Plants',
          fileName: 'plant_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    plantVariety: {
        name: 'plantVariety',
        label: 'Plant Varieties',
        menu: 'Plant Varieties',
        exporterFileName: 'plantVariety_export',
        list: {
          menu: 'Plant Varieties',
          title: 'Plant Varieties',
        },
        create: {
          success: 'Plant Variety successfully saved',
        },
        update: {
          success: 'Plant Variety successfully saved',
        },
        destroy: {
          success: 'Plant Variety successfully deleted',
        },
        destroyAll: {
          success: 'Plant Variety(s) successfully deleted',
        },
        edit: {
          title: 'Edit Plant Variety',
        },
        fields: {
          id: 'Id',
          'plant': 'Plant',
          'name': 'Name',
          'description': 'Description',
          'durationRange': 'Duration',
          'duration': 'Duration',
          'plantYieldRange': 'Plant Yield',
          'plantYield': 'Plant Yield',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Plant Variety',
        },
        view: {
          title: 'View Plant Variety',
        },
        importer: {
          title: 'Import Plant Varieties',
          fileName: 'plantVariety_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    farmingMethod: {
        name: 'farmingMethod',
        label: 'Farming Methods',
        menu: 'Farming Methods',
        exporterFileName: 'farmingMethod_export',
        list: {
          menu: 'Farming Methods',
          title: 'Farming Methods',
        },
        create: {
          success: 'Farming Method successfully saved',
        },
        update: {
          success: 'Farming Method successfully saved',
        },
        destroy: {
          success: 'Farming Method successfully deleted',
        },
        destroyAll: {
          success: 'Farming Method(s) successfully deleted',
        },
        edit: {
          title: 'Edit Farming Method',
        },
        fields: {
          id: 'Id',
          'farmingType': 'Farming Type',
          'description': 'Description',
          'sowingMethod': 'Sowing Method',
          'crops': 'Crops',
          'plants': 'Plants',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'farmingType': {
            'Traditional': 'Traditional',
            'Modern': 'Modern',
          },
          'sowingMethod': {
            'Seed_Drill': 'Seed_Drill',
            'Broadcasting_Method': 'Broadcasting_Method',
            'Zero_Tillage_Drill': 'Zero_Tillage_Drill',
            'Rotavator': 'Rotavator',
            'Manual': 'Manual',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Farming Method',
        },
        view: {
          title: 'View Farming Method',
        },
        importer: {
          title: 'Import Farming Methods',
          fileName: 'farmingMethod_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    farming: {
        name: 'farming',
        label: 'Farmings',
        menu: 'Farmings',
        exporterFileName: 'farming_export',
        list: {
          menu: 'Farmings',
          title: 'Farmings',
        },
        create: {
          success: 'Farming successfully saved',
        },
        update: {
          success: 'Farming successfully saved',
        },
        destroy: {
          success: 'Farming successfully deleted',
        },
        destroyAll: {
          success: 'Farming(s) successfully deleted',
        },
        edit: {
          title: 'Edit Farming',
        },
        fields: {
          id: 'Id',
          'yearRange': 'Year',
          'year': 'Year',
          'season': 'Season',
          'farmer': 'Farmer',
          'land': 'Land',
          'plantType': 'Plant Type',
          'farmingMethod': 'Farming Method',
          'dateSownRange': 'Date Sown',
          'dateSown': 'Date Sown',
          'irrigations': 'Irrigations',
          'laborsRange': 'Labors',
          'labors': 'Labors',
          'mixedFarming': 'Mixed Farming',
          'cropRotation': 'Crop Rotation',
          'cropsRotated': 'Crops Rotated',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'season': {
            'Rabi': 'Rabi',
            'Kharif': 'Kharif',
            'Zaid': 'Zaid',
          },
          'plantType': {
            'Crop': 'Crop',
            'Plant': 'Plant',
          },
        },
        new: {
          title: 'New Farming',
        },
        view: {
          title: 'View Farming',
        },
        importer: {
          title: 'Import Farmings',
          fileName: 'farming_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    irrigation: {
        name: 'irrigation',
        label: 'Irrigations',
        menu: 'Irrigations',
        exporterFileName: 'irrigation_export',
        list: {
          menu: 'Irrigations',
          title: 'Irrigations',
        },
        create: {
          success: 'Irrigation successfully saved',
        },
        update: {
          success: 'Irrigation successfully saved',
        },
        destroy: {
          success: 'Irrigation successfully deleted',
        },
        destroyAll: {
          success: 'Irrigation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Irrigation',
        },
        fields: {
          id: 'Id',
          'land': 'Land',
          'source': 'Source',
          'hoursRange': 'Hours',
          'hours': 'Hours',
          'rateRange': 'Rate',
          'rate': 'Rate',
          'machine': 'Machine',
          'volumeRange': 'Volume',
          'volume': 'Volume',
          'startRange': 'Start',
          'start': 'Start',
          'endRange': 'End',
          'end': 'End',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'source': {
            'Groundwater': 'Groundwater',
            'Canal': 'Canal',
            'River': 'River',
            'Pond': 'Pond',
            'Lake': 'Lake',
          },
        },
        new: {
          title: 'New Irrigation',
        },
        view: {
          title: 'View Irrigation',
        },
        importer: {
          title: 'Import Irrigations',
          fileName: 'irrigation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    weed: {
        name: 'weed',
        label: 'Weeds',
        menu: 'Weeds',
        exporterFileName: 'weed_export',
        list: {
          menu: 'Weeds',
          title: 'Weeds',
        },
        create: {
          success: 'Weed successfully saved',
        },
        update: {
          success: 'Weed successfully saved',
        },
        destroy: {
          success: 'Weed successfully deleted',
        },
        destroyAll: {
          success: 'Weed(s) successfully deleted',
        },
        edit: {
          title: 'Edit Weed',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Weed',
        },
        view: {
          title: 'View Weed',
        },
        importer: {
          title: 'Import Weeds',
          fileName: 'weed_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    herbicide: {
        name: 'herbicide',
        label: 'Herbicides',
        menu: 'Herbicides',
        exporterFileName: 'herbicide_export',
        list: {
          menu: 'Herbicides',
          title: 'Herbicides',
        },
        create: {
          success: 'Herbicide successfully saved',
        },
        update: {
          success: 'Herbicide successfully saved',
        },
        destroy: {
          success: 'Herbicide successfully deleted',
        },
        destroyAll: {
          success: 'Herbicide(s) successfully deleted',
        },
        edit: {
          title: 'Edit Herbicide',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'type': 'Type',
          'description': 'Description',
          'materials': 'Materials',
          'weeds': 'Weeds',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Herbicide',
        },
        view: {
          title: 'View Herbicide',
        },
        importer: {
          title: 'Import Herbicides',
          fileName: 'herbicide_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    insect: {
        name: 'insect',
        label: 'Insects',
        menu: 'Insects',
        exporterFileName: 'insect_export',
        list: {
          menu: 'Insects',
          title: 'Insects',
        },
        create: {
          success: 'Insect successfully saved',
        },
        update: {
          success: 'Insect successfully saved',
        },
        destroy: {
          success: 'Insect successfully deleted',
        },
        destroyAll: {
          success: 'Insect(s) successfully deleted',
        },
        edit: {
          title: 'Edit Insect',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Insect',
        },
        view: {
          title: 'View Insect',
        },
        importer: {
          title: 'Import Insects',
          fileName: 'insect_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    insecticide: {
        name: 'insecticide',
        label: 'Insecticides',
        menu: 'Insecticides',
        exporterFileName: 'insecticide_export',
        list: {
          menu: 'Insecticides',
          title: 'Insecticides',
        },
        create: {
          success: 'Insecticide successfully saved',
        },
        update: {
          success: 'Insecticide successfully saved',
        },
        destroy: {
          success: 'Insecticide successfully deleted',
        },
        destroyAll: {
          success: 'Insecticide(s) successfully deleted',
        },
        edit: {
          title: 'Edit Insecticide',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'type': 'Type',
          'description': 'Description',
          'materials': 'Materials',
          'insects': 'Insects',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Insecticide',
        },
        view: {
          title: 'View Insecticide',
        },
        importer: {
          title: 'Import Insecticides',
          fileName: 'insecticide_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    pest: {
        name: 'pest',
        label: 'Pests',
        menu: 'Pests',
        exporterFileName: 'pest_export',
        list: {
          menu: 'Pests',
          title: 'Pests',
        },
        create: {
          success: 'Pest successfully saved',
        },
        update: {
          success: 'Pest successfully saved',
        },
        destroy: {
          success: 'Pest successfully deleted',
        },
        destroyAll: {
          success: 'Pest(s) successfully deleted',
        },
        edit: {
          title: 'Edit Pest',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Pest',
        },
        view: {
          title: 'View Pest',
        },
        importer: {
          title: 'Import Pests',
          fileName: 'pest_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    pesticide: {
        name: 'pesticide',
        label: 'Pesticides',
        menu: 'Pesticides',
        exporterFileName: 'pesticide_export',
        list: {
          menu: 'Pesticides',
          title: 'Pesticides',
        },
        create: {
          success: 'Pesticide successfully saved',
        },
        update: {
          success: 'Pesticide successfully saved',
        },
        destroy: {
          success: 'Pesticide successfully deleted',
        },
        destroyAll: {
          success: 'Pesticide(s) successfully deleted',
        },
        edit: {
          title: 'Edit Pesticide',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'type': 'Type',
          'decription': 'Decription',
          'materials': 'Materials',
          'pests': 'Pests',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Pesticide',
        },
        view: {
          title: 'View Pesticide',
        },
        importer: {
          title: 'Import Pesticides',
          fileName: 'pesticide_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    soil: {
        name: 'soil',
        label: 'Soils',
        menu: 'Soils',
        exporterFileName: 'soil_export',
        list: {
          menu: 'Soils',
          title: 'Soils',
        },
        create: {
          success: 'Soil successfully saved',
        },
        update: {
          success: 'Soil successfully saved',
        },
        destroy: {
          success: 'Soil successfully deleted',
        },
        destroyAll: {
          success: 'Soil(s) successfully deleted',
        },
        edit: {
          title: 'Edit Soil',
        },
        fields: {
          id: 'Id',
          'land': 'Land',
          'type': 'Type',
          'pHRange': 'pH',
          'pH': 'pH',
          'temperatureRange': 'Temperature',
          'temperature': 'Temperature',
          'organicCarbon': 'OrganicCarbon',
          'cec': 'CEC',
          'nitrogen': 'Nitrogen',
          'phosphorus': 'Phosphorus',
          'potassium': 'Potassium',
          'other': 'Other',
          'label': 'Label',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Alluvial': 'Alluvial',
            'Black': 'Black',
            'Desert': 'Desert',
            'Laterite': 'Laterite',
            'Mountain': 'Mountain',
            'Peat': 'Peat',
            'Red': 'Red',
            'Saline': 'Saline',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Soil',
        },
        view: {
          title: 'View Soil',
        },
        importer: {
          title: 'Import Soils',
          fileName: 'soil_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    disease: {
        name: 'disease',
        label: 'Diseases',
        menu: 'Diseases',
        exporterFileName: 'disease_export',
        list: {
          menu: 'Diseases',
          title: 'Diseases',
        },
        create: {
          success: 'Disease successfully saved',
        },
        update: {
          success: 'Disease successfully saved',
        },
        destroy: {
          success: 'Disease successfully deleted',
        },
        destroyAll: {
          success: 'Disease(s) successfully deleted',
        },
        edit: {
          title: 'Edit Disease',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Disease',
        },
        view: {
          title: 'View Disease',
        },
        importer: {
          title: 'Import Diseases',
          fileName: 'disease_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    fertilizer: {
        name: 'fertilizer',
        label: 'Fertilizers',
        menu: 'Fertilizers',
        exporterFileName: 'fertilizer_export',
        list: {
          menu: 'Fertilizers',
          title: 'Fertilizers',
        },
        create: {
          success: 'Fertilizer successfully saved',
        },
        update: {
          success: 'Fertilizer successfully saved',
        },
        destroy: {
          success: 'Fertilizer successfully deleted',
        },
        destroyAll: {
          success: 'Fertilizer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Fertilizer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'npk': 'NPK',
          'nutrients': 'Nutrients',
          'brand': 'Brand',
          'crops': 'Crops',
          'plants': 'Plants',
          'method': 'Method',
          'result': 'Result',
          'priceRange': 'Price',
          'price': 'Price',
          'composition': 'Composition',
          'dosage': 'Dosage',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Fertilizer',
        },
        view: {
          title: 'View Fertilizer',
        },
        importer: {
          title: 'Import Fertilizers',
          fileName: 'fertilizer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    organicFertilizer: {
        name: 'organicFertilizer',
        label: 'Organic Fertilizers',
        menu: 'Organic Fertilizers',
        exporterFileName: 'organicFertilizer_export',
        list: {
          menu: 'Organic Fertilizers',
          title: 'Organic Fertilizers',
        },
        create: {
          success: 'Organic Fertilizer successfully saved',
        },
        update: {
          success: 'Organic Fertilizer successfully saved',
        },
        destroy: {
          success: 'Organic Fertilizer successfully deleted',
        },
        destroyAll: {
          success: 'Organic Fertilizer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Organic Fertilizer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'nRange': 'N',
          'n': 'N',
          'pRange': 'P',
          'p': 'P',
          'kRange': 'K',
          'k': 'K',
          'nutrients': 'Nutrients',
          'method': 'Method',
          'result': 'Result',
          'priceRange': 'Price',
          'price': 'Price',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Organic Fertilizer',
        },
        view: {
          title: 'View Organic Fertilizer',
        },
        importer: {
          title: 'Import Organic Fertilizers',
          fileName: 'organicFertilizer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    harvest: {
        name: 'harvest',
        label: 'Harvests',
        menu: 'Harvests',
        exporterFileName: 'harvest_export',
        list: {
          menu: 'Harvests',
          title: 'Harvests',
        },
        create: {
          success: 'Harvest successfully saved',
        },
        update: {
          success: 'Harvest successfully saved',
        },
        destroy: {
          success: 'Harvest successfully deleted',
        },
        destroyAll: {
          success: 'Harvest(s) successfully deleted',
        },
        edit: {
          title: 'Edit Harvest',
        },
        fields: {
          id: 'Id',
          'farmer': 'Farmer',
          'land': 'Land',
          'crop': 'Crop',
          'plant': 'Plant',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'unit': 'Unit',
          'valueType': 'Value Type',
          'dateRange': 'Date',
          'date': 'Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'valueType': {
            'Expected': 'Expected',
            'Actual': 'Actual',
          },
        },
        new: {
          title: 'New Harvest',
        },
        view: {
          title: 'View Harvest',
        },
        importer: {
          title: 'Import Harvests',
          fileName: 'harvest_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    rainwater: {
        name: 'rainwater',
        label: 'Rainwaters',
        menu: 'Rainwaters',
        exporterFileName: 'rainwater_export',
        list: {
          menu: 'Rainwaters',
          title: 'Rainwaters',
        },
        create: {
          success: 'Rainwater successfully saved',
        },
        update: {
          success: 'Rainwater successfully saved',
        },
        destroy: {
          success: 'Rainwater successfully deleted',
        },
        destroyAll: {
          success: 'Rainwater(s) successfully deleted',
        },
        edit: {
          title: 'Edit Rainwater',
        },
        fields: {
          id: 'Id',
          'land': 'Land',
          'waterReceivedRange': 'Water Received',
          'waterReceived': 'Water Received',
          'waterUsedRabiRange': 'Water Used Rabi',
          'waterUsedRabi': 'Water Used Rabi',
          'waterUsedKharifRange': 'Water Used Kharif',
          'waterUsedKharif': 'Water Used Kharif',
          'waterSourceKharif': 'Water Source Kharif',
          'waterUsedZaidRange': 'Water Used Zaid',
          'waterUsedZaid': 'Water Used Zaid',
          'waterSourceZaid': 'Water Source Zaid',
          'extraRainwaterRange': 'Extra Rainwater',
          'extraRainwater': 'Extra Rainwater',
          'rainwaterHarvestingAllowed': 'Rainwater Harvesting Allowed',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'waterSourceKharif': {
            'Groundwater': 'Groundwater',
            'Canal': 'Canal',
            'River': 'River',
            'Pond': 'Pond',
            'Lake': 'Lake',
          },
          'waterSourceZaid': {
            'Groundwater': 'Groundwater',
            'Canal': 'Canal',
            'River': 'River',
            'Pond': 'Pond',
            'Lake': 'Lake',
          },
        },
        new: {
          title: 'New Rainwater',
        },
        view: {
          title: 'View Rainwater',
        },
        importer: {
          title: 'Import Rainwaters',
          fileName: 'rainwater_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    farmer: {
      label: 'Farmer',
      description: 'Farmer role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
