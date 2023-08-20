/* eslint-disable no-unused-vars */
// https://www.mesbienfaits.com/aliments-proteines-vegetales/

// Add precisions on the protein value for the whey, lardons and steak

const veggiesProtein = [


    {
        id: 0,
        name: 'Whey végétale',
        // the value of protein is a value for 100grs
        protein : 70.00,
    },

    {
        id: 1,
        name: 'Farine de soja',
        protein : 47.01,
    },

    {
        id: 2,
        name: 'Spiruline séchée',
        protein : 57.47,
    },

    {
        id: 3,
        name: 'Spiruline séchée',
        protein : 57.47,
    },

    {
        id: 4,
        name: 'Levure alimentaire',
        protein : 40.4,
    },

    {
        id: 5,
        name: 'Lupin',
        protein : 36.17,
    },

    {
        id: 6,
        name: 'Soja (graine)',
        protein : 34.50,
    },

    {
        id: 7,
        name: 'Chanvre (graine)',
        protein : 32.73,
    },

    {
        id: 8,
        name: 'Citrouille (graine)',
        protein : 30.23,
    },

    {
        id: 9,
        name: 'Cacahuètes (arachide)',
        protein : 25.8,
    },

    {
        id: 10,
        name: 'Lentille (crue)',
        protein : 24.63,
    },

    {
        id: 11,
        name: 'Fenugrec (graine)',
        protein : 23,
    },

    {
        id: 12,
        name: 'Amande',
        protein : 21.15,
    },

    {
        id: 13,
        name: 'Tournesol (graine)',
        protein : 20.78,
    },

    {
        id: 14,
        name: 'Pois-chiche',
        protein : 20.47,
    },

    {
        id: 15,
        name: 'Pistache',
        protein : 20.27,
    },

    {
        id: 16,
        name: 'Flageolet (haricot)',
        protein : 19.1,
    },

    {
        id: 17,
        name: 'Tempeh',
        protein : 18.54,
    },

    {
        id: 18,
        name: 'Noix de cajou (crue)',
        protein : 18.22,
    },

    {
        id: 19,
        name: 'Lardons végétaux',
        protein : 17.00,
    },

    {
        id: 20,
        name: 'Steak végétal',
        protein : 17.00,
    },

    {
        id: 21,
        name: 'Avoine',
        protein : 16.89,
    },

    {
        id: 22,
        name: 'Chia (graine)',
        protein : 16.54,
    },

    {
        id: 23,
        name: 'Son d’avoine',
        protein : 15.80,
    },

    {
        id: 24,
        name: 'Farine de blé entier',
        protein : 14.64,
    },

    {
        id: 25,
        name: 'Épeautre',
        protein : 14.57,
    },

    {
        id: 26,
        name: 'Noisette grillée',
        protein : 14.40,
    },

    {
        id: 27,
        name: 'Noisette grillée',
        protein : 14.40,
    },

    {
        id: 28,
        name: 'Noix fraîche',
        protein : 14.30,
    },

    {
        id: 29,
        name: 'Noix séchée (cerneaux)',
        protein : 14.00,
    },

    {
        id: 30,
        name: 'Bacon végétal',
        protein : 14.00,
    },

    {
        id: 31,
        name: 'Noisette',
        protein : 13.90,
    },

    {
        id: 32,
        name: 'Pignon de pin',
        protein : 13.69,
    },

    {
        id: 33,
        name: 'Amarante (crue)',
        protein : 13.50,
    },

    {
        id: 34,
        name: 'Flocons d’avoine',
        protein : 13.30,
    },

    {
        id: 35,
        name: 'Sarrasin',
        protein : 13.25,
    },

    {
        id: 36,
        name: 'Quinoa cru',
        protein : 13.10,
    },

    {
        id: 37,
        name: 'Goji',
        protein : 13.00,
    },

    {
        id: 38,
        name: 'Edamame',
        protein : 12.95,
    },

    {
        id: 39,
        name: 'Orge',
        protein : 11.00,
    },

    {
        id: 40,
        name: 'Tofu (nature)',
        protein : 9.91,
    },

    {
        id: 41,
        name: 'Noix de pécan',
        protein : 9.57,
    },

    {
        id: 42,
        name: 'Maïs entier',
        protein : 8.10,
    },

    {
        id: 43,
        name: 'Noix de macadamia',
        protein : 7.91,
    },

    {
        id: 44,
        name: 'Riz blanc (cru)',
        protein : 7.04,
    },

    {
        id: 45,
        name: 'Riz complet (cru)',
        protein : 7.02,
    },

    {
        id: 46,
        name: 'Noix de coco sèche',
        protein : 6.62,
    },

    {
        id: 47,
        name: 'Ail',
        protein : 6.36,
    },

    {
        id: 48,
        name: 'Spiruline crue',
        protein : 5.92,
    },

    {
        id: 49,
        name: 'Petit pois',
        protein : 5.42,
    },

    {
        id: 50,
        name: 'Wasabi (racine crue)',
        protein : 4.80,
    },

    {
        id: 51,
        name: 'Choux de Bruxelles',
        protein : 3.38,
    },

    {
        id: 52,
        name: 'Noix de coco crue',
        protein : 3.33,
    },

    {
        id: 53,
        name: 'Lait de soja',
        protein : 3.31,
    },

    {
        id: 54,
        name: 'Chou kale',
        protein : 3.30,
    },

    {
        id: 55,
        name: 'Figue séchée',
        protein : 3.30,
    },
    
    {
        id: 56,
        name: 'Salsifis (cru)',
        protein : 3.30,
    },

    {
        id: 57,
        name: 'Artichaut',
        protein : 3.27,
    },

    {
        id: 58,
        name: 'Morille',
        protein : 3.12,
    },

    {
        id: 59,
        name: 'Champignon blanc',
        protein : 3.09,
    },

    {
        id: 60,
        name: 'Wakame (crue)',
        protein : 3.03,
    },

    {
        id: 61,
        name: 'Persil',
        protein : 2.97,
    },

    {
        id: 62,
        name: 'Epinard',
        protein : 2.86,
    },

    {
        id: 63,
        name: 'Brocoli',
        protein : 2.82,
    },

    {
        id: 64,
        name: 'Tamarin (cru)',
        protein : 2.80,
    },

    {
        id: 65,
        name: 'Cresson',
        protein : 2.60,
    },

    {
        id: 66,
        name: 'Roquette',
        protein : 2.58,
    },

    {
        id: 67,
        name: 'Goyave',
        protein : 2.55,
    },

    {
        id: 68,
        name: 'Échalotte',
        protein : 2.50,
    },

    {
        id: 69,
        name: 'Datte séchée',
        protein : 2.45,
    },

    {
        id: 70,
        name: 'Fruit de la passion',
        protein : 2.30,
    },

    {
        id: 71,
        name: 'Asperge',
        protein : 2.20,
    },

    {
        id: 72,
        name: 'Pruneau sec',
        protein : 2.18,
    },

    {
        id: 73,
        name: 'Raisin sec',
        protein : 2.09,
    },

    {
        id: 74,
        name: 'Pomme de terre',
        protein : 2.02,
    },

    {
        id: 75,
        name: 'Avocat',
        protein : 2.00,
    },

    {
        id: 76,
        name: 'Mâche',
        protein : 2.00,
    },

    {
        id: 77,
        name: 'Topinambour',
        protein : 2.00,
    },

    {
        id: 78,
        name: 'Chou-fleur',
        protein : 1.92,
    },

    {
        id: 79,
        name: 'Kumquat',
        protein : 1.88,
    },

    {
        id: 80,
        name: 'Haricot vert',
        protein : 1.85,
    },

    {
        id: 81,
        name: 'Grenade',
        protein : 1.67,
    },

    {
        id: 82,
        name: 'Châtaigne',
        protein : 1.63,
    },

    {
        id: 83,
        name: 'Marron',
        protein : 1.63,
    },

    {
        id: 84,
        name: 'Betterave',
        protein : 1.61,
    },

    {
        id: 85,
        name: 'Patate douce',
        protein : 1.57,
    },

    {
        id: 86,
        name: 'Céleri rave',
        protein : 1.50,
    },

    {
        id: 87,
        name: 'Poireau',
        protein : 1.50,
    },

    {
        id: 88,
        name: 'Abricot',
        protein : 1.40,
    },

    {
        id: 89,
        name: 'Cassis',
        protein : 1.40,
    },

    {
        id: 90,
        name: 'Chicorée (racine)',
        protein : 1.40,
    },

    {
        id: 91,
        name: 'Groseille',
        protein : 1.40,
    },

    {
        id: 92,
        name: 'Manioc',
        protein : 1.36,
    },

    {
        id: 93,
        name: 'Orange',
        protein : 1.30,
    },

    {
        id: 94,
        name: 'Framboise',
        protein : 1.28,
    },

    {
        id: 95,
        name: 'Endive',
        protein : 1.25,
    },

    {
        id: 96,
        name: 'Fenouil',
        protein : 1.24,
    },

    {
        id: 97,
        name: 'Courgette',
        protein : 1.21,
    },

    {
        id: 98,
        name: 'Panais',
        protein : 1.20,
    },

    {
        id: 99,
        name: 'Pâtisson',
        protein : 1.20,
    },

    {
        id: 100,
        name: 'Kiwi',
        protein : 1.14,
    },

    {
        id: 101,
        name: 'Airelle',
        protein : 1.10,
    },

    {
        id: 102,
        name: 'Citron',
        protein : 1.10,
    },

    {
        id: 103,
        name: 'Griotte',
        protein : 1.10,
    },

    {
        id: 104,
        name: 'Oignon',
        protein : 1.10,
    },

    {
        id: 105,
        name: 'Oseille',
        protein : 1.10,
    },

    {
        id: 106,
        name: 'Banane',
        protein : 1.09,
    },

    {
        id: 107,
        name: 'Rutabaga',
        protein : 1.08,
    },

    {
        id: 108,
        name: 'Nectarine',
        protein : 1.06,
    },

    {
        id: 109,
        name: 'Olive verte',
        protein : 1.03,
    },

    {
        id: 110,
        name: 'Cerise',
        protein : 1.00,
    },

    {
        id: 111,
        name: 'Citrouille',
        protein : 1.00,
    },

    {
        id: 112,
        name: 'Poivron',
        protein : 1.00,
    },

    {
        id: 113,
        name: 'Aubergine',
        protein : 0.98,
    },

    {
        id: 114,
        name: 'Carotte',
        protein : 0.93,
    },

    {
        id: 115,
        name: 'Pêche',
        protein : 0.91,
    },

    {
        id: 116,
        name: 'Laitue iceberg',
        protein : 0.90,
    },

    {
        id: 117,
        name: 'Navet',
        protein : 0.90,
    },

    {
        id: 118,
        name: 'Rhubarbe',
        protein : 0.90,
    },

    {
        id: 119,
        name: 'Clémentine',
        protein : 0.85,
    },

    {
        id: 120,
        name: 'Litchi',
        protein : 0.83,
    },

    {
        name: 'Mangue',
        protein : 0.82,
    },

    {
        id: 121,
        name: 'Mandarine',
        protein : 0.81,
    },

    {
        id: 122,
        name: 'Myrtille',
        protein : 0.81,
    },

    {
        id: 123,
        name: 'Tomate',
        protein : 0.80,
    },

    {
        id: 124,
        name: 'Figue',
        protein : 0.75,
    },

    {
        id: 125,
        name: 'Potiron',
        protein : 0.75,
    },

    {
        id: 126,
        name: 'Figue de barbarie',
        protein : 0.73,
    },

    {
        id: 127,
        name: 'Melon',
        protein : 0.73,
    },

    {
        id: 128,
        name: 'Raisin (cru)',
        protein : 0.72,
    },

    {
        id: 129,
        name: 'Citron vert',
        protein : 0.70,
    },

    {
        id: 130,
        name: 'Prune',
        protein : 0.70,
    },

    {
        id: 131,
        name: 'Céleri branche',
        protein : 0.69,
    },

    {
        id: 132,
        name: 'Radis',
        protein : 0.68,
    },

    {
        id: 133,
        name: 'Radis',
        protein : 0.68,
    },

    {
        id: 134,
        name: 'Cocombre',
        protein : 0.65,
    },

    {
        id: 135,
        name: 'Fraise',
        protein : 0.65,
    },

    {
        id: 136,
        name: 'Pamplemousse',
        protein : 0.63,
    },

    {
        id: 137,
        name: 'Potimarron',
        protein : 0.63,
    },

    {
        id: 138,
        name: 'Pastèque',
        protein : 0.61,
    },

    {
        id: 139,
        name: 'Kaki',
        protein : 0.58,
    },

    {
        id: 140,
        name: 'Ananas',
        protein : 0.54,
    },

    {
        id: 141,
        name: 'Mirabelle',
        protein : 0.50,
    },

    {
        id: 142,
        name: 'Papaye',
        protein : 0.47,
    },

    {
        id: 143,
        name: 'Coing',
        protein : 0.40,
    },

    {
        id: 144,
        name: 'Poire',
        protein : 0.36,
    },

    {
        id: 145,
        name: 'Poire',
        protein : 0.26,
    },
];