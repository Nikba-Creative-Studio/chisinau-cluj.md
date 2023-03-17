export const data =
{
    "title": "Cluj-Napoca",
    "phone_md": "+373 686 00 100",
    "phone_ro": "+40 726 906007",
    "whatsapp": "+373 686 00 100",
    "viber": "+373 686 00 100",
    "email": "info@chisinau-cluj.md",
    "address": "şos. Hînceşti 145, mun. Chișinău, Republica Moldova",
    "facebook": "https://www.facebook.com/transport.chisinau.cluj.napoca",
    "instagram": "https://www.instagram.com/transport.chisinau.cluj.napoca/",
    "google": "https://g.page/chisinau-cluj-napoca?share",
    "routes": {
        "from": {
            "Chișinău": {
                "id": 1,
                "from": "21:30",
                "to": "07:00",
                "station": "Gara de Sud",
            },
            "Iași": {
                "id": 2,
                "from": "01:00",
                "to": "03:15",
                "station": "Autogara Codreanu",
            },
            "Roman": {
                "id": 3,
                "from": "02:00",
                "to": "02:30",
                "station": "Gara CFR",
            },
            "Piatra Neamț": {
                "id": 4,
                "from": "03:00",
                "to": "01:30",
                "station": "Peco Petrodava",
            },
            "Bicaz": {
                "id": 5,
                "from": "03:30",
                "to": "01:00",
                "station": "Peco Petrom",
            },
            "Gheorgheni": {
                "id": 6,
                "from": "04:30",
                "to": "23:30",
                "station": "Liceu",
            },
            "Sovata": {
                "id": 7,
                "from": "05:30",
                "to": "22:30",
                "station": "Peco MOL",
            },
            "Târgu Mureș": {
                "id": 8,
                "from": "06:30",
                "to": "21:30",
                "station": "Stația Poli 2",
            },
            "Cluj Napoca": {
                "id": 9,
                "from": "08:30",
                "to": "19:30",
                "station": "Autogara Beta",
            }
        },
        "to": {
            "Cluj Napoca": {
                "id": 9,
                "to": "08:30",
                "from": "19:30",
                "station": "Autogara Beta",
            },
            "Târgu Mureș": {
                "id": 8,
                "to": "06:30",
                "from": "21:30",
                "station": "Stația Poli 2",
            },
            "Sovata": {
                "id": 7,
                "to": "05:30",
                "from": "22:30",
                "station": "Peco MOL",
            },
            "Gheorgheni": {
                "id": 6,
                "to": "04:30",
                "from": "23:30",
                "station": "Liceu",
            },
            "Bicaz": {
                "id": 5,
                "to": "03:30",
                "from": "01:00",
                "station": "Peco Petrom",
            },
            "Piatra Neamț": {
                "id": 4,
                "to": "03:00",
                "from": "01:30",
                "station": "Peco Petrodava",
            },
            "Roman": {
                "id": 3,
                "to": "02:00",
                "from": "02:30",
                "station": "Gara CFR",
            },
            "Iași": {
                "id": 2,
                "to": "01:00",
                "from": "03:15",
                "station": "Autogara Codreanu",
            },
            "Chișinău": {
                "id": 1,
                "to": "21:30",
                "from": "07:00",
                "station": "Gara de Sud",
            }
        }
    },
    "destinations": {
        "Chișinău": {
            "image" : require("../assets/images/destinations/chisinau.webp"),
            "from": "21:30",
            "to": "07:00",
            "station": "Gara de Sud",
        }, 
        "Albița" : {
            "image" : require("../assets/images/destinations/albita.webp"),
            "from": "00:00",
            "to": "04:20",
            "station": "Peco Petrom",
        },
        "Iași" : {
            "image" : require("../assets/images/destinations/iasi.webp"),
            "from": "01:00",
            "to": "03:30",
            "station": "Autogara Codreanu",
        },
        "Roman" : {
            "image" : require("../assets/images/destinations/roman.webp"),
            "from": "02:00",
            "to": "02:30",
            "station": "Gara CFR",
        },
        "Piatra Neamț" : {
            "image" : require("../assets/images/destinations/piatra-neamt.webp"),
            "from": "03:15",
            "to": "01:30",
            "station": "Peco Petrodava",
        },
        "Bicaz" : {
            "image" : require("../assets/images/destinations/bicaz.webp"),
            "from": "03:30",
            "to": "01:00",
            "station": "Peco Petrom",
        },
        "Gheorgheni" : {
            "image" : require("../assets/images/destinations/gheorheni.webp"),
            "from": "04:30",
            "to": "23:30",
            "station": "Liceu",
        },
        "Sovata" : {
            "image" : require("../assets/images/destinations/sovata.webp"),
            "from": "05:30",
            "to": "22:30",
            "station": "Peco MOL",
        },
        "Târgu Mureș" : {
            "image" : require("../assets/images/destinations/targul-mures.webp"),
            "from": "06:30",
            "to": "21:30",
            "station": "Stația Poli 2",
        },
        "Cluj Napoca" : {
            "image" : require("../assets/images/destinations/cluj-napoca.webp"),
            "from": "08:30",
            "to": "21:30",
            "station": "Autogara Beta",
        },
    },
    "transports": {
        "1": {
            "image" : require("../assets/images/transport/1.webp"),
            "number": "B 19 LCS",
            "model": "Neoplan"
        },
        "2": {
            "image" : require("../assets/images/transport/2.webp"),
            "number": "BV 20 LCS",
            "model": "Neoplan"
        },
        "3": {
            "image" : require("../assets/images/transport/3.webp"),
            "number": "RVP 705",
            "model": "Volvo"
        },
    }

}
