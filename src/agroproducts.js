const agroproducts = [
    {
        id: '0',
        product: 'Commercial Name',
        maker: 'Maker',
        category: 'Fertilizer or Health/Control',
        type: 'chemical or biologic',
        group:'chemical group or macros, micros',
        ingredient: 'Active Ingredients'
    },
    {
        "id": 1,
        "product": "ABAMEC QL",
        "ingredient": "ABAMECTINA",
        "maker": "QUIMICA LUCAVA",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 2,
        "product": "ACAR",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 3,
        "product": "ACARITOUCH",
        "ingredient": "MONOLAURATO DE\nPROPILENGLICOL",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Esteres"
      },
      {
        "id": 4,
        "product": "ACRAMITE 50 WS",
        "ingredient": "BIFENAZATE",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Bifenazate"
      },
      {
        "id": 5,
        "product": "ACTARA 25 GS ",
        "ingredient": "TIAMETOXAM",
        "maker": "SYNGENTA AGRO",
        "category": "Insecticida",
        "group": "Neonicotinoidas"
      },
      {
        "id": 6,
        "product": "ACTARA 25 GS / ACTARA 25 WG",
        "ingredient": "TIAMETOXAM",
        "maker": "SYNGENTA AGRO",
        "category": "Insecticida",
        "group": "Neonicotinoides"
      },
      {
        "id": 7,
        "product": "ACTIGARD 50 GS",
        "ingredient": "ACIBENZOLAR          S METIL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Benzotiadiazol"
      },
      {
        "id": 8,
        "product": "AFFINITY 240 CE",
        "ingredient": "CARFENTRAZONE ETIL ",
        "maker": "FMC AGROQUIMICA",
        "category": "Herbicida",
        "group": "Triazolinonas"
      },
      {
        "id": 9,
        "product": "AGRILIFE",
        "ingredient": "ACIDO ASCORBICO, CITRICO, LACTICO",
        "maker": "FORTGROW S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 10,
        "product": "AGRIMEC 1.8% C.E. ",
        "ingredient": "ABAMECTINA",
        "maker": "SYNGENTA AGRO",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 11,
        "product": "AGRIVER 1.8 PH",
        "ingredient": "ABAMECTINA",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 12,
        "product": "AGRIVER 1.8% C.E. ",
        "ingredient": "ABAMECTINA",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 13,
        "product": "AGROGARLIC",
        "ingredient": "EXTRACTO DE AJO, RUDA Y AGAVE",
        "maker": "PHYTOS HORTICULTURA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 14,
        "product": "AGRONEEM",
        "ingredient": "EXTRACTO DE ACEITE DE NEEM ",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 15,
        "product": "AGUIJON",
        "ingredient": "AZUFRE ELEMENTAL + ACEITE PARAFINICO",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "Inorganicos"
      },
      {
        "id": 16,
        "product": "AJICK",
        "ingredient": "EXTRACTO ESCENCIAL DE AJO",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 17,
        "product": "AKABROWN",
        "ingredient": "ACEITE DE CANELA, OREGANO, MENTA, CLAVO, NEEM",
        "maker": "GREEN CORP",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 18,
        "product": "AKARIS 100 CE",
        "ingredient": "BIFENTRINA",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 19,
        "product": "ALIETTE WDG",
        "ingredient": "FOSETIL-AL",
        "maker": "BAYER DE MEXICO",
        "category": "Fungicida",
        "group": "Etil fosfonato"
      },
      {
        "id": 20,
        "product": "ALLEATO",
        "ingredient": "FOSETIL-AL",
        "maker": "HELM DE MEXICO",
        "category": "Fungicida",
        "group": "Etil fosfonato"
      },
      {
        "id": 21,
        "product": "ALLECTUS 300 SC",
        "ingredient": "BIFENTRINA + IMIDACLOPRID",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides / Neonicotinoide"
      },
      {
        "id": 22,
        "product": "ALLECTUS GR",
        "ingredient": "BIFENTRINA + IMIDACLOPRID",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides, Noenicotinoide"
      },
      {
        "id": 23,
        "product": "ALLIUM NOVA",
        "ingredient": "EXTRACTO DE AJO + EXTRACTO DE CANELA",
        "maker": "ZARE AGRHOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 24,
        "product": "ALTER",
        "ingredient": "SPINOSAD",
        "maker": "ANAJALSA SA DE CV",
        "category": "Insecticida",
        "group": "Espinosina"
      },
      {
        "id": 25,
        "product": "AMISTAR / HERITAGE",
        "ingredient": "AZOXYSTROBIN",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Metoxi-acrilatos"
      },
      {
        "id": 26,
        "product": "AMISTAR GOLD",
        "ingredient": "AZOXYSTROBIN + DIFENOCONAZOL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Metoxi- acrilatos y triazoles"
      },
      {
        "id": 27,
        "product": "ANAMEC",
        "ingredient": "ABAMECTINA",
        "maker": "ANAJALSA SA DE CV",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 28,
        "product": "APPLAUD 40 SC",
        "ingredient": "BUPROFEZIN",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Buprofezin"
      },
      {
        "id": 29,
        "product": "ARANOVA",
        "ingredient": "EXTRACTO DE NEEM, AJO, CANELA",
        "maker": "ZARE AGRHOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 30,
        "product": "ARQUIA 18 CE",
        "ingredient": "ABAMECTINA",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 31,
        "product": "ASPHIX 90",
        "ingredient": "ACEITE VEGETAL DE SEMILLA DE SOYA",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Aceites vegetales"
      },
      {
        "id": 32,
        "product": "ATAQUE GAMMA",
        "ingredient": "EXTRACTO DE AJO/ EXTRACTO DE CHILE PICANTE/ EXTRACTO DE CANELA ",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 33,
        "product": "ATENTO",
        "ingredient": "BEAUVERIA BASSIANA ",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 34,
        "product": "AVOLANT ",
        "ingredient": "FENPYROXIMATO",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Metil acaricida e insecticida"
      },
      {
        "id": 35,
        "product": "AXOTRON SC",
        "ingredient": "AZOXYSTROBIN",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Fungicida",
        "group": "Metoxi-acrilato"
      },
      {
        "id": 36,
        "product": "AZA-DIRECT 1.2 CE ",
        "ingredient": "AZADIRACTINA",
        "maker": "GOWAN MEXICANA",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 37,
        "product": "AZANIM 3% CE",
        "ingredient": "AZADIRACTINA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 38,
        "product": "AZATINA 4.5 / NEEMIX 4.5",
        "ingredient": "AZADIRACTINA",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 39,
        "product": "AZOXYSTROBIN 50 WG / MILITANT",
        "ingredient": "AZOXYSTROBIN",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Fungicida",
        "group": "Metoxi-acrilato"
      },
      {
        "id": 40,
        "product": "AZUCROP XL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "GRUPO BIOQUIMICO\nMEXICANO, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorgánicos"
      },
      {
        "id": 41,
        "product": "AZUFER 71",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "ANAJALSA SA DE CV",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 42,
        "product": "AZUFRE ELECTRICO",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "QUIMICA LUCAVA",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 43,
        "product": "AZUFRE PERFECTO 93",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "QUIMICA LUCAVA",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 44,
        "product": "BACIMIN",
        "ingredient": "BACILLUS THURINGIENSIS Var. Kurstaki",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 45,
        "product": "BAKTILLIS",
        "ingredient": "BACILLUS SUBTILIS",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 46,
        "product": "BALAZO 25",
        "ingredient": "DIAZINON",
        "maker": "MEZCLAS Y FERTILIZANTES, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 47,
        "product": "BALAZO 4% G",
        "ingredient": "DIAZINÓN",
        "maker": "MEZCLAS Y FERTILIZANTES, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 48,
        "product": "BANK",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "HELM DE MEXICO",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 49,
        "product": "BEAUVERIA",
        "ingredient": "BEAUVERIA BASSIANA ",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 50,
        "product": "BELEAF",
        "ingredient": "FLONICAMID",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Flonicamid"
      },
      {
        "id": 51,
        "product": "BELT 480 SC",
        "ingredient": "FLUBENDIAMIDA",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Diamida"
      },
      {
        "id": 52,
        "product": "BENEMITE",
        "ingredient": "EXTRACTO DE GERANIOL+CITRONELLOL+NEROLIDOL+FARNESOL",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Biopesticida",
        "group": "Sin clasificacion"
      },
      {
        "id": 53,
        "product": "BENEVIA",
        "ingredient": "CIANTRANILIPROL",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Diaminas"
      },
      {
        "id": 54,
        "product": "BIFESTAR 100 CE",
        "ingredient": "BIFENTRINA",
        "maker": "INNOVACION AGRICOLA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 55,
        "product": "BIO CRACK",
        "ingredient": "EXTRACTO ACUOSO DE AJO, EXTRACTO ACUOSO DE MANZANILLA Y RUDA",
        "maker": "BERNIS LABS",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 56,
        "product": "BIO CRACK / BUG BALANCER",
        "ingredient": "EXTRACTO ACUOSO DE AJO, EXTRACTO ACUOSO DE MANZANILLA Y RUDA \n\n",
        "maker": "BERNIS LABS",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 57,
        "product": "BIO- DIE",
        "ingredient": "ARGENINA, BERBERINA, RICININA, TERTHIENIL",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 58,
        "product": "BIO POW",
        "ingredient": "ARGENINA, BERBERINA, RICININA, TERTHIENIL",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 59,
        "product": "BIOCINNAMON",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 60,
        "product": "BIOLETRUM 5% EC",
        "ingredient": "PIRETRINAS",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 61,
        "product": "BIOLURE® BAW",
        "ingredient": "FEROMONAS",
        "maker": "CONSEP DE MEXICO",
        "category": "Insecticida",
        "group": "Ésteres de tetradecadieno"
      },
      {
        "id": 62,
        "product": "BIOMEC",
        "ingredient": "ABAMECTINA",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 63,
        "product": "BIOVERIA",
        "ingredient": "BEAUVERIA BASSIANA ",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 64,
        "product": "BLITE FREE / CASTELL",
        "ingredient": "STREPTOMYCES SPP",
        "maker": "ALTUS BIOPHARM S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 65,
        "product": "BLUE SHIELD 10 LF",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "AGRI-ESTRELLA S DE RL DE CV",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 66,
        "product": "BLUESHIELD 20 DF",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "AGRI-ESTRELLA S DE RL DE CV",
        "category": "Fungicida",
        "group": "Sales inorganicas de cobre"
      },
      {
        "id": 67,
        "product": "BOMBASIL® 90 PS",
        "ingredient": "METOMILO",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Insecticida",
        "group": "Carbamatos"
      },
      {
        "id": 68,
        "product": "BRAZA 300",
        "ingredient": "PARAQUAT + DIURON",
        "maker": "SINTESIS Y FORMULACIONES DE ALTA TECNOLOGIA (SIFATEC)",
        "category": "Herbicida",
        "group": "Bipiridilos/ Urea"
      },
      {
        "id": 69,
        "product": "BRIGADIER 0.3 G",
        "ingredient": "BIFENTRINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 70,
        "product": "Bs",
        "ingredient": "BACILLUS SUBTILIS cepa Q11",
        "maker": "QUIMICA INTERNACIONAL APLICADA S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "Microbial "
      },
      {
        "id": 71,
        "product": "BT KRONE",
        "ingredient": "BACILLUS THURINGIENSIS (azawai gc-91)",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 72,
        "product": "CABRIO C",
        "ingredient": "BOSCALID + PYRACLOSTROBIN",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Pyridinas-carboximidas / metoxi carbamatos"
      },
      {
        "id": 73,
        "product": "CANDELA SUPER",
        "ingredient": "CARFENTRAZONE ETIL + GLIFOSATO",
        "maker": "FMC AGROQUIMICA",
        "category": "Herbicida",
        "group": "Aril-Triazolinonas / Glicinas"
      },
      {
        "id": 74,
        "product": "CANELCROP",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 75,
        "product": "CANTUS",
        "ingredient": "BOSCALID",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Carboxamidas"
      },
      {
        "id": 76,
        "product": "CAÑEX 80",
        "ingredient": "DIURON",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Herbicida",
        "group": "Ureas sustituidas"
      },
      {
        "id": 77,
        "product": "CAPSIALIL",
        "ingredient": "EXTRACTO DE AJO + EXTRACTO DE CHILE",
        "maker": "GOWAN MEXICANA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 78,
        "product": "CAPSIKRON",
        "ingredient": "EXTRACTO DE AJO, CAPSAICINA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 79,
        "product": "CAPTAN 50 PH",
        "ingredient": "CAPTAN",
        "maker": "BAYER DE MEXICO",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 80,
        "product": "CAPTAN 50 PLUS",
        "ingredient": "CAPTAN",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 81,
        "product": "CAPTAN 50 WP",
        "ingredient": "CAPTAN",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 82,
        "product": "CAPTAN 500",
        "ingredient": "CAPTAN",
        "maker": "MEZCLAS Y FERTILIZANTES, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 83,
        "product": "CAPTAN ULTRA 50 WP",
        "ingredient": "CAPTAN",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 84,
        "product": "CERCOBIN-M",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 85,
        "product": "CINETO 600 PH",
        "ingredient": "THIABENDAZOLE (TIABENDAZOL)",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Fungicida",
        "group": "Benzimi-dazol"
      },
      {
        "id": 86,
        "product": "CINNERATE",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "SEIPASA MEXICO SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 87,
        "product": "CITROTEC PLUS",
        "ingredient": "EXTRACTO CITRICO + CANELA",
        "maker": "GRUPO AGROTECNOLOGIA MEXICO TCB e Iberfol S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 88,
        "product": "COATL 250 CE",
        "ingredient": "DIFENOCONAZOL",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Fungicida",
        "group": "Triazol"
      },
      {
        "id": 89,
        "product": "COBRE HX ",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "AGROQUIMICA TRIDENTE, SA DE CV",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 90,
        "product": "COMET",
        "ingredient": "SULFATO DE COBRE ",
        "maker": "CUPROSA, S.A. DE C.V. ",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 91,
        "product": "CONCORD 100 CE",
        "ingredient": "BIFENTRINA",
        "maker": "GOWAN MEXICANA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 92,
        "product": "CONFIDOR 350 SC",
        "ingredient": "IMIDACLOPRID",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Neonicotinoides"
      },
      {
        "id": 93,
        "product": "CONFIRM* 2F ",
        "ingredient": "TEBUFENOZIDE",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Insecticida",
        "group": "Diacilhidrazinas"
      },
      {
        "id": 94,
        "product": "CONTACTO 4%",
        "ingredient": "MALATHION",
        "maker": "MEZCLAS Y FERTILIZANTES, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 95,
        "product": "CONTROL XLP 40 PH",
        "ingredient": "MYCLOBUTANIL",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Triazoles"
      },
      {
        "id": 96,
        "product": "COPOXY MAX",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "CHEMINOVA AGROQUIMICA",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 97,
        "product": "CORAGEN 20 SC",
        "ingredient": "CLORANTRANILIPROL",
        "maker": "DUPONT MEXICANA",
        "category": "Insecticida",
        "group": "Diamidas antranílicas"
      },
      {
        "id": 98,
        "product": "CORAGEN 20 SC",
        "ingredient": "CLORANTRANILIPROL",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Diamidas antranílicas"
      },
      {
        "id": 99,
        "product": "COSMOSUL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "COSMOCEL, S.A.",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 100,
        "product": "CRISATRYN 0.2% PH",
        "ingredient": "PIRETRINAS",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 101,
        "product": "CUEVA",
        "ingredient": "OCTANOATO DE COBRE",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Fungicida",
        "group": "Inorganios "
      },
      {
        "id": 102,
        "product": "CUPERHIDRO",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 103,
        "product": "CUPERQUIMM ",
        "ingredient": "SULFATO DE COBRE ",
        "maker": "INTERNACIONAL QUIMICA DE COBRE (AGROIQC)",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 104,
        "product": "CUPERTRON",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Metales pesados"
      },
      {
        "id": 105,
        "product": "CUPRAVIT",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "BAYER DE MEXICO",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 106,
        "product": "CUPROX 58",
        "ingredient": "ÓXIDO CUPROSO",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Sales de cobre          "
      },
      {
        "id": 107,
        "product": "DACTHAL W-75 ",
        "ingredient": "Clortal dimetil  (DCPA)",
        "maker": "AMVAC MEXICO",
        "category": "Herbicida",
        "group": "Ácido benzoico"
      },
      {
        "id": 108,
        "product": "DEBUG TURBO",
        "ingredient": "ACEITE DE MARGOSA, AZADIRECTINA",
        "maker": "ALS DE MEXICO S DE RL DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 109,
        "product": "DES-X",
        "ingredient": "SALES POTASICAS DE ACIDOS GRASOS",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 110,
        "product": "DEVRINOL 240 E",
        "ingredient": "Napropamida ",
        "maker": "UPM DE MEXICO",
        "category": "Herbicida",
        "group": "Acetamida"
      },
      {
        "id": 111,
        "product": "DIABLOSTAR",
        "ingredient": "BIFENTRINA",
        "maker": "AGROQUIMICA TRIDENTE, SA DE CV",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 112,
        "product": "DIAZINON 25 CE",
        "ingredient": "DIAZINÓN",
        "maker": "AGROMUNDO, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 113,
        "product": "DIAZINON DRAGON 25 E ",
        "ingredient": "DIAZINON",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 114,
        "product": "DIAZISTAR 25 CE",
        "ingredient": "DIAZINON",
        "maker": "QUIMICA LUCAVA",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 115,
        "product": "DIBROM 8 ",
        "ingredient": "NALED",
        "maker": "QUIMICA AMVAC DE MEXICO,\nS.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 116,
        "product": "DIE SOAP K",
        "ingredient": "SALES POTASICAS DE ACIDOS GRASOS",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 117,
        "product": "DIFO 250 EC",
        "ingredient": "DIFENOCONAZOL",
        "maker": "SHARDA DE MEXICO S DE RL DE CV",
        "category": "Fungicida",
        "group": "Triazol"
      },
      {
        "id": 118,
        "product": "DIMETOATO 400 CE",
        "ingredient": "DIMETOATO",
        "maker": "GOWAN MEXICANA",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 119,
        "product": "DIPEL DF",
        "ingredient": "BACILLUS THURINGIENSIS (kurstaki)",
        "maker": "VALENT DE MEXICO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 120,
        "product": "DIRAXTRA 80",
        "ingredient": "AZADIRACTINA",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 121,
        "product": "DIRAXTRA80",
        "ingredient": "AZADIRACTINA",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 122,
        "product": "DIURON 80 WP",
        "ingredient": "DIURON",
        "maker": "BAYER DE MEXICO",
        "category": "Herbicida",
        "group": "Ureas sustituidas"
      },
      {
        "id": 123,
        "product": "DOMARK",
        "ingredient": "TETRACONAZOLE",
        "maker": "FMC AGROQUIMICA",
        "category": "Fungicida",
        "group": "Triazol"
      },
      {
        "id": 124,
        "product": "DOUBLE NICKEL 55WG",
        "ingredient": "BACILLUS SUBTILIS VAR. AMYLOLIQUEFACIENS CEPA D747",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Biopesticida",
        "group": "Bacillus sp. And the fungicidal lipopeptides produced"
      },
      {
        "id": 125,
        "product": "DOUBLE NICKEL LC",
        "ingredient": "BACILLUS SUBTILIS VAR. AMYLOLIQUEFACIENS CEPA D747",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Biopesticida",
        "group": "Bacillus sp. And the fungicidal lipopeptides produced"
      },
      {
        "id": 126,
        "product": "DROXIVEL",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "VELSIMEX",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 127,
        "product": "EBIOLUZION PLUS Vo",
        "ingredient": "ACEITE DE PIMIENTA NEGRA, CANELA, AJO, NEEM, CLAVO, ALLIUM, OLIVA",
        "maker": "GREEN CORP",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 128,
        "product": "ECOSWING",
        "ingredient": "EXTRACTO DE SWINGLEA GLUTINOSA BLANCO MERR",
        "maker": "GOWAN MEXICANA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 129,
        "product": "ECOTEC",
        "ingredient": "ACEITE DE ROMERO, ACEITE DE HIERBABUENA",
        "maker": "DISTRIBUCIONES IMEX",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 130,
        "product": "ECOTROL",
        "ingredient": "ACEITE DE ROMERO, MENTA Y GERANIOL",
        "maker": "AGRINBIO SA DE CV",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 131,
        "product": "ECOZIN 3% CE",
        "ingredient": "AZADIRACTINA",
        "maker": "AMVAC MEXICO",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 132,
        "product": "EDAY",
        "ingredient": "VERTICILLIUM LECANII",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 133,
        "product": "ELEVAT",
        "ingredient": "FENHEXAMID",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Hidroxianilidas"
      },
      {
        "id": 134,
        "product": "ENABLE ",
        "ingredient": "FENBUCONAZOL",
        "maker": "DOW AGROSCIENCES",
        "category": "Fungicida",
        "group": "Triazoles"
      },
      {
        "id": 135,
        "product": "ENDORSE WDG",
        "ingredient": "POLYOXIN D SAL DE ZINC",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Polioxinas"
      },
      {
        "id": 136,
        "product": "ENTRUST SC / SPINTOR GREEN\n",
        "ingredient": "SPINOSAD",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Spinosines"
      },
      {
        "id": 137,
        "product": "EPA 90",
        "ingredient": "ACEITE VEGETAL DE SEMILLA DE SOYA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 138,
        "product": "EPA 90 / PROTECTOR 90 / PROTECTOR 90 PLUS / ASPHIX 90 / NOTOX 90",
        "ingredient": "ACEITE VEGETAL DE SEMILLA DE SOYA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 139,
        "product": "EQUATION PRO",
        "ingredient": "FAMOXADONA + CYMOXANIL",
        "maker": "DUPONT MEXICANA",
        "category": "Fungicida",
        "group": "oxazolidenidionas / cymoxanyl"
      },
      {
        "id": 140,
        "product": "ESCUDO 7 GR",
        "ingredient": "BIFENTRINA + IMIDACLOPRID",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides/ Neonicotinoide"
      },
      {
        "id": 141,
        "product": "EVERGREEN 6% CE",
        "ingredient": "PIRETRINA + BUTÓXIDO DE PIPERONILO",
        "maker": "DISTRIBUCIONES IMEX",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 142,
        "product": "EXALT / PALGUS",
        "ingredient": "SPINETORAM",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Spinosines"
      },
      {
        "id": 143,
        "product": "EXODUS MAX",
        "ingredient": "EXTRACTO CITRICO",
        "maker": "NANO AGRO SOLUTION",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 144,
        "product": "FAENA CLASICO",
        "ingredient": "GLIFOSATO",
        "maker": "MONSANTO",
        "category": "Herbicida",
        "group": "Glicina"
      },
      {
        "id": 145,
        "product": "FAMSTER",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 146,
        "product": "FLANCO",
        "ingredient": "HEXITIAZOX",
        "maker": "AMVAC MEXICO",
        "category": "Insecticida",
        "group": "Carboxamidas"
      },
      {
        "id": 147,
        "product": "FLINT",
        "ingredient": "TRIFLOXYSTROBIN",
        "maker": "BAYER DE MEXICO",
        "category": "Fungicida",
        "group": "Oximino acetatos"
      },
      {
        "id": 148,
        "product": "FLWAZ 725 L",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "SINTESIS Y FORMULACIONES DE ALTA TECNOLOGIA (SIFATEC)",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 149,
        "product": "FLY NOT",
        "ingredient": "EXTRACTO DE QUILLAY",
        "maker": "ECOPROTECTO, S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 150,
        "product": "FOLPAN 80WDG",
        "ingredient": "FOLPET",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Phthalimide"
      },
      {
        "id": 151,
        "product": "FONTELIS",
        "ingredient": "PENTIOPIRAD",
        "maker": "DUPONT MEXICANA",
        "category": "Fungicida",
        "group": "Pirazolcar-boxamida"
      },
      {
        "id": 152,
        "product": "FOS POT IN",
        "ingredient": "FOSFITO ACIDO DE POTASIO",
        "maker": "SINTESIS Y FORMULACIONES DE ALTA TECNOLOGIA (SIFATEC)",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 153,
        "product": "FRACTAL",
        "ingredient": "EXTRACTO DE SEMILLA DE CITRICOS",
        "maker": "BERNIS LABS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 154,
        "product": "FUBAGRO",
        "ingredient": "EXTRACTO VEGETAL DE GOBERNADROA, EXTRACTO VEGETAL DE PINO, EXTRACTO VEGETAL DE ACIDO CITRICO",
        "maker": "ECOPROTECTO, S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 155,
        "product": "FUNGIFREE -AB",
        "ingredient": "BACILLUS SUBTILIS",
        "maker": "FMC AGROQUIMICA",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 156,
        "product": "FUNGISEI",
        "ingredient": "BACILLUS SUBTILIS  BS03",
        "maker": "SEIPASA MEXICO SA DE CV",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 157,
        "product": "FUNQUI",
        "ingredient": "TRICHODERMA VIRIDE",
        "maker": "QUIMICA INTERNACIONAL APLICADA S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 158,
        "product": "FUNSIN 70 ",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "SINTESIS Y FORMULACIONES DE ALTA TECNOLOGIA (SIFATEC)",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 159,
        "product": "FYFANON 1000 ",
        "ingredient": "MALATHION",
        "maker": "CHEMINOVA AGROQUIMICA",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 160,
        "product": "GATILLO",
        "ingredient": "ABAMECTINA + BIFENTRINA",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Insecticida",
        "group": "Avermectinas, Piretroides"
      },
      {
        "id": 161,
        "product": "GIRO 375 CE",
        "ingredient": "FENPROPATRIN",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 162,
        "product": "GOAL 2XL",
        "ingredient": "OXIFLUORFEN",
        "maker": "DOW AGROSCIENCES",
        "category": "Herbicida",
        "group": "Diphenyl ether "
      },
      {
        "id": 163,
        "product": "GRAMOCIL",
        "ingredient": "PARAQUAT + DIURON",
        "maker": "SYNGENTA AGRO",
        "category": "Herbicida",
        "group": "Bipiridilos/ Urea"
      },
      {
        "id": 164,
        "product": "GRAMOXONE",
        "ingredient": "PARAQUAT",
        "maker": "SYNGENTA AGRO",
        "category": "Herbicida",
        "group": "Bipiridilos"
      },
      {
        "id": 165,
        "product": "GRAMURON",
        "ingredient": "PARAQUAT + DIURON",
        "maker": "VELSIMEX",
        "category": "Herbicida",
        "group": "Bipiridilos/ Urea"
      },
      {
        "id": 166,
        "product": "GRANDEVO",
        "ingredient": "CHROMOBACTERIUM SUBTSUGAE",
        "maker": "AGRI-ESTRELLA S DE RL DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 167,
        "product": "HEADLINE",
        "ingredient": "PIROCLASTROBINA",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "metoxi carbamatos"
      },
      {
        "id": 168,
        "product": "HELFOSAT",
        "ingredient": "GLIFOSATO",
        "maker": "HELM DE MEXICO",
        "category": "Herbicida",
        "group": "Glicina"
      },
      {
        "id": 169,
        "product": "HELMFIDOR",
        "ingredient": "IMIDACLOPRID",
        "maker": "HELM DE MEXICO",
        "category": "Insecticida",
        "group": "Neonicotinoides"
      },
      {
        "id": 170,
        "product": "HERALD 375 CE",
        "ingredient": "FENPROPATRIN",
        "maker": "VALENT DE MEXICO",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 171,
        "product": "HERCULES 5G",
        "ingredient": "DIAZINON",
        "maker": "PROVINDUSTRIAS DE OCCIDENTE, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 172,
        "product": "HERO",
        "ingredient": "BIFENTRINA / Z- CYPERMETRINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides "
      },
      {
        "id": 173,
        "product": "HIDROCOB-77",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 174,
        "product": "HIDROFLOW",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 175,
        "product": "HIDROFLOWABLE",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "FLUENTES DE MEXICO, S.A. DE\nC.V.",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 176,
        "product": "HIDROMET-FLO",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "CUPROSA, S.A. DE C.V. ",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 177,
        "product": "HORTA 25 TRIDENTE",
        "ingredient": "DIAZINÓN",
        "maker": "AGROQUIMICA TRIDENTE, SA DE CV",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 178,
        "product": "HORTIMEC  1.8%",
        "ingredient": "ABAMECTINA",
        "maker": "AGROQUIMICA TRIDENTE, SA DE CV",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 179,
        "product": "IMIDAN 50 PH",
        "ingredient": "FOSMET ",
        "maker": "GOWAN MEXICANA",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 180,
        "product": "IMPACTO 30-30",
        "ingredient": "EXTRACTO DE NEEM, AJO Y CRISANTEMO",
        "maker": "AGROSOL DEL PACIFICO SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 181,
        "product": "IMPALA 250 SC",
        "ingredient": "AZOXYSTROBIN",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Metoxi-acrilatos"
      },
      {
        "id": 182,
        "product": "IMPIDE",
        "ingredient": "SALES POTASICAS DE ACIDOS GRASOS",
        "maker": "GOWAN MEXICANA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 183,
        "product": "INMUNIL",
        "ingredient": "FOSETIL-AL",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Fungicida",
        "group": "Alcoil fosfonatos "
      },
      {
        "id": 184,
        "product": "INSTARD AD",
        "ingredient": "ABAMECTINA",
        "maker": "ADAMA MEXICO",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 185,
        "product": "INTERCAPTAN 50 PH",
        "ingredient": "CAPTAN",
        "maker": "INTERNACIONAL QUIMICA DE COBRE (AGROIQC)",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 186,
        "product": "INTERCAPTAN FLUABLE",
        "ingredient": "CAPTAN",
        "maker": "INTERNACIONAL QUIMICA DE COBRE (AGROIQC)",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 187,
        "product": "INTREPID",
        "ingredient": "METOXIFENOCIDA",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Diacilhidracinas"
      },
      {
        "id": 188,
        "product": "JAVELIN WG",
        "ingredient": "BACILLUS THURINGIENSIS ",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "Insecticidas biologicos"
      },
      {
        "id": 189,
        "product": "KABON/SAVON",
        "ingredient": "OLEINA DE PALMA AFRICANA",
        "maker": "ATLANTICA AGRICOLA MEXICANA, SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 190,
        "product": "KALIGREEN",
        "ingredient": "BICARBONATO DE POTASIO",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 191,
        "product": "KANEMITE 15 SC",
        "ingredient": "ACEQUINOCYL",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Insecticida",
        "group": "Acequinocil"
      },
      {
        "id": 192,
        "product": "KARMEX",
        "ingredient": "DIURON",
        "maker": "ADAMA MEXICO",
        "category": "Herbicida",
        "group": "Urea"
      },
      {
        "id": 193,
        "product": "KATOR 80 PH",
        "ingredient": "DIURON",
        "maker": "VELSIMEX",
        "category": "Herbicida",
        "group": "Ureas sustituidas"
      },
      {
        "id": 194,
        "product": "KATSU 5% EW",
        "ingredient": "CIFLUFENAMID",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Fungicida",
        "group": "phenyl-acetamide"
      },
      {
        "id": 195,
        "product": "KENJA 400 SC",
        "ingredient": "ISOFETAMID",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "fenil-oxo-etil-tiofeno-amida"
      },
      {
        "id": 196,
        "product": "KOCIDE 2000",
        "ingredient": "HIDROXIDO CUPRICO",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 197,
        "product": "KROX 123 EA",
        "ingredient": "ARGENINA, BERBERINA, RICININA, TERTHIENIL",
        "maker": "SIFATEC SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 198,
        "product": "KUMULUS DF",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 199,
        "product": "KYGO 250 WG",
        "ingredient": "TIAMETOXAM",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Neonicotinoides"
      },
      {
        "id": 200,
        "product": "LABRADOR",
        "ingredient": "TRICHODERMA HARZIANUM",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 201,
        "product": "LAFAM SG",
        "ingredient": "GLIFOSATO",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Herbicida",
        "group": "Glicina "
      },
      {
        "id": 202,
        "product": "LARBIOL 2X",
        "ingredient": "CONIDIOS DE BAEVERIA BASSIANA, CONIDIOS DE NOMUREA RILEYI",
        "maker": "GREEN CORP",
        "category": "Biopesticida",
        "group": "Microbial "
      },
      {
        "id": 203,
        "product": "LARREA T",
        "ingredient": "EXTRACTO DE GOBERNADORA",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 204,
        "product": "LIFELINE 280 SL",
        "ingredient": "GLUFOSINATO DE AMONIO",
        "maker": "UPL AGRO SA DE CV",
        "category": "Herbicida",
        "group": "Acido Fosfinico"
      },
      {
        "id": 205,
        "product": "LILA-PLUS",
        "ingredient": "PAECILOMYCES LILACINUS",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 206,
        "product": "LILA-SIN",
        "ingredient": "PAECILOMYCES LILACINUS",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 207,
        "product": "LILA-TRON",
        "ingredient": "PAECILOMYCES LILACINUS",
        "maker": "PLANT HEALTH CARE DE MEXICO S. DE R.L. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 208,
        "product": "LORSBAN 480",
        "ingredient": "CLORPIRIFOS ETIL",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 209,
        "product": "LORSBAN 75 WG",
        "ingredient": "CLORPIRIFOS ETIL",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 210,
        "product": "LUCAFLOW ",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "QUIMICA LUCAVA",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 211,
        "product": "LUCANAL 900 E",
        "ingredient": "NALED",
        "maker": "QUIMICA LUCAVA",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 212,
        "product": "LUCAPTAN",
        "ingredient": "CAPTAN",
        "maker": "QUIMICA LUCAVA",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 213,
        "product": "LUCATHION 1000E",
        "ingredient": "MALATHION",
        "maker": "QUIMICA LUCAVA",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 214,
        "product": "LUCATHION 50-E",
        "ingredient": "MALATHION",
        "maker": "QUIMICA LUCAVA",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 215,
        "product": "LUQ-THOR 1.8 CE",
        "ingredient": "ABAMECTINA",
        "maker": "CHEMINOVA AGROQUIMICA",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 216,
        "product": "MAGISTER 200 SC",
        "ingredient": "FENAZAQUIN",
        "maker": "GOWAN MEXICANA",
        "category": "Insecticida",
        "group": "Acaridas e Insecticidas METI"
      },
      {
        "id": 217,
        "product": "MALATHION 1000 E ",
        "ingredient": "MALATHION",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 218,
        "product": "MALATION 1000 CE",
        "ingredient": "MALATHION",
        "maker": "MEZCLAS Y FERTILIZANTES, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 219,
        "product": "MALATION 1000 TRIDENTE",
        "ingredient": "MALATION",
        "maker": "AGROQUIMICA TRIDENTE, SA DE CV",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 220,
        "product": "MANAGER 350 SC",
        "ingredient": "IMIDACLOPRID",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Cloronicotinilos"
      },
      {
        "id": 221,
        "product": "MASSADA MAX 32 CE",
        "ingredient": "Z-CYPERMETRINA / NOVALURON",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides /  Benzoylureas"
      },
      {
        "id": 222,
        "product": "MASTERCOP",
        "ingredient": "SULFATO DE COBRE",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Sales de cobre"
      },
      {
        "id": 223,
        "product": "MAXTROBIN",
        "ingredient": "AZOXYSTROBIN",
        "maker": "HELM DE MEXICO",
        "category": "Fungicida",
        "group": "Estrobirulinas"
      },
      {
        "id": 224,
        "product": "MERIVON",
        "ingredient": "FLUXAPYROXAD + PIRACLOSTROBINA",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Pyrazole-4-Carboximidas, Metoxi Carbamatos"
      },
      {
        "id": 225,
        "product": "MERTECT 340 F",
        "ingredient": "THIABENDAZOLE (TIABENDAZOL)",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Benzimi-dazol"
      },
      {
        "id": 226,
        "product": "METASYSTOX R-25",
        "ingredient": "OXIDEMETON METIL",
        "maker": "UPL AGRO SA DE CV",
        "category": "Insecticida",
        "group": "Organo-fosforado"
      },
      {
        "id": 227,
        "product": "METIL TIOFANATO 70 PH",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "HELM DE MEXICO",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 228,
        "product": "MICONATO",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "QUIMICA LUCAVA",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 229,
        "product": "MICROTHIOL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "VALENT DE MEXICO",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 230,
        "product": "MILSTOP PLUS",
        "ingredient": "BICARBONATO DE POTASIO",
        "maker": "PLANT HEALTH CARE DE MEXICO S. DE R.L. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 231,
        "product": "MIMOTEN",
        "ingredient": "EXTRACTO DE MIMOSA TENUIFLORA",
        "maker": "ATLANTICA AGRICOLA MEXICANA, SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 232,
        "product": "MIX PROTECTIVE CU",
        "ingredient": "HIDROXIDO DE COBRE / OLEATO VEGETAL",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Fungicida",
        "group": "Inorganicos"
      },
      {
        "id": 233,
        "product": "MIX PROTECTIVEE A",
        "ingredient": "EXTRACTO ESCENCIAL DE AJO",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 234,
        "product": "MIX PROTECTIVEE A",
        "ingredient": "EXTRACTO ESCENCIAL DE AJO",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 235,
        "product": "MIX PROTECTIVEE C",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 236,
        "product": "MIX PROTECTIVEE M",
        "ingredient": "EXTRACTO DE MOSTAZA",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 237,
        "product": "MIX PROTECTIVEE N",
        "ingredient": "EXTRACTO DE ACEITE DE NEEM ",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 238,
        "product": "MIX PROTECTIVEE-S",
        "ingredient": "AZUFRE COLOIDAL",
        "maker": "AGROSANIDAD SA DE CV",
        "category": "Biopesticida",
        "group": "Inorganicos"
      },
      {
        "id": 239,
        "product": "MIXXERT",
        "ingredient": "EXTRACTO DE CUASSIA+CANELA+AJO+CHILE",
        "maker": "ZARE AGRHOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 240,
        "product": "MOVENTO",
        "ingredient": "SPIROTETRAMAT",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Acido tetramico"
      },
      {
        "id": 241,
        "product": "MUSTANG MAX EW",
        "ingredient": "ZETA- CIPERMETRINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 242,
        "product": "MUSTANG MAX EW/ FURY EW / FURIA EW   / ORIX EW",
        "ingredient": "ZETA- CIPERMETRINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 243,
        "product": "NALED 90",
        "ingredient": "NALED",
        "maker": "ANAJALSA SA DE CV",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 244,
        "product": "NARIA TOP",
        "ingredient": "PYRACLOSTROBINA + DIMETOMORF",
        "maker": "BASF MEXICANA",
        "category": "Fungicida",
        "group": "Metoxi carbamatos /  Amidas de acido cinamico"
      },
      {
        "id": 245,
        "product": "NATUCONTROL",
        "ingredient": "TRICHODERMA HARZIANUM",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 246,
        "product": "NATURDAI MIM",
        "ingredient": "EXTRACTO DE MIMOSA + QUERCUS",
        "maker": "IDAI NATURE",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 247,
        "product": "NEALTA",
        "ingredient": "CIFLUMETOFEN",
        "maker": "BASF MEXICANA",
        "category": "Insecticida",
        "group": "Beta-ketonitrilo"
      },
      {
        "id": 248,
        "product": "NEEM CE 80",
        "ingredient": "EXTRACTO DE ACEITE DE NEEM ",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 249,
        "product": "NEEMIX 4.5",
        "ingredient": "AZADIRACTINA",
        "maker": "CERTIS AGRO",
        "category": "Insecticida",
        "group": "Limonoide"
      },
      {
        "id": 250,
        "product": "NEEMIX 4.5",
        "ingredient": "AZADIRACTINA",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Insecticida",
        "group": "Limonoide"
      },
      {
        "id": 251,
        "product": "NEMAQUIM",
        "ingredient": "PAECILOMYCES VARIOTII",
        "maker": "QUIMICA INTERNACIONAL APLICADA S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 252,
        "product": "NEMESIS CE",
        "ingredient": "AZADIRACTINA",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 253,
        "product": "NEWBT-2X-WP",
        "ingredient": "BACILLUS THURINGIENSIS ",
        "maker": "DISTRIBUCIONES IMEX",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 254,
        "product": "NOVAZUFRE 720 FW",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "CENTRAL AGROINDUSTRIAL MEXIQUENSE, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 255,
        "product": "OBERON ",
        "ingredient": "SPIROMESIFEN ",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Ácido tetrónico"
      },
      {
        "id": 256,
        "product": "OBERON SPEED/OBERON KD",
        "ingredient": "SPIROMESIFEN/ ABAMECTINA",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Ácido tetrónico / Avermectinas"
      },
      {
        "id": 257,
        "product": "OXICEL",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "COSMOCEL, S.A.",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 258,
        "product": "OXICOB 85",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Sales de cobre          "
      },
      {
        "id": 259,
        "product": "OXICU PH",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "AGRI-ESTRELLA S DE RL DE CV",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 260,
        "product": "OXIDATE 2.0",
        "ingredient": "DIOXIDO DE HIDROGENO + ACIDO PEROXIACETICO",
        "maker": "BIOSAFE SYSTEMS, LLC",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 261,
        "product": "OXIFLOWABLE",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "FLUENTES DE MEXICO, S.A. DE\nC.V.",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 262,
        "product": "OXIMET-FLO",
        "ingredient": "OXICLORURO DE COBRE",
        "maker": "CUPROSA, S.A. DE C.V. ",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 263,
        "product": "PAECIL",
        "ingredient": "PAECILOMYCES FUMOSOROSEUS",
        "maker": "BIOAMIN, SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 264,
        "product": "PAECIL / BIOAMIN-INSECT-1",
        "ingredient": "PAECILOMYCES FUMOSOROSEUS",
        "maker": "BIOAMIN, SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 265,
        "product": "PAE-SIN",
        "ingredient": "PAECILOMYCES FUMOSOROSEUS",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 266,
        "product": "PARAQUAT 200",
        "ingredient": "PARAQUAT",
        "maker": "GOWAN MEXICANA",
        "category": "Herbicida",
        "group": " Bipiridilos"
      },
      {
        "id": 267,
        "product": "PESTIL OUT",
        "ingredient": "ACEITE DE NEEM,  OLEORRESINAS DE CAPSICUM, EXTRACTOS FRESCOS DE ALLIUM SPP, ACIDOS GRASOS DEL TIPO OMEGA 3, TERPENOS CITRICOS, EXTRACTO DE YUCA",
        "maker": "GREEN CORP",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 268,
        "product": "PEXT 18 CE",
        "ingredient": "ABAMECTINA",
        "maker": "SIFATEC SA DE CV",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 269,
        "product": "PFR 97 20% WDG",
        "ingredient": "ISARIA FUMOSOROSEUS",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 270,
        "product": "PFR-97 20% CE",
        "ingredient": "ISARIA FUMOSOROSEUS",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 271,
        "product": "PFR-97 20% WDG",
        "ingredient": "ISARIA FUMOSOROSEUS",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 272,
        "product": "PHC CONDOR",
        "ingredient": "BACILLUS THURINGIENSIS (kurstaki)",
        "maker": "PLANT HEALTH CARE MEXICO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 273,
        "product": "PHC NEEM",
        "ingredient": "AZADIRACTINA",
        "maker": "PLANT HEALTH CARE MEXICO",
        "category": "Biopesticida",
        "group": "Azadiractina"
      },
      {
        "id": 274,
        "product": "PHC T-22",
        "ingredient": "TRICHODERMA HARZIANUM",
        "maker": "PLANT HEALTH CARE MEXICO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 275,
        "product": "PHYTON 27",
        "ingredient": "SULFATO DE COBRE PENTAHIDRATADO",
        "maker": "DISTRIBUCIONES IMEX",
        "category": "Fungicida",
        "group": "Sales de cobre          "
      },
      {
        "id": 276,
        "product": "PICKAROF",
        "ingredient": "EXTRACTO DE AJO, RUDA, CHILE Y AGAVE",
        "maker": "PHYTOS HORTICULTURA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 277,
        "product": "PIRECRIS / BIOCRIFOL",
        "ingredient": "PIRETRINA",
        "maker": "SEIPASA MEXICO SA DE CV",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 278,
        "product": "PIREKRONE 0.2 PH",
        "ingredient": "PIRETRINA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 279,
        "product": "PIRELIUM",
        "ingredient": "PIRETRINA",
        "maker": "BIOKRONE SA DE CV",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 280,
        "product": "POAST",
        "ingredient": "SETHOXYDIM",
        "maker": "BASF MEXICANA",
        "category": "Herbicida",
        "group": "Ciclohexanodionas, Cicloexano oxima"
      },
      {
        "id": 281,
        "product": "PREV-AM",
        "ingredient": "ACEITE DE NARANJA",
        "maker": "AGROQUIMICA SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 282,
        "product": "PROCURE 480 SC",
        "ingredient": "TRIFLUMIZOLE",
        "maker": "VALENT DE MEXICO",
        "category": "Fungicida",
        "group": "Imidazol"
      },
      {
        "id": 283,
        "product": "PROGANIC GAMMA ",
        "ingredient": "EXTRACTO DE AJO/ EXTRACTO DE CHILE PICANTE/ EXTRACTO DE CANELA ",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 284,
        "product": "PROGANIC MEGA",
        "ingredient": "EXTRACTO DE GOBERNADORA",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 285,
        "product": "PROGANIC NEEMACAR",
        "ingredient": "EXTRACTO DE NEEM Y CANELA",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 286,
        "product": "PROGANIC NIMICIDE 80 ",
        "ingredient": "EXTRACTO DE ACEITE DE NEEM ",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 287,
        "product": "PROGANIC OMEGA ",
        "ingredient": "EXTRACTO DE CHICALOTE",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 288,
        "product": "PROGRANIC CIMAX",
        "ingredient": "ACEITE VEGETAL DE MAIZ",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 289,
        "product": "PROGRANIC CINNACAR / BIOCINNAMON",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 290,
        "product": "PROGRANIC CINNACAR/ ",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 291,
        "product": "PROGRANIC MIX-TOP",
        "ingredient": "BICARBONATO DE POTASIO",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 292,
        "product": "PROGRANIC NEEMACAR",
        "ingredient": "EXTRACTO DE NEEM Y CANELA",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 293,
        "product": "PROGRANIC NEEMACAR CE",
        "ingredient": "EXTRACTO DE NEEM Y CANELA",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 294,
        "product": "PROGRANIC PIRETRO",
        "ingredient": "EXTRACTO DE TAGETES",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 295,
        "product": "PRONTIUS",
        "ingredient": "TIOFANATO DE METILO",
        "maker": "PROMOTORA TECNICA INDUSTRIAL, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Tiofanato"
      },
      {
        "id": 296,
        "product": "PROPERTY 300 SC",
        "ingredient": "PYRIOFENONE",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Benzoylpyridina"
      },
      {
        "id": 297,
        "product": "PROTECTIN  1.8 ",
        "ingredient": "ABAMECTINA",
        "maker": "HELM DE MEXICO",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 298,
        "product": "PROXY 100 EC / STONE 100 CE",
        "ingredient": "PIRIPROXIFEN",
        "maker": "KOOR INTERNATIONAL SA",
        "category": "Insecticida",
        "group": "Piridinas"
      },
      {
        "id": 299,
        "product": "PULL 75 WG",
        "ingredient": "OXIDO CUPROSO",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Fungicida",
        "group": "NA"
      },
      {
        "id": 300,
        "product": "PYREMAX",
        "ingredient": "PIRETRINA",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 301,
        "product": "PYRETHRUM 5% CE",
        "ingredient": "PIRETRINA",
        "maker": "ALTIARA / AGRICOLA INOVACION",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 302,
        "product": "QL AGRI 35",
        "ingredient": "EXTRACTO DE QUILLAY",
        "maker": "BASF MEXICANA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 303,
        "product": "QUEMOXONE",
        "ingredient": "PARAQUAT",
        "maker": "HELM DE MEXICO",
        "category": "Herbicida",
        "group": " Bipiridilos"
      },
      {
        "id": 304,
        "product": "QUILT / QUILT 200 SE",
        "ingredient": "AZOXYSTROBIN + PROPICONAZOL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Estrobirulinas / Triazoles"
      },
      {
        "id": 305,
        "product": "QUIMI-THION 1000 F",
        "ingredient": "MALATHION",
        "maker": "QUIM. AGRICOLA DEL VALLE\nDE CULIACAN, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 306,
        "product": "QUINTEC",
        "ingredient": "QUINOXIFEN",
        "maker": "DOW AGROSCIENCES",
        "category": "Fungicida",
        "group": "Aroloxi quinolina"
      },
      {
        "id": 307,
        "product": "RALLY 40 W",
        "ingredient": "MICLOBUTANIL",
        "maker": "DOW AGROSCIENCES",
        "category": "Fungicida",
        "group": "Triazol"
      },
      {
        "id": 308,
        "product": "RALLY 40 W /EAGLE 40W ",
        "ingredient": "MYCLOBUTANIL",
        "maker": "DOW AGROSCIENCES",
        "category": "Fungicida",
        "group": "Triazoles"
      },
      {
        "id": 309,
        "product": "REGALIA MAXX",
        "ingredient": "EXTRACTO DE REYNOUTRIA SACHALINENSIS",
        "maker": "FMC AGROQUIMICA",
        "category": "Biopesticida",
        "group": "Mezcla compuesta, extracto de etanol"
      },
      {
        "id": 310,
        "product": "REQUIEM",
        "ingredient": "EXTRACTO DE Chenopodium ambrosioides",
        "maker": "BAYER DE MEXICO",
        "category": "Biopesticida",
        "group": "Insecticidas biologicos"
      },
      {
        "id": 311,
        "product": "RESCATE 20 PS/MOSPILAN",
        "ingredient": "ACETAMIPRID",
        "maker": "SUMMIT AGRO MEXICO",
        "category": "Insecticida",
        "group": "Cloronicotinilos"
      },
      {
        "id": 312,
        "product": "RETRIX4",
        "ingredient": "EXTRACTO DE TAGETES",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 313,
        "product": "RIDOMIL GOLD 480 SL",
        "ingredient": "METALAXIL-M (MEFENOXAM)",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Acylalaninas"
      },
      {
        "id": 314,
        "product": "RIDOMIL GOLD 480 SL / RIDOMIL GOLD 480 CS/ FOLIO 480 SL/ FOLIO 480 CS",
        "ingredient": "METALAXIL-M (MEFENOXAM)",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Acylalaninas"
      },
      {
        "id": 315,
        "product": "RIMON 100 CE",
        "ingredient": "NOVALURON",
        "maker": "ADAMA MEXICO",
        "category": "Insecticida",
        "group": "Benzoilureas"
      },
      {
        "id": 316,
        "product": "RIZIUMAX",
        "ingredient": "METARHIZIUM ANISOPLIAE",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "Microbial "
      },
      {
        "id": 317,
        "product": "RODEO 50 PH",
        "ingredient": "CAPTAN",
        "maker": "PETRO DE OCCIDENTE, S.A.\nDE C.V.",
        "category": "Fungicida",
        "group": "Carboximidas"
      },
      {
        "id": 318,
        "product": "ROLLING 720 ",
        "ingredient": "CLOROTALONIL",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Cloroftalonitrilos"
      },
      {
        "id": 319,
        "product": "ROOTSHIELD PLUS",
        "ingredient": "TRICHODERMA HARZIANUM T-22  + TRIHOCERMA VIRIDENS G-41",
        "maker": "PLANT HEALTH CARE DE MEXICO S. DE R.L. DE C.V.",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 320,
        "product": "ROTAMIK 1.8% CE ",
        "ingredient": "ABAMECTINA",
        "maker": "ROTAM MEXICO, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 321,
        "product": "ROVRAL 50 PH",
        "ingredient": "IPRODIONA",
        "maker": "FMC AGROQUIMICA",
        "category": "Fungicida",
        "group": "Dicarboximidas"
      },
      {
        "id": 322,
        "product": "SAF-T-SIDE",
        "ingredient": "ACEITE PARAFINICO DE PETROLEO",
        "maker": "DISTRIBUCIONES IMEX",
        "category": "Insecticida",
        "group": "NA"
      },
      {
        "id": 323,
        "product": "SAGASUL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "QUIMICA SAGAL, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorganico"
      },
      {
        "id": 324,
        "product": "SANAZOLE 250 EC",
        "ingredient": "PROPICONAZOL",
        "maker": "VELSIMEX",
        "category": "Fungicida",
        "group": "Triazoles                                                 "
      },
      {
        "id": 325,
        "product": "SAVEY 50 GD",
        "ingredient": "HEXITIAZOX",
        "maker": "GOWAN MEXICANA",
        "category": "Insecticida",
        "group": "Carboxamidas"
      },
      {
        "id": 326,
        "product": "SCALA 60 SC",
        "ingredient": "PIRIMETANIL",
        "maker": "BAYER DE MEXICO",
        "category": "Fungicida",
        "group": "Anilinopirimidinas"
      },
      {
        "id": 327,
        "product": "SCORE 250 C.E.",
        "ingredient": "DIFENOCONAZOL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Triazol"
      },
      {
        "id": 328,
        "product": "SELECT ULTRA",
        "ingredient": "CLETHODIM",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Herbicida",
        "group": "Ciclohexanodionas"
      },
      {
        "id": 329,
        "product": "SEMPRA 75 GD",
        "ingredient": "HALOSULFORON METIL",
        "maker": "GOWAN MEXICANA",
        "category": "Herbicida",
        "group": "Sulfoniloreas"
      },
      {
        "id": 330,
        "product": "SERENADE MAX 14.6 / JAZZ WP",
        "ingredient": "BACILLUS SUBTILIS",
        "maker": "BAYER DE MEXICO",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 331,
        "product": "SERENADE OPTI",
        "ingredient": "BACILLUS SUBTILIS CEPA QST 713",
        "maker": "BAYER DE MEXICO",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 332,
        "product": "SERENADE SOIL",
        "ingredient": "BACILLUS SUBTILIS CEPA QST 713",
        "maker": "BAYER DE MEXICO",
        "category": "Biopesticida",
        "group": "Microbial"
      },
      {
        "id": 333,
        "product": "SERIFEL",
        "ingredient": "BACILLUS AMYLOLIQUEFACIENS CEPA MBI 600",
        "maker": "BASF MEXICANA",
        "category": "Biopesticida",
        "group": "Bacillus sp. And the fungicidal lipopeptides produced"
      },
      {
        "id": 334,
        "product": "SEVIN 80 PH",
        "ingredient": "CARBARILO",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Carbamatos"
      },
      {
        "id": 335,
        "product": "SEVIN 80% PH",
        "ingredient": "CARBARILO",
        "maker": "TESSENDERLO KERLEY MEXICO",
        "category": "Insecticida",
        "group": "Carbamatos"
      },
      {
        "id": 336,
        "product": "SHOGUN  500 FW",
        "ingredient": "FLUAZINAM",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "2,6-dinitro-\nanilines"
      },
      {
        "id": 337,
        "product": "SIMANEX 50 SC",
        "ingredient": "SIMAZINA",
        "maker": "EL VERGEL DE OCCIDENTE, S. A. DE C. V.",
        "category": "Herbicida",
        "group": "Triazinas"
      },
      {
        "id": 338,
        "product": "SIVANTO PRIME 200 SL",
        "ingredient": "FLUPYRADIFURONE",
        "maker": "BAYER DE MEXICO",
        "category": "Insecticida",
        "group": "Butenolides"
      },
      {
        "id": 339,
        "product": "SOILGARD 12G",
        "ingredient": "GLIOCADIUM VIRENS",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 340,
        "product": "SONATA",
        "ingredient": "BACILLUS PUMILLUS",
        "maker": "BASF MEXICANA",
        "category": "Biopesticida",
        "group": "Fungicida microbial (Bacillus sp.)"
      },
      {
        "id": 341,
        "product": "SPIDER MAX",
        "ingredient": "EXTRACTO DE CUASIA, ACEITE DE KARANKA, ACITE DE NEEM ",
        "maker": "INNOVACION AGRICOLA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 342,
        "product": "SPINTOR 12 SC / ALTER",
        "ingredient": "SPINOSAD",
        "maker": "DOW AGROSCIENCES",
        "category": "Insecticida",
        "group": "Espinosina"
      },
      {
        "id": 343,
        "product": "STAR AGRICOLA",
        "ingredient": "ARGENINA, BERBERINA, RICININA, TERTHIENIL",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 344,
        "product": "SULFAX XL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "GRUPO BIOQUIMICO\nMEXICANO, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorgánicos"
      },
      {
        "id": 345,
        "product": "SULFOCOP F",
        "ingredient": "AZUFRE ELEMENTAL + OXICLORURO DE COBRE",
        "maker": "AZUMOR, SA DE CV",
        "category": "Fungicida",
        "group": "Inorganicos"
      },
      {
        "id": 346,
        "product": "SULMAX XL",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "GRUPO BIOQUIMICO\nMEXICANO, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorgánicos"
      },
      {
        "id": 347,
        "product": "SULTRICOB 53",
        "ingredient": "SULFATO DE COBRE ",
        "maker": "ADAMA MEXICO",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 348,
        "product": "SULTRON 725",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Inorgánicos"
      },
      {
        "id": 349,
        "product": "SULTRON 725 XL ",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "GRUPO BIOQUIMICO\nMEXICANO, S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Inorgánicos"
      },
      {
        "id": 350,
        "product": "SUMATRUS",
        "ingredient": "FENPYROXIMATO",
        "maker": "AGROQUIMICOS VERSA SA DE CV",
        "category": "Insecticida",
        "group": "Metil acaricida e insecticida"
      },
      {
        "id": 351,
        "product": "SUMIALPHA XL",
        "ingredient": "ESFENVALERATO",
        "maker": "VALENT DE MEXICO",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 352,
        "product": "SUMIMAX ",
        "ingredient": "FLUMIOXAZIN",
        "maker": "VALENT DE MEXICO",
        "category": "Herbicida",
        "group": "Fenilftalimida"
      },
      {
        "id": 353,
        "product": "SUPRESOR",
        "ingredient": "NALED",
        "maker": "AGROQUIMICOS RIVAS, S.A.\nDE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 354,
        "product": "SWITCH 62.5 WG",
        "ingredient": "CIPRODINIL + FLUDIOXONIL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Anilinopirimidina / Fenilpirrol"
      },
      {
        "id": 355,
        "product": "SYSTEM CU / UMBRAL",
        "ingredient": "GLUCONATO DE COBRE",
        "maker": "INNOVACION AGRICOLA",
        "category": "Fungicida",
        "group": "Inorganicos"
      },
      {
        "id": 356,
        "product": "SYSTEM MAX",
        "ingredient": "EXTRACTO ALOHOLICO DE MIMOSA + QUERCUS",
        "maker": "INNOVACION AGRICOLA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 357,
        "product": "TACSAFOR 1000",
        "ingredient": "MALATHION",
        "maker": "TECNICA AGRICOLA CHIAPAS S.A DE C.V.",
        "category": "Insecticida",
        "group": "Organofosforado"
      },
      {
        "id": 358,
        "product": "TAGETES",
        "ingredient": "EXTRACTO DE TAGETES",
        "maker": "MS AGROS SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 359,
        "product": "TALSTAR 100 CE",
        "ingredient": "BIFENTRINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 360,
        "product": "TALSTAR XTRA ",
        "ingredient": "BIFENTRINA + ABAMECTINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroide /  Avermectina"
      },
      {
        "id": 361,
        "product": "TALSTAR XTRA MAX 105 EW",
        "ingredient": "BIFENTRINA + ABAMECTINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Piretroide /  Avermectina"
      },
      {
        "id": 362,
        "product": "TAPPS´O",
        "ingredient": "METALDEHIDO",
        "maker": "DRAGON / AGRICULTURA NACIONAL",
        "category": "Insecticida",
        "group": "Ciclo-octano"
      },
      {
        "id": 363,
        "product": "TEC-FORT",
        "ingredient": "PIRETRINA",
        "maker": "GRUPO AGROTECNOLOGIA MEXICO TCB e Iberfol S.A. DE C.V.",
        "category": "Biopesticida",
        "group": "Piretroides"
      },
      {
        "id": 364,
        "product": "TECTO 60",
        "ingredient": "THIABENDAZOLE (TIABENDAZOL)",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Benzimi-dazol"
      },
      {
        "id": 365,
        "product": "TERRAGUARD 480 SC",
        "ingredient": "TRIFLUMIZOLE",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Imidazol"
      },
      {
        "id": 366,
        "product": "TETRASAN 11 SC",
        "ingredient": "ETOXAZOLE",
        "maker": "VALENT DE MEXICO",
        "category": "Insecticida",
        "group": "Oxazole"
      },
      {
        "id": 367,
        "product": "THIABA",
        "ingredient": "ABAMECTINA + TIAMETOXAM",
        "maker": "SYNGENTA AGRO",
        "category": "Insecticida",
        "group": "Avermectina / Neonicotinoide"
      },
      {
        "id": 368,
        "product": "THIRAM GRANUFLO",
        "ingredient": "THIRAM",
        "maker": "EASTMAN CHEMICAL URUAPAN, SA DE CV",
        "category": "Fungicida",
        "group": "Ditiocar-bamato"
      },
      {
        "id": 369,
        "product": "THOR 3.6 EW / ABAMIT 3.6 EW",
        "ingredient": "ABAMECTINA",
        "maker": "FMC AGROQUIMICA",
        "category": "Insecticida",
        "group": "Avermectinas"
      },
      {
        "id": 370,
        "product": "THURICIDE PH",
        "ingredient": "BACILLUS THURINGIENSIS Var. Kurstaki",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 371,
        "product": "TILT",
        "ingredient": "PROPICONAZOL",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Triazoles"
      },
      {
        "id": 372,
        "product": "TIMOREX GOLD",
        "ingredient": "ACEITE DE ARBOL DE TÉ",
        "maker": "SYNGENTA AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 373,
        "product": "TRI SIN CE",
        "ingredient": "Paecilomyces fumosoroseus \nMetarhizium anisopliae \nBeauveria bassiana ",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "Microbial "
      },
      {
        "id": 374,
        "product": "TRIBACU PH",
        "ingredient": "SULFATO DE COBRE ",
        "maker": "AGRI-ESTRELLA S DE RL DE CV",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 375,
        "product": "TRICHO-SIN",
        "ingredient": "TRICHODERMA HARZIANUM",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 376,
        "product": "TRILOGY",
        "ingredient": "EXTRACTO DE ACEITE DE NEEM ",
        "maker": "CERTIS AGRO",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 377,
        "product": "TRIMET",
        "ingredient": "SULFATO DE COBRE ",
        "maker": "CUPROSA, S.A. DE C.V. ",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 378,
        "product": "TRI-SIN WP",
        "ingredient": "Paecilomyces fumosoroseus \nMetarhizium anisopliae \nBeauveria bassiana ",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "Microbial "
      },
      {
        "id": 379,
        "product": "ULTRACHEM MEGA",
        "ingredient": "EXTRACTO DE GOBERNADORA",
        "maker": "AGRICOLA ELKEN S DE RL DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 380,
        "product": "ULTRAGARLIC",
        "ingredient": "EXTRACTO ESCENCIAL DE AJO",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "Extracto de planta"
      },
      {
        "id": 381,
        "product": "ULTRALUX S",
        "ingredient": "SALES POTASICAS DE ACIDOS GRASOS",
        "maker": "ULTRAQUIMIA AGRICOLA S.A. DE C.V. ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 382,
        "product": "ULTRASOAP",
        "ingredient": "ACIDOS GRASOS, SALES POTASICAS, PIRETRINA NATURAL",
        "maker": "AGRHUSA AGROBIOLOGICOS",
        "category": "Biopesticida",
        "group": "Organico"
      },
      {
        "id": 383,
        "product": "UNIFORM",
        "ingredient": "AZOXISTROBIN + METALAXIL-M",
        "maker": "SYNGENTA AGRO",
        "category": "Fungicida",
        "group": "Estrobirulinas / Fenilamidas"
      },
      {
        "id": 384,
        "product": "UNIKUM",
        "ingredient": "TIAMETOXAM",
        "maker": "HELM DE MEXICO",
        "category": "Insecticida",
        "group": "Neonicotinoides"
      },
      {
        "id": 385,
        "product": "VACCIPLANT",
        "ingredient": "LAMINARINA",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Polisacarido"
      },
      {
        "id": 386,
        "product": "VALGO 50 WG",
        "ingredient": "AZOXYSTROBIN",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Metoxi-acrilatos"
      },
      {
        "id": 387,
        "product": "VALTAR",
        "ingredient": "EXTRACTO DE CANELA ",
        "maker": "BIOCONTROL-DAYMSA DE MEXICO SA DE CV",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 388,
        "product": "VEGEX KUNEKA",
        "ingredient": "EXTRACTO DE CUASIA, ACEITE DE KARANKA, ACITE DE NEEM ",
        "maker": "IDAI NATURE",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 389,
        "product": "VEGEX WHITE FLY",
        "ingredient": "EXTRACTO DE TORVISCO, EXTRACTO DE RUDA, EXTRACTO DE HOJA DE SANTA",
        "maker": "IDAI NATURE",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 390,
        "product": "VELOZ",
        "ingredient": "CARFENTRAZONE ETIL ",
        "maker": "FMC AGROQUIMICA",
        "category": "Herbicida",
        "group": "Triazolinonas"
      },
      {
        "id": 391,
        "product": "VELSIDOL 25 C.E.",
        "ingredient": "DIAZINON",
        "maker": "VELSIMEX",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 392,
        "product": "VELSIDOL 5G",
        "ingredient": "DIAZINON",
        "maker": "VELSIMEX",
        "category": "Insecticida",
        "group": "Organofosforados"
      },
      {
        "id": 393,
        "product": "VELSUL 725",
        "ingredient": "AZUFRE ELEMENTAL",
        "maker": "VELSIMEX",
        "category": "Fungicida",
        "group": "Inorgánico"
      },
      {
        "id": 394,
        "product": "VERTI-SIN",
        "ingredient": "VERTICILLIUM LECANII",
        "maker": "AGROBIOLOGICOS DEL NOROESTE SA DE CV ",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 395,
        "product": "VIASTAR 100 CE",
        "ingredient": "BIFENTRINA",
        "maker": "CHEMTURA CORPORATION MÉXICO, S. DE R.L. DE C.V.",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 396,
        "product": "VIGOLD",
        "ingredient": "FLUOXASTROBIN",
        "maker": "ARYSTA LIFESCIENCE",
        "category": "Fungicida",
        "group": "Dihidro-dioxazina"
      },
      {
        "id": 397,
        "product": "VITANEEM",
        "ingredient": "EXTRACTO DE NEEM Y EXTRACTO DE AJO",
        "maker": "ZARE AGRHOS",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 398,
        "product": "WISDOM 10 PH",
        "ingredient": "BIFENTRINA",
        "maker": "QUIMICA AMVAC DE MEXICO, S.A. DE C.V.",
        "category": "Insecticida",
        "group": "Piretroides"
      },
      {
        "id": 399,
        "product": "XENTARI DF",
        "ingredient": "BACILLUS THURINGIENSIS (azawai)",
        "maker": "VALENT DE MEXICO",
        "category": "Biopesticida",
        "group": "Bacillus thuringiensis"
      },
      {
        "id": 400,
        "product": "X-TRAC3",
        "ingredient": "EXTRACTO DE AJO/ EXTRACTO DE CHILE PICANTE/ EXTRACTO DE CANELA ",
        "maker": "QUIMICA LUCAVA",
        "category": "Biopesticida",
        "group": "NA"
      },
      {
        "id": 401,
        "product": "ZIO 60 WP",
        "ingredient": "THIABENDAZOLE (TIABENDAZOL)",
        "maker": "LAPISA S.A. DE C.V.",
        "category": "Fungicida",
        "group": "Benzimi-dazol"
      }

];

export default agroproducts;