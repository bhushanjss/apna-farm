const hi = {
    common: {
        or: 'या',
        cancel: 'रद्द',
        reset: 'रीसेट',
        save: 'सहेजें',
        search: 'खोज',
        edit: 'संपादित करें',
        new: 'नया',
        export: 'एक्सेल में भेजे',
        noDataToExport: 'निर्यात करने के लिए कोई डेटा नहीं',
        import: 'आयात',
        discard: 'रद्द करें',
        yes: 'हाँ',
        no: 'नहीं',
        pause: 'ठहराव',
        areYouSure: 'क्या आपको यकीन है?',
        view: 'राय',
        destroy: 'रद्द',
        mustSelectARow: 'एक पंक्ति का चयन करना चाहिए',
        start: 'शुरू',
        end: 'समाप्त',
        select: 'चुनते हैं',
        continue: 'जारी रखें',
    },

    app: {
        title: 'हिंदी',
    },

    entities: {
        person: {
            name: 'व्यक्ति',
            label: 'लोग',
            menu: 'लोग',
            exporterFileName: 'व्यक्ति निर्यात करता है',
            list: {
                menu: 'लोग',
                title: 'लोग',
            },
            create: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            update: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            destroy: {
                success: 'व्यक्ति डेटा रद्द गया',
            },
            destroyAll: {
                success: 'व्यक्ति डेटा रद्द गया',
            },
            edit: {
                title: 'व्यक्ति संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'personId': 'व्यक्ति आईडी',
                'firstName': 'पहला नाम',
                'lastName': 'उपनाम',
                'gender': 'लिंग',
                'birthdateRange': 'जन्म दिन',
                'birthdate': 'जन्म दिन',
                'phoneNumber': 'फ़ोन नंबर',
                'location': 'स्थान',
                'email': 'ईमेल',
                'active': 'सक्रिय',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'gender': {
                    'male': 'नर',
                    'female': 'महिला',
                },
            },
            new: {
                title: 'नया व्यक्ति',
            },
            view: {
                title: 'व्यक्ति देखें',
            },
            importer: {
                title: 'लोग आयात करें',
                fileName: 'व्यक्ति आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        location: {
            name: 'स्थान',
            label: 'स्थान',
            menu: 'स्थान',
            exporterFileName: 'स्थान निर्यात',
            list: {
                menu: 'स्थान',
                title: 'स्थान',
            },
            create: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            update: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            destroy: {
                success: 'व्यक्ति डेटा रद्द गया',
            },
            destroyAll: {
                success: 'व्यक्ति डेटा रद्द गया',
            },
            edit: {
                title: 'स्थान संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'state': 'राज्य',
                'district': 'जिला',
                'tehsil': 'तहसील',
                'village': 'गाँव',
                'coords': 'coords',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया स्थान',
            },
            view: {
                title: 'स्थान देखें',
            },
            importer: {
                title: 'आयात स्थान',
                fileName: 'स्थान आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        land: {
            name: 'भूमि',
            label: 'भूमि',
            menu: 'भूमि',
            exporterFileName: 'भूमि का निर्यात',
            list: {
                menu: 'भूमि',
                title: 'भूमि',
            },
            create: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            update: {
                success: 'व्यक्ति डेटा सहेजा गया',
            },
            destroy: {
                success: 'भूमि सफलतापूर्वक हटाई गई',
            },
            destroyAll: {
                success: 'भूमि सफलतापूर्वक हटाई गई',
            },
            edit: {
                title: 'भूमि का संपादन करें',
            },
            fields: {
                id: 'आईडी',
                'location': 'स्थान',
                'areaRange': 'क्षेत्र',
                'area': 'क्षेत्र',
                'farmer': 'किसान',
                'groundwaterAvailable': 'भूजल उपलब्ध',
                'groundwaterDepthRange': 'भूजल की गहराई',
                'groundwaterDepth': 'भूजल की गहराई',
                'canalAccess': 'नहर पहुंच',
                'waterAcidity': 'पानी की अम्लता',
                'downpour': 'मूसलधार बारिश',
                'downpourRate': 'नीचे की दर',
                'hailstorm': 'मूसलधार बारिश',
                'flood': 'बाढ़',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नयी ज़मीन',
            },
            view: {
                title: 'भूमि देखें',
            },
            importer: {
                title: 'आयात भूमि',
                fileName: 'भूमि आयात टेम्पलेट',
                hint:
                'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        farmer: {
            name: 'किसान',
            label: 'किसान',
            menu: 'किसान',
            exporterFileName: 'किसान निर्यात',
            list: {
                menu: 'किसान',
                title: 'किसान',
            },
            create: {
                success: 'किसान सफलतापूर्वक बच गया',
            },
            update: {
                success: 'किसान सफलतापूर्वक बच गया',
            },
            destroy: {
                success: 'किसान सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'किसान सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'किसान को संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'person': 'व्यक्ति',
                'agent': 'एजेंट',
                'area': 'क्षेत्र',
                'lands': 'भूमि',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया किसान',
            },
            view: {
                title: 'किसान देखें',
            },
            importer: {
                title: 'किसान आयात करें',
                fileName: 'किसान आयात टेम्पलेट',
                hint:
                    '',
            },
        },

        agent: {
            name: 'एजेंट',
            label: 'एजेंट',
            menu: 'एजेंट',
            exporterFileName: 'एजेंट निर्यात',
            list: {
                menu: 'एजेंट',
                title: 'एजेंट',
            },
            create: {
                success: 'एजेंट सफलतापूर्वक बच गया',
            },
            update: {
                success: 'एजेंट सफलतापूर्वक बच गया',
            },
            destroy: {
                success: 'एजेंट सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'एजेंट सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'एजेंट को संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'person': 'व्यक्ति',
                'farmers': 'किसान',
                'locations': 'स्थान',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया एजेंट',
            },
            view: {
                title: 'एजेंट देखें',
            },
            importer: {
                title: 'आयात एजेंट',
                fileName: 'एजेंट आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        question: {
            name: 'सवाल',
            label: 'सवाल',
            menu: 'सवाल',
            exporterFileName: 'प्रश्न निर्यात',
            list: {
                menu: 'सवाल',
                title: 'सवाल',
            },
            create: {
                success: 'प्रश्न सफलतापूर्वक सहेजा गया',
            },
            update: {
                success: 'प्रश्न सफलतापूर्वक सहेजा गया',
            },
            destroy: {
                success: 'प्रश्न सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'प्रश्न सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'प्रश्न संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'question': 'प्रश्न ',
                'priorityRange': 'प्राथमिकता',
                'priority': 'प्राथमिकता',
                'remark': 'टिप्पणी',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया प्रश्न',
            },
            view: {
                title: 'प्रश्न देखें',
            },
            importer: {
                title: 'आयात प्रश्न',
                fileName: 'प्रश्न आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        answer: {
            name: 'उत्तर',
            label: 'उत्तर',
            menu: 'उत्तर',
            exporterFileName: 'उत्तर निर्यात करें',
            list: {
                menu: 'उत्तर',
                title: 'उत्तर',
            },
            create: {
                success: 'उत्तर सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'उत्तर सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'उत्तर सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'उत्तर(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें उत्तर',
            },
            fields: {
                id: 'आईडी',
                'farmer': 'किसान',
                'question': 'सवाल',
                'answer': 'उत्तर',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया उत्तर',
            },
            view: {
                title: 'राय उत्तर',
            },
            importer: {
                title: 'आयात उत्तर',
                fileName: 'उत्तर आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        crop: {
            name: 'काटना',
            label: 'काटना',
            menu: 'काटना',
            exporterFileName: 'फसल निर्यात',
            list: {
                menu: 'काटना',
                title: 'काटना',
            },
            create: {
                success: 'काटना सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'काटना सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'काटना सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'काटना(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें काटना',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'category': 'वर्ग',
                'fertilizer': 'उर्वरक',
                'climate': 'जलवायु',
                'irrigationTimes': 'सिंचाई टाइम्स',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'category': {
                    'Cereals': 'अनाज',
                    'Fibre': 'रेशा',
                    'Fodder': 'चारा',
                    'Green_Manure': 'हरी खाद',
                    'Oilseed': 'तिलहन',
                    'Pulses': 'दलहन',
                    'Sugarcane': 'गन्ना',
                    'Other': 'अन्य',
                },
            },
            new: {
                title: 'नया काटना',
            },
            view: {
                title: 'राय काटना',
            },
            importer: {
                title: 'आयात काटना',
                fileName: 'फसल आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        cropVariety: {
            name: 'काटना किस्मों',
            label: 'काटना किस्मों',
            menu: 'काटना किस्मों',
            exporterFileName: 'फसल विविधता निर्यात',
            list: {
                menu: 'काटना किस्मों',
                title: 'काटना किस्मों',
            },
            create: {
                success: 'काटना किस्मों सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'काटना किस्मों सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'काटना किस्मों सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'काटना किस्मों(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें काटना किस्मों',
            },
            fields: {
                id: 'आईडी',
                'crop': 'काटना',
                'name': 'नाम',
                'description': 'विवरण',
                'cropDurationRange': 'काटना समयांतराल',
                'cropDuration': 'काटना समयांतराल',
                'cropYieldRange': 'काटना मान जाना',
                'cropYield': 'काटना मान जाना',
                'seedRateRange': 'बीज दर',
                'seedRate': 'बीज दर',
                'seedPlantationTime': 'बीज रोपण का समय',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया काटना किस्मों',
            },
            view: {
                title: 'राय काटना किस्मों',
            },
            importer: {
                title: 'आयात काटना किस्मों',
                fileName: 'फसल विविधता आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        plant: {
            name: 'पौधा',
            label: 'पौधा',
            menu: 'पौधा',
            exporterFileName: 'पौधे का निर्यात',
            list: {
                menu: 'पौधा',
                title: 'पौधा',
            },
            create: {
                success: 'पौधा सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'पौधा सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'पौधा सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'पौधा(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें पौधा',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'category': 'वर्ग',
                'soilDescription': 'मिट्टी का विवरण',
                'climate': 'जलवायु',
                'fertilizer': 'उर्वरक',
                'irrigationTimes': 'सिंचाई टाइम्स',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'category': {
                    'Vegetable': 'सबजी',
                    'Fruit': 'फल',
                    'Medicine': 'दवा',
                    'Spice': 'चाट मसाला',
                    'Flower': 'फूल',
                    'Other': 'अन्य',
                },
            },
            new: {
                title: 'नया पौधा',
            },
            view: {
                title: 'राय पौधा',
            },
            importer: {
                title: 'आयात पौधा',
                fileName: 'संयंत्र आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        plantVariety: {
            name: 'पौधा वैराइटी',
            label: 'पौधा वैराइटी',
            menu: 'पौधा वैराइटी',
            exporterFileName: 'विभिन्न किस्मों का निर्यात',
            list: {
                menu: 'पौधा वैराइटी',
                title: 'पौधा वैराइटी',
            },
            create: {
                success: 'पौधा वैराइटी सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'पौधा वैराइटी सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'पौधा वैराइटी सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'पौधा वैराइटी(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें पौधा वैराइटी',
            },
            fields: {
                id: 'आईडी',
                'plant': 'पौधा',
                'name': 'नाम',
                'description': 'विवरण',
                'durationRange': 'समयांतराल',
                'duration': 'समयांतराल',
                'plantYieldRange': 'पौधा मान जाना',
                'plantYield': 'पौधा मान जाना',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया पौधा किस्मों',
            },
            view: {
                title: 'राय पौधा किस्मों',
            },
            importer: {
                title: 'आयात पौधा किस्मों',
                fileName: 'पौधा विविधता आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        farmingMethod: {
            name: 'कृषि के तरीके',
            label: 'कृषि के तरीके',
            menu: 'कृषि के तरीके',
            exporterFileName: 'खेती का तरीका निर्यात',
            list: {
                menu: 'कृषि के तरीके',
                title: 'कृषि के तरीके',
            },
            create: {
                success: 'कृषि के तरीके सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कृषि के तरीके सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कृषि के तरीके सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कृषि के तरीके(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कृषि के तरीके',
            },
            fields: {
                id: 'आईडी',
                'farmingType': 'खेती का प्रकार',
                'description': 'विवरण',
                'sowingMethod': 'बुवाई विधि',
                'crops': 'फसलें',
                'plants': 'पौधे',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'farmingType': {
                    'Traditional': 'परंपरागत',
                    'Modern': 'आधुनिक',
                },
                'sowingMethod': {
                    'Seed_Drill': 'बीज ड्रिल',
                    'Broadcasting_Method': 'प्रसारण विधि',
                    'Zero_Tillage_Drill': 'जीरो टिलेज ड्रिल',
                    'Rotavator': 'रोटावेटर',
                    'Manual': 'गाइड',
                    'Other': 'अन्य',
                },
            },
            new: {
                title: 'नया खेती की विधि',
            },
            view: {
                title: 'राय खेती की विधि',
            },
            importer: {
                title: 'आयात खेती की विधि',
                fileName: 'खेती विधि आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        farming: {
            name: 'खेती',
            label: 'खेती',
            menu: 'खेती',
            exporterFileName: 'खेती का निर्यात',
            list: {
                menu: 'खेती',
                title: 'खेती',
            },
            create: {
                success: 'खेती सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'खेती सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'खेती सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'खेती(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें खेती',
            },
            fields: {
                id: 'आईडी',
                'yearRange': 'साल',
                'year': 'साल',
                'season': 'मौसम',
                'farmer': 'किसान',
                'land': 'भूमि',
                'plantType': 'पौधे का प्रकार',
                'farmingMethod': 'खेती की विधि',
                'dateSownRange': 'खजूर बोया',
                'dateSown': 'खजूर बोया',
                'irrigations': 'ईरीगेशन',
                'laborsRange': 'मजदूरों',
                'labors': 'मजदूरों',
                'mixedFarming': 'मिश्रित खेती',
                'cropRotation': 'फसल का चक्रिकरण',
                'cropsRotated': 'फसल का चक्रिकरण',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'season': {
                    'Rabi': 'रबी',
                    'Kharif': 'खरीफ',
                    'Zaid': 'ज़ैद',
                },
                'plantType': {
                    'Crop': 'काटना',
                    'Plant': 'पौधा',
                },
            },
            new: {
                title: 'नया खेती',
            },
            view: {
                title: 'राय खेती',
            },
            importer: {
                title: 'आयात खेती',
                fileName: 'खेती आयात का खाका',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        irrigation: {
            name: 'सिंचाई',
            label: 'सिंचाई',
            menu: 'सिंचाई',
            exporterFileName: 'सिंचाई का निर्यात',
            list: {
                menu: 'सिंचाई',
                title: 'सिंचाई',
            },
            create: {
                success: 'सिंचाई सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'सिंचाई सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'सिंचाई सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'सिंचाई(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें सिंचाई',
            },
            fields: {
                id: 'आईडी',
                'land': 'भूमि',
                'source': 'स्रोत',
                'hoursRange': 'घंटे',
                'hours': 'घंटे',
                'rateRange': 'मूल्यांकन करें',
                'rate': 'मूल्यांकन करें',
                'machine': 'मशीन',
                'volumeRange': 'आयतन',
                'volume': 'आयतन',
                'startRange': 'शुरू',
                'start': 'शुरू',
                'endRange': 'समाप्त',
                'end': 'समाप्त',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'source': {
                    'Groundwater': 'भूजल',
                    'Canal': 'नहर',
                    'River': 'नदी',
                    'Pond': 'तालाब',
                    'Lake': 'झील',
                },
            },
            new: {
                title: 'नया सिंचाई',
            },
            view: {
                title: 'राय सिंचाई',
            },
            importer: {
                title: 'आयात सिंचाई',
                fileName: 'सिंचाई आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        weed: {
            name: 'जंगली घास',
            label: 'जंगली घास',
            menu: 'जंगली घास',
            exporterFileName: 'खरपतवार का निर्यात',
            list: {
                menu: 'जंगली घास',
                title: 'जंगली घास',
            },
            create: {
                success: 'जंगली घास सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'जंगली घास सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'जंगली घास सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'जंगली घास(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें जंगली घास',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'description': 'विवरण',
                'crops': 'फसलें',
                'plants': 'पौधे',
                'remedy': 'उपाय',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया जंगली घास',
            },
            view: {
                title: 'राय जंगली घास',
            },
            importer: {
                title: 'आयात जंगली घास',
                fileName: 'खरपतवार आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        herbicide: {
            name: 'शाक',
            label: 'शाक',
            menu: 'शाक',
            exporterFileName: 'जड़ी बूटी का निर्यात',
            list: {
                menu: 'शाक',
                title: 'शाक',
            },
            create: {
                success: 'शाक सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'शाक सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'शाक सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'शाक(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें शाक',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'type': 'प्रकार',
                'description': 'विवरण',
                'materials': 'सामग्री',
                'weeds': 'मातम',
                'costRange': 'लागत',
                'cost': 'लागत',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया शाक',
            },
            view: {
                title: 'राय शाक',
            },
            importer: {
                title: 'आयात शाक',
                fileName: 'शाकनाशी आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        insect: {
            name: 'कीट',
            label: 'कीट',
            menu: 'कीट',
            exporterFileName: 'insect_export',
            list: {
                menu: 'कीट',
                title: 'कीट',
            },
            create: {
                success: 'कीट सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कीट सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कीट सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कीट(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कीट',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'description': 'विवरण',
                'crops': 'फसलें',
                'plants': 'पौधे',
                'remedy': 'उपाय',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया कीट',
            },
            view: {
                title: 'राय कीट',
            },
            importer: {
                title: 'आयात कीट',
                fileName: 'कीट आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        insecticide: {
            name: 'कीटनाशक',
            label: 'कीटनाशक',
            menu: 'कीटनाशक',
            exporterFileName: 'कीटनाशक निर्यात',
            list: {
                menu: 'कीटनाशक',
                title: 'कीटनाशक',
            },
            create: {
                success: 'कीटनाशक सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कीटनाशक सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कीटनाशक सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कीटनाशक(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कीटनाशक',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'type': 'प्रकार',
                'description': 'विवरण',
                'materials': 'सामग्री',
                'insects': 'कीड़े',
                'costRange': 'लागत',
                'cost': 'लागत',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया कीटनाशक',
            },
            view: {
                title: 'राय कीटनाशक',
            },
            importer: {
                title: 'आयात कीटनाशक',
                fileName: 'कीटनाशक आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        pest: {
            name: 'पीड़क',
            label: 'पीड़क',
            menu: 'पीड़क',
            exporterFileName: 'कीट निर्यात',
            list: {
                menu: 'पीड़क',
                title: 'पीड़क',
            },
            create: {
                success: 'पीड़क सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'पीड़क सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'पीड़क सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'पीड़क(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें पीड़क',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'description': 'विवरण',
                'crops': 'फसलें',
                'plants': 'पौधे',
                'remedy': 'उपाय',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया पीड़क',
            },
            view: {
                title: 'राय पीड़क',
            },
            importer: {
                title: 'आयात पीड़क',
                fileName: 'कीट आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        pesticide: {
            name: 'कीटनाशक',
            label: 'कीटनाशक',
            menu: 'कीटनाशक',
            exporterFileName: 'कीटनाशक निर्यात',
            list: {
                menu: 'कीटनाशक',
                title: 'कीटनाशक',
            },
            create: {
                success: 'कीटनाशक सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कीटनाशक सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कीटनाशक सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कीटनाशक(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कीटनाशक',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'type': 'प्रकार',
                'decription': 'विवरण',
                'materials': 'सामग्री',
                'pests': 'कीट',
                'costRange': 'लागत',
                'cost': 'लागत',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया कीटनाशक',
            },
            view: {
                title: 'राय कीटनाशक',
            },
            importer: {
                title: 'आयात कीटनाशक',
                fileName: 'कीटनाशक आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        soil: {
            name: 'मिट्टी',
            label: 'मिट्टी',
            menu: 'मिट्टी',
            exporterFileName: 'मिट्टी का निर्यात',
            list: {
                menu: 'मिट्टी',
                title: 'मिट्टी',
            },
            create: {
                success: 'मिट्टी सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'मिट्टी सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'मिट्टी सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'मिट्टी(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें मिट्टी',
            },
            fields: {
                id: 'आईडी',
                'land': 'भूमि',
                'type': 'प्रकार',
                'pHRange': 'पीएच',
                'pH': 'पीएच',
                'temperatureRange': 'तापमान',
                'temperature': 'तापमान',
                'organicCarbon': 'कार्बनिक कार्बन',
                'cec': 'सीईसी',
                'nitrogen': 'नाइट्रोजन',
                'phosphorus': 'फास्फोरस',
                'potassium': 'फास्फोरस',
                'other': 'अन्य',
                'label': 'लेबल',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'type': {
                    'Alluvial': 'कछार का',
                    'Black': 'काली',
                    'Desert': 'रेगिस्तान',
                    'Laterite': 'लेटराइट',
                    'Mountain': 'पहाड़',
                    'Peat': 'पीट',
                    'Red': 'लाल',
                    'Saline': 'खारा',
                    'Other': 'अन्य',
                },
            },
            new: {
                title: 'नया मिट्टी',
            },
            view: {
                title: 'राय मिट्टी',
            },
            importer: {
                title: 'आयात मिट्टी',
                fileName: 'मिट्टी आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        disease: {
            name: 'रोग',
            label: 'रोग',
            menu: 'रोग',
            exporterFileName: 'रोग निर्यात',
            list: {
                menu: 'रोग',
                title: 'रोग',
            },
            create: {
                success: 'रोग सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'रोग सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'रोग सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'रोग(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें रोग',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'description': 'विवरण',
                'crops': '',
                'plants': 'पौधे',
                'remedy': 'उपाय',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया रोग',
            },
            view: {
                title: 'राय रोग',
            },
            importer: {
                title: 'आयात रोग',
                fileName: 'रोग आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        fertilizer: {
            name: 'उर्वरक',
            label: 'उर्वरक',
            menu: 'उर्वरक',
            exporterFileName: 'उर्वरक निर्यात',
            list: {
                menu: 'उर्वरक',
                title: 'उर्वरक',
            },
            create: {
                success: 'उर्वरक सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'उर्वरक सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'उर्वरक सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'उर्वरक(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें उर्वरक',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'npk': 'एनपीके',
                'nutrients': 'पोषक तत्त्व',
                'brand': 'ब्रांड',
                'crops': 'फसलें',
                'plants': 'पौधे',
                'method': 'तरीका',
                'result': 'परिणाम',
                'priceRange': 'कीमत',
                'price': 'कीमत',
                'composition': 'रचना',
                'dosage': 'मात्रा बनाने की विधि',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया उर्वरक',
            },
            view: {
                title: 'राय उर्वरक',
            },
            importer: {
                title: 'आयात उर्वरक',
                fileName: 'उर्वरक आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        organicFertilizer: {
            name: 'कार्बनिक उर्वरक',
            label: 'कार्बनिक उर्वरक',
            menu: 'कार्बनिक उर्वरक',
            exporterFileName: 'जैविक उर्वरक निर्यात',
            list: {
                menu: 'कार्बनिक उर्वरक',
                title: 'कार्बनिक उर्वरक',
            },
            create: {
                success: 'कार्बनिक उर्वरक सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कार्बनिक उर्वरक सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कार्बनिक उर्वरक सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कार्बनिक उर्वरक(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कार्बनिक उर्वरक',
            },
            fields: {
                id: 'आईडी',
                'name': 'नाम',
                'nRange': 'N',
                'n': 'N',
                'pRange': 'P',
                'p': 'P',
                'kRange': 'K',
                'k': 'K',
                'nutrients': 'पोषक तत्त्व',
                'method': 'तरीका',
                'result': 'परिणाम',
                'priceRange': 'कीमत',
                'price': 'कीमत',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {

            },
            new: {
                title: 'नया कार्बनिक उर्वरक',
            },
            view: {
                title: 'राय कार्बनिक उर्वरक',
            },
            importer: {
                title: 'आयात कार्बनिक उर्वरक',
                fileName: 'जैविक उर्वरक आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        harvest: {
            name: 'कटाई',
            label: 'कटाई',
            menu: 'कटाई',
            exporterFileName: 'फसल निर्यात',
            list: {
                menu: 'कटाई',
                title: 'कटाई',
            },
            create: {
                success: 'कटाई सफलतापूर्वक संचित कर लिया गया है',
            },
            update: {
                success: 'कटाई सफलतापूर्वक संचित कर लिया गया है',
            },
            destroy: {
                success: 'कटाई सफलतापूर्वक हटा दिया गया',
            },
            destroyAll: {
                success: 'कटाई(s) सफलतापूर्वक हटा दिया गया',
            },
            edit: {
                title: 'संपादित करें कटाई',
            },
            fields: {
                id: 'आईडी',
                'farmer': 'किसान',
                'land': 'भूमि',
                'crop': 'काटना',
                'plant': 'पौधा',
                'quantityRange': 'मात्रा',
                'quantity': 'मात्रा',
                'unit': 'इकाई',
                'valueType': 'मान प्रकार',
                'dateRange': 'तारीख',
                'date': 'तारीख',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'valueType': {
                    'Expected': 'अपेक्षित होना',
                    'Actual': 'वास्तविक',
                },
            },
            new: {
                title: 'नया कटाई',
            },
            view: {
                title: 'राय कटाई',
            },
            importer: {
                title: 'आयात कटाई',
                fileName: 'फसल आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },

        rainwater: {
            name: 'बारिश का पानी',
            label: 'बारिश का पानी',
            menu: 'बारिश का पानी',
            exporterFileName: 'बारिश के पानी का निर्यात',
            list: {
                menu: 'बारिश का पानी',
                title: 'बारिश का पानी',
            },
            create: {
                success: 'वर्षा जल सफलतापूर्वक बच गया',
            },
            update: {
                success: 'वर्षा जल सफलतापूर्वक बच गया',
            },
            destroy: {
                success: 'वर्षा जल को सफलतापूर्वक हटाया गया',
            },
            destroyAll: {
                success: 'वर्षा जल को सफलतापूर्वक हटाया गया',
            },
            edit: {
                title: 'वर्षा जल को संपादित करें',
            },
            fields: {
                id: 'आईडी',
                'land': 'भूमि',
                'waterReceivedRange': 'पानी प्राप्त हुआ',
                'waterReceived': 'पानी प्राप्त हुआ',
                'waterUsedRabiRange': 'पानी का इस्तेमाल किया रबी',
                'waterUsedRabi': 'पानी का इस्तेमाल किया रबी',
                'waterUsedKharifRange': 'पानी प्रयुक्त खरीफ',
                'waterUsedKharif': 'पानी प्रयुक्त खरीफ',
                'waterSourceKharif': 'जल स्रोत खरीफ',
                'waterUsedZaidRange': 'पानी का इस्तेमाल किया जायद',
                'waterUsedZaid': 'पानी का इस्तेमाल किया जायद',
                'waterSourceZaid': 'जल स्रोत ज़ैद',
                'extraRainwaterRange': 'अतिरिक्त वर्षा जल',
                'extraRainwater': 'अतिरिक्त वर्षा जल',
                'rainwaterHarvestingAllowed': 'वर्षा जल संचयन की अनुमति है',
                createdAt: 'पर बनाया गया',
                updatedAt: 'पर अपडेट किया गया',
                createdAtRange: 'पर बनाया गया',
            },
            enumerators: {
                'waterSourceKharif': {
                    'Groundwater': 'भूजल',
                    'Canal': 'नहर',
                    'River': 'नदी',
                    'Pond': 'तालाब',
                    'Lake': 'झील',
                },
                'waterSourceZaid': {
                    'Groundwater': 'भूजल',
                    'Canal': 'नहर',
                    'River': 'नदी',
                    'Pond': 'तालाब',
                    'Lake': 'झील',
                },
            },
            new: {
                title: 'नया बारिश का पानी',
            },
            view: {
                title: 'वर्षा का पानी देखें',
            },
            importer: {
                title: 'आयात रेनवाटर्स',
                fileName: 'वर्षा जल आयात टेम्पलेट',
                hint:
                    'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
            },
        },
    },

    auth: {
        tenants: 'कार्यस्थानों',
        profile: {
            title: 'प्रोफ़ाइल',
            success: 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई',
        },
        createAnAccount: 'खाता बनाएं',
        rememberMe: 'मुझे याद रखना',
        forgotPassword: 'पासवर्ड भूल गए',
        signin: 'साइन इन करें',
        signup: 'साइन अप करें',
        signout: 'प्रस्थान करें',
        alreadyHaveAnAccount:
            'पहले से ही एक खाता है? साइन इन करें।',
        signinWithAnotherAccount:
            'किसी अन्य खाते से साइन इन करें',
        emailUnverified: {
            message: `कृपया अपने ईमेल की पुष्टि करें <strong>{0}</strong> जारी रखने के लिए।`,
            submit: `ईमेल सत्यापन पुनः भेजें`,
        },
        emptyPermissions: {
            message: `आपके पास अभी तक कोई अनुमति नहीं है। आपको विशेषाधिकार देने के लिए व्यवस्थापक की प्रतीक्षा करें।`,
        },
        passwordResetEmail: {
            message: 'पासवर्ड रीसेट ईमेल भेजें',
            error: `ईमेल मान्यता प्राप्त नहीं है`,
        },
        passwordReset: {
            message: 'पासवर्ड रीसेट',
        },
        passwordChange: {
            title: 'पासवर्ड बदलें',
            success: 'पासवर्ड सफलतापूर्वक बदल दिया है',
            mustMatch: 'पासवर्डों को मेल खाना चाहिए',
        },
        emailAddressVerificationEmail: {
            error: `ईमेल मान्यता प्राप्त नहीं है`,
        },
        verificationEmailSuccess: `सत्यापन ईमेल सफलतापूर्वक भेजा गया`,
        passwordResetEmailSuccess: `पासवर्ड रीसेट ईमेल सफलतापूर्वक भेजा गया`,
        passwordResetSuccess: `पासवर्ड सफलतापूर्वक बदल दिया है`,
        verifyEmail: {
            success: 'ईमेल सफलतापूर्वक सत्यापित की गई।',
            message:
                'बस एक पल, आपके ईमेल को सत्यापित किया जा रहा है ...',
        },
    },

    roles: {
        admin: {
            label: 'व्यवस्थापक',
            description: 'सभी संसाधनों तक पूर्ण पहुंच',
        },
        farmer: {
            label: 'किसान',
            description: 'किसान की भूमिका',
        },
        agent: {
            label: 'एजेंट',
            description: 'किसान की भूमिका',
        },
        researcher: {
            label: 'शोधकर्ता',
            description: 'किसान की भूमिका',
        },
    },

    user: {
        fields: {
            id: 'आईडी',
            avatars: 'अवतार',
            email: 'ईमेल',
            emails: 'ईमेल(s)',
            fullName: 'नाम',
            firstName: 'पहला नाम',
            lastName: 'उपनाम',
            status: 'स्थिति',
            phoneNumber: 'फ़ोन नंबर',
            role: 'भूमिका',
            createdAt: 'पर बनाया गया',
            updatedAt: 'पर अपडेट किया गया',
            roleUser: 'भूमिका / उपयोगकर्ता',
            roles: 'भूमिका',
            createdAtRange: 'पर बनाया गया',
            password: 'पासवर्ड',
            oldPassword: 'पुराना पासवर्ड',
            newPassword: 'नया पासवर्ड',
            newPasswordConfirmation: 'नया पासवर्ड पुष्टि',
            rememberMe: 'मुझे याद रखना',
        },
        status: {
            active: 'सक्रिय',
            invited: 'आमंत्रण',
            'खाली - अनुमति ':' प्रतीक्षा की अनुमति',
        },
        invite: 'आमंत्रण',
        validations: {
            // eslint-disable-next-line
            email: 'ईमेल $ { value } अमान्य है',
        },
        title: 'उपयोगकर्ता',
        menu: 'उपयोगकर्ता',
        doAddSuccess: 'उपयोगकर्ता सफलतापूर्वक सहेजा गया',
        doUpdateSuccess: 'उपयोगकर्ता सफलतापूर्वक सहेजा गया',
        exporterFileName: 'उपयोगकर्ता निर्यात करते हैं',
        doDestroySuccess: 'उपयोगकर्ता को सफलतापूर्वक हटा दिया गया',
        doDestroyAllSelectedSuccess:
            'उपयोगकर्ताओं को सफलतापूर्वक हटा दिया गया',
        edit: {
            title: 'यूजर को संपादित करो',
        },
        new: {
            title: 'उपयोगकर्ता को आमंत्रित करें',
            titleModal: 'उपयोगकर्ता को आमंत्रित करें',
            emailsHint:
                'अल्पविराम वर्ण का उपयोग करके कई ईमेल पते अलग करें।',
        },
        view: {
            title: 'उपयोगकर्ता देखें',
            activity: 'गतिविधि',
        },
        importer: {
            title: 'उपयोगकर्ताओं को आयात करें',
            fileName: 'उपयोगकर्ता टेम्पलेट आयात करते हैं',
            hint:
                'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए। स्पेस द्वारा अलग किए गए संदर्भित रिकॉर्ड की आईडी होना चाहिए। रोल को अंतरिक्ष द्वारा अलग की गई रोल आईडी होना चाहिए।',
        },
        errors: {
            userAlreadyExists:
                'इस ईमेल के साथ पहले से प्रयोगकर्ता मौजूद है',
            userNotFound: 'उपयोगकर्ता नहीं मिला',
            revokingOwnPermission: `आप अपनी स्वयं की व्यवस्थापक अनुमति रद्द नहीं कर सकते`,
        },
    },

    tenant: {
        name: 'किरायेदार',
        label: 'कार्यक्षेत्र',
        menu: 'कार्यक्षेत्र',
        list: {
            menu: 'कार्यक्षेत्र',
            title: 'कार्यक्षेत्र',
        },
        create: {
            button: 'कार्यक्षेत्र बनाएँ',
            success: 'कार्यक्षेत्र सफलतापूर्वक सहेजा गया',
        },
        update: {
            success: 'कार्यक्षेत्र सफलतापूर्वक सहेजा गया',
        },
        destroy: {
            success: 'कार्यक्षेत्र सफलतापूर्वक हटाए गए',
        },
        destroyAll: {
            success: 'कार्यक्षेत्र सफलतापूर्वक हटाए गए',
        },
        edit: {
            title: 'कार्यक्षेत्र संपादित करें',
        },
        fields: {
            id: 'आईडी',
            name: 'नाम',
            url: 'URL',
            tenantName: 'कार्यस्थान नाम',
            tenantId: 'कार्यस्थान',
            tenantUrl: 'कार्यस्थान URL',
            plan: 'योजना',
        },
        enumerators: {},
        new: {
            title: 'नया कार्यक्षेत्र',
        },
        invitation: {
            view: 'निमंत्रण देखें',
            invited: 'आमंत्रित',
            accept: 'आमंत्रण स्वीकारें',
            decline: 'निमंत्रण अस्वीकार करें',
            declined: 'आमंत्रण को सफलतापूर्वक अस्वीकार कर दिया गया',
            acceptWrongEmail: 'इस ईमेल के साथ निमंत्रण स्वीकार करें',
        },
        select: 'कार्यक्षेत्र का चयन करें',
        validation: {
            url:
                'आपके कार्यक्षेत्र URL में केवल लोअरकेस अक्षर, संख्याएँ और डैश शामिल हो सकते हैं(और एक अक्षर या संख्या के साथ शुरू होना चाहिए) ।',
        },
    },

    plan: {
        menu: 'योजनाओं',
        title: 'योजनाओं',

        free: {
            label: 'नि: शुल्क',
            price: '$0',
        },
        growth: {
            label: 'विकास',
            price: '$10',
        },
        enterprise: {
            label: 'उद्यम',
            price: '$50',
        },

        pricingPeriod: '/महीना',
        current: 'वर्तमान योजना',
        subscribe: 'सदस्यता लें',
        manage: 'सदस्यता प्रबंधित करें',
        cancelAtPeriodEnd:
            'यह योजना अवधि के अंत में रद्द कर दी जाएगी।',
        somethingWrong:
            'आपकी सदस्यता में कुछ गड़बड़ है। कृपया अधिक जानकारी के लिए सदस्यता का प्रबंधन करने के लिए जाओ।',
        notPlanUser: `आप इस सदस्यता के प्रबंधक नहीं हैं।`,
    },

    auditLog: {
        menu: 'ऑडिट लॉग',
        title: 'ऑडिट लॉग',
        exporterFileName: 'ऑडिट लॉग निर्यात',
        entityNamesHint:
            'अल्पविराम वर्ण का उपयोग करके कई निकाय अलग',
        fields: {
            id: 'आईडी',
            timestampRange: 'अवधि',
            entityName: 'सत्ता',
            entityNames: 'संस्थाओं',
            entityId: 'इकाई आईडी',
            action: 'कार्य',
            values: 'मान',
            timestamp: 'तारीख',
            createdByEmail: 'उपयोगकर्ता ईमेल',
        },
    },
    settings: {
        title: 'समायोजन',
        menu: 'समायोजन',
        save: {
            success:
                'सेटिंग्स सफलतापूर्वक सहेजी गईं। परिवर्तन को प्रभावी करने के लिए पृष्ठ { 0} सेकंड में पुनः लोड होगा।',
        },
        fields: {
            primary: 'प्राथमिक रंग',
            secondary: 'द्वितीयक रंग',
            logos: 'प्रतीक चिन्ह',
            backgroundImages: 'पृष्ठभूमि छवियो',
            shade: 'छाया',
        },
    },
    dashboard: {
        menu: 'डैशबोर्ड',
        message: `यह पृष्ठ केवल प्रदर्शन उद्देश्यों के लिए नकली डेटा का उपयोग करता है। आप इसे फ्रंटएंड / व्यू / डैशबोर्ड / डैशबोर्ड पेजेज पर एडिट कर सकते हैं।`,
        charts: {
            day: 'दिन',
            red: 'लाल',
            green: 'हरा',
            yellow: 'पीला',
            grey: 'धूसर',
            blue: 'नीला',
            orange: 'संतरा',
            months: {
                1: 'जनवरी',
                2: 'फरवरी',
                3: 'मार्च',
                4: 'अप्रैल',
                5: 'मई',
                6: 'जून',
                7: 'जुलाई',
            },
            eating: 'भोजन',
            drinking: 'पीने',
            sleeping: 'सोया हुआ',
            designing: 'डिज़ाइन बनाना',
            coding: 'कोडिंग',
            cycling: 'सायक्लिंग',
            running: 'चल रहा है',
            customer: 'ग्राहक',
        },
    },
    errors: {
        backToHome: 'घर वापिस जा रहा हूँ',
        403: `क्षमा करें, आपके पास इस पृष्ठ तक पहुंच नहीं है`,
        404: 'क्षमा करें, आपके द्वारा विज़िट किया गया पृष्ठ मौजूद नहीं',
        500: 'क्षमा करें, सर्वर एक त्रुटि की सूचना दे रहा है',
        forbidden: {
            message: 'मना किया हुआ',
        },
        validation: {
            message: 'एक त्रुटि पाई गई',
        },
        defaultErrorMessage: 'ऑप्स, एक त्रुटि हुई',
    },
    // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
    /* eslint-disable */
    validation: {
        mixed: {
            default: '${path} अमान्य है',
            required: '${path} आवश्यक है',
            oneOf:
                '${path} निम्नलिखित में से एक मान होना चाहिए: ${values}',
            notOneOf:
                '${path} निम्नलिखित में से एक मान नहीं होना चाहिए: ${values}',
            notType: ({ path, type, value, originalValue }) => {
                return `${path} होना चाहिए एक ${type}`;
            },
        },
        string: {
            length: '$ { path } बिलकुल $ { length } अक्षर का होना चाहिए',
            min: '$ { path } कम से कम $ { min } वर्ण का होना चाहिए',
            max: '$ { path } अधिकतम $ { max } वर्णों पर होना चाहिए',
            matches:
                '$ { path } को निम्नलिखित से मेल खाना चाहिए: "$ {regex}"',
            email: '$ { path } एक वैध ईमेल होना चाहिए',
            url: '$ { path } एक वैध URL होना चाहिए',
            trim: '$ { path } एक छंटनी वाला तार होना चाहिए',
            lowercase: '$ { path } एक लोअरकेस स्ट्रिंग होना चाहिए',
            uppercase: '$ { path } एक अपर केस स्ट्रिंग होना चाहिए',
            selected: '$ {path} का चयन करना ',
        },
        number: {
            min:
                '$ { path } $ { nim } से अधिक या बराबर होना चाहिए',
            max: '$ { path } $ { max } से कम या बराबर होना चाहिए',
            lessThan: '$ { path } $ { min } से कम होना चाहिए',
            moreThan: '$ { path } $ { max } से अधिक होना चाहिए',
            notEqual: '$ { path } $ { notEqual } के बराबर नहीं होना चाहिए',
            positive: '$ { path } एक पॉजिटिव नंबर होना चाहिए',
            negative: '$ { path } एक नकारात्मक संख्या होनी चाहिए',
            integer: '$ {path} एक पूर्णांक होना चाहिए',
        },
        date: {
            min: '$ { path } फ़ील्ड $ { min } से बाद में होना चाहिए',
            max: '$ { path } फ़ील्ड $ { max } से पहले होना चाहिए',
        },
        boolean: {},
        object: {
            noUnknown:
                '$ { path } फ़ील्ड में ऑब्जेक्ट आकार में निर्दिष्ट कीज़ नहीं हो सकते',
        },
        array: {
            min: '$ {path} फ़ील्ड में कम से कम $ {min} आइटम होना चाहिए',
            max:
                '$ { path } फ़ील्ड में $ { max } आइटम से कम या बराबर होना चाहिए',
        },
    },
    /* eslint-disable */
    fileUploader: {
        upload: 'डालना',
        image: 'आपको एक छवि अपलोड करनी होगी',
        size: 'फ़ाइल बहुत बड़ी है। अधिकतम अनुमत आका {0}',
        formats: `अवैध प्रारूप। इनमें से एक होना चाहिए: {0}.`,
    },
    importer: {
        line: 'लाइन',
        status: 'स्थिति',
        pending: 'विचाराधीन',
        imported: 'आयातित',
        error: 'त्रुटि',
        total: `{0} आयातित, {1} लंबित और {2} त्रुटि के साथ`,
        importedMessage: `प्रसंस्कृत {0} का {1}.`,
        noNavigateAwayMessage:
            'इस पृष्ठ से दूर नेविगेट न करें या आयात बंद कर दिया जाएगा।',
        completed: {
            success:
                'आयात पूरा हुआ। सभी पंक्तियों को सफलतापूर्वक आयात किया गया था।',
            someErrors:
                'प्रक्रिया पूरी हो गई, लेकिन कुछ पंक्तियों को आयात नहीं किया जा सका।',
            allErrors: 'आयात विफल रहा। कोई मान्य पंक्तियाँ नहीं हैं।',
        },
        form: {
            downloadTemplate: 'टेम्पलेट डाउनलोड करें',
            hint:
                'जारी रखने के लिए फ़ाइल को इस क्षेत्र पर क्लिक करें या खींचें',
        },
        list: {
            discardConfirm:
                'क्या आपको यकीन है? गैर-आयातित डेटा खो जाएगा',
        },
        errors: {
            invalidFileEmpty: 'फ़ाइल खाली है',
            invalidFileExcel:
                'केवल एक्सेल(.xlsx) फ़ाइलों की अनुमति है',
            invalidFileUpload:
                'अवैध फाइल। सुनिश्चित करें कि आप टेम्पलेट के अंतिम संस्करण का उपयोग कर रहे हैं।',
            importHashRequired: 'आयात हैश की आवश्यक',
            importHashExistent: 'डेटा पहले ही आयात किया जा चुका है',
        },
    },

    autocomplete: {
        loading: 'लोड हो रहा है...',
        noOptions: 'कोई डेटा नहीं मिला',
    },

    imagesViewer: {
        noImage: 'कोई तस्वीर नहीं',
    },

    table: {
        noData: 'कोई रिकॉर्ड नहीं मिला',
        loading: 'लोड हो रहा है...',
    },

    pagination: {
        labelDisplayedRows: '{0}-{1} of {2}',
        labelRowsPerPage: 'प्रति पृष्ठ:',
    },
};

export default hi;
