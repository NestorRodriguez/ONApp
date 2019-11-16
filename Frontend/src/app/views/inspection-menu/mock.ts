export const collectionMock = {
    datos_basicos: {

        c_cliente: {
            titulo: 'CLIENTE',
            placeholder: 'Cliente',
            type: 'text'
        },
        c_equipo: {
            titulo: 'NOMBRE DE EQUIPO',
            placeholder: 'Equipo',
            type: 'text'
        },
        c_empresa: {
            titulo: 'EMPRESA MANTENIMIENTO',
            placeholder: 'Empresa',
            type: 'text'
        },
        c_tipoaccion: {
            titulo: 'TIPO DE ACCIONAMIENTO',
            placeholder: 'Seleccione un tipo de accionamiento',
            type: 'select',
            options: ['SCM', 'Hidráulico', 'Eléctrico']
        },
        c_capacidad: {
            titulo: 'CAPACIDAD (Kg)',
            placeholder: 'Capacidad',
            type: 'number'
        },
        c_paradas: {
            titulo: 'NÚMERO DE PARADAS',
            placeholder: 'N° Paradas',
            type: 'number'
        },
        c_fecha: {
            titulo: 'FECHA DE INSPECCIÓN',
            placeholder: '',
            type: 'date'
        },
        c_fechamto: {
            titulo: 'FECHA ÚLTIMO MANTENIMIENTO',
            placeholder: '',
            type: 'date'
        },
        c_fechapuestaservicio: {
            titulo: 'FECHA PUESTA EN SERVICIO',
            placeholder: '',
            type: 'date'
        },
        c_fechaultinspeccion: {
            titulo: 'FECHA ÚLTIMA INSPECCIÓN',
            placeholder: '',
            type: 'date'
        },
        c_direccioncliente: {
            titulo: 'DIRECCIÓN DEL CLIENTE',
            placeholder: 'Dirección del cliente',
            type: 'text'
        },
        c_codigo: {
            titulo: 'CÓDIGO',
            placeholder: '',
            type: 'text',
            value: 'IN-R-08',
            enabled: 'false'
        },
        c_consecutivo: {
            titulo: 'CONSECUTIVO',
            placeholder: '',
            type: 'text',
            enabled: 'false'
        }

    },
    datos_preliminar: {
        item1: {
            text: 'El ascensor a inspeccionar se encuentra libre de grasa, aceite, papel, elementos ajenos al ascensor, diferentes a los utilizados para el mantenimiento del mismo, que representen un riesgo para el inspector y todo personal que pueda participar en la inspección.'
        },
        item2: {
            text: 'El personal que acompaña a la inspección cumple con los elementos de protección personal.'
        },
        item3: {
            text: 'Existe llaves para ingreso al cuarto de máquinas y se encuentra presente el personal responsable del mantenimiento del ascensor para el acompañamiento; quien será responsable de efectuar las operaciones necesarias para la inspección.'
        }
    },
    datos_proteccion: {
        items: ['CASCO/BARBUQUEJO', 'BOTAS DIELÉCTRICAS', 'GUANTES', 'ARNÉS', 'ESLINGA', 'GAFAS', 'TAPA-OÍDOS'],
        tipo: ['INSPECTOR', 'EMPRESA MANTENIMIENTO']
    },
    elementos: {
        items: ['CANGURO PIERNA', 'CHALECO', 'CÁMARA FOTOGRÁFICA', 'DOCUMENTOS PARA LA INSPECCIÓN', 'TABLA SUJETA DOCUMENTOS', 'EQUIPOS E INSTRUMENTOS PARA LA INSPECCIÓN'],
    },
    lista_verificacion: [
        {
            titulo: 'Cabina',
            items: [{
                    id: 1,
                    item: 6.11,
                    cal: 'G',
                    defecto: 'No existe empresa encargada del mantenimiento ni conservación del aparato haciéndose constar de un registro de mantenimiento (contrato bitácora, reporte técnico, acta de mantenimiento, etc.)'

                },
                {
                    id: 2,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'No existe llave de apertura en la edificación o no es accesible.'
                },
                {
                    id: 3,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'Mirilla de puerta rajada con protección (Cristal armado,acrílico,malla).'
                },
                {
                    id: 4,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Mirilla de puerta con hueco.'
                },
                {
                    id: 5,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Mirilla suelta, con mala fijación o desajustada.'
                },
                {
                    id: 6,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'Las hojas de vidrio, no llevan marcas identificativas.'
                },
                {
                    id: 7,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'Las hojas de puertas son de vidrio y no llevan marcas identificativas.'
                },
                {
                    id: 8,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'La iluminación de los accesos es menor a 50 lux a 1 m del piso y 1 m de la puerta de acceso para percibir la presencia de la cabina, si esta no tiene luz.'
                },
                {
                    id: 9,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Cerraduras accesibles desde el exterior sin requerir herramienta para su apertura.'
                },
                {
                    id: 10,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Puertas de acceso, paneles, bisagras o marcos están deformados y afectan el funcionamiento normal del ascensor.'
                },
                {
                    id: 11,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Oxidación y corrosión en más de un 20% del área del elemento en las puertas y/O marcos de acceso.'
                },
                {
                    id: 12,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'No hay solidez de la fijación de los marcos a la pared.'
                },
                {
                    id: 13,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Contactos eléctricos accesibles desde el exterior (pasillo)'
                },
                {
                    id: 14,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Distancia entre pisadera (o quicio) de cabina y pisadera (o quicio) de piso excede 35 mm.'
                },
                {
                    id: 15,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'La puerta de acceso deja excesivas holguras. (Esta condición se considera cumplida cuando estas holguras operativas no superan 6 mm. Este valor puede alcanzar 10 mm debido al desgaste de las rozaderas o deslizaderas. Estas holguras deben medirse en el fondo de las hendiduras, si existen).'
                },
                {
                    id: 16,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Existencia de elementos cortantes (Vidrios sin pulir, aristas vivas, etc.) en puerta de acceso y recorrido sin puertas de cabina.'
                },
                {
                    id: 17,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'No funciona el sistema de re apertura (Banda retráctil, fotocelda, micro obstáculo, ultrasónico, etc.) de las puertas de acceso.'
                },
                {
                    id: 18,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'No existe Piloto de presencia de cabina en puertas ciegas o visibilidad con mirilla.'
                },
                {
                    id: 19,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'El ascensor arranca con puerta abierta.'
                },
                {
                    id: 20,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'Para el caso de puertas de rescate, No existe piloto, indicador o mirilla para detectar presencia de cabina.'
                },
                {
                    id: 21,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Plataforma de cabina hecho de madera.'
                },
                {
                    id: 22,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No existen rejillas de ventilación en cabina.'
                },
                {
                    id: 23,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Paredes de la cabina ni rígidas. Para ascensores con cabina de construcción en madera, se presentan zonas podridas, mal fijadas o con síntomas de defecto.'
                },
                {
                    id: 24,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'Guarda escoba o zócalo en mal estado (oxidado, suelto, deteriorado, roto).'
                },
                {
                    id: 25,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No lleva puertas en cabina (equipos antiguos que no tengan puerta en cabina, deben estar provistos de un sensor de proximidad).'
                },
                {
                    id: 26,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Las puertas de la cabina no rígidas.'
                },
                {
                    id: 27,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Puertas de cabina no retroceden frente a un obstáculo por contacto o proximidad.'
                },
                {
                    id: 28,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No existe o no funciona el pulsador de apertura de puertas automáticas en botonera de cabina.'
                },
                {
                    id: 29,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'No existe señalización de piso en cabina.'
                },
                {
                    id: 30,
                    item: 6.8,
                    cal: 'L',
                    defecto: 'No existe señalización de piso en cabina.'
                },
                {
                    id: 31,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'No existe placa que indique capacidad máxima de carga en cabina (kg y/o pasajeros).'
                },
                {
                    id: 32,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'Equipo de alarma no es autónomo (es decir sin batería), inaudible o no funciona.'
                },
                {
                    id: 33,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'No existe o no funciona el intercomunicador.'
                },
                {
                    id: 34,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'En condiciones normales de funcionamiento, las puertas de acceso no están cerradas y enclavadas sin la presencia de cabina.'
                },
                {
                    id: 35,
                    item: 6.8,
                    cal: 'G',
                    defecto: 'En las zonas circulantes o pasillos alrededor de un pozo parcialmente abierto, existen barreras de protección con altura inferior a 2.5 m, a una distancia inferior a 50 cm de las partes móviles del ascensor. (Esta altura puede reducirse hasta 1.10 m cuando la distancia a las partes móviles es superior a 2 m.'
                },
            ]
        },
        {
            titulo: 'Cuarto de máquinas y poleas',
            items: [{
                    id: 36,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'No tiene acceso al cuarto de máquinas y/o incumplimiento de la normatividad de trabajo en alturas.'

                },
                {
                    id: 37,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Puerta del cuarto de máquinas sin cerradura.'
                },
                {
                    id: 38,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Puerta del cuarto de poleas sin cerraduras.'
                },
                {
                    id: 39,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'No existe inscripción de acceso prohibido.'
                },
                {
                    id: 40,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'El alumbrado no existe, no funciona o es inferior a 200 luxes a nivel del suelo en el cuarto de máquinas o de 100 luxes en el cuarto de poleas.'
                },
                {
                    id: 41,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'No existe interruptor de parada en el cuarto de poleas.'
                },
                {
                    id: 42,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Cuadro de maniobra con elementos sueltos sin fijación (contactores, relevos. Tarjetas de control, regletas o borneas, temporizadores).'
                },
                {
                    id: 43,
                    item: 6.10,
                    cal: 'MG',
                    defecto: 'Cuadro de maniobra con empalmes sin aislamiento, fusibles puenteados, contactos suplementados.'
                },
                {
                    id: 44,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Para ascensores sin variador de velocidad en el motor principal, falta detector de inversión o ausencia de fase.'
                },
                {
                    id: 45,
                    item: 6.10,
                    cal: 'MG',
                    defecto: 'No existe interruptor general tripolar de corte de la alimentación.'
                },
                {
                    id: 46,
                    item: 6.8,
                    cal: 'G',
                    defecto: 'Cada interruptor eléctrico (Braker) no se identifica con el circuito que protege y/o los interruptores de protección no se identifican con su circuito de alimentación.'
                },
                {
                    id: 47,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'No está independiente la acometida del ascensor y la acometida del alumbrado.'
                },
                {
                    id: 48,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Cables con aislamiento deteriorado y/o conductores expuestos.'
                },
                {
                    id: 49,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'El cuarto de máquinas es utilizado como bodega o para fines diferentes al funcionamiento del ascensor.'
                },
                {
                    id: 50,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Existen goteras o humedades en el cuarto de máquinas o poleas.'
                },
                {
                    id: 51,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Existencia de humedades en techo paredes y suelo de los cuartos de máquinas y poleas, y del foso del ascensor.'
                },
                {
                    id: 52,
                    item: 6.3,
                    cal: 'MG',
                    defecto: 'Falta o no está identificada la palanca de freno, para mover el elevador hasta llevarlo al nivel de planta.'
                },
                {
                    id: 53,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'No es posible acceder o accionar la palanca de freno, o no existe dicha palanca.'
                },
                {
                    id: 54,
                    item: 6.3,
                    cal: 'L',
                    defecto: 'Falta indicación de sentido de giro en la máquina de tracción.'
                },
                {
                    id: 55,
                    item: 6.3,
                    cal: 'MG',
                    defecto: 'El volante tiene la manivela puesta en operación normal.'
                },
                {
                    id: 56,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'Siendo el motor del grupo tractor de corriente, el freno se encuentra alimentado por dicho motor.'
                },
                {
                    id: 57,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'La alimentación del freno no es la misma que la del grupo tractor.'
                },
                {
                    id: 58,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Se encuentra uno o más cables hundidos en la polea a diferente nivel que los demás.'
                },
                {
                    id: 59,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Falta protección que impida la salida de cables de tracción y/o cables de compensación.'
                },
                {
                    id: 60,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Polea desgastada o tallada por asentamiento de los cables de tracción, mayor a un factor de desplazamiento de uno (1) (véase el anexo E).'
                },
                {
                    id: 61,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'No existencia de puertas en las aberturas accesibles por las personas al hueco.'
                },
                {
                    id: 62,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Instalaciones o elementos en pozo o sala de máquinas ajenas a las propias del ascensor (Gas, aire acondicionado, acueducto, telecomunicaciones, acometidas eléctricas o hidráulicas, etc.).'
                },
                {
                    id: 63,
                    item: 6.3,
                    cal: 'MG',
                    defecto: 'El freno no detiene la cabina.'
                },
                {
                    id: 64,
                    item: 6.3,
                    cal: 'MG',
                    defecto: 'El freno no funciona en ausencia de corriente eléctrica.'
                },
                {
                    id: 65,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'El freno no funciona en ausencia de corriente eléctrica.'
                },
                {
                    id: 66,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'Ejes de freno en mal estado (desgaste en cubos de las articulaciones, grietas o rotura de espiras en resortes o posibilidad de salir de sus asientos).'
                },
                {
                    id: 67,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'Los elementos del freno no son de doble mordaza.'
                },
                {
                    id: 68,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'Muelles o resortes de freno deformados, fisurados, partidos u oxidados.'
                },
                {
                    id: 69,
                    item: 6.3,
                    cal: 'L',
                    defecto: 'La presión de frenado no es efectuada con resorte de comprensión.'
                },
                {
                    id: 70,
                    item: 6.3,
                    cal: 'MG',
                    defecto: 'Zapatas del freno con aceite.'
                },
                {
                    id: 71,
                    item: 6.3,
                    cal: 'L',
                    defecto: 'Zapatas del freno desgastadas hasta un 40%'
                },
                {
                    id: 72,
                    item: 6.3,
                    cal: 'G',
                    defecto: 'La holgura entre la corona, el sin fin y/o el acople, supera 90° de giro en el volante sin moverse la polea de tracción.'
                },
                {
                    id: 73,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Cables del limitador inferior a 6 mm de diámetro.'
                },
                {
                    id: 74,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Limitador inaccesible para realizar el mantenimiento e inspección.'
                },
                {
                    id: 75,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'No existe o no funciona el contacto eléctrico del limitador.'
                },
                {
                    id: 76,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'Falla el trinquete del limitador al engancharse.'
                },
                {
                    id: 77,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'Limitador oxidado, sin lubricación, desaplomado, desajustado, o no está anclado firmemente en al menos dos puntos de fijación.'
                },
                {
                    id: 78,
                    item: 6.4,
                    cal: 'L',
                    defecto: 'Ausencia de placa de especificaciones del limitador o regulador de velocidad (En donde se estipule cual es la velocidad nominal y la velocidad de actuación).'
                },
                {
                    id: 79,
                    item: 6.2,
                    cal: 'G',
                    defecto: 'Ausencia de marcas en al menos un piso, en cables de tracción y/o gobernador, para identificar la zona de desenclavamiento, para maniobra de evacuación. (Se recomienda sea en pintura tráfico).'
                },
                {
                    id: 80,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'El ascensor no cumple la verificación de la prueba de funcionamiento del limitador de velocidad descrito en el anexo C, numeral C.1.'
                },
                {
                    id: 81,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Cable del limitador roza con elementos de la instalación del equipo y/o de la obra civil.'
                },
                {
                    id: 82,
                    item: 6.2,
                    cal: 'G',
                    defecto: 'Cable de tracción roza con elementos de la instalación del equipo y/o de la obra civil.'
                }
            ]

        },
        {

            titulo: 'Revisión de Pozo',
            items: [
                {
                    id: 83,
                    item: 6.8,
                    cal: 'L',
                    defecto: 'En hueco parcialmente cerrado, no existe el cerramiento o balaustrada encima de cabina y/o un punto de fijación para arnés.'
                },
                {
                    id: 84,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'En hueco parcialmente abierto no existe una barrera de protección encima de cabina. (Protección personal de mantenimiento)'
                },
                {
                    id: 85,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'El techo no soporta sin deformación permanente el peso de dos personas (es decir, 150 kg).'
                },
                {
                    id: 86,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No existe el interruptor de parada encima de la cabina.'
                },
                {
                    id: 87,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No existe o no funciona el conmutador Normal/Inspección y/o no está plenamente identificada. En caso de que este elemento no se encuentre sobre la cabina, el ascensor debe contar con un dispositivo de parada de emergencias sobre la cabina.'
                },
                {
                    id: 88,
                    item: 6.5,
                    cal: 'MG',
                    defecto: 'Al bastidor o chasis le faltan tuercas o pasadores que afecten su rigidez.'
                },
                {
                    id: 89,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'El dispositivo de para (Stop) no funciona en cabinas sin puertas.'
                },
                {
                    id: 90,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'El dispositivo de parada (Stop) se desactiva de forma involuntaria.'
                },
                {
                    id: 91,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'Arranca con puertas de cabina abiertas o al abrirla no se detiene durante el funcionamiento normal.'
                },
                {
                    id: 92,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'No existe o no funcionan los dispositivos de final de carrera.'
                },
                {
                    id: 93,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'Los final de carrera, no son de apertura mecánica.'
                },
                {
                    id: 94,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'Distancia de actuación del dispositivo eléctrico de final de carrera superior a 12 cm desde el punto de activación en los pisos superior e inferior.'
                },
                {
                    id: 95,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'El dispositivo eléctrico de final de carrera no se activa de que la cabina y/o el contra peso hagan contacto con el amortiguador.'
                },
                {
                    id: 96,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'El interruptor final de carrera no se recupera al bajar o subir de la cabina.'
                },
                {
                    id: 97,
                    item: 6.7,
                    cal: 'MG',
                    defecto: 'Al estar activado el interruptor final de carrera se recupera al moverse lateralmente la cabina.'
                },
                {
                    id: 98,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'No existe o no funcionan los dispositivos de final de carrera.'
                },
                {
                    id: 99,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Las guías de la cabina en todo su recorrido, presentan mal estado de fijación a las paredes del hueco, deformaciones, desalineación y/O falta de paralelismo.'
                },
                {
                    id: 100,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'El hueco se utiliza para ventilación de otras áreas ajenas al ascensor (Baños, cocinas, etc.)'
                },
                {
                    id: 101,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'En el caso de ascensores sin cuarto de máquinas, no hay las condiciones de rescate, especificaciones en el anexo D.'
                },
                {
                    id: 102,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Limitador en el hueco del ascensor sin posibilidad de maniobrar (des aplicar) desde el exterior.'
                },
                {
                    id: 103,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Instalaciones o elementos en pozo o sala de máquinas ajenas a las propias del ascensor (Gas, aire acondicionado, acueducto, telecomunicaciones, acometidas eléctricas o hidráulicas, etc.)'
                },
                {
                    id: 104,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'En condiciones normales de funcionamiento, las puertas de acceso no están cerradas y enclavadas sin la presencia de cabina.'
                },
                {
                    id: 104,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'En condiciones normales de funcionamiento, las puertas de acceso no están cerradas y enclavadas sin la presencia de cabina.'
                },
                {
                    id: 105,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Cerraduras se encuentran inoperantes.'
                },
                {
                    id: 106,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Falta seguridad eléctrica (series) de puertas, o están puenteadas.'
                },
                {
                    id: 107,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Al halar o abrir la puerta, no se detiene la cabina.'
                },
                {
                    id: 108,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Bornes o cables eléctricos mal conectados o con defectos de aislamiento en puertas.'
                },
                {
                    id: 109,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Los elementos de enclavamiento no están encajados, al menor 7 mm.'
                },
                {
                    id: 110,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'El enclavamiento mecánico no es controlado eléctricamente.'
                },
                {
                    id: 111,
                    item: 6.1,
                    cal: 'MG',
                    defecto: 'Es posible abrir una puerta sin estar en la cabina en la zona de desenclavamiento, sin una herramienta y el ascensor no se detiene.'
                },
                {
                    id: 112,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Zona de desenclavamiento superior a 35 cm por encima o por debajo del nivel de piso.'
                },
                {
                    id: 114,
                    item: 6.1,
                    cal: 'G',
                    defecto: 'Las cerraduras no pueden abrirse desde el interior de hueco sin necesidad de la llave.'
                },
                {
                    id: 115,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Puerta de inspección o socorro con apertura hacia el interior.'
                },
                {
                    id: 116,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Puerta de inspección o socorro no es metálica y/o de alma llena.'
                },
                {
                    id: 117,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'Puerta de inspección o socorro sin cerradura.'
                },
                {
                    id: 118 ,
                    item: 6.1,
                    cal: 'L',
                    defecto: 'Puerta de inspección o socorro no permita el cierre con enclavamiento al no tener la llave.'
                },
                {
                    id: 119,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Puerta de inspección o socorro sin contacto eléctrico de seguridad, o que no funcione.'
                },
                {
                    id: 120,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Hay más de 11 m entre dos paradas continúas sin apertura de socorro.'
                },
                {
                    id: 121,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'Cable viajero y/o cordón de maniobra en mal estado, (Quebrado, partido, conexiones flojas, cables desnudos, empalmados en la parte móvil).'
                },
                {
                    id: 122,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'La distancia entre órganos móviles y las parte fija no cumple las siguientes dimensiones: Distancia entre el quicio de pasillo y de cabina > 35 mm. Distancia entre cabina y contrapeso < 35 mm.'
                },
                {
                    id: 124,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Cuando un ascensor queda entre pisos o en el túnel, la distancia máxima entre la pisadera de cabina y el muro es mayor a 125 mm.'
                },
                {
                    id: 125,
                    item: 6.10,
                    cal: 'L',
                    defecto: 'Presencia de oxidación en cualquier punto del cable del regulador de velocidad y/o cables de compensación, tal que : -Aún no se presenta pérdida de material y/o -Al contacto con el cable se presenta coloración característica de óxido (Ejemplo amarilla o roja).'
                },
                {
                    id: 126,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Presencia de oxidación en cualquier punto del cable del regulador de velocidad, y/o cables de compensación, tal que exista desprendimiento de material o se evidencie la destrucción paulatina de los hilos constitutivos del cable, por acción de agentes externos.'
                },
                {
                    id: 127,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'Cable del limitador deteriorado.'
                },
                {
                    id: 128,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'Existen empalmes en los cables.'
                },
                {
                    id: 129,
                    item: 6.2,
                    cal: 'MG',
                    defecto: 'Existen empalmes en los cables.'
                },
                {
                    id: 130,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Cables con alambres rotos superior a 2 hilos en un metro en el mismo torón.'
                },
                {
                    id: 131,
                    item: 6.2,
                    cal: 'MG',
                    defecto: 'Cables con alambres rotos según los siguientes criterios: 1-Los hilos rotos superan el 50% de un mismo paso del total de los hilos que conforman el torón. 2-Existen más de 2 hilos rotos por torón en el tramo de un paso del cable.'
                },
                {
                    id: 132,
                    item: 6.2,
                    cal: 'MG',
                    defecto: 'En casos de cinta de tracción, se presenta al menos una fisura, una grieta, y/o un adelgazamiento de la cubierta en 1.5 m de la cinta.'
                },
                {
                    id: 133,
                    item: 6.2,
                    cal: 'G',
                    defecto: 'Diámetro de los cables de tracción inferior al 10% de su diámetro nominal (por desgaste o por defecto de fabricación).'
                },
                {
                    id: 134,
                    item: 6.2,
                    cal: 'MG',
                    defecto: 'Para ascensores de tracción: 1-Con capacidad mayor a 6 personas la tracción se realiza con menos de tres cables. 2- Con capacidad menor a 6 personas la tracción se realiza con menos de dos cables.'
                },
                {
                    id: 135,
                    item: 6.2,
                    cal: 'MG',
                    defecto: 'Amarres de cable de tracción en cabina y/o contrapeso desajustado, sueltos carente de amarres o en mal estado (desgaste de pasadores, aprietes, tuerca, contratuerca, pasadores de aletas, corrosión, etc.)'
                },
                {
                    id: 136,
                    item: 6.2,
                    cal: 'G',
                    defecto: 'Mezcla de diferentes tipos de amarres en los cables de tracción en el mismo punto en cabina y/o en contrapeso Nota: Se considera aceptable , tener un tipo de amarre para la cabina y otro distinto para el contrapeso.'
                },
                {
                    id: 137,
                    item: 6.2,
                    cal: 'L',
                    defecto: 'Presencia de oxidación en cualquier punto del cable, tal que: -Aun no se presenta perdida de material y/o -Al contacto con el cable se presenta una coloración característica del óxido (Ejemplo amarillo o roja).'
                },
                {
                    id: 138,
                    item: 6.2,
                    cal: 'G',
                    defecto: 'Presencia de oxidación en cualquier punto del cable, tal que exista desprendimiento de material o se evidencie de la destrucción paulatina de los hilos constitutivos del cable, por acción de agentes externos.'
                },
                {
                    id: 139,
                    item: 6.4,
                    cal: 'L',
                    defecto: 'No existe paracaídas en contrapeso habiendo circulación de personas bajo el foso.'
                },
                {
                    id: 140,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'Zapata y/o deslizadera de cabina y/o contrapeso en mal estado (rotas, no existentes, rozando partes metálicas, sueltas o con sujeción incompleta).'
                },
                {
                    id: 141,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'Al soporte le faltan tuercas o pasadores.'
                },
                {
                    id: 142,
                    item: 6.6,
                    cal: 'MG',
                    defecto: 'El paracaídas de contrapeso no actúa (cuando aplica).'
                },
                {
                    id: 143,
                    item: 6.6,
                    cal: 'MG',
                    defecto: 'Pesas rotas o fracturadas dentro del bastidor, y/o sobresaliendo fuera del bastidor (que incumpla la distancia mínima entre cabina y contrapeso, es decir, < 35 mm.'
                },
                {
                    id: 144,
                    item: 6.6,
                    cal: 'MG',
                    defecto: 'Existe posibilidad de movimiento de las pesas por ausencia de mecanismos de acuñamiento.'
                },
                {
                    id: 145,
                    item: 6.6,
                    cal: 'G',
                    defecto: 'En caso de existir poleas sobre el contrapeso, no disponen de los elementos necesarios para evitar la salida de los cables, (en caso de aflojamiento de éstos y la introducción de cuerpos extraños en las gargantas de las mismas) y/o estos dispositivos impiden las operaciones de inspección o de mantenimiento.'
                },
                {
                    id: 146,
                    item: 6.6,
                    cal: 'MG',
                    defecto: 'Para ascensores cuyo contrapeso y cabina estén dentro del mismo pozo, el contrapeso está guiado mediante cables guía.'
                },
                {
                    id: 147,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'El paracaídas de contrapeso no actúa (cuando aplica)'
                }
        ]
        },

        {
            titulo: 'Foso',
            items: [
                {
                    id: 148,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'Agua en el foso.'
                },
                {
                    id: 149,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Agua en el foso, existiendo instalación eléctrica y/o mecánica, en contacto con ella.'
                },
                {
                    id: 150,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Foso con profundidad superior o igual a 1.5 m de altura sin escalera. En caso de tener escalera el primer escalón no debe estar a más de 50 cm respecto al nivel de piso de la primera parada.'
                },
                {
                    id: 151,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'No se puede actuar sobre los dispositivos eléctricos de seguridad de parada de emergencia y/o no son accesibles.'
                },
                {
                    id: 152,
                    item: 6.5,
                    cal: 'G',
                    defecto: 'No lleva faldón guardapiés en cabina.'
                },
                {
                    id: 153,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'Falta o no funciona un interruptor accesible desde el piso, que permita parar y mantener parado el ascensor durante la operación de mantenimiento o inspección en el foso.'
                },
                {
                    id: 154,
                    item: 6.7,
                    cal: 'G',
                    defecto: 'Falta o no funciona un interruptor accesible desde el piso, que permita parar y mantener parado el ascensor durante las operaciones de mantenimiento o inspección en el foso.'
                },
                {
                    id: 155 ,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'Existencia de humedades en techo, paredes y suelo de los cuartos de máquinas y poleas, y del foso del ascensor.'
                },
                {
                    id: 156,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'No existen topes elásticos, de resorte o hidráulicos para la cabina y contrapeso.'
                },
                {
                    id: 157,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'EN amortiguadores hidráulicos, el nivel de aceite está por fuera de la marca.'
                },
                {
                    id: 158,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Amortiguadores oxidados, fisurados, sueltos.'
                },
                {
                    id: 159,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'No tiene o no actúa el dispositivo eléctrico de seguridad en los amortiguadores hidráulicos.'
                },
                {
                    id: 160,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'No se recupera el amortiguador hidráulico luego de comprimirse.'
                },
                {
                    id: 161,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Falta o no funciona el dispositivo de control de rotura o aflojamiento del cable del limitador.'
                },
                {
                    id: 162,
                    item: 6.4,
                    cal: 'G',
                    defecto: 'Polea tensora del limitador roza con la pared y/o el suelo.'
                },
                {
                    id: 163,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'El paracaídas no lleva cuñas.'
                },
                {
                    id: 164,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'No actúan las cuñas del paracaídas.'
                },
                {
                    id: 165,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'No existe o no funciona el contacto de acuñamiento, de cabina y/o de contrapeso.'
                },
                {
                    id: 166,
                    item: 6.9,
                    cal: 'MG',
                    defecto: 'Amarres de cable limitador al sistema paracaídas desajustado, suelto, carente de amarres, o en mal estado (desgaste de pasadores, aprietes, tuerca, contratuerca, pasadores de aletas, corrosión, etc)'
                },
                {
                    id: 167,
                    item: 6.4,
                    cal: 'L',
                    defecto: 'El desbloqueo del paracaídas no requiere la intervención del personal competente.'
                },
                {
                    id: 168,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'El ascensor no cumple la verificación de la prueba de funcionamiento del paracaídas descrito en el anexo C, numeral C.2.'
                },
                {
                    id: 169,
                    item: 6.5,
                    cal: 'L',
                    defecto: 'No existe o no funciona el dispositivo de sobrecarga.'
                },
                {
                    id: 170,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'Encontrándose la cabina en la última parada (la más alta) el contrapeso se encuentra a una distancia menor de 15 cm con respecto al tope de sus amortiguadores (No es de aplicación en ascensores hidráulicos o sin contrapeso)'
                },
                {
                    id: 171,
                    item: 6.2,
                    cal: 'L',
                    defecto: 'Con el contrapeso sobre sus topes, no hay espacio para contener un paralelepípedo rectangular no menor a 0.5 m x 0.6 m x 0.8 m apoyado sobre una de sus caras encima de cabina. (Para los ascensores con suspensión directa, se incluyen los cables de suspensión y sus amarres en dicho volumen, siempre que ningún cable tenga su eje a una distancia superior a 0.15 m de, al menos una cara vertical del paralelepípedo).'
                },
                {
                    id: 172,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'En equipos hidráulicos con tracción directa, no actúa la válvula de paracaídas en vacío.'
                },
                {
                    id: 173,
                    item: 6.4,
                    cal: 'MG',
                    defecto: 'En equipos hidráulicos con tracción indirecta que no tengan sistema de paracaídas en cabina, no actúa la válvula de paracaídas en vacío en el pistón.'
                },
                {
                    id: 174,
                    item: 6.9,
                    cal: 'G',
                    defecto: 'Cuando se cierra el pozo, puertas o cabina con malla metálica, las perforaciones superan 10 mm x 6 mm, o están rotas o deterioradas.'
                },
                {
                    id: 175,
                    item: 6.9,
                    cal: 'L',
                    defecto: 'En ascensores con hueco compartido, no existe separación del hueco de cada ascensor en el foso.'
                },
                {
                    id: 176,
                    item: 6.10,
                    cal: 'G',
                    defecto: 'Ausencia de un dispositivo contra el sobre-calentamiento del fluido hidráulico.'
                }
            ]

        }

    ],

    calificacion: [{
            text: 'Cumple',
            value: 0
        },
        {
            text: 'No cumple',
            value: 1
        },
        {
            text: 'No aplica',
            value: 2
        }
    ],
    c_observaciones: {
        titulo: 'OBSERVACIONES',
        placeholder: 'Ingrese aquí la observación',
        type: 'textarea'
    },
    c_fotografias: {
        type: 'button',
        enabled: true
    },
    c_anexos: {
        titulo: 'ANEXOS',
        items: [
        {
            type: 'button',
            enabled: true
        }

    ]
    }
};