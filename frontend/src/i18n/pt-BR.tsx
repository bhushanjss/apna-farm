const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    person: {
        name: 'Person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'Person_exportados',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person salvo com sucesso',
        },
        update: {
          success: 'Person salvo com sucesso',
        },
        destroy: {
          success: 'Person deletado com sucesso',
        },
        destroyAll: {
          success: 'Person(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Person',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        new: {
          title: 'Novo Person',
        },
        view: {
          title: 'Visualizar Person',
        },
        importer: {
          title: 'Importar People',
          fileName: 'person_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    location: {
        name: 'Location',
        label: 'Locations',
        menu: 'Locations',
        exporterFileName: 'Location_exportados',
        list: {
          menu: 'Locations',
          title: 'Locations',
        },
        create: {
          success: 'Location salvo com sucesso',
        },
        update: {
          success: 'Location salvo com sucesso',
        },
        destroy: {
          success: 'Location deletado com sucesso',
        },
        destroyAll: {
          success: 'Location(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Location',
        },
        fields: {
          id: 'Id',
          'state': 'State',
          'district': 'District',
          'tehsil': 'Tehsil',
          'village': 'Village',
          'coords': 'Coords',
          'label': 'Label',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Location',
        },
        view: {
          title: 'Visualizar Location',
        },
        importer: {
          title: 'Importar Locations',
          fileName: 'location_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    land: {
        name: 'Land',
        label: 'Lands',
        menu: 'Lands',
        exporterFileName: 'Land_exportados',
        list: {
          menu: 'Lands',
          title: 'Lands',
        },
        create: {
          success: 'Land salvo com sucesso',
        },
        update: {
          success: 'Land salvo com sucesso',
        },
        destroy: {
          success: 'Land deletado com sucesso',
        },
        destroyAll: {
          success: 'Land(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Land',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Land',
        },
        view: {
          title: 'Visualizar Land',
        },
        importer: {
          title: 'Importar Lands',
          fileName: 'land_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    farmer: {
        name: 'Farmer',
        label: 'Farmers',
        menu: 'Farmers',
        exporterFileName: 'Farmer_exportados',
        list: {
          menu: 'Farmers',
          title: 'Farmers',
        },
        create: {
          success: 'Farmer salvo com sucesso',
        },
        update: {
          success: 'Farmer salvo com sucesso',
        },
        destroy: {
          success: 'Farmer deletado com sucesso',
        },
        destroyAll: {
          success: 'Farmer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Farmer',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'agent': 'Agent',
          'area': 'Area',
          'lands': 'Lands',
          'label': 'Label',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Farmer',
        },
        view: {
          title: 'Visualizar Farmer',
        },
        importer: {
          title: 'Importar Farmers',
          fileName: 'farmer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    agent: {
        name: 'Agent',
        label: 'Agents',
        menu: 'Agents',
        exporterFileName: 'Agent_exportados',
        list: {
          menu: 'Agents',
          title: 'Agents',
        },
        create: {
          success: 'Agent salvo com sucesso',
        },
        update: {
          success: 'Agent salvo com sucesso',
        },
        destroy: {
          success: 'Agent deletado com sucesso',
        },
        destroyAll: {
          success: 'Agent(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Agent',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'farmers': 'Farmers',
          'locations': 'Locations',
          'label': 'Label',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Agent',
        },
        view: {
          title: 'Visualizar Agent',
        },
        importer: {
          title: 'Importar Agents',
          fileName: 'agent_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    question: {
        name: 'Question',
        label: 'Questions',
        menu: 'Questions',
        exporterFileName: 'Question_exportados',
        list: {
          menu: 'Questions',
          title: 'Questions',
        },
        create: {
          success: 'Question salvo com sucesso',
        },
        update: {
          success: 'Question salvo com sucesso',
        },
        destroy: {
          success: 'Question deletado com sucesso',
        },
        destroyAll: {
          success: 'Question(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Question',
        },
        fields: {
          id: 'Id',
          'question': 'Question',
          'priorityRange': 'Priority',
          'priority': 'Priority',
          'remark': 'Remark',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Question',
        },
        view: {
          title: 'Visualizar Question',
        },
        importer: {
          title: 'Importar Questions',
          fileName: 'question_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    answer: {
        name: 'Answer',
        label: 'Answers',
        menu: 'Answers',
        exporterFileName: 'Answer_exportados',
        list: {
          menu: 'Answers',
          title: 'Answers',
        },
        create: {
          success: 'Answer salvo com sucesso',
        },
        update: {
          success: 'Answer salvo com sucesso',
        },
        destroy: {
          success: 'Answer deletado com sucesso',
        },
        destroyAll: {
          success: 'Answer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Answer',
        },
        fields: {
          id: 'Id',
          'farmer': 'Farmer',
          'question': 'Question',
          'answer': 'Answer',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Answer',
        },
        view: {
          title: 'Visualizar Answer',
        },
        importer: {
          title: 'Importar Answers',
          fileName: 'answer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    crop: {
        name: 'Crop',
        label: 'Crops',
        menu: 'Crops',
        exporterFileName: 'Crop_exportados',
        list: {
          menu: 'Crops',
          title: 'Crops',
        },
        create: {
          success: 'Crop salvo com sucesso',
        },
        update: {
          success: 'Crop salvo com sucesso',
        },
        destroy: {
          success: 'Crop deletado com sucesso',
        },
        destroyAll: {
          success: 'Crop(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Crop',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'fertilizer': 'Fertilizer',
          'climate': 'Climate',
          'irrigationTimes': 'Irrigation Times',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Crop',
        },
        view: {
          title: 'Visualizar Crop',
        },
        importer: {
          title: 'Importar Crops',
          fileName: 'crop_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    cropVariety: {
        name: 'Crop Variety',
        label: 'Crop Varieties',
        menu: 'Crop Varieties',
        exporterFileName: 'Crop Variety_exportados',
        list: {
          menu: 'Crop Varieties',
          title: 'Crop Varieties',
        },
        create: {
          success: 'Crop Variety salvo com sucesso',
        },
        update: {
          success: 'Crop Variety salvo com sucesso',
        },
        destroy: {
          success: 'Crop Variety deletado com sucesso',
        },
        destroyAll: {
          success: 'Crop Variety(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Crop Variety',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Crop Variety',
        },
        view: {
          title: 'Visualizar Crop Variety',
        },
        importer: {
          title: 'Importar Crop Varieties',
          fileName: 'cropVariety_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    plant: {
        name: 'Plant',
        label: 'Plants',
        menu: 'Plants',
        exporterFileName: 'Plant_exportados',
        list: {
          menu: 'Plants',
          title: 'Plants',
        },
        create: {
          success: 'Plant salvo com sucesso',
        },
        update: {
          success: 'Plant salvo com sucesso',
        },
        destroy: {
          success: 'Plant deletado com sucesso',
        },
        destroyAll: {
          success: 'Plant(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Plant',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'soilDescription': 'Soil Description',
          'climate': 'Climate',
          'fertilizer': 'Fertilizer',
          'irrigationTimes': 'IrrigationTimes',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Plant',
        },
        view: {
          title: 'Visualizar Plant',
        },
        importer: {
          title: 'Importar Plants',
          fileName: 'plant_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    plantVariety: {
        name: 'Plant Variety',
        label: 'Plant Varieties',
        menu: 'Plant Varieties',
        exporterFileName: 'Plant Variety_exportados',
        list: {
          menu: 'Plant Varieties',
          title: 'Plant Varieties',
        },
        create: {
          success: 'Plant Variety salvo com sucesso',
        },
        update: {
          success: 'Plant Variety salvo com sucesso',
        },
        destroy: {
          success: 'Plant Variety deletado com sucesso',
        },
        destroyAll: {
          success: 'Plant Variety(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Plant Variety',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Plant Variety',
        },
        view: {
          title: 'Visualizar Plant Variety',
        },
        importer: {
          title: 'Importar Plant Varieties',
          fileName: 'plantVariety_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    farmingMethod: {
        name: 'Farming Method',
        label: 'Farming Methods',
        menu: 'Farming Methods',
        exporterFileName: 'Farming Method_exportados',
        list: {
          menu: 'Farming Methods',
          title: 'Farming Methods',
        },
        create: {
          success: 'Farming Method salvo com sucesso',
        },
        update: {
          success: 'Farming Method salvo com sucesso',
        },
        destroy: {
          success: 'Farming Method deletado com sucesso',
        },
        destroyAll: {
          success: 'Farming Method(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Farming Method',
        },
        fields: {
          id: 'Id',
          'farmingType': 'Farming Type',
          'description': 'Description',
          'sowingMethod': 'Sowing Method',
          'crops': 'Crops',
          'plants': 'Plants',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Farming Method',
        },
        view: {
          title: 'Visualizar Farming Method',
        },
        importer: {
          title: 'Importar Farming Methods',
          fileName: 'farmingMethod_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    farming: {
        name: 'Farming',
        label: 'Farmings',
        menu: 'Farmings',
        exporterFileName: 'Farming_exportados',
        list: {
          menu: 'Farmings',
          title: 'Farmings',
        },
        create: {
          success: 'Farming salvo com sucesso',
        },
        update: {
          success: 'Farming salvo com sucesso',
        },
        destroy: {
          success: 'Farming deletado com sucesso',
        },
        destroyAll: {
          success: 'Farming(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Farming',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Farming',
        },
        view: {
          title: 'Visualizar Farming',
        },
        importer: {
          title: 'Importar Farmings',
          fileName: 'farming_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    irrigation: {
        name: 'Irrigation',
        label: 'Irrigations',
        menu: 'Irrigations',
        exporterFileName: 'Irrigation_exportados',
        list: {
          menu: 'Irrigations',
          title: 'Irrigations',
        },
        create: {
          success: 'Irrigation salvo com sucesso',
        },
        update: {
          success: 'Irrigation salvo com sucesso',
        },
        destroy: {
          success: 'Irrigation deletado com sucesso',
        },
        destroyAll: {
          success: 'Irrigation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Irrigation',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Irrigation',
        },
        view: {
          title: 'Visualizar Irrigation',
        },
        importer: {
          title: 'Importar Irrigations',
          fileName: 'irrigation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    weed: {
        name: 'Weed',
        label: 'Weeds',
        menu: 'Weeds',
        exporterFileName: 'Weed_exportados',
        list: {
          menu: 'Weeds',
          title: 'Weeds',
        },
        create: {
          success: 'Weed salvo com sucesso',
        },
        update: {
          success: 'Weed salvo com sucesso',
        },
        destroy: {
          success: 'Weed deletado com sucesso',
        },
        destroyAll: {
          success: 'Weed(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Weed',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Weed',
        },
        view: {
          title: 'Visualizar Weed',
        },
        importer: {
          title: 'Importar Weeds',
          fileName: 'weed_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    herbicide: {
        name: 'Herbicide',
        label: 'Herbicides',
        menu: 'Herbicides',
        exporterFileName: 'Herbicide_exportados',
        list: {
          menu: 'Herbicides',
          title: 'Herbicides',
        },
        create: {
          success: 'Herbicide salvo com sucesso',
        },
        update: {
          success: 'Herbicide salvo com sucesso',
        },
        destroy: {
          success: 'Herbicide deletado com sucesso',
        },
        destroyAll: {
          success: 'Herbicide(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Herbicide',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Herbicide',
        },
        view: {
          title: 'Visualizar Herbicide',
        },
        importer: {
          title: 'Importar Herbicides',
          fileName: 'herbicide_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    insect: {
        name: 'Insect',
        label: 'Insects',
        menu: 'Insects',
        exporterFileName: 'Insect_exportados',
        list: {
          menu: 'Insects',
          title: 'Insects',
        },
        create: {
          success: 'Insect salvo com sucesso',
        },
        update: {
          success: 'Insect salvo com sucesso',
        },
        destroy: {
          success: 'Insect deletado com sucesso',
        },
        destroyAll: {
          success: 'Insect(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Insect',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Insect',
        },
        view: {
          title: 'Visualizar Insect',
        },
        importer: {
          title: 'Importar Insects',
          fileName: 'insect_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    insecticide: {
        name: 'Insecticide',
        label: 'Insecticides',
        menu: 'Insecticides',
        exporterFileName: 'Insecticide_exportados',
        list: {
          menu: 'Insecticides',
          title: 'Insecticides',
        },
        create: {
          success: 'Insecticide salvo com sucesso',
        },
        update: {
          success: 'Insecticide salvo com sucesso',
        },
        destroy: {
          success: 'Insecticide deletado com sucesso',
        },
        destroyAll: {
          success: 'Insecticide(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Insecticide',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Insecticide',
        },
        view: {
          title: 'Visualizar Insecticide',
        },
        importer: {
          title: 'Importar Insecticides',
          fileName: 'insecticide_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pest: {
        name: 'Pest',
        label: 'Pests',
        menu: 'Pests',
        exporterFileName: 'Pest_exportados',
        list: {
          menu: 'Pests',
          title: 'Pests',
        },
        create: {
          success: 'Pest salvo com sucesso',
        },
        update: {
          success: 'Pest salvo com sucesso',
        },
        destroy: {
          success: 'Pest deletado com sucesso',
        },
        destroyAll: {
          success: 'Pest(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Pest',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Pest',
        },
        view: {
          title: 'Visualizar Pest',
        },
        importer: {
          title: 'Importar Pests',
          fileName: 'pest_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pesticide: {
        name: 'Pesticide',
        label: 'Pesticides',
        menu: 'Pesticides',
        exporterFileName: 'Pesticide_exportados',
        list: {
          menu: 'Pesticides',
          title: 'Pesticides',
        },
        create: {
          success: 'Pesticide salvo com sucesso',
        },
        update: {
          success: 'Pesticide salvo com sucesso',
        },
        destroy: {
          success: 'Pesticide deletado com sucesso',
        },
        destroyAll: {
          success: 'Pesticide(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Pesticide',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Pesticide',
        },
        view: {
          title: 'Visualizar Pesticide',
        },
        importer: {
          title: 'Importar Pesticides',
          fileName: 'pesticide_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    soil: {
        name: 'Soil',
        label: 'Soils',
        menu: 'Soils',
        exporterFileName: 'Soil_exportados',
        list: {
          menu: 'Soils',
          title: 'Soils',
        },
        create: {
          success: 'Soil salvo com sucesso',
        },
        update: {
          success: 'Soil salvo com sucesso',
        },
        destroy: {
          success: 'Soil deletado com sucesso',
        },
        destroyAll: {
          success: 'Soil(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Soil',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Soil',
        },
        view: {
          title: 'Visualizar Soil',
        },
        importer: {
          title: 'Importar Soils',
          fileName: 'soil_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    disease: {
        name: 'Disease',
        label: 'Diseases',
        menu: 'Diseases',
        exporterFileName: 'Disease_exportados',
        list: {
          menu: 'Diseases',
          title: 'Diseases',
        },
        create: {
          success: 'Disease salvo com sucesso',
        },
        update: {
          success: 'Disease salvo com sucesso',
        },
        destroy: {
          success: 'Disease deletado com sucesso',
        },
        destroyAll: {
          success: 'Disease(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Disease',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'crops': 'Crops',
          'plants': 'Plants',
          'remedy': 'Remedy',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Disease',
        },
        view: {
          title: 'Visualizar Disease',
        },
        importer: {
          title: 'Importar Diseases',
          fileName: 'disease_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    fertilizer: {
        name: 'Fertilizer',
        label: 'Fertilizers',
        menu: 'Fertilizers',
        exporterFileName: 'Fertilizer_exportados',
        list: {
          menu: 'Fertilizers',
          title: 'Fertilizers',
        },
        create: {
          success: 'Fertilizer salvo com sucesso',
        },
        update: {
          success: 'Fertilizer salvo com sucesso',
        },
        destroy: {
          success: 'Fertilizer deletado com sucesso',
        },
        destroyAll: {
          success: 'Fertilizer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Fertilizer',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Fertilizer',
        },
        view: {
          title: 'Visualizar Fertilizer',
        },
        importer: {
          title: 'Importar Fertilizers',
          fileName: 'fertilizer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    organicFertilizer: {
        name: 'Organic Fertilizer',
        label: 'Organic Fertilizers',
        menu: 'Organic Fertilizers',
        exporterFileName: 'Organic Fertilizer_exportados',
        list: {
          menu: 'Organic Fertilizers',
          title: 'Organic Fertilizers',
        },
        create: {
          success: 'Organic Fertilizer salvo com sucesso',
        },
        update: {
          success: 'Organic Fertilizer salvo com sucesso',
        },
        destroy: {
          success: 'Organic Fertilizer deletado com sucesso',
        },
        destroyAll: {
          success: 'Organic Fertilizer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Organic Fertilizer',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Organic Fertilizer',
        },
        view: {
          title: 'Visualizar Organic Fertilizer',
        },
        importer: {
          title: 'Importar Organic Fertilizers',
          fileName: 'organicFertilizer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    harvest: {
        name: 'Harvest',
        label: 'Harvests',
        menu: 'Harvests',
        exporterFileName: 'Harvest_exportados',
        list: {
          menu: 'Harvests',
          title: 'Harvests',
        },
        create: {
          success: 'Harvest salvo com sucesso',
        },
        update: {
          success: 'Harvest salvo com sucesso',
        },
        destroy: {
          success: 'Harvest deletado com sucesso',
        },
        destroyAll: {
          success: 'Harvest(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Harvest',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'valueType': {
            'Expected': 'Expected',
            'Actual': 'Actual',
          },
        },
        new: {
          title: 'Novo Harvest',
        },
        view: {
          title: 'Visualizar Harvest',
        },
        importer: {
          title: 'Importar Harvests',
          fileName: 'harvest_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    rainwater: {
        name: 'Rainwater',
        label: 'Rainwaters',
        menu: 'Rainwaters',
        exporterFileName: 'Rainwater_exportados',
        list: {
          menu: 'Rainwaters',
          title: 'Rainwaters',
        },
        create: {
          success: 'Rainwater salvo com sucesso',
        },
        update: {
          success: 'Rainwater salvo com sucesso',
        },
        destroy: {
          success: 'Rainwater deletado com sucesso',
        },
        destroyAll: {
          success: 'Rainwater(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Rainwater',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Rainwater',
        },
        view: {
          title: 'Visualizar Rainwater',
        },
        importer: {
          title: 'Importar Rainwaters',
          fileName: 'rainwater_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
