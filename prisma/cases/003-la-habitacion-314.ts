import type { CaseDef } from "./types";

/**
 * CASO 003 — La habitación 314
 * Dificultad: MEDIO | Homicidio disfrazado de suicidio
 *
 * QUÉ OCURRIÓ REALMENTE
 * Norberto Villafañe apareció muerto en la habitación 314 del Hotel Del Pasaje:
 * cadena puesta por dentro, balcón cerrado, una nota de despedida y pastillas
 * junto al whisky del minibar. Autopsia: zolpidem —el mismo somnífero que él
 * tomaba— mezclado con el alcohol. No fue suicidio.
 * El culpable es René Ocampo, su socio comercial. Norberto lo citó al hotel para
 * "firmar la venta de la empresa". René sabía que tomaba zolpidem, se lo disolvió
 * en el whisky y, cuando se durmió, montó la escena: escribió la nota en la
 * máquina de escribir vieja de la administración (primera planta, oficina),
 * posó el frasco, trabó la cadena DESDE ADENTRO y salió por el balcón
 * compartido entre la 312 y la 314 (la división es baja y se cruza a la carrera).
 * René ocupaba la 312, reservada como "Sr. Andrades": pago en efectivo, sin
 * equipaje, check-out a la medianoche, el cuello del sobretodo levantado.
 * Motivo: Norberto iba a denunciar el fraude de las demoliciones y la venta
 * estaba al caer; René necesitaba su firma antes del cierre anual.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Delia: recepcionista que chantajeaba a Norberto por el desalojo de los
 *   años 90 (una muerte que lo enriqueció). Cobraba "gastos de estancia" en
 *   efectivo y cocinó la contabilidad del hotel. No sabía nada del asesinato.
 * - Tito: mozo que encontró el cuerpo. Vio entrar a René a la 312 a las 21:05
 *   y lo anotó ("el señor Andrades perfumado"), y se quedó con el reloj de
 *   Norberto del cajón, "compensación por las propinas que no le pagan".
 *   Inocente de la muerte.
 * - Icela: mucama que vio una sombra cruzar el balcón de la 314 a las 23:35
 *   y oyó voces a las 22:00, pero no lo dijo por miedo a represalias.
 *   No tuvo relación con el crimen.
 */
export const case003: CaseDef = {
  code: "CASO-003",
  slug: "la-habitacion-314",
  title: "La habitación 314",
  intro:
    "En el Hotel Del Pasaje, la habitación 314 amaneció con la cadena puesta por dentro, el balcón sellado y un empresario muerto sobre el colchón: Norberto Villafañe, 61 años, cara visible del negocio inmobiliario más prolífero de la ciudad. La nota de despedida descansa en la mesa, el frasco de pastillas está a medio vaciar y el whisky del minibar quedó a medias. Parece un suicidio prolijo, de manual. Pero cuando un muerto deja la escena DEMASIADO ordenada, alguien más trabajó esa habitación. El hotel tiene cuatro pisos, una máquina de escribir sin dueño y una recepcionista que sonríe con la cuenta ya hecha. Descubrí quién puso todo en su lugar.",
  scene: "hotel",
  victim: {
    name: "Norberto Villafañe",
    age: 61,
    job: "Empresario inmobiliario",
  },
  place: "Hotel Del Pasaje, habitación 314",
  timeOfCrime: "22:20",
  difficulty: "MEDIO",
  order: 3,
  requiredLevel: 2,
  motive:
    "René Ocampo era socio de Norberto y el comprador de la empresa por la venta que estaba por cerrarse. Norberto había encontrado el fraude de las demoliciones —facturas truchas que René venía embolsando desde hacía dos obras— y amenazó con denunciarlo antes de firmar nada. René necesitaba la firma de Norberto antes del cierre anual para blanquear el agujero. Lo citó al hotel, lo durmió con su propio zolpidem y lo silenció para siempre.",
  method:
    "René reservó la 312 como 'Sr. Andrades' (efectivo, sin equipaje), se reunió con Norberto en la 314 bajo el pretexto de firmar la venta, disolvió las pastillas de zolpidem de Norberto en el whisky del minibar y, cuando se durmió alrededor de las 22:20, montó un suicidio: mecanografió la nota de despedida con la máquina de escribir de la administración, posó el frasco, trabó la cadena desde adentro y escapó por el balcón compartido hacia la 312. Salió del hotel a las 23:50, tranquilo y sin equipaje.",
  resolutionText:
    "La nota no era de Norberto: salió de la máquina de escribir del hotel, una máquina que nadie usa y que vive en la oficina de la primera planta. No hay ni una huella en el papel, y la cinta guarda la impronta fresca de las mismas letras. La toxicología mostró zolpidem por encima de la dosis usual mezclado con el alcohol del minibar: nadie que quisiera despedirse se toma el doble de su somnífero en whisky. Los balcones 312/314 tienen división baja y rozaduras frescas justo en el cruce; la sombra que Icela vio a las 23:35 venía de ese lado. El registro de huéspedes marca al 'señor Andrades': pagó en efectivo, no durmió en la cama, no pidió desayuno y se fue a medianoche, la misma figura que la cámara del vestíbulo registra saliendo con el cuello levantado y sin maleta. Norberto alcanzó a llamar a su hermano a las 22:03: 'si me pasa algo, revisá el sobre de la oficina'. El sobre denunciaba el fraude de las demoliciones, y quien tenía la firma en jaque antes del cierre anual era su socio: René Ocampo. La libreta de Delia era un chantaje viejo sobre un desalojo de los años 90; el reloj de Tito, una compensación por propinas que nunca existieron. Ni uno ni otro tenían la máquina de escribir a mano.",
  xpReward: 700,
  coinReward: 350,
  guiltyKey: "rene",

  suspects: [
    {
      key: "rene",
      name: "René Ocampo",
      age: 56,
      job: "Socio comercial",
      relationship: "Socio y comprador de la empresa de la víctima",
      bio: "Trece años de sociedad, mil horas de juntas. Es el único que responde con calma de novela: colabora, se apena, corrige las fechas que el expediente trae mal. Se le quiebra el pulso recién cuando el nombre 'Andrades' aparece en la conversación.",
      avatarColor: "#3a465a",
      alibi: "Dice que pasó la noche en su casa esperando el llamado de Norberto, que nunca llegó. No ofrece testigos ni pide ninguno. En todo lo demás, colabora con naturalidad.",
      openingStatement:
        "Norberto era mi socio hace treinta años y mañana esta empresa ya tenía dueño nuevo. Si querés hablar de la venta, te aclaro todo. Si querés hablar de su muerte, te ayudo hasta que lloremos juntos.",
      order: 1,
    },
    {
      key: "delia",
      name: "Delia Pacheco",
      age: 68,
      job: "Recepcionista",
      relationship: "Primera línea de recepción del hotel",
      bio: "Treinta años detrás del mostrador, conoce cada llave, cada alarido y cada huésped con plata. Hoy por hoy los papeles del hotel 'están impecables', y lo repite como quien se convence a sí misma: la contabilidad de anoche la cocinó con sus propias manos.",
      avatarColor: "#6a4a3a",
      alibi: "Cubrió recepción hasta las 22:00 y dice que se fue a su pieza del entrepiso. Jura que los registros los dejó 'ordenados de punta a punta'.",
      openingStatement:
        "Treinta años de recepción y nunca había llorado a un huésped de este modo. El registro lo dejé ordenado antes de que llegara la policía, con todo mi esfuerzo.",
      order: 2,
    },
    {
      key: "tito",
      name: "Tito Segovia",
      age: 23,
      job: "Mozo de habitación",
      relationship: "Encontró el cuerpo",
      bio: "El chico del servicio del tercer piso. Está nervioso pero muy firme: cuenta que encontró el cuerpo, corrió a buscar al botones y 'no tocó nada'. Se le humedece el labio cada vez que mencionan propinas y relojes de bolsillo.",
      avatarColor: "#4a5a3a",
      alibi: "Encontró el cuerpo a las 07:15 cuando llevaba el desayuno. Dice que abrió, gritó y salió corviendo a buscar al botones, sin tocar nada.",
      openingStatement:
        "Yo abrí la puerta y ahí estaba. Grité como un nene y listo. Si me preguntás por las propinas que me deben, te hago la lista, esa sí la tengo completa.",
      order: 3,
    },
    {
      key: "icela",
      name: "Icela Márquez",
      age: 37,
      job: "Mucama",
      relationship: "Turno noche del tercer piso",
      bio: "Cinco años limpiando pisos del tercero. Hoy evita la ventana del cuarto de limpieza como si fuera a morderla, y cuando alguien nombra los balcones, sus ojos se van solos hacia la 314.",
      avatarColor: "#4a3a5a",
      alibi: "Terminó el turno a la 23:50. Dice que no se acercó a la 314 en toda la noche y que 'alcanzó' con el ruido del pasillo.",
      openingStatement:
        "Limpio los pisos del tercero hace cinco años. Los muertos no me dan miedo; lo que me da miedo es la gente que mira, y acá todos miraron.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "vestibulo",
      name: "Vestíbulo",
      description:
        "El hall del hotel Del Pasaje, moquetas vino y una cámara que apunta a la puerta giratoria. La noche del caso, la recepción tuvo tres de esos silencios que se notan demasiado.",
      order: 1,
      actions: [
        {
          label: "Ver la cámara del vestíbulo de anoche",
          resultText:
            "A las 23:50, un huésped cruza el hall hacia la puerta giratoria con el cuello del sobretodo levantado, sin maleta y sin apuro. Es la única figura que sale del hotel después de las 22:00.",
          clueKey: "camara-lobby",
          order: 1,
        },
        {
          label: "Pedir la ficha de huéspedes de la madrugada",
          resultText:
            "El libro marca dos fichas: la 314 de Norberto, que ya estaba del check-in, y una reserva del 312 a nombre del 'Sr. Andrades'. Llamada telefónica del mismo día, pago en efectivo, sin equipaje declarado, check-out a medianoche.",
          clueKey: "registro-312",
          order: 2,
        },
        {
          label: "Pedir el informe forense preliminar",
          resultText:
            "El médico certifica el deceso entre las 22:00 y las 22:40. Zolpidem en sangre por encima de la dosis usual, combinado con alcohol: el papel vuelve con la autopsia cerrada.",
          clueKey: "toxico",
          order: 3,
        },
      ],
    },
    {
      key: "habitacion-312",
      name: "Habitación 312",
      description:
        "La habitación del 'señor Andrades'. La cama está intacta, el baño seco y la ducha sin estrenar. En un hotel que cobra lo que cobra, nadie alquiló esto para dormir.",
      order: 2,
      actions: [
        {
          label: "Inspeccionar la habitación del señor Andrades",
          resultText:
            "Sin equipaje, sin ropa en el ropero, la cama sin una arruga y el baño completamente seco. Solo un vaso del minibar usado y el jabón sin abrir. Alguien pagó en efectivo por una habitación que jamás usó.",
          order: 1,
        },
        {
          label: "Examinar la división del balcón con la 314",
          resultText:
            "La balaustrada que separa los balcones de la 312 y la 314 es baja, de hierro forjado, y tiene rozaduras frescas justo en el cruce. A sus pies, una planta del cantero rota de la patada.",
          clueKey: "balcon-marcas",
          order: 2,
        },
        {
          label: "Revisar la papelera del baño",
          resultText:
            "Un recibo de lavandería a nombre de Ocampo, fechado doce días atrás, arrugado entre algodones. Tampoco es un crimen: es un papel viejo, pero confirma que el nombre de esta habitación no era un desconocido.",
          order: 3,
        },
      ],
    },
    {
      key: "habitacion-314",
      name: "Habitación 314",
      description:
        "La escena. El cuerpo ya está bajo el informe forense, pero la habitación sigue cortada con cadena: la nota en la mesa, el frasco de pastillas y el vaso de whisky del minibar, quietos como la cara del muerto.",
      order: 3,
      actions: [
        {
          label: "Examinar la nota de despedida y el frasco",
          resultText:
            "La nota está mecanografiada en papel del hotel, sin una sola huella. El frasco es la marca del somnífero que Norberto tomaba desde hacía años. Nadie de la 314 tenía ni tuvo máquina de escribir a mano.",
          clueKey: "nota-trucha",
          order: 1,
        },
        {
          label: "Revisar el vaso de whisky del minibar",
          resultText:
            "En el fondo del vaso queda un poso blanquecino que no es del whisky solo. Las pastillas, molidas, se disuelven en alcohol sin dejar olor. El frasco ya estaba a la vista: la dosis la puso mano ajena.",
          clueKey: "vaso-whisky",
          order: 2,
        },
        {
          label: "Revisar el teléfono de la víctima",
          resultText:
            "A las 21:58 entra una llamada de un número sin guardar, con mensaje borrado después. A las 22:03 Norberto llama a su hermano y deja mensaje: 'estoy por cerrar el trato, si me pasa algo revisá el sobre de la oficina'.",
          clueKey: "telefono-victima",
          order: 3,
        },
      ],
    },
    {
      key: "oficina-admin",
      name: "Oficina de administración",
      description:
        "En la primera planta, entre carpetas que nadie abre, duerme la máquina de escribir del hotel: una Remington que la administración guarda como reliquia. Esta semana la cinta fue corrida con una mano que no era de empleado.",
      order: 4,
      actions: [
        {
          label: "Examinar la máquina de escribir",
          resultText:
            "La cinta tiene improntas frescas que coinciden con la caligrafía de la nota de despedida. El papel, además, es del mismo talonario que se usa en recepción para las fichas. Todo se escribió acá, en la oficina de la primera planta.",
          clueKey: "maquina-escribir",
          order: 1,
        },
        {
          label: "Revisar la libreta de la recepcionista",
          resultText:
            "Entre turnos y síntomas, una columna que se repite una vez por mes: '314 — nota', con montos en efectivo anotados con lapicera de ella. Delia cobraba algo de Norberto, mes a mes, sin facturar.",
          clueKey: "libreta-delia",
          order: 2,
        },
        {
          label: "Pedir el registro de reservas por teléfono de la semana",
          resultText:
            "La reserva del señor Andrades se hizo desde un teléfono público de la terminal. Nadie en la administración anotó el número de vuelo ni el documento: el 'señor Andrades' pagó para no dejar datos.",
          order: 3,
        },
      ],
    },
    {
      key: "cuarto-limpieza",
      name: "Cuarto de limpieza del tercer piso",
      description:
        "Un cubículo chico con lavandina, changos y una ventana que da justo a la fila de balcones del tercero. Alguien pasa demasiado tiempo mirando por esa ventana.",
      order: 5,
      actions: [
        {
          label: "Mirar desde la ventana del cuarto de limpieza",
          resultText:
            "La vista alcanza los balcones de la fila, con la división baja entre la 312 y la 314 justo en el centro. En el marco, restos de jabón seco dibujan la silueta de alguien que se apoyaba acá a mirar, una y otra vez.",
          clueKey: "sombra-icela",
          order: 1,
        },
        {
          label: "Revisar el bolso que quedó del mozo",
          resultText:
            "En el chango del servicio, dentro de un bolso de loneta de Tito, hay un reloj de bolsillo de oro con las iniciales N.V. El muerto no se fue del mundo con su reloj encima.",
          clueKey: "reloj-tito",
          order: 2,
        },
        {
          label: "Hablar con el encargado del piso",
          resultText:
            "'Icela termina su turno a las 23:50 y se queda un rato más mirando por la ventana. Los balcones del tercero son lo único lindo que hay desde acá, dice. No sé si mirar o no mirar, pero mirar mira.'",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "nota-trucha",
      title: "La nota de despedida",
      description:
        "Mecanografiada en la máquina de escribir del hotel, sin una sola huella, en papel del propio talonario de recepción. Nadie en la 314 tenía máquina de escribir: la nota no se escribió en la habitación, se escribió en la oficina de la primera planta.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "habitacion-314",
    },
    {
      key: "toxico",
      title: "Análisis toxicológico",
      description:
        "Zolpidem en sangre muy por encima de la dosis que Norberto tomaba para dormir, mezclado con el alcohol del minibar. El frasco junto al cuerpo es de la marca que él mismo usaba: sus propias pastillas, servidas por otra mano.",
      icon: "FlaskConical",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "vestibulo",
    },
    {
      key: "vaso-whisky",
      title: "Poso en el vaso del minibar",
      description:
        "Un resto blanquecino en el fondo del vaso que no se disuelve como el whisky. El sedante se molió y se mezcló con el alcohol del hotel: la escena del 'suicidio' se sirvió desde el servicio de habitación.",
      icon: "GlassWater",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "habitacion-314",
    },
    {
      key: "balcon-marcas",
      title: "Marcas en la división del balcón",
      description:
        "Rozaduras frescas en la balaustrada baja que separa los balcones de la 312 y la 314, con una planta del cantero rota a los pies. La división se cruza en un paso: la cadena de la 314 no era una puerta, era una cortina.",
      icon: "Footprints",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "habitacion-312",
    },
    {
      key: "camara-lobby",
      title: "Cámara del vestíbulo: 23:50",
      description:
        "Un huésped cruza el hall con el cuello del sobretodo levantado, tranquilo y sin equipaje. Coincide con el check-out del 'señor Andrades'. Es la única figura que sale del hotel después de las 22:00.",
      icon: "Video",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "vestibulo",
    },
    {
      key: "registro-312",
      title: "Ficha de huésped: señor Andrades",
      description:
        "La 312 se reservó por teléfono el mismo día, pagada en efectivo, sin equipaje, sin desayuno y con check-out a la medianoche. Es el segundo registro sin equipaje en una semana en este hotel, que no sale barato.",
      icon: "KeyRound",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "vestibulo",
    },
    {
      key: "telefono-victima",
      title: "El teléfono de la víctima",
      description:
        "21:58: llamada entrante desde un número sin guardar, con el mensaje borrado después. 22:03: Norberto llama a su hermano y deja mensaje — 'estoy por cerrar el trato, si me pasa algo revisá el sobre de la oficina'. Lo último que quiso decir.",
      icon: "Smartphone",
      type: "DIGITAL",
      importance: "CLAVE",
      locationKey: "habitacion-314",
    },
    {
      key: "maquina-escribir",
      title: "La máquina de escribir de la administración",
      description:
        "La Remington de la oficina de la primera planta tiene la cinta corrida con improntas frescas que coinciden con la nota de despedida. Una reliquia que nadie usaba, usada justo la noche del caso.",
      icon: "Type",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "oficina-admin",
    },
    {
      key: "sombra-icela",
      title: "Huella en la ventana del cuarto de limpieza",
      description:
        "En el marco de la ventana del cuarto de limpieza, restos de jabón seco dibujan la silueta de alguien apoyado a mirar los balcones del tercero. La vista alcanza justo la división 312/314. Icela ve todo desde ahí, y esta vez guardó lo que vio.",
      icon: "Eye",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "cuarto-limpieza",
    },
    {
      key: "libreta-delia",
      title: "La libreta de la recepcionista",
      description:
        "Una columna mensual con '314 — nota' y montos en efectivo, escrita con la letra de Delia. Es un acuerdo privado entre la recepcionista y Norberto que nadie más debería conocer: parece chantaje, y lo es, pero de otro capítulo de su vida.",
      icon: "ScrollText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "oficina-admin",
      implicatesSuspectKey: "delia",
    },
    {
      key: "reloj-tito",
      title: "Reloj de bolsillo de Norberto",
      description:
        "El reloj de bolsillo de oro con las iniciales N.V., escondido en el bolso de loneta del mozo. Tito lo sacó del cajón de la 314 en el caos, antes de que llegara la policía: lo justifica como 'compensación por las propinas'. Robo menor, no crimen.",
      icon: "Clock",
      type: "FISICA",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "cuarto-limpieza",
      implicatesSuspectKey: "tito",
    },
  ],

  dialogues: [
    // ---------------- RENÉ ----------------
    {
      suspectKey: "rene",
      question: "Preguntá lo que quieras. Hace horas que estoy acá para que me pregunten. Es lo único que puedo hacer por Norberto ahora.",
      order: 1,
      options: [
        {
          key: "rene_noche",
          label: "¿Dónde estuviste anoche entre las 21 y la medianoche?",
          responseText:
            "En mi casa, solo, mirando el reloj. Esperaba un llamado de Norberto que nunca llegó. Nadie me vio, lo sé: no hay testigos de una noche así. Pero no estaba en ningún hotel, se lo aseguro.",
        },
        {
          key: "rene_cita",
          label: "¿Tenías algo arreglado con Norberto esa noche?",
          requiresOptionKey: "rene_noche",
          responseText:
            "Íbamos a firmar la venta de la sociedad. Me citó al hotel para cerrar el trato y me dijo que llegaba con los papeles sobre la mesa. Esperé su llamado hasta tarde y me dormí en el sillón. A la mañana me encontré con esto.",
        },
        {
          key: "rene_empresa",
          label: "¿Cómo era la relación entre ustedes dos?",
          requiresOptionKey: "rene_cita",
          responseText:
            "Treinta años de socio y de amigo. Discutimos como se discute en una sociedad: por plata, por tiempos, por el cierre anual. Pero eran discusiones de oficina, no motivos para que un hombre se quite la vida.",
        },
        {
          key: "rene_venta",
          label: "¿Por qué la venta era tan urgente para vos?",
          responseText:
            "El cierre del ejercicio, los balances al día, la plata de la sociedad parada. Norberto quería vender y yo quería que la empresa quedara limpia: la venta era la salida para los dos. Ningún apuro vale lo que pasó.",
        },
        {
          key: "rene_discusion",
          label: "Se sabe que discutieron por la empresa esta semana.",
          responseText:
            "El martes hablamos por teléfono. Él me dijo que había encontrado 'cosas raras' en una demolición vieja y que no iba a firmar nada que lo ensuciara. Le dije que exageraba, que los números daban, que fueron obras de otra época. Así éramos: él desconfiaba, yo lo calmaba.",
        },
        {
          key: "rene_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del vestíbulo a las 23:50",
          requiresClueKey: "camara-lobby",
          responseText:
            "Un tipo sale con el cuello levantado y sin maleta. Si la cámara dice que el señor Andrades se fue a las 23:50, busquen al señor Andrades. Yo soy René Ocampo y nunca pasé por esa recepción.",
        },
        {
          key: "rene_ev_registro",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la ficha del señor Andrades de la 312",
          requiresClueKey: "registro-312",
          responseText:
            "(lo lee en silencio y corta el aire) Efectivo, sin equipaje, reservado el mismo día... sí, el señor Andrades cuidó bien su rastro. ¿Por qué me muestra esto a mí? (se le acaba la calma por primera vez) Con mi abogado voy a hablar de las personas que me quieren ensuciar. Con usted, no tengo más que decirle.",
        },
        {
          key: "rene_ev_telefono",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las llamadas del teléfono de Norberto",
          requiresClueKey: "telefono-victima",
          responseText:
            "La llamada de las 21:58 la hice yo, para decirle que llegaba y que me esperara. El número del teléfono de mi casa, debe estar en el registro. Me dijo 'apurate, que acá está todo listo'. Yo no llegué. Esa fue la última vez que lo escuché.",
        },
      ],
    },
    {
      suspectKey: "rene",
      question: "¿Sobre la empresa también querés preguntar? Adelante, es lo único que me queda claro.",
      order: 2,
      options: [
        {
          key: "rene_nota",
          label: "¿La nota de despedida es de la letra de Norberto?",
          responseText:
            "Norberto escribía a mano, con una birome que llevaba en el bolsillo del saco. A máquina... solo en la oficina de bronce que teníamos en la empresa, nunca a una máquina de hotel. Cuando vi la nota, no me la creí, y ahora menos.",
        },
        {
          key: "rene_sobre",
          label: "¿Qué había en el sobre que Norberto dejó en la oficina?",
          requiresOptionKey: "rene_nota",
          responseText:
            "¿Sobre? (pausa larga) Norberto guardaba papeles de todo, era así: un sobre por cada tema. El del fraude de las demoliciones... el que yo juro que quedó sin firmar. Los expertos de la empresa lo van a tener que abrir si es que existió.",
        },
        {
          key: "rene_ev_nota",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la nota de despedida",
          requiresClueKey: "nota-trucha",
          responseText:
            "'Perdón por el desorden que dejo.' Eso no lo escribió Norberto. Ni en el tono ni en la forma: él hacía listas, no cartas. Si esto salió de la máquina del hotel, alguien lo quiso decir por él.",
        },
        {
          key: "rene_ev_balcon",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las marcas en la división del balcón",
          requiresClueKey: "balcon-marcas",
          responseText:
            "¿Rozaduras en los balcones del tercero? El hotel se cae a pedazos por afuera: los balcones tienen hierro flojo desde hace años. Yo no sé nada de balcones ni de pasillos. Yo, insisto, estuve en mi casa.",
        },
      ],
    },

    // ---------------- DELIA ----------------
    {
      suspectKey: "delia",
      question: "En la recepción de este hotel todo se anota dos veces y se guarda tres. Si hay un papel que no cierra, es un papel, no un crimen.",
      order: 1,
      options: [
        {
          key: "delia_registros",
          label: "Mostrame el libro de huéspedes de anoche.",
          responseText:
            "Todo en orden, como siempre: la 314 con el señor Villafañe, que ya estaba de antes, y la 312 con el señor Andrades, que pagó en efectivo y se fue de madrugada. No sé qué más quiere que le diga: el hotel abrió, el hotel cerró.",
        },
        {
          key: "delia_cocinada",
          label: "Las cámaras del vestíbulo no coinciden con tus registros.",
          requiresOptionKey: "delia_registros",
          responseText:
            "(baja la voz) Mire, yo acomodo cifras desde hace años, para que el hotel no pague de más, para que la temporada cierre en paz. Un número acá, otro allá. El señor Andrades es un huésped real, estaba en el libro. Si en el libro de impuestos no figura, es mi problema, no de la muerte de nadie.",
        },
        {
          key: "delia_noche",
          label: "¿Qué viste anoche desde la recepción?",
          responseText:
            "Poco y nada. El señor Andrades entró con el cuello del sobretodo arriba y salió igual. A las diez, Norberto pidió el whisky por el servicio. Y a la mañana el grito del chico Tito me despertó el corazón. Nada más.",
        },
        {
          key: "delia_312",
          label: "El señor Andrades, ¿cómo era?",
          responseText:
            "Bien vestido, perfume caro, ningún equipaje. Pagó en efectivo sin mirar el precio y no dio documento: solamente 'Andrades'. En treinta años de recepción, a un tipo así lo vi una sola vez. Después entendí por qué.",
        },
        {
          key: "delia_ev_libreta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la libreta con '314 — nota'",
          requiresClueKey: "libreta-delia",
          responseText:
            "(le tiembla la mano) Eso... eso es un acuerdo privado. El señor Villafañe me pagaba, en efectivo, todos los meses, por no contar una historia del noventa y cuatro: de un desalojo suyo que se llevó una vida. Yo cobraba y callaba. No lo maté. El miedo que tenía era que me dejara de pagar, no que apareciera un muerto en mi hotel.",
        },
        {
          key: "delia_ev_nota",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la nota de despedida",
          requiresClueKey: "nota-trucha",
          responseText:
            "Pobre Norberto... pero esto no es de él. Él jamás tocó una máquina de escribir, ¿entendés? Pasaba por recepción con sus biromes y su carpeta. Si alguien escribió esto, fue para que pareciera suyo. Y quién sabe la máquina, la máquina está en nuestra oficina.",
        },
      ],
    },

    // ---------------- TITO ----------------
    {
      suspectKey: "tito",
      question: "Yo abrí la puerta y ahí estaba. Eso es todo. Lo que yo diga no va a cambiar el orden de esa habitación.",
      order: 1,
      options: [
        {
          key: "tito_312",
          label: "Escuché que viste entrar a alguien a la 312.",
          responseText:
            "Sí, al señor Andrades, a las nueve y cinco. Bajaba del tercero con el chango de toallas y lo vi subir. Perfumado, se sentía a dos metros. No llevaba una sola valija: eso lo anoté en mi libretita, porque en un hotel caro nadie viene sin equipaje.",
        },
        {
          key: "tito_perfume",
          label: "¿Qué más recordás de ese hombre?",
          requiresOptionKey: "tito_312",
          responseText:
            "Alto, canoso, sin apuro. Me saludó sin dejar de caminar, como quien entra a su casa. Y tenía un reloj de oro que se le asomaba del puño, de esos de cadena. El que le iba a encajar al muerto, o eso parecía. En serio, con eso me quedé.",
        },
        {
          key: "tito_cuerpo",
          label: "¿Cómo encontraste el cuerpo?",
          responseText:
            "El desayuno de las siete. Llamé, nada. Abrí con la llave maestra y ahí estaba él, con la nota en la mesa y el frasco de pastillas a mano. La puerta con la cadena puesta. Grité hasta que el botones me escuchó y no volví a entrar.",
        },
        {
          key: "tito_reloj",
          label: "¿Qué sabés del reloj de Norberto?",
          responseText:
            "¿Reloj? (se toca el bolsillo sin querer) El señor tenía un reloj de bolsillo, sí, se lo vi el día del check-in. Trabajaba con la cadena asomada del chaleco. Muerto no lo vi con reloj: no me quedé a mirar sus cosas, eso no lo hago.",
        },
        {
          key: "tito_ev_reloj",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el reloj de bolsillo de tu bolso",
          requiresClueKey: "reloj-tito",
          responseText:
            "(pierde el color y baja la voz) Eso... eso no es un robo, es una compensación. Tres años de propinas que dicen que cobramos y jamás existieron. Lo saqué del cajón de la 314 cuando encontré el cuerpo, antes de que entrara cualquiera, porque si lo encontraba la policía, me lo incautaba y listo. Fue lo único que pensé en ese momento. No lo maté. Yo no sabía que ese cuarto tenía un muerto hasta esa mañana.",
        },
      ],
    },

    // ---------------- ICELA ----------------
    {
      suspectKey: "icela",
      question: "Yo limpio y no pregunto. Si tuve la boca cerrada toda la noche, es porque la boca cerrada es el uniforme de este piso.",
      order: 1,
      options: [
        {
          key: "icela_voces",
          label: "Se oyó a dos personas discutiendo en la 314.",
          responseText:
            "(mira el techo) Yo no dije que escuché voces... a las diez de la noche pasé a cerrar el cuarto de limpieza y se oían dos voces en la 314. Un hombre enojado y otro que trataba de calmarlo. No me detuve. No es asunto mío lo que hacen los huéspedes.",
        },
        {
          key: "icela_sombra",
          label: "¿Y la sombra que viste en el balcón?",
          requiresOptionKey: "icela_voces",
          responseText:
            "¿Quién le contó eso? (pausa) A las once y media y algo, desde la ventana del cuarto de limpieza, vi una sombra cruzar el balcón de la 314, del lado de la 312. No la dije porque acá no se habla, y porque no quería que me tomaran de loca ni de curiosa.",
        },
        {
          key: "icela_ventana",
          label: "¿Por qué estabas mirando hacia los balcones?",
          requiresOptionKey: "icela_sombra",
          responseText:
            "Por fumar, está mal, lo sé. La ventana del cuarto de limpieza da justo a los balcones del tercero: no hace falta ser curiosa para verlo todo desde ahí. Es la vista que tiene el que limpia, no un puesto de vigilancia.",
        },
        {
          key: "icela_toallas",
          label: "¿Cómo dejaste la 314 antes del caso?",
          responseText:
            "A las seis y media de la tarde la dejé impecable, con toallas de sobra. Norberto llegó a las siete y media con una sola valija y no pidió nada más hasta el whisky de las diez, que lo llevó el mozo a la puerta. Dos vasos servidos... no, una botella y un vaso. Esos detalles no los conté hasta ahora.",
        },
        {
          key: "icela_ev_sombra",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la huella en la ventana del cuarto de limpieza",
          requiresClueKey: "sombra-icela",
          responseText:
            "Es mi marca, sí, me apoyo en el marco cuando miro, queda el jabón de la mano. Pero la sombra de esa noche no era la mía: yo estaba adentro, quieta, y ella se movía por el balcón de la 314 del lado de la 312. La vi y no dije nada. Ahora lo digo.",
        },
        {
          key: "icela_ev_balcon",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las marcas de la división del balcón",
          requiresClueKey: "balcon-marcas",
          responseText:
            "La división del balcón es baja, se pasa de la 312 a la 314 sin tocar el pasillo. El que conoce el edificio lo sabe desde la calle, se ve desde abajo. Si alguien quiso entrar o salir de esa habitación sin que la cámara lo viera, lo hizo por ahí.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "19:30",
      text: "Norberto Villafañe hace check-in en la 314 con una sola valija. Pide que no lo molesten y cena en la habitación.",
      isPublic: true,
    },
    {
      time: "20:40",
      text: "Una llamada telefónica reserva la 312 a nombre del 'señor Andrades'. Pago en efectivo anticipado. Sin equipaje declarado.",
      revealedByClueKey: "registro-312",
    },
    {
      time: "21:05",
      text: "Tito ve subir a la 312 a un hombre perfumado, canoso, sin valija. Lo anota en su libretita: 'el señor Andrades'.",
      revealedByOptionKey: "tito_312",
    },
    {
      time: "21:58",
      text: "Llamada entrante al teléfono de Norberto desde un número sin guardar. El mensaje fue borrado.",
      revealedByClueKey: "telefono-victima",
    },
    {
      time: "22:00",
      text: "Icela escucha dos voces discutiendo dentro de la 314: una enojada, otra que lo calmaba.",
      revealedByOptionKey: "icela_voces",
    },
    {
      time: "22:03",
      text: "Norberto llama a su hermano y deja mensaje: 'estoy por cerrar el trato, si me pasa algo revisá el sobre de la oficina'.",
      revealedByClueKey: "telefono-victima",
    },
    {
      time: "22:20",
      text: "Hora estimada de la muerte por toxicología: zolpidem en exceso mezclado con el whisky del minibar.",
      revealedByClueKey: "toxico",
    },
    {
      time: "23:35",
      text: "Icela ve una sombra cruzar el balcón de la 314, del lado de la 312. No lo dice por miedo a represalias.",
      revealedByOptionKey: "icela_sombra",
    },
    {
      time: "23:50",
      text: "Un huésped sale del vestíbulo con el cuello del sobretodo levantado, sin equipaje. El libro marca el check-out del señor Andrades.",
      revealedByClueKey: "camara-lobby",
    },
    {
      time: "07:15",
      text: "Tito encuentra el cuerpo de Norberto al llevar el desayuno a la 314. La cadena de la puerta está puesta por dentro.",
      isPublic: true,
    },
  ],

  deductions: [
    {
      title: "La escena fue armada, no vivida",
      text: "La nota se mecanografió en la máquina de escribir de la administración: nadie de la 314 tenía una a mano y no hay una huella en el papel. Sumado a la toxicología —zolpidem en exceso servido en el whisky— la 'despedida' es una puesta en escena con las propias pastillas de Norberto.",
      requiredClueKeys: ["nota-trucha", "toxico", "vaso-whisky"],
      requiredOptionKeys: ["rene_ev_nota"],
      order: 1,
    },
    {
      title: "La cadena no era una puerta: era el balcón",
      text: "La división de los balcones 312/314 es baja y tiene rozaduras frescas, con la planta rota del cruce. La única habitación contigua se reservó ese mismo día en efectivo, sin equipaje, y su ocupante se fue a medianoche con el cuello levantado, según la cámara. Nadie entró por la puerta: se entraba y se salía por el balcón.",
      requiredClueKeys: ["balcon-marcas", "registro-312", "camara-lobby"],
      order: 2,
    },
    {
      title: "La sombra de Icela confirma la ruta",
      text: "Icela vio una sombra cruzar el balcón de la 314 del lado de la 312 a las 23:35, y su ventana tiene la marca de apoyarse justo en ese punto de vista. La misma noche, el registro muestra a un huésped en la 312 que nunca durmió en su cama. Dos miradas independientes apuntan al mismo pasadizo.",
      requiredClueKeys: ["sombra-icela", "registro-312", "balcon-marcas"],
      requiredOptionKeys: ["icela_sombra", "icela_ev_sombra"],
      order: 3,
    },
    {
      title: "Norberto sabía que algo estaba por pasar",
      text: "A las 21:58 recibe una llamada de un número sin guardar que borró el mensaje; a las 22:03 le deja a su hermano la instrucción de revisar un sobre si 'le pasa algo'. Los minutos de esa noche no eran de un hombre que se prepara para irse: eran de uno que iba por un trato y temía no volver. La nota trucha quiso tapar el final de ese sobre.",
      requiredClueKeys: ["telefono-victima", "nota-trucha", "toxico"],
      requiredOptionKeys: ["rene_ev_telefono"],
      order: 4,
    },
    {
      title: "Los secretos chicos no explican la máquina",
      text: "Delia cobraba un chantaje viejo por un desalojo de los años 90, Tito se quedó con un reloj por propinas que nunca existieron. Ninguno de los dos pudo mecanografiar la nota ni cruzar el balcón sin despertar a medio hotel. Las contradicciones de la recepción y el bolsillo del mozo son ruido: la escena armada apunta a otra sala.",
      requiredClueKeys: ["libreta-delia", "reloj-tito", "nota-trucha", "balcon-marcas"],
      requiredOptionKeys: ["delia_ev_libreta", "tito_ev_reloj"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      {
        label: "Necesitaba que la venta se firmara antes de que Norberto denunciara el fraude de las demoliciones",
        isCorrect: true,
      },
      {
        label: "Delia cobraba un chantaje por el desalojo de los años 90 y temía que Norberto la denunciara",
      },
      {
        label: "Tito quería quedarse con el reloj y las propinas que nunca le pagaron",
      },
      {
        label: "Icela encubría una relación con Norberto que su entorno no podía conocer",
      },
    ],
    methods: [
      {
        label: "Lo durmió con sus propias pastillas en el whisky, montó la nota y salió por el balcón entre las habitaciones 312 y 314",
        isCorrect: true,
      },
      {
        label: "Le sirvió el sedante en la cena y trabó la cadena de la puerta desde afuera con la tarjeta de servicio",
      },
      {
        label: "Entró por el montacargas del servicio, lo golpeó y simuló una sobredosis accidental",
      },
      {
        label: "Envenenó el whisky que pidió por el servicio de habitación y usó una llave maestra para cerrar el cuarto",
      },
    ],
  },
};