export const collectionMock = 
{
    "datos_basicos": {

        "c_cliente": {
            "titulo": "CLIENTE",
            "placeholder": "Cliente",
            "type": "text"
        },
        "c_equipo": {
            "titulo": "NOMBRE DE EQUIPO",
            "placeholder": "Equipo",
            "type": "text"
        },
        "c_empresa": {
            "titulo": "EMPRESA MANTENIMIENTO",
            "placeholder": "Empresa",
            "type": "text"
        },
        "c_tipoaccion": {
            "titulo": "TIPO DE ACCIONAMIENTO",
            "placeholder": "Seleccione un tipo de accionamiento",
            "type": "select",
            "options": ["SCM", "Hidráulico", "Eléctrico"]
        },
        "c_capacidad": {
            "titulo": "CAPACIDAD (Kg)",
            "placeholder": "Capacidad",
            "type": "number"
        },
        "c_paradas": {
            "titulo": "NÚMERO DE PARADAS",
            "placeholder": "N° Paradas",
            "type": "number"
        },
        "c_fecha": {
            "titulo": "FECHA DE INSPECCIÓN",
            "placeholder": "",
            "type": "date"
        },
        "c_fechamto": {
            "titulo": "FECHA ÚLTIMO MANTENIMIENTO",
            "placeholder": "",
            "type": "date"
        },
        "c_fechapuestaservicio": {
            "titulo": "FECHA PUESTA EN SERVICIO",
            "placeholder": "",
            "type": "date"
        },
        "c_fechaultinspeccion": {
            "titulo": "FECHA ÚLTIMA INSPECCIÓN",
            "placeholder": "",
            "type": "date"
        },
        "c_direccioncliente": {
            "titulo": "DIRECCIÓN DEL CLIENTE",
            "placeholder": "Dirección del cliente",
            "type": "text"
        },
        "c_codigo": {
            "titulo": "CÓDIGO",
            "placeholder": "",
            "type": "text",
            "value": "IN-R-08",
            "enabled": "false"
        },
        "c_consecutivo": {
            "titulo": "CONSECUTIVO",
            "placeholder": "",
            "type": "text",
            "enabled": "false"
        }

    },
    "datos_preliminar": {
        "item1": {
            "text": "El ascensor a inspeccionar se encuentra libre de grasa, aceite, papel, elementos ajenos al ascensor, diferentes a los utilizados para el mantenimiento del mismo, que representen un riesgo para el inspector y todo personal que pueda participar en la inspección."
        },
        "item2": {
            "text": "El personal que acompaña a la inspección cumple con los elementos de protección personal."
        },
        "item3": {
            "text": "Existe llaves para ingreso al cuarto de máquinas y se encuentra presente el personal responsable del mantenimiento del ascensor para el acompañamiento; quien será responsable de efectuar las operaciones necesarias para la inspección."
        }
    },
    "datos_proteccion": {
        "items": ["CASCO/BARBUQUEJO", "BOTAS DIELÉCTRICAS", "GUANTES", "ARNÉS", "ESLINGA", "GAFAS", "TAPA-OÍDOS"],
        "tipo": ["INSPECTOR", "EMPRESA MANTENIMIENTO"]
    },
    "elementos": {
        "items": ["CANGURO PIERNA", "CHALECO", "CÁMARA FOTOGRÁFICA", "DOCUMENTOS PARA LA INSPECCIÓN", "TABLA SUJETA DOCUMENTOS", "EQUIPOS E INSTRUMENTOS PARA LA INSPECCIÓN"],
    },
    "lista_verificacion": [{
            "titulo": "Cabina",
            "items": [{
                    "id": 1,
                    "item": 6.11,
                    "cal": "G",
                    "defecto": "No existe empresa encargada del mantenimiento ni conservación del aparato haciéndose constar de un registro de mantenimiento (contrato bitácora, reporte técnico, acta de mantenimiento, etc.)"

                },
                {
                    "id": 2,
                    "item": 6.11,
                    "cal": "G",
                    "defecto": "No existe llave de apertura en la edificación o no es accesible."
                },
                {
                    "id": 3,
                    "item": 6.11,
                    "cal": "L",
                    "defecto": "Mirilla de puerta rajada con protección (Cristal armado,acrílico,malla)."
                }
            ]
        },
        {
            "titulo": "Cuarto de máquinas",
            "items": [{
                    "id": 1,
                    "item": 6.11,
                    "cal": "G",
                    "defecto": ""

                },
                {
                    "id": 2,
                    "item": 6.11,
                    "cal": "G",
                    "defecto": "No existe llave de apertura en la edificación o no es accesible."
                },
                {
                    "id": 3,
                    "item": 6.11,
                    "cal": "L",
                    "defecto": "Mirilla de puerta rajada con protección (Cristal armado,acrílico,malla)."
                }
            ]

        },
        {

            "titulo": "Pozo",
            "items": [{}]
        },

        {
            "titulo": "Foso",
            "items": [{}]

        }

    ],

    "calificacion": [{
            "text": "Cumple",
            "value": 0
        },
        {
            "text": "No cumple",
            "value": 1
        },
        {
            "text": "No aplica",
            "value": 2
        }
    ],
    "c_observaciones": {
        "titulo": "OBSERVACIONES",
        "placeholder": "Ingrese aquí la observación",
        "type": "textarea"
    }



};