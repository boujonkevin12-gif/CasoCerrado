import type { CaseDef } from "./types";

/**
 * CASO 006 — El incendio del almacén
 * Dificultad: DIFÍCIL | Incendio intencional en un depósito
 *
 * QUÉ OCURRIÓ REALMENTE
 * Abel Ramírez, jefe de depósito de Almacén Electrosur, venía vendiendo
 * mercadería fuera del sistema desde hacía dos años. El inventario anual,
 * citado para esa misma semana, iba a destapar su agujero. La madrugada del
 * incendio vació aún más stock, roció tres focos con nafta en el galpón y le
 * prendió fuego: "el inventario se quemaría y el faltante desaparecería".
 * No sabía que Roberto Ojeda, el guardia que creía ya salido, había vuelto a
 * la oficina del depósito a buscar la billetera que se le olvidó, y quedó
 * asfixiado dentro. El culpable es Abel.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Camila: la dueña vendía "reacondicionados" con repuestos de garaje por su
 *   cuenta: un mini fraude de facturas truchas que nada tiene que ver con el
 *   incendio, y que está desesperada por ocultar.
 * - Bruno: el electricista hizo MAL un trabajo de empalmes el día anterior y
 *   le aterra que el incendio se considere eléctrico. La pericia lo exculpa,
 *   pero él no lo sabe y mintió sobre su hora de salida.
 * - Ernesto: amigo de Roberto, vendía chatarra del patio de rezagos con él.
 *   Por eso estaba cerca a esa hora y su testimonio está lleno de huecos:
 *   no quiere que salga el tráfico de chatarra.
 */
export const case006: CaseDef = {
  code: "CASO-006",
  slug: "el-incendio-del-almacen",
  title: "El incendio del almacén",
  intro:
    "A las 03:12 de la madrugada, el sistema de alarmas de Almacén Electrosur marcó el teléfono de su jefe de depósito para avisarle que sonaba un sensor de humo. A las 03:15 un empleado del turno nocturno llamó a los bomberos desde la calle, a dos cuadras. Cuando el fuego se apagó, el galpón de electrodomésticos era chatarra humeante y en la oficina del depósito encontraron el cuerpo de Roberto Ojeda, el vigilante nocturno, muerto por asfixia. La pericia encontró acelerante en tres focos distintos: esto no fue un accidente eléctrico ni un descuido. Fue fuego a propósito, y alguien lo prendió sabiendo a qué hora se prendía. Hay cuatro personas que estuvieron en el predio esa noche y cada una miente por una razón distinta. Solo una prendió la llama.",
  scene: "incendio",
  victim: { name: "Roberto Ojeda", age: 54, job: "Vigilante nocturno" },
  place: "Almacén Electrosur, playa de depósito",
  timeOfCrime: "03:12",
  difficulty: "DIFICIL",
  order: 6,
  requiredLevel: 3,
  motive:
    "Abel Ramírez llevaba dos años vendiendo mercadería de Electrosur fuera del sistema. El inventario anual citado para esa misma semana iba a destapar el faltante, así que esa madrugada vació más stock todavía y prendió fuego al galpón para que 'el inventario se quemara' y su desfalco desapareciera con las cenizas.",
  method:
    "Con la excusa de la guardia de relevo, Abel entró a la playa de depósito a las 03:00, vació la oficina de papeles comprometedores, roció tres focos del galpón con nafta y les prendió fuego. No sabía que Roberto, que había vuelto a buscar su billetera, seguía adentro. La propia alarma llamó al celular de Abel a las 03:12, veinte segundos después de que encendiera el fuego, y lo mostró 'llegando' cuando en realidad ya estaba ahí.",
  resolutionText:
    "El fuego no fue un accidente: la pericia confirmó nafta en tres focos separados y descartó por completo el origen eléctrico. Los empalmes mal hechos de Bruno, las facturas de garaje de Camila y el tráfico de chatarra de Ernesto resultaron ser tres secretos inocentes que nada tenían que ver con la llama. La billetera de Roberto sobre la mesa de la oficina explicó por qué el guardia había vuelto: no era cómplice de nadie, era un hombre que se olvidó la cartera. La cámara del portón trasero mostró al jefe de depósito en la playa a las 03:00, cuando él aseguraba haberse ido a las 22:00; la cámara del silo registró su coche saliendo del estacionamiento lindero a las 03:25; y el registro de la alarma demostró que el sistema llamó a 'Ramírez' a las 03:12... y por eso, cuando 'avisó', ya estaba en la puerta. El inventario 2025 contra los manifiestos de entrada dejó el número cantando: faltaban más de doscientos electrodomésticos, y el único con la llave del galpón, acceso de carga y control de los movimientos de salida era el jefe de depósito. Abel prendió el fuego para quemar un inventario que iba a delatar su desfalco, y sin querer quemó a un guardia que solo había vuelto por su billetera.",
  xpReward: 900,
  coinReward: 450,
  guiltyKey: "abel",

  suspects: [
    {
      key: "abel",
      name: "Abel Ramírez",
      age: 44,
      job: "Jefe de depósito",
      relationship: "Responsable del galpón, la carga y los inventarios",
      bio: "Quince años en Electrosur, el hombre que una noche por semana duerme 'de guardia de relevo' en el depósito, para que el negocio no quede del todo solo. Habla con la calma de quien ya pensó la respuesta antes de que le pregunten, y ahora responde con la serenidad del que fue 'el primero en dar la alarma'.",
      avatarColor: "#4a3a5a",
      alibi: "Dice que se retiró a las 22:00 y que el incendio lo supo por el sistema de alarmas, que llama a su celular: a las 03:12 recibió el aviso y salió corriendo para el depósito.",
      openingStatement:
        "Fui el primero en dar la alarma, mire el registro: me llamó el sistema a las tres y doce y yo avisé a los bomberos. Esto me duele como a nadie, Roberto era de los nuestros. Diga qué necesita, inspector, de acá sale el que prendió el fuego.",
      isGuilty: true,
      order: 1,
    },
    {
      key: "camila",
      name: "Camila Ferrante",
      age: 52,
      job: "Dueña y gerenta de Electrosur",
      relationship: "Dueña del comercio, cierra las cuentas",
      bio: "Heredó el negocio del padre y lo levanta hace treinta años. Es la primera en exigir pericia y la última en contestar una pregunta directa: sabe que en su propia caja hay una factura que no tendría que existir, y hoy todos van a mirar su contabilidad con lupa.",
      avatarColor: "#5a3a4a",
      alibi: "Dice que la encontró su marido durmiendo a las 03:30, cuando sonó el teléfono, y que no pisó el predio en todo el día.",
      openingStatement:
        "Electrosur es mi familia desde que tengo memoria y que un empleado muera en mi depósito me va a costar el sueño de un año. Pero les aviso: si esto se hizo a propósito, el que lo hizo no tiene cara para mirarme. Revisen todo, de punta a punta... dentro de lo razonable.",
      order: 2,
    },
    {
      key: "bruno",
      name: "Bruno Roldán",
      age: 35,
      job: "Electricista contratado",
      relationship: "Hizo trabajos de instalación en el galpón la jornada anterior",
      bio: "Trabaja por su cuenta, con la camioneta llena de rollos de cable y el mate caliente en el asiento. Ayer hizo un trabajo de empalmes a las apuradas y desde anoche no puede dormir: si el incendio se lo endosan a un mal empalme suyo, no labura más en la zona.",
      avatarColor: "#4a5a3a",
      alibi: "Declaró que terminó el trabajo a las 17:00 y se fue. El registro del portón lo ubica retirándose recién a las 19:45, casi dos horas después del cierre.",
      openingStatement:
        "Yo le avisé a la dueña que la instalación estaba vieja, se lo puedo jurar con testigos. Lo hice apurado, sí, pero prolijo: mis empalmes no prenden fuego. Si algún día aparece un cortocircuito, que lo muestren y hablamos.",
      order: 3,
    },
    {
      key: "ernesto",
      name: "Ernesto Villalba",
      age: 29,
      job: "Empleado nocturno de la playa de depósito",
      relationship: "Turno de noche; era amigo de Roberto",
      bio: "Hace seis meses que entró al turno noche y dos años que es amigo de Roberto. Fue el que llamó a los bomberos desde la calle a las 03:15, él mismo lo dice. Pero no se le puede sacar una hora limpia: se enreda con números y esquinas de la playa que no son su turno.",
      avatarColor: "#3a5a4a",
      alibi: "Dice que esa noche no tenía que entrar y que pasó 'de casualidad, de pasada' por la calle del depósito, cuando vio el humo y llamó a los bomberos.",
      openingStatement:
        "Yo llamé a los bomberos, eso lo sabe todo el barrio. Roberto era mi amigo y lo encontré... no, no lo encontré, llamé desde la calle, yo no entré al galpón. ¿Por qué estaba ahí? Pasaba, se lo juro, estaba de paso.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "oficina-deposito",
      name: "Oficina del depósito",
      description:
        "La casilla donde Roberto tomaba mate entre ronda y ronda. El fuego la alcanzó de refilón: el humo hizo el resto. Sobre la mesa, un termo, un vaso y una billetera que no tendría que estar ahí.",
      order: 1,
      actions: [
        {
          label: "Examinar la mesa de la oficina",
          resultText:
            "Un termo volcado, un vaso con mate a medio tomar y una billetera de cuero gastado, abierta. El documento dice Roberto Ojeda y la plata sigue adentro. El guardia no fue a la oficina a robar: volvió a buscar esto.",
          clueKey: "billetera-roberto",
          order: 1,
        },
        {
          label: "Revisar la central de llamadas de la alarma",
          resultText:
            "El registro del sistema muestra una única salida a las 03:12, en cola automática: el número fue marcado a 'Ramírez' (jefe de depósito), que atendió a los 6 segundos. La llamada a la dueña figura marcada recién a las 03:18, después del llamado a los bomberos.",
          clueKey: "llama-camila",
          order: 2,
        },
      ],
    },
    {
      key: "playa-rezagos",
      name: "Playa de rezagos",
      description:
        "El patio descubierto donde se apilan cajas rotas, electrodomésticos fuera de servicio y chatarra que ya nadie va a arreglar. Un alambrado lo separa del predio vecino y una pasarela de la playa lo cruza de punta a punta.",
      order: 2,
      actions: [
        {
          label: "Buscar entre los rezagos",
          resultText:
            "Debajo de un banco de chapa, una libreta escolar forrada a mano con la letra del 'hierrero de la zona': la usa para llevar la cuenta del fierro viejo que le venden del patio. Roberto aparece dos o tres veces por semana.",
          clueKey: "chatarra",
          order: 1,
        },
        {
          label: "Ver la cámara del silo lindero",
          resultText:
            "La cámara del silo del vecino apunta al estacionamiento lindero. A las 03:25 traza una silueta que carga un Bora gris y sale a la avenida sin apuro. La patente coincide con el coche que Abel Ramírez usa en el depósito.",
          clueKey: "camara-silo",
          order: 2,
        },
      ],
    },
    {
      key: "porton",
      name: "Portón trasero y estacionamiento",
      description:
        "El acceso de carga por donde entran y salen los camiones, con el portón trasero de chapa para la playa y la cámara de seguridad que nadie revisaba hasta hoy. A su lado, el estacionamiento lindero del silo, sin reja.",
      order: 3,
      actions: [
        {
          label: "Descargar la cámara del portón trasero",
          resultText:
            "Entre 22:30 y 04:00 solo hay una entrada: a las 03:00, un hombre abre la puerta de la playa con llave propia y entra con un trapo de carga. La figura coincide con la humanidad robusta del jefe de depósito y nadie más maneja esa llave.",
          clueKey: "camara-porton",
          order: 1,
        },
        {
          label: "Ver la cámara del estacionamiento lindero",
          resultText:
            "El playón vecino sigue grabando más allá de la playa de rezagos, y en el cuadrante derecho se ve el horario de salida del Bora gris: 03:25, hacia la avenida.",
          clueKey: "camara-silo-salida",
          order: 2,
        },
      ],
    },
    {
      key: "galpon-incendiado",
      name: "Galpón incendiado",
      description:
        "El corazón del negocio: heladeras, lavarropas y decenas de cajas convertidas en ceniza. El techo de chapa se dobló como papel. Los peritos todavía trabajan adentro con tapabocas.",
      order: 4,
      actions: [
        {
          label: "Inspeccionar los focos de incendio",
          resultText:
            "La pericia detecta nafta en tres sectores separados del galpón: el sector de heladeras, la esquina de cartones y la puerta de acceso a la oficina. Tres focos, un mismo acelerante: esto se prendió a propósito, en cadena.",
          clueKey: "acelerante",
          order: 1,
        },
        {
          label: "Leer la pericia eléctrica",
          resultText:
            "El informe descarta por completo el origen eléctrico: no hubo ningún cortocircuito, ni sobrecarga, ni punto caliente que disparara la llama. La instalación de la zona noreste presenta empalmes que no son de norma... pero que nunca llegaron a calentar.",
          clueKey: "pericia-electrica",
          order: 2,
        },
      ],
    },
  ],

  clues: [
    {
      key: "acelerante",
      title: "Tres focos con acelerante",
      description:
        "La pericia detectó nafta en tres sectores separados del galpón: el de heladeras, la esquina de cartones y el acceso a la oficina. Tres focos, un mismo patrón vertical de riego: no fue un accidente, fue una quema intencional en cadena.",
      icon: "Flame",
      type: "FISICA",
      importance: "CLAVE",
      locationKey: "galpon-incendiado",
      implicatesSuspectKey: "abel",
    },
    {
      key: "pericia-electrica",
      title: "Pericia eléctrica",
      description:
        "El informe del perito descarta el origen eléctrico: no hubo cortocircuito ni sobrecarga que pudiera iniciar el fuego. La instalación de la zona noreste tiene empalmes que no cumplen la norma, pero nunca llegaron a calentar. Lo que incendió el galpón fue nafta, no la electricidad.",
      icon: "ClipboardList",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "galpon-incendiado",
    },
    {
      key: "camara-porton",
      title: "Cámara del portón trasero 03:00",
      description:
        "La cámara del portón trasero registra la única entrada al predio entre las 22:30 y las 04:00: a las 03:00 un hombre abre la puerta de la playa con llave propia y entra con un trapo de carga. Es la figura del jefe de depósito, y esa llave no la tiene nadie más.",
      icon: "Video",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "porton",
      implicatesSuspectKey: "abel",
    },
    {
      key: "camara-silo",
      title: "Cámara del estacionamiento lindero 03:25",
      description:
        "La cámara del silo del predio vecino muestra un Bora gris cargando en el estacionamiento lindero a las 03:25 y saliendo a la avenida sin apuro. Es el coche que Abel Ramírez usa en el depósito. Veintitrés minutos después de encenderse el fuego, el jefe de depósito se iba.",
      icon: "Video",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "playa-rezagos",
      implicatesSuspectKey: "abel",
    },
    {
      key: "camara-silo-salida",
      title: "Salida del Bora gris 03:25",
      description:
        "En el cuadrante derecho de la cámara del playón vecino, más allá de la playa de rezagos: el Bora gris sale del estacionamiento lindero a las 03:25, hacia la avenida. Confirma la hora exacta en que el coche del depósito abandonaba el lugar.",
      icon: "Video",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "porton",
      implicatesSuspectKey: "abel",
    },
    {
      key: "llama-camila",
      title: "Registro de llamadas de la alarma",
      description:
        "El sistema de alarma tiene una única salida a las 03:12: marcó 'Ramírez' (jefe de depósito), que atendió a los 6 segundos. La llamada a la dueña se marcó recién a las 03:18, después del aviso a los bomberos. La alarma no llamó primero a Camila: llamó a Abel.",
      icon: "Phone",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "oficina-deposito",
      implicatesSuspectKey: "abel",
    },
    {
      key: "inventario",
      title: "Inventario 2025 vs manifiestos de entrada",
      description:
        "El inventario anual del depósito comparado con los manifiestos de entrada de proveedores deja el número cantando: faltan más de doscientos electrodomésticos. La mayor parte del faltante figura como 'devuelto a fábrica' o 'descartado por rotura', con papeles que no cierran.",
      icon: "Calculator",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "oficina-deposito",
    },
    {
      key: "facturas-garaje",
      title: "Facturas de garaje de reacondicionados",
      description:
        "Un cajón en la oficina guarda facturas de un garaje del barrio por heladeras y lavarropas 'reacondicionados' que salieron de Electrosur con repuestos sin certificar. Firmadas por Camila, al margen de la contabilidad oficial. Una reventa chica, paralela y trucha.",
      icon: "Receipt",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "oficina-deposito",
      implicatesSuspectKey: "camila",
    },
    {
      key: "empalmes-bruno",
      title: "Informe del trabajo eléctrico de Bruno",
      description:
        "Los empalmes de la zona noreste del galpón, hechos la jornada anterior por Bruno Roldán, no cumplen la norma: cables pelados de más y uniones flojas, armados a las apuradas. Un trabajo mal hecho, sí... que la pericia eléctrica exculpa del incendio por completo.",
      icon: "Zap",
      type: "FISICA",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "galpon-incendiado",
      implicatesSuspectKey: "bruno",
    },
    {
      key: "chatarra",
      title: "La libreta del hierrero",
      description:
        "Una libreta de la chatarrería de la zona, encontrada en la playa de rezagos, lleva la cuenta del fierro que se vende por mes: 'R. Ojeda' y 'E. Villalba' anotados dos o tres veces por semana contra plata en negro. Ernesto y Roberto trabajaban la chatarra del patio por su cuenta, en silencio.",
      icon: "BookOpen",
      type: "DOCUMENTO",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "playa-rezagos",
      implicatesSuspectKey: "ernesto",
    },
    {
      key: "billetera-roberto",
      title: "La billetera de Roberto",
      description:
        "Una billetera de cuero gastado, con documento y plata adentro, sobre la mesa de la oficina del depósito, al lado de un mate a medio tomar. Roberto pidió hacer guardia de relevo... y volvió porque se la olvidó. Estaba en su puesto esperando, no robando.",
      icon: "Wallet",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "oficina-deposito",
    },
  ],

  dialogues: [
    // ---------------- ABEL ----------------
    {
      suspectKey: "abel",
      question: "Hágame todas las preguntas que necesite, inspector. Yo quiero esto resuelto tanto como usted.",
      order: 1,
      options: [
        {
          key: "abel_horario",
          label: "¿A qué hora te fuiste anoche?",
          responseText:
            "A las diez en punto, como siempre que hago guardia de relevo al otro día. Cerré la playa, dejé todo en orden y me fui a dormir. Yo vivo a quince minutos de acá, cualquier vecino me vio llegar.",
        },
        {
          key: "abel_alarma",
          label: "Contame lo del aviso del sistema de alarmas.",
          requiresOptionKey: "abel_horario",
          responseText:
            "El sistema está programado para llamarme a mí primero, porque soy el que vive más cerca. A las 03:12 me sonó el celular con el aviso de humo y salí a los pedos. Llegué cuando ya estaban todos; fui el primero en dar la alarma, mire el registro si quiere.",
        },
        {
          key: "abel_ev_porton",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del portón con tu figura a las 03:00",
          requiresClueKey: "camara-porton",
          responseText:
            "Esa figura entra con llave propia y mi humanidad... lo admito, soy yo. Pero yo no estaba entrando para robar ni para prender nada: era la guardia de relevo, la hago todas las semanas. La cámara me muestra entrando a una playa vacía, eso no me hace culpable de un fuego.",
        },
        {
          key: "abel_ev_llamada",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el registro que marca a 'Ramírez' a las 03:12",
          requiresClueKey: "llama-camila",
          responseText:
            "Claro, el sistema llama al jefe de depósito primero, es lo que le dije. Yo atendí a los seis segundos y salí para acá. Que la alarma me haya llamado a mí no quiere decir que estuviera acá: quiere decir que soy el que vive más cerca.",
        },
        {
          key: "abel_inventario",
          label: "Hablemos del inventario anual.",
          requiresOptionKey: "abel_alarma",
          responseText:
            "El inventario estaba citado para esta semana, sí, una desgracia de timing. Mire el lado bueno: no va a haber que contarlo más hasta el año que viene. Los números estaban perfectos, puede pedirle los libros al contador.",
        },
      ],
    },
    {
      suspectKey: "abel",
      question: "Roberto era de los nuestros, digo y repito. Esta oficina lo va a llorar conmigo hasta que cierre.",
      order: 2,
      options: [
        {
          key: "abel_quema",
          label: "¿Qué se quemó adentro del galpón?",
          responseText:
            "Doscientas heladeras y lavarropas, la mayoría del stock del mes y parte del de invierno. Cajas, cartones, toda la mercadería que la pericia no va a poder contar nunca. El seguro me va a matar, pero el fuego no discrimina, inspector.",
        },
        {
          key: "abel_ev_inv",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el faltante de más de doscientos aparatos",
          requiresClueKey: "inventario",
          responseText:
            "Eso... eso no puede ser real. Yo firmé cada remito de ese inventario, cada salida a fábrica, cada descarte por rotura. Si el papel dice que faltan máquinas, los papeles mienten, o me estuvieron afanando detrás de mí sin que me diera cuenta.",
        },
        {
          key: "abel_ev_camara_silo",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu coche saliendo del estacionamiento a las 03:25",
          requiresClueKey: "camara-silo",
          responseText:
            "Vi el humo, llegué, di la alarma y me fui a buscar la escalera que tengo en mi casa para ayudar a los bomberos con el techo. Después volví. Si la cámara me mostró saliendo a las tres y veinticinco, es porque salí a buscar una herramienta, inspector. Eso no es un crimen.",
        },
        {
          key: "abel_camila",
          label: "¿Cómo llevabas la relación con Camila, la dueña?",
          responseText:
            "Camila se lleva el negocio en la sangre y yo la playa en la mía. Nos peleamos por horarios, por precios, por todo, como en cualquier comercio. Pero a ella le juro que yo no prendí este fuego con mis propias manos para verla llorar.",
        },
      ],
    },

    // ---------------- CAMILA ----------------
    {
      suspectKey: "camila",
      question: "Revisen todo lo que quieran, pero tengan tacto con lo que tocan. Mi papá levantó este negocio y yo no lo voy a ver escombro en dos días.",
      order: 1,
      options: [
        {
          key: "camila_noche",
          label: "¿Dónde estabas a las 03:12?",
          responseText:
            "Durmiendo, como corresponde. El teléfono me despertó a las tres y cuarto, con la voz del encargado de bomberos... no, primero me llamó Ramírez y después los bomberos. Me quedé muda escuchando que se quemaba mi vida. No salí de mi casa en toda la noche y mi marido lo puede jurar.",
        },
        {
          key: "camila_garaje",
          label: "¿Qué son las facturas de garaje que encontramos?",
          responseText:
            "Eso es un tema menor de reventa, una línea de 'reacondicionados' que yo autorizaba con repuestos del barrio para no tirar mercadería con un golpe. Mire, la plata es chica y todo queda en mi caja: nunca salió una máquina de ahí sin pagar. ¿Por qué habla de eso con un muerto en el depósito?",
        },
        {
          key: "camila_ev_facturas",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las facturas de garaje a tu nombre",
          requiresClueKey: "facturas-garaje",
          responseText:
            "Sí, son mías, lo confieso: vendía los reacondicionados por la cuenta del garaje para no cargar impuestos de una línea que a veces no da ni para el café. Una viveza de barrio, un secreto feo. Esa plata no quemó ni una llama, y si el incidente de la playa lo disimuló de puro suerte...",
        },
        {
          key: "camila_ev_alarma",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el registro que muestra que la alarma llamó a 'Ramírez', no a vos",
          requiresClueKey: "llama-camila",
          responseText:
            "El sistema siempre llamó a Camila como dueña... no, llamó a Abel porque está programado al más cercano, es lo que él mismo dice. Yo aparecí recién a las 03:18, cuando ya habíamos perdido una hora de pelea. ¿Quiere saber qué siento? Que el primero en saberlo fue el jefe de depósito, y que hoy no me mira a la cara.",
        },
        {
          key: "camila_inventario",
          label: "¿Confiaste en Abel para el inventario?",
          requiresOptionKey: "camila_garaje",
          responseText:
            "Abel conoce la playa como su casa, es el que mueve cada caja y cada remito. Yo reviso su número una vez al año, por miedo, por costumbre. Y esta semana justo tocaba 'la vez al año'. No le pido que lo ahorre en licor, pero que el inventario haya 'coincidido' con la quema no me deja dormir.",
        },
      ],
    },
    {
      suspectKey: "camila",
      question: "Una cosa es un incendio y otra la contabilidad. Yo quiero saber de dónde salió la llama, pero sin que me rompan el negocio.",
      order: 2,
      options: [
        {
          key: "camila_seguro",
          label: "¿Estaba asegurado el galpón?",
          responseText:
            "Sí, con la póliza completa, como toda empresa seria. El perito del seguro ya vino: dice que el acelerante lo obliga a pedir informes. Si cree que esto lo prendí yo para cobrar el seguro... mire, mi papá levantó esto de un galpón más chico que el de la ferretería; no lo voy a quemar para cobrar cuatro pesos.",
        },
        {
          key: "camila_roberto",
          label: "¿Por qué Roberto estaba de guardia y además de relevo?",
          responseText:
            "Roberto pedía los relevos extra para juntar plata: estaba ahorrando para viajar de vuelta a ver a la familia. No me cierra que haya vuelto a la oficina a tomar mate a esa hora... a menos que se haya olvidado algo, como hacemos todos.",
        },
        {
          key: "camila_ev_billetera",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la billetera de Roberto sobre la mesa",
          requiresClueKey: "billetera-roberto",
          responseText:
            "La billetera... se la olvidó y volvió a buscarla, pobrecito. Yo lo hubiera mandado a buscar, nadie lo acusaría de nada. Que hoy esté con vos en la mesa del depósito es lo más injusto de esta noche.",
        },
        {
          key: "camila_miedo",
          label: "¿Le tenés miedo a alguien de la playa?",
          responseText:
            "Miedo, no: incomodidad, sí. A Ernesto, el chico del turno noche, hace seis meses que lo cruzó un desconocido dos veces afuera del portón. A Bruno, el electricista, le confié la obra de la instalación y parece que la hizo apurado como siempre. A Abel... a Abel le confié las llaves hasta de mi casa. Hoy no sé a quién creerle.",
        },
      ],
    },

    // ---------------- BRUNO ----------------
    {
      suspectKey: "bruno",
      question: "Yo laburo con mis manos y con esto (se señala la caja de herramientas). Que un incendio se lo endosen a mi trabajo no me lo deja dormir.",
      order: 1,
      options: [
        {
          key: "bruno_horario",
          label: "¿A qué hora terminaste tu trabajo ayer?",
          responseText:
            "A las cinco de la tarde, puntual. Terminé los empalmes de la zona noreste, dejé la llave en la oficina y me fui. Pregúntenle a cualquiera, me vieron salir antes del cierre como correspondía.",
        },
        {
          key: "bruno_porton",
          label: "El registro del portón dice que saliste a las 19:45.",
          requiresOptionKey: "bruno_horario",
          responseText:
            "¿A las siete y cuarenta y cinco? Debe ser un error del lector de patentes, el portón lo cruza todo el mundo a esa hora... Mire, le voy a ser franco, la instalación la terminé a las cinco, pero un repuesto no me alcanzó y volví a buscar uno de la camioneta. Para la cuenta de la dueña facturé 'hasta las cinco'. Una diferencia de papel, nada más.",
        },
        {
          key: "bruno_empalmes",
          label: "Háblame de los empalmes que hiciste.",
          requiresOptionKey: "bruno_horario",
          responseText:
            "Dos uniones en la zona noreste, la que alimenta las cámaras de la parte vieja. Las hice prolijas, con cinta, dentro de la caja. ¿Mal hechas? No me haga decirle que no porque esa obra la cobré yo, pero hoy mismo puedo llevarlo a mirarlas con el perito.",
        },
        {
          key: "bruno_ev_pericia",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la pericia que descarta el origen eléctrico",
          requiresClueKey: "pericia-electrica",
          responseText:
            "¿Dice que no fue eléctrico? Tocó de madera, porque el miedo que tenía es que me carguen un corto mío. La pericia lo exculpa, pero el informe marca que los empalmes no cumplen la norma... eso sí lo admito, los hice apurado. Fue un trabajo para mañana, mal hecho, pero no prendió fuego esta playa.",
        },
        {
          key: "bruno_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu camioneta retirándose a las 19:45",
          requiresClueKey: "camara-porton",
          responseText:
            "Sí, es mi camioneta... el registro no miente. Yo dije cinco porque le facturé a la dueña cinco, pero volví a buscar el repuesto y me fui a las siete y cuarenta y cinco. Mire, si el incendio pasó de madrugada, no hay forma de que un tipo que se fue a las ocho tenga algo que ver. Fueron mis papeles lo que estuve tapando, no una llama.",
        },
      ],
    },
    {
      suspectKey: "bruno",
      question: "Con la electricidad no se jode, eso lo aprendí con sangre ajena. Esta vez perdieron una vida y yo no quiero ni imaginar que me toque a mí.",
      order: 2,
      options: [
        {
          key: "bruno_instalacion",
          label: "¿Cómo venía la instalación del galpón?",
          responseText:
            "Vieja, muy vieja. Cables de hace veinte años, tableros que no cierran bien y una puesta a tierra que da vergüenza ajena. Le avisé a Camila en tres facturas que había que rehacerla, y la respuesta fue 'cuando se funda algo'. A la noche se fundió todo, pero no por la instalación: la pericia lo dice.",
        },
        {
          key: "bruno_roberto",
          label: "¿Conocías a Roberto, el guardia?",
          responseText:
            "De cruzarlo en la playa cuando laburaba hasta tarde y de ping-pong de mates. Le quedaba grande el turno, pero se la bancaba. No me lo imagino metido en ningún negocio raro; era de esos tipos que prefieren irse antes que ensuciarse las manos. Que haya quedado adentro de esa oficina me rompe la cabeza.",
        },
        {
          key: "bruno_lina",
          label: "Se dice que en la playa hay movidas raras con la chatarra.",
          requiresOptionKey: "bruno_empalmes",
          responseText:
            "¿Del fierro viejo del patio? Todo el mundo lo sabía, menos los de arriba. Ernesto y Roberto vendían algo de chatarra a un hierrero de la zona, plata negra, un choreo menor de rezagos que nadie contaba. Eso no prende fuego un galpón ni mata a un guardia, pero si el hierrero tiene papeles, hágalo hablar y lo va a confirmar.",
        },
        {
          key: "bruno_seguro",
          label: "¿El seguro te contactó por tu trabajo?",
          responseText:
            "El perito de la aseguradora me llamó ayer para 'ajustar puntos de la instalación'. Le mostré el informe eléctrico y me puso una cara... de alivio, creo. Lo que no le dije fue la hora de salida de la camioneta. De eso hoy me comprende usted.",
        },
      ],
    },

    // ---------------- ERNESTO ----------------
    {
      suspectKey: "ernesto",
      question: "Yo llamé a los bomberos, señor, eso lo sabe el que quiera. No me venga con vueltas.",
      order: 1,
      options: [
        {
          key: "ernesto_hora",
          label: "¿A qué hora llamaste a los bomberos?",
          responseText:
            "A las tres y cuarto, casi tres y dieciséis. La llamada quedó registrada, se la pueden escuchar: dije que ardía el galpón de Electrosur y que estuviera de testigo el de la guardia. Yo no estaba de turno esa noche, estaba de paso, y pasé justo cuando lo vi arder.",
        },
        {
          key: "ernesto_playa",
          label: "¿Por qué estabas 'de paso' por la playa a esa hora?",
          requiresOptionKey: "ernesto_hora",
          responseText:
            "¿Por qué un pibe de veintinueve años anda a la madrugada por un almacén abandonado? Porque sí, hace calor, y se puede tomar aire. Metí el auto en la calle lateral, apagué el motor y me quedé escuchando la radio hasta que vi el humo. No tengo nada más que eso, y si me pregunta otra vez la misma hora, es la misma respuesta.",
        },
        {
          key: "ernesto_ev_chatarra",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la libreta del hierrero con tu nombre",
          requiresClueKey: "chatarra",
          responseText:
            "Eso era un trabajo de fierro viejo, plata chica: Roberto y yo vendíamos el desecho del patio a un hierrero para sacar unos pesos que no declarábamos. Estuve mal, lo sé, a mi vieja le daría un infarto. Por eso me enredo con las horas... pero eso no es un incendio, eso es una changa de rezagos.",
        },
        {
          key: "ernesto_ev_camara_silo",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu auto cerca del predio a las 03:05",
          requiresClueKey: "camara-silo",
          responseText:
            "¿Mi auto a las tres y cinco? Sí, ya te dije, andaba dando vueltas por la zona. Llegué antes de ver el humo y por eso no llamé apenas: no sabía si era un asado de los que viven al lado o si era posta. Después vi la llama en serio y llamé a los bomberos. Esa es toda la vuelta, inspector.",
        },
        {
          key: "ernesto_roberto",
          label: "¿Roberto sabía que ibas a estar cerca esa noche?",
          requiresOptionKey: "ernesto_ev_chatarra",
          responseText:
            "No, y eso me quema: la última vez que le hablé por teléfono me dijo 'te espero con el mate' y yo le dije 'después paso'. Cuando vi el humo, el teléfono me pesaba como un ladrillo. Si él sabía que yo andaba por ahí, capaz que bajaba a abrirme. El solo me dejó la billetera en la mesa y se fue al turno. Se me murió un amigo y yo estaba a trescientos metros.",
        },
      ],
    },
    {
      suspectKey: "ernesto",
      question: "Roberto era más que un compañero de turno. Que yo no haya entrado al galpón cuando lo vi arder es lo que voy a arrastrar toda la vida.",
      order: 2,
      options: [
        {
          key: "ernesto_no_entrar",
          label: "¿Por qué no entraste a buscarlo?",
          responseText:
            "Porque el fuego ya lo había tragado, inspector. El galpón era una boca de horno y la oficina estaba del lado del humo. Llamé a los bomberos primero y después no me dejaron entrar ni los de la guardia. Si le digo que me quedé mirando una hora, le miento: me quedé toda la noche, hasta que sacaron el cuerpo.",
        },
        {
          key: "ernesto_abel",
          label: "¿Viste a Abel Ramírez esa madrugada?",
          requiresOptionKey: "ernesto_hora",
          responseText:
            "No lo vi hasta que llegaron los bomberos, y ahí ya estaba. Dijo que la alarma lo había llamado a él y que salió corriendo desde su casa. Yo no lo vi llegar, la verdad, me distraje con el humo. Pero prendido al teléfono sí: llamó a la dueña antes que a nadie, según me contó el de la guardia.",
        },
        {
          key: "ernesto_ev_pericia",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la pericia con el acelerante en tres focos",
          requiresClueKey: "acelerante",
          responseText:
            "¿Nafta en tres focos? O sea que no fue un accidente... entonces alguien estuvo adentro con combustible, prendió fuego y se fue antes de que yo llamara. Yo llegué a las tres y cinco y no vi a nadie salir. Pero mire la hora: tres y doce dijo el sistema de alarma... y yo no prendí ni mi porro esa noche, inspector.",
        },
        {
          key: "ernesto_ev_billetera",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la billetera de Roberto",
          requiresClueKey: "billetera-roberto",
          responseText:
            "La billetera es la que él sacaba siempre en el mostrador para cargar el sube... se la olvidó y volvió a buscarla, seguro. Roberto no afanaba nada, eso se lo juro por lo que más quiero. Con el tiempo que hacía pasando todo por el lado oscuro del patio, nunca se llevó una moneda del galpón. De chatarra a chatarra, éramos dos bobos con plata en negro, no dos chorros.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "17:00",
      text: "Bruno declara haber terminado su trabajo eléctrico. El portón lo registra saliendo a las 19:45.",
      revealedByOptionKey: "bruno_porton",
    },
    {
      time: "22:00",
      text: "Abel dice haber cerrado la playa y haberse retirado a su casa.",
      revealedByOptionKey: "abel_horario",
    },
    {
      time: "03:00",
      text: "La cámara del portón trasero registra a Abel entrando a la playa con llave propia, cuando aseguraba estar durmiendo.",
      revealedByClueKey: "camara-porton",
    },
    {
      time: "03:05",
      text: "El coche de Ernesto aparece cerca del predio. Él dice que estaba 'de paso'.",
      revealedByClueKey: "camara-silo",
    },
    {
      time: "03:12",
      text: "El sistema de alarmas marca el número del jefe de depósito: 'Ramírez'. El fuego ya está encendido.",
      revealedByClueKey: "llama-camila",
    },
    {
      time: "03:12",
      text: "La alarma de humo se activa en el galpón. El incendio ya está en marcha.",
      isPublic: true,
    },
    {
      time: "03:15",
      text: "Ernesto llama a los bomberos desde la calle, a dos cuadras.",
      revealedByOptionKey: "ernesto_hora",
    },
    {
      time: "03:25",
      text: "El Bora gris de Abel sale del estacionamiento lindero hacia la avenida, sin apuro.",
      revealedByClueKey: "camara-silo",
    },
    {
      time: "04:30",
      text: "La pericia inicial en el galpón detecta nafta en tres focos distintos: fuego intencional.",
      revealedByClueKey: "acelerante",
    },
    {
      time: "07:00",
      text: "Contra los manifiestos de entrada, el inventario deja a la vista el faltante: más de doscientos aparatos.",
      revealedByClueKey: "inventario",
    },
  ],

  deductions: [
    {
      title: "El incendio fue intencional y no eléctrico",
      text: "Tres focos con nafta y la pericia eléctrica descartando todo cortocircuito cierran el debate: esto se prendió a propósito. Los empalmes de Bruno, por mal hechos que estén, jamás encendieron la llama.",
      requiredClueKeys: ["acelerante", "pericia-electrica"],
      order: 1,
    },
    {
      title: "Quién estuvo ahí y quién dijo que no",
      text: "La cámara del portón muestra a Abel en la playa a las 03:00, cuando él aseguraba haberse ido a las 22:00. Y la alarma no llamó a Camila: llamó a 'Ramírez', que atendió a los 6 segundos. El jefe de depósito estaba en el lugar cuando empezó el fuego, y su coche se fue veintitrés minutos después.",
      requiredClueKeys: ["camara-porton", "llama-camila", "camara-silo"],
      requiredOptionKeys: ["abel_horario", "abel_alarma"],
      order: 2,
    },
    {
      title: "El motivo: un agujero que iba a destaparse",
      text: "El inventario anual contra los manifiestos de entrada deja un faltante de más de doscientos electrodomésticos, con justificaciones de papel que no cierran. Solo el jefe de depósito tenía la llave del galpón, el acceso de carga y el control de cada remito. El fuego iba a 'quemar el inventario' justo la semana que se lo contaban a la dueña.",
      requiredClueKeys: ["inventario", "camara-porton"],
      requiredOptionKeys: ["camila_inventario", "abel_ev_inv"],
      order: 3,
    },
    {
      title: "Las explicaciones inocentes de los otros tres",
      text: "Los empalmes de Bruno eran una chapuza y nada más: la pericia lo exculpa. Las facturas de garaje de Camila eran su mini reventa en negro, paralela al fuego. El auto de Ernesto cerca del predio y su testimonio lleno de huecos se explican por la chatarra que vendía con Roberto. Tres secretos feos, tres inocentes.",
      requiredClueKeys: ["empalmes-bruno", "facturas-garaje", "chatarra"],
      requiredOptionKeys: ["bruno_ev_pericia", "camila_ev_facturas", "ernesto_ev_chatarra"],
      order: 4,
    },
    {
      title: "Roberto volvió por la billetera",
      text: "La billetera con la plata adentro, al lado del mate a medio tomar, no lo convierte en cómplice de nadie: el guardia de relevo volvió a la oficina a buscar lo que se olvidó y quedó atrapado por el humo. Una tragedia, no una sociedad.",
      requiredClueKeys: ["billetera-roberto"],
      requiredOptionKeys: ["camila_ev_billetera", "ernesto_ev_billetera"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      {
        label:
          "El inventario anual iba a destapar el desfalco de mercadería que venía cometiendo",
        isCorrect: true,
      },
      { label: "Quería cobrar el seguro de la mercadería para fundar un negocio propio" },
      { label: "Tenía deudas de juego y necesitaba quemar la evidencia de sus robos menores" },
      { label: "Le guardaba rencor a la dueña por no darle el ascenso a gerente" },
    ],
    methods: [
      {
        label: "Roció tres focos con nafta e incendió el galpón para quemar el inventario",
        isCorrect: true,
      },
      { label: "Provocó un cortocircuito en los empalmes para simular un accidente eléctrico" },
      { label: "Usó un bidón de combustible que dejó caer 'sin querer' cerca de un toma corriente" },
      { label: "Pagó a un tercero para que prenda el fuego desde la calle mientras él daba la alarma" },
    ],
  },
};