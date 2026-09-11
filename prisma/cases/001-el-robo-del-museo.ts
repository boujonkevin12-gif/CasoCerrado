import type { CaseDef } from "./types";

/**
 * CASO 001 — El robo del museo
 * Dificultad: FÁCIL | Robo de obra de arte
 *
 * QUÉ OCURRIÓ REALMENTE
 * Valeria Sandoval (curadora jefe) robó la "Aurora" de Marchevsky. Sabía que la
 * madrugada siguiente había una ventana de mantenimiento programada sobre el
 * perímetro (01:55–02:15). Meses antes encargó una réplica exacta a Julieta
 * (la restauradora) con el pretexto de una muestra itinerante. A las 02:04
 * cruzó el vestíbulo, recortó la lona con bisturí, enrolló la obra y la dejó
 * en el conducto de mantenimiento del ala este para retirarla en horas de menor
 * movimiento. Necesitaba el dinero para el tratamiento de su hija.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Ramiro: el vigilante mintió sobre su ronda porque esa noche robó del museo
 *   un abrecartas de plata para venderlo (deudas de juego). Inocente del cuadro.
 * - Julieta: pintó la réplica creyendo que era de exhibición. No sabía nada del
 *   plan. Omitió que estuvo el miércoles midiendo el marco.
 * - Emiliano: el auditor se quedó hasta las 19:30 buscando el informe técnico
 *   de la aseguradora anterior. Bajo sospecha de sobrevaluación, incómodo, no
 *   lo dijo por criterio profesional.
 */
export const case001: CaseDef = {
  code: "CASO-001",
  slug: "el-robo-del-museo",
  title: "El robo del museo",
  intro:
    "La pieza central del Museo de Arte Contemporáneo, 'Aurora' de Marchevsky, desapareció durante la noche. La alarma jamás sonó, el vidrio de seguridad no se tocó y del marco solo queda el recorte limpio de un bisturí. El director pide discreción: esta obra está valuada en más de dos millones de dólares. Tenés el expediente y cinco personas que estuvieron en el museo en las últimas 48 horas. Una sola movió la obra.",
  scene: "museo",
  victim: { name: "Museo de Arte Contemporáneo (obra perdida: 'Aurora', de Marchevsky)", age: 0, job: "" },
  place: "Museo de Arte Contemporáneo, ala oeste",
  timeOfCrime: "02:04",
  difficulty: "FACIL",
  order: 1,
  requiredLevel: 1,
  motive:
    "Valeria Sandoval necesitaba plata para el tratamiento médico de su hija. Su crédito bancario no alcanzó y una galería europea le ofreció comprar la original en silencio. Encargó una réplica a Julieta meses antes como 'copia de exhibición' y usó la ventana de mantenimiento del perímetro para sacar la obra enrollada.",
  method:
    "Durante la ventana de mantenimiento de la alarma (01:55–02:15), Valeria cruzó el vestíbulo hacia la sala de colección, recortó la lona con bisturí desde el marco, enrolló la obra y la ocultó dentro del conducto de mantenimiento del ala este. Dejó la réplica del taller sin colgar y retiró la original al día siguiente.",
  resolutionText:
    "La alarma estaba desactivada por la propia agenda técnica del museo, así que el robo solo pudo ser de alguien con acceso al calendario de mantenimiento y a la bóveda. La réplica se pintó en el taller del museo semanas atrás: la orden de trabajo firmada por V.S. y el testimonio de Julieta lo confirman. La huella fresca del marco corresponde a la curadora, que esa tarde sí estuvo en la sala supervisando las luces. Quien pudo encargar la copia, conocer la ventana de mantenimiento y mover el acervo sin que nadie notara el trámite era la curadora jefe. El abrecartas de Ramiro, aunque lo complicaba, era un robo menor sin relación con la obra.",
  xpReward: 500,
  coinReward: 250,
  guiltyKey: "valeria",

  suspects: [
    {
      key: "valeria",
      name: "Valeria Sandoval",
      age: 55,
      job: "Curadora jefe",
      relationship: "Responsable directa del acervo",
      bio: "Tres décadas en el museo, la persona con más información sobre cada obra, cada llave y cada agenda técnica. Respira calamidad por el caso: la obra era 'su' obra.",
      avatarColor: "#3a4a5a",
      alibi: "Dice que se fue a las 20:00 y que estuvo en casa con su hija toda la noche. El jueves de tarde supervisó la instalación de las luces nuevas en la sala de colección.",
      openingStatement:
        "Esto no tendría que haber pasado jamás, y me lo van a endosar a mí porque soy la cara del acervo. Pregunte, pero no me venga con que el curador roba porque tiene familia enferma.",
      order: 1,
    },
    {
      key: "ramiro",
      name: "Ramiro Cáceres",
      age: 48,
      job: "Vigilante nocturno",
      relationship: "Guardia del museo",
      bio: "Quince años de servicio, turno de noche. Ahora mismo no puede sostener tu mirada por más de dos segundos, y todos en el museo saben que arrastra problemas con el juego.",
      avatarColor: "#5a4a2a",
      alibi: "Declaró que hizo la ronda completa a la 01:00 y volvió al puesto a las 02:30 a tomar mate. Nadie lo vio en el ala este.",
      openingStatement:
        "Yo no vi nada. Hice mi ronda, tomé el termo y me acosté. Es un museo que da calma, hasta anoche.",
      order: 2,
    },
    {
      key: "julieta",
      name: "Julieta Ferro",
      age: 39,
      job: "Restauradora",
      relationship: "Restauradora del acervo",
      bio: "Pintó la réplica de 'Aurora' meses atrás para un préstamo itinerante que nunca salió. Sabe que el director Andrés le usó el crédito de su restauración más importante, y no lo perdona.",
      avatarColor: "#4a3a5a",
      alibi: "Dice que no pisó el museo esa noche y que la última vez había sido el martes. El registro de acceso la marca el miércoles de tarde, midiendo un marco.",
      openingStatement:
        "Ya me veo venir: la restauradora, otra vez. Miren: yo pinto copias para exhibiciones, no saco originales por la puerta de atrás.",
      order: 3,
    },
    {
      key: "emiliano",
      name: "Emiliano Rojas",
      age: 45,
      job: "Auditor de seguros",
      relationship: "Auditaba la póliza de la colección",
      bio: "Representante de la aseguradora, en el museo el jueves para revisar la valuación del acervo tras un aviso anónimo de sobrevaluación. Dice que se fue a las 18:00.",
      avatarColor: "#2a4a3a",
      alibi: "Declaró que estuvo de 14:00 a 18:00 y que salió antes del cierre. El ticket del estacionamiento dice que su coche salió a las 19:30.",
      openingStatement:
        "Tengo que ser claro: si esto resulta un siniestro real, mi informe va a quedar en evidencia. Me quedé hasta tarde intentando encontrar el expediente técnico anterior.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "vestibulo",
      name: "Vestíbulo",
      description:
        "El hall de entrada, con el mostrador de seguridad y las consolas de cámaras. La noche del robo estuvo apenas iluminado, como siempre.",
      order: 1,
      actions: [
        {
          label: "Revisar el registro del sistema de alarma",
          resultText:
            "La consola guarda un evento a nombre de 'MANTENIMIENTO-PREVISTO': el perímetro del ala oeste quedó desactivado entre 01:55 y 02:15. No fue un fallo.",
          clueKey: "registro-sistema",
          order: 1,
        },
        {
          label: "Ver la cámara del vestíbulo",
          resultText:
            "A las 02:04 una figura con abrigo cruzó hacia el pasillo de mantenimiento, con la solapa levantada. Es la única figura entre la 01:00 y las 03:40.",
          clueKey: "camara",
          order: 2,
        },
        {
          label: "Hablar con el jefe de seguridad",
          resultText:
            "'La única persona fuera de horario anoche fue Ramiro, el de la ronda. Las llaves de la sala nunca salieron de su caja, y la bóveda solo se toca con doble firma en horario administrativo.'",
          order: 3,
        },
      ],
    },
    {
      key: "sala-coleccion",
      name: "Sala de colección",
      description:
        "El marco vacío todavía cuelga en la pared. Alrededor, el piso pulido y la alfombra del spot, impecables. Demasiado impecables.",
      order: 2,
      actions: [
        {
          label: "Examinar el marco vacío",
          resultText:
            "La lona fue recortada con precisión de cirujano desde atrás del marco. El papel de respaldo está rasgado en una esquina, como si lo hubieran levantado de apuro.",
          clueKey: "marco-vacio",
          order: 1,
        },
        {
          label: "Espolvorear el marco por huellas",
          resultText:
            "Una huella fresca, parcial, en el ángulo inferior izquierdo. El resto del marco está limpio: o usaron guantes o alguien lo limpió después.",
          clueKey: "huella-fresca",
          order: 2,
        },
        {
          label: "Rastrear el piso hacia el pasillo",
          resultText:
            "Marcas de arrastre sutiles sobre la alfombra, hacia el pasillo de mantenimiento. Dos metros adentro del conducto, una lámina de pintura dorada con imprimación de tela.",
          clueKey: "huella-piso",
          order: 3,
        },
      ],
    },
    {
      key: "restauracion",
      name: "Taller de restauración",
      description:
        "El taller huele a trementina y a papel viejo. En la mesa principal, caballetes, espátulas y un bollo de papel de seda en la papelera.",
      order: 3,
      actions: [
        {
          label: "Revisar la papelera del taller",
          resultText:
            "Entre los descartes hay un recorte de lona: el mismo tejido y preparación que usá la restauradora para copias. Tiene etiqueta 'Proy 47-B'.",
          clueKey: "lona-restauracion",
          order: 1,
        },
        {
          label: "Buscar órdenes de trabajo",
          resultText:
            "Una orden interna encarga 'réplica de exhibición de Aurora, ajuste de marco y embalaje sellado'. Firmada con iniciales V.S. dentro de las últimas ocho semanas.",
          clueKey: "nota-pedido",
          order: 2,
        },
        {
          label: "Inspeccionar el depósito de copias",
          resultText:
            "La réplica de Julieta está ahí, envuelta en papel de seda, impecable. No parece haber salido nunca del taller.",
          order: 3,
        },
      ],
    },
    {
      key: "boveda",
      name: "Bóveda y registros",
      description:
        "Detrás de una puerta bancaria de dos toneladas, el registro de acceso a bóveda y los inventarios. En papel, todo en orden.",
      order: 4,
      actions: [
        {
          label: "Abrir el registro de accesos a bóveda",
          resultText:
            "El último movimiento de la semana fue el jueves 17:12: 'V. Sandoval — inventario mensual'. Sin anotaciones anómalas. El director y Julieta también entraron en la semana, en horario normal.",
          clueKey: "llave-boveda",
          order: 1,
        },
        {
          label: "Hojear el inventario del ala oeste",
          resultText:
            "Tres obras Marchevsky, todas 'en sala'. La hoja de 'Aurora' está doblada en el mismo lugar desde hace meses. Nada modificado.",
          order: 2,
        },
      ],
    },
  ],

  clues: [
    {
      key: "registro-sistema",
      title: "Ventana de mantenimiento",
      description:
        "El registro del sistema deja asentado que el perímetro del ala oeste estuvo desactivado entre 01:55 y 02:15 por orden 'MANTENIMIENTO-PREVISTO'. No fue accidente: fue planificado.",
      icon: "ShieldAlert",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "vestibulo",
    },
    {
      key: "camara",
      title: "Registro de cámara del vestíbulo",
      description:
        "A las 02:04 una figura con abrigo cruza el vestíbulo hacia el pasillo de mantenimiento, con la solapa levantada y sin apuro. Es la única figura entre la 01:00 y las 03:40.",
      icon: "Video",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "vestibulo",
    },
    {
      key: "marco-vacio",
      title: "El recorte del marco",
      description:
        "La lona fue recortada con bisturí desde atrás del marco, sin dañar el bastidor. El papel de respaldo está rasgado en una esquina, como si lo levantaran con prisa.",
      icon: "Scissors",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "sala-coleccion",
    },
    {
      key: "huella-fresca",
      title: "Huella fresca en el marco",
      description:
        "Una huella parcial, reciente, en el ángulo inferior izquierdo del marco. Lo demás está impecable: o usaron guantes, o limpiaron después. La huella se saltó la limpieza.",
      icon: "Fingerprint",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "sala-coleccion",
    },
    {
      key: "huella-piso",
      title: "Marca de arrastre y pintura dorada",
      description:
        "En la alfombra, marcas de arrastre hacia el pasillo de mantenimiento. Adentro del conducto, una lámina de pintura dorada con imprimación de tela: restos del marco de la obra.",
      icon: "Footprints",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "sala-coleccion",
    },
    {
      key: "lona-restauracion",
      title: "Recorte de lona del taller",
      description:
        "En la papelera del taller de restauración, un recorte de lona idéntico al de las copias de la restauradora, con etiqueta 'Proy 47-B'. La réplica se confeccionó aquí, en el museo.",
      icon: "Paintbrush",
      type: "FISICA",
      importance: "ALTA",
      locationKey: "restauracion",
    },
    {
      key: "nota-pedido",
      title: "Orden de trabajo de la curadora",
      description:
        "Orden interna que encarga una 'réplica de exhibición de Aurora' con ajuste de marco y embalaje sellado. Firmada con iniciales V.S. dentro de las últimas ocho semanas.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "restauracion",
    },
    {
      key: "llave-boveda",
      title: "Registro de accesos a bóveda",
      description:
        "El último acceso de la semana fue el jueves 17:12: 'V. Sandoval — inventario mensual'. Solo el personal de dirección y curaduría tiene firma habilitada para abrir.",
      icon: "KeyRound",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "boveda",
    },
    {
      key: "abrecartas",
      title: "Abrecartas de plata",
      description:
        "Un abrecartas de plata con la inscripción 'Obsequio del director 1998', escondido en la maceta del ala este. Un objeto del director que no tendría que estar ahí.",
      icon: "ScrollText",
      type: "FISICA",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "ala-este",
    },
  ],

  dialogues: [
    // ---------------- VALERIA ----------------
    {
      suspectKey: "valeria",
      question: "Pregunte usted con calma. La obra era mía en custodia, el primero en querer respuestas soy yo.",
      order: 1,
      options: [
        {
          key: "valeria_acceso",
          label: "¿Quién tenía acceso a la sala de colección el jueves?",
          responseText:
            "El director, yo, Julieta de restauración y el guardia nocturno. El auditor de la aseguradora también pasó, pero acompañado por Andrés todo el tiempo. El historial completo está en la bóveda.",
        },
        {
          key: "valeria_alarma",
          label: "¿Sabías que anoche había una ventana de mantenimiento?",
          requiresOptionKey: "valeria_acceso",
          responseText:
            "Las pruebas técnicas se programan por sistema y se les avisa al director y a quien esté de guardia. A mí me llegó el correo, es rutina. En eso no me detengo.",
        },
        {
          key: "valeria_replicas",
          label: "¿Existen reproducciones de 'Aurora'?",
          requiresOptionKey: "valeria_acceso",
          responseText:
            "Una, para catálogo de préstamos. Se pintó en el taller hace meses para una itinerante que al final no salió. Está en el depósito de copias, se puede verificar.",
        },
        {
          key: "valeria_hija",
          label: "Háblame de tu situación familiar.",
          responseText:
            "Mi hija está enferma y el tratamiento es caro, sí. Si está pensando en que robé por plata: saqué un crédito del banco y lo estoy pagando desde enero. Pueden pedir los movimientos, no tengo nada que esconder.",
        },
        {
          key: "valeria_director",
          label: "¿Cómo era tu relación con el director?",
          responseText:
            "Diez años de tirantez normal: yo defiendo el acervo, él defiende el presupuesto. Ni me odiaba ni me debía nada. El robo no nace de un malentendido de oficina.",
        },
        {
          key: "valeria_ev_copia",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la orden de trabajo firmada con tus iniciales",
          requiresClueKey: "nota-pedido",
          responseText:
            "Eso es de un proyecto interno, la réplica de catálogo que la misma Julieta pintó. Es mío, sí. No hay nada ilegal en encargar una copia de exhibición.",
        },
        {
          key: "valeria_ev_huella",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la huella fresca del marco",
          requiresClueKey: "huella-fresca",
          responseText:
            "El jueves a las cinco supervisé las luces nuevas, me apoyé en el marco con guantes y me los quité para firmar la planilla. Si hay una huella, es de ahí. No hace falta ser perito para ver que la escena está limpia en exceso.",
        },
      ],
    },

    // ---------------- RAMIRO ----------------
    {
      suspectKey: "ramiro",
      question: "Yo ya sé cómo piensan ustede': el que no tiene obra muerta por la noche la saca. Yo no saqué nada.",
      order: 1,
      options: [
        {
          key: "ramiro_ronda",
          label: "Contame tu ronda de esa madrugada.",
          responseText:
            "Salí a la una, de punta a punta. Vuelta completa, ala oeste incluida. Volví al puesto a las dos y media y me senté con el termo hasta el cambio de turno.",
        },
        {
          key: "ramiro_alerta",
          label: "¿Viste alguna alerta del sistema?",
          responseText:
            "Todo verde, toda la noche. Si sonaba algo, la consola me avisaba en el puesto. No sonó ni un pitido. Para mí que a esa hora ni los bichos se movían.",
        },
        {
          key: "ramiro_mantenimiento",
          label: "¿Te avisaron de la prueba de mantenimiento?",
          requiresOptionKey: "ramiro_ronda",
          responseText:
            "A mí no me avisan de esas cosas. El jefe las sabe y a veces me las cruza por radio. Ese sistema se apaga y se prende solito cuando lo deciden de oficina.",
        },
        {
          key: "ramiro_deudas",
          label: "Se rumorea que debés plata de juego.",
          responseText:
            "Como medio barrio, que soy honesto con eso. Pero las deudas de uno no lo vuelven ladrón: la quiniela no paga para entrar a un museo a robar un cuadro.",
        },
        {
          key: "ramiro_ev_abrecartas",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el abrecartas de plata",
          requiresClueKey: "abrecartas",
          responseText:
            "¿Eso? Eso estaba tirado en el piso del vestíbulo, lo levanté para que no lo pisaran y se me olvidó devolverlo. Palabra. Es del director, yo qué voy a querer la plata del director.",
        },
        {
          key: "ramiro_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del vestíbulo a las 02:04",
          requiresClueKey: "camara",
          responseText:
            "... la hora de la foto no la vi, yo estaba en el puesto. Si la cámara dice algo, la cámara miente. Esa figura con abrigo no soy yo; yo de noche uso campera corta.",
        },
      ],
    },

    // ---------------- JULIETA ----------------
    {
      suspectKey: "julieta",
      question: "Yo pinté esa copia para que la vieran en otros museos, no para reemplazar nada. Broma del destino, a mí me acusan de todo.",
      order: 1,
      options: [
        {
          key: "julieta_replica",
          label: "¿Quién pintó la réplica de 'Aurora'?",
          responseText:
            "Yo. Proyecto 47, comentado en orden interna hace unos meses. Quedó tan buena que me hubiera gustado firmarla. Si ustedes la ven, va a entender mi orgullo.",
        },
        {
          key: "julieta_encargo",
          label: "¿Quién te encargó esa copia?",
          requiresOptionKey: "julieta_replica",
          responseText:
            "La curadora. La orden viene firmada por ella y el logo del expediente. Yo solo pinté y ajusté el marco; el embalaje y la entrega los armó depósito.",
        },
        {
          key: "julieta_miercoles",
          label: "Dijiste que no venías desde el martes, pero el acceso dice miércoles.",
          requiresOptionKey: "julieta_encargo",
          responseText:
            "Cierto, el miércoles a la tarde pasé a medir el marco para el Proyecto 47. Se me olvidó decirlo porque para mí fue rutina. No tiene absolutamente nada que ver con la noche del robo.",
        },
        {
          key: "julieta_director",
          label: "¿Cómo te llevabas con el director?",
          responseText:
            "Andrés se quedó con el crédito de mi restauración de la fachada de 'La Inmóvil'. Discutimos, sí, fue feo. De ahí a sacar un original de un museo... yo hago copias, me pagan por hacer copias. Robarme a mí misma no tiene sentido.",
        },
        {
          key: "julieta_ev_lona",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el recorte de lona con la etiqueta 'Proy 47-B'",
          requiresClueKey: "lona-restauracion",
          responseText:
            "Ese es un descarte de la preparación, lo usamos para probar imprimación. La 'Proy 47' es la copia de catálogo, la pinté y la entregué meses atrás. Que quedara un retazo ahí no prueba quién la movió de noche.",
        },
      ],
    },

    // ---------------- EMILIANO ----------------
    {
      suspectKey: "emiliano",
      question: "Si esto es un siniestro real, la aseguradora va a mirar mi auditoría bajo lupa. Colaboren conmigo y colaboro con ustedes.",
      order: 1,
      options: [
        {
          key: "emiliano_visita",
          label: "¿Cuándo estuviste en el museo el jueves?",
          responseText:
            "De catorce a dieciocho, con el director, revisando póliza e inventario. A las seis en punto me fui; hasta tomé una foto del reloj por lo exacto que soy.",
        },
        {
          key: "emiliano_ticket",
          label: "El ticket del estacionamiento marca la salida a las 19:30.",
          requiresOptionKey: "emiliano_visita",
          responseText:
            "Bueno... no me fui a las seis. Me quedé buscando el informe técnico de la aseguradora anterior que el director no quería mostrarme. Salí a las 19:30, lo admito. No tengo nada que ver con un robo que pasó seis horas después.",
        },
        {
          key: "emiliano_anom",
          label: "¿Por qué auditan esta colección justo ahora?",
          responseText:
            "Un aviso anónimo denunció sobrevaluación del acervo. Son obras tasadas altísimo y, si algo estuviera inflado, la póliza pagaria más de lo justo. Mi trabajo es comprobarlo con papeles, no con llaves.",
        },
        {
          key: "emiliano_informe",
          label: "¿Qué buscabas en el expediente técnico?",
          requiresOptionKey: "emiliano_anom",
          responseText:
            "La tasación previa, para comparar. El director la guardaba como oro. No la encontré y por eso me quedé de más. Acceso a depósitos o a la sala, ninguno: solo sala de juntas y archivo, y el archivo estaba cerrado.",
        },
        {
          key: "emiliano_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del vestíbulo a las 02:04",
          requiresClueKey: "camara",
          responseText:
            "A esa hora yo ya estaba durmiendo en mi casa con la alarma puesta y el recibo del estacionamiento para probarlo. Mido 1.90, esa figura es mucho más baja que yo.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "17:12",
      text: "Valeria registra el último acceso a la bóveda del día ('inventario mensual').",
      revealedByClueKey: "llave-boveda",
    },
    {
      time: "17:15",
      text: "Valeria supervisa las luces nuevas en la sala de colección. Se apoya en el marco.",
      revealedByClueKey: "huella-fresca",
    },
    {
      time: "18:00",
      text: "Emiliano termina su turno de auditoría... aunque su coche no sale hasta las 19:30.",
      revealedByOptionKey: "emiliano_ticket",
    },
    {
      time: "01:55",
      text: "La consola abre la ventana de mantenimiento del perímetro oeste.",
      revealedByClueKey: "registro-sistema",
    },
    {
      time: "02:04",
      text: "Una figura con abrigo cruza el vestíbulo hacia el pasillo de mantenimiento.",
      revealedByClueKey: "camara",
    },
    {
      time: "02:12",
      text: "La misma figura aparece cerca del ala este, sin apuro.",
      revealedByClueKey: "camara",
    },
    {
      time: "02:30",
      text: "Ramiro declara que volvió al puesto de vigilancia para tomar mate.",
      revealedByOptionKey: "ramiro_ronda",
    },
    {
      time: "02:15",
      text: "Se restablece el perímetro. La obra ya no está en el marco.",
      isPublic: true,
    },
  ],

  deductions: [
    {
      title: "La alarma se apagó a propósito",
      text: "La ventana de mantenimiento abrió la única brecha posible. Quien robó conocía la agenda técnica del museo: no fue un robo oportunista de la calle.",
      requiredClueKeys: ["registro-sistema"],
      order: 1,
    },
    {
      title: "La copia se confeccionó en el propio museo",
      text: "La lona del taller y la orden de trabajo lo confirman: la réplica se pintó acá, adentro, hace semanas. Julieta la hizo creyendo que era para una exhibición.",
      requiredClueKeys: ["lona-restauracion", "nota-pedido"],
      requiredOptionKeys: ["julieta_encargo"],
      order: 2,
    },
    {
      title: "La ronda del vigilante tiene un agujero",
      text: "La cámara muestra a la figura de las 02:04 y Ramiro insiste en que estaba en el puesto con el termo. La explicación más simple: mintió sobre el ala este. El abrecartas de plata en la maceta explica el porqué de la mentira... y no es la obra.",
      requiredClueKeys: ["camara", "abrecartas"],
      requiredOptionKeys: ["ramiro_ronda", "ramiro_ev_abrecartas"],
      order: 3,
    },
    {
      title: "Quien encargó la copia pudo mover el original",
      text: "La orden de trabajo firmada V.S., la huella fresca en el marco y el acceso a bóveda de la curadora cierran el círculo. Valeria no solo tenía las llaves: tenía el encargo por escrito y la excusa de la supervisión de luces para estar en la sala.",
      requiredClueKeys: ["nota-pedido", "huella-fresca", "llave-boveda"],
      requiredOptionKeys: ["julieta_encargo"],
      order: 4,
    },
  ],

  accusation: {
    motives: [
      { label: "Necesitaba el dinero para el tratamiento de su hija", isCorrect: true },
      { label: "Quería perjudicar al director para ocupar su puesto" },
      { label: "Tapaba un robo menor del acervo que él mismo cometió" },
      { label: "Trabajaba para una red internacional de obras de arte" },
    ],
    methods: [
      { label: "La sacó enrollada durante la ventana de mantenimiento de la alarma", isCorrect: true },
      { label: "La sacó enrollada por la puerta principal en horario de guardia" },
      { label: "La escondió entre el flete de la exposición itinerante que salió al mediodía" },
      { label: "La pasó de noche ayudado por un cómplice del servicio de seguridad" },
    ],
  },
};