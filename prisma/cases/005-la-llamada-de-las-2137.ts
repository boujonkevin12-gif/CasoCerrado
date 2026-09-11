import type { CaseDef } from "./types";

/**
 * CASO 005 — La llamada de las 02:17
 * Dificultad: DIFÍCIL | Secuestro simulado (auto-secuestro)
 *
 * QUÉ OCURRIÓ REALMENTE
 * No hubo secuestro: la víctima lo fingió. Gustavo Elizalde, dueño de la flota de
 * camiones, venía desfalcando la empresa y la auditoría anual se venía encima. A
 * las 02:17 llamó DESDE SU PROPIO TELÉFONO a su esposa aterrada pidiendo un
 * rescate de $2.000.000; después apareció "atado" a la madrugada en un galpón
 * abandonado de la ruta que pertenece a su propia empresa, con la boca
 * lastimada. Se ató él mismo de forma floja, se cortó el labio con su propia
 * llave y esperó sentado a que lo "encontraran". Motivo: llenar el pozo antes
 * del cierre contable. El culpable es la víctima.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Vera: la esposa tiene una aventura con el jefe de logística y retiró $40.000
 *   del cajero esa noche moviendo plata de la cuenta a su casa por desconfianza
 *   del marido. Parece cómplice, es inocente.
 * - Rogelio: el jefe de logística, el amante de Vera. Dice que durmió en su casa
 *   pero su coche aparece en la planta a las 02:30: fue a buscar un permiso del
 *   despacho y volvió, cubriendo turnos de noche por una deuda. Inocente.
 * - Tadeo: el guardia durmió en el puesto entre las 01:30 y las 03:00 y
 *   falsificó la planilla de rondas. El teléfono de Gustavo marcó la torre de la
 *   planta a las 02:17: si Tadeo hubiera estado despierto... Pero no hay
 *   complicidad: hay una siesta.
 */
export const case005: CaseDef = {
  code: "CASO-005",
  slug: "la-llamada-de-las-2137",
  title: "La llamada de las 02:17",
  intro:
    "A las 02:17 el teléfono de la casa sonó y del otro lado estaba la voz quebrada de Gustavo Elizalde, dueño de la flota de camiones más grande del oeste: lo habían secuestrado y exigían dos millones de pesos. A la madrugada apareció 'atado' en un galpón abandonado sobre la ruta, con el labio cortado y sin un rasguño más. El rescate jamás se pagó y nadie volvió a pedir nada. Lo raro es la llamada: la línea de la casa la atendió la esposa aterrada, pero el teléfono del 'secuestrado' no sonó desde el calabozo. Sonó en la torre de su propia planta.",
  scene: "planta",
  victim: { name: "Gustavo Elizalde", age: 49, job: "Dueño de Transportes Elizalde" },
  place: "Planta de Transportes Elizalde",
  timeOfCrime: "02:17",
  difficulty: "DIFICIL",
  order: 5,
  requiredLevel: 2,
  motive:
    "El desfalco de la empresa iba a destaparse en la auditoría. Gustavo Elizalde venía vaciando la caja de Transportes Elizalde para tapar el agujero, la auditoría externa estaba citada para esa semana y faltaban $1.600.000. Montó el secuestro para conseguir el rescate antes del cierre contable: un rescate de dos millones que jamás se pagó porque no había secuestradores.",
  method:
    "A las 01:55 entró con su camioneta a su propia planta (la cámara lo registró al volante) y salió a las 02:10 hacia el galpón de la empresa. Desde la zona de la planta llamó a su esposa a las 02:17 pidiendo el rescate. En el galpón se ató él mismo de forma floja, se cortó el labio con su propia llave, imprimió la nota de rescate en su impresora y esperó sentado a que lo 'encontraran' a las 06:30.",
  resolutionText:
    "No hubo secuestro, ni secuestradores, ni rescate: Gustavo Elizalde lo fingió todo desde su propia planta. La cámara del portón lo muestra entrando a las 01:55 y saliendo a las 02:10 hacia el galpón; la torre de telefonía registró la llamada de las 02:17 dentro del predio, a 4 km del 'calabozo'; el galpón figuraba a nombre de Transportes Elizalde; la nota de rescate salió de su impresora con los errores de tipeo de sus propios borradores; y las colillas del lugar eran de la única marca de tabaco que fumaba él. El informe de auditores esperaba en su escritorio: faltaban $1.600.000 y la auditoría externa llegaba la semana siguiente. Vera retiró $40.000 por desconfianza, Rogelio entró a la planta a buscar un permiso aduanero tapando una deuda y Tadeo durmió en el puesto y falsificó la planilla: tres secretos que parecen complicidad y no lo son. El único que necesitaba que su secuestro fuera creíble para que la plata 'apareciera como rescate' era el propio Gustavo.",
  xpReward: 900,
  coinReward: 450,
  guiltyKey: "gustavo",

  suspects: [
    {
      key: "gustavo",
      name: "Gustavo Elizalde",
      age: 49,
      job: "Dueño de Transportes Elizalde",
      relationship: "La víctima (secuestrado declarado)",
      bio: "Fundó la flota con dos camiones y la llevó a veintitrés. El hombre que construyó la empresa a mano no puede dormir de cara a una caja con faltante, y aunque lo acaban de 'secuestrar', se mantiene sereno y agradecido: un tipo que ya pasó lo peor y quiere que todos lo abracen.",
      avatarColor: "#3a4a5a",
      alibi: "Declara que a las 21:00 salió de la oficina, que dos desconocidos lo subieron a un furgón en la rotonda y que lo abandonaron en el galpón de la ruta a las 02:00. Dice que el teléfono lo tenían 'ellos' y que se lo devolvieron a la mañana.",
      openingStatement:
        "No tengo nada que agradecer que esta gente me haya devuelto entero. Preguntá tranquilo: yo soy el que más quiere saber qué pasó.",
      order: 1,
      isGuilty: true,
    },
    {
      key: "vera",
      name: "Vera Elizalde",
      age: 36,
      job: "Esposa de Gustavo, socia administradora",
      relationship: "La esposa que recibió el llamado",
      bio: "La que atendió el teléfono a las 02:17 y se le cayó el mundo. Administra la parte administrativa de la flota; en los últimos meses duerme poco y sonríe de más cuando nombran a Rogelio, el jefe de logística.",
      avatarColor: "#4a3a5a",
      alibi: "Dice que durmió en su casa hasta que sonó el teléfono. Los movimientos bancarios la marcan en un cajero del centro a las 23:40 retirando $40.000 en efectivo.",
      openingStatement:
        "Yo atendí esa llamada y se me congeló la sangre. Ahora solo quiero que devuelvan a Gustavo entero, una vez más.",
      order: 2,
    },
    {
      key: "rogelio",
      name: "Rogelio Romero",
      age: 58,
      job: "Jefe de logística",
      relationship: "Jefe de logística y amante de Vera",
      bio: "Treinta años en la empresa, el brazo operativo de la flota. Dice que esa noche durmió con su señora, y la cámara del portón lo hace mentiroso: su coche entró a la planta a las 02:30. Y no quiere decir por qué.",
      avatarColor: "#5a4a2a",
      alibi: "Declaró que se fue a las 19:00 y que no volvió a la planta hasta que lo llamaron a la mañana. La planilla del portón registra su coche entrando y saliendo entre las 02:30 y las 02:50.",
      openingStatement:
        "Con treinta años en el galpón no me van a hacer pasar un secuestro por una ronda de mate. Yo dormí en mi casa, se acabó.",
      order: 3,
    },
    {
      key: "tadeo",
      name: "Tadeo Salas",
      age: 41,
      job: "Guardia de seguridad",
      relationship: "Guardia nocturno de la planta",
      bio: "Quince años cuidando el portón. Su planilla de rondas de esa madrugada está tan limpia que convence a cualquiera... salvo que una planilla sin novedad a esa hora es casi un delito de aburrimiento.",
      avatarColor: "#2a4a3a",
      alibi: "Sostiene que hizo la ronda de las 01:30 y la de las 02:45 con todo en orden. Las dos firmas de su planilla llevan exactamente la misma hora: la de las 03:10.",
      openingStatement:
        "Quince años en el portón y nunca vi un secuestro ni una caja abierta de más. Esta noche me tocó la noche negra de todas.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "porton",
      name: "Portón de la planta",
      description:
        "El acceso principal de Transportes Elizalde, con cámara de altura y barrera automática. Todo el que entra de noche deja una marca en el registro del portón, aunque después diga que nunca vino.",
      order: 1,
      actions: [
        {
          label: "Repasar la cámara del portón entre las 01:00 y las 03:00",
          resultText:
            "A las 01:55 la camioneta de Gustavo ENTRÓ a la planta con el propio Gustavo al volante. Salió a las 02:10 en dirección al galpón de la ruta. Él declaró que a las 02:00 lo abandonaban en el galpón... pero la cámara lo muestra entrando a su propia planta veinte minutos antes.",
          clueKey: "camara-planta",
          order: 1,
        },
        {
          label: "Cruzar el registro de ingresos de vehículos de esa madrugada",
          resultText:
            "Además de la camioneta del dueño, hay un solo vehículo externo: el coche de Rogelio, el jefe de logística, que entra a las 02:30 y sale a las 02:50 sin cargar ni descargar nada.",
          clueKey: "camara-rogelio",
          order: 2,
        },
      ],
    },
    {
      key: "oficina-gustavo",
      name: "Oficina de Gustavo",
      description:
        "El despacho del primer piso de la nave: la computadora del dueño, la impresora de la oficina y el escritorio donde se cierra el mes. La quietud de los papeles casi sostiene la mentira del secuestrado.",
      order: 2,
      actions: [
        {
          label: "Revisar la impresora y su cola de impresión",
          resultText:
            "La nota de rescate se imprimió en la impresora de la oficina de Gustavo, sin huellas y con errores de tipeo idénticos a los borradores que quedaron en el historial de su PC.",
          clueKey: "nota-rescate",
          order: 1,
        },
        {
          label: "Pedir los movimientos bancarios de la semana",
          resultText:
            "La tarjeta de Vera retiró $40.000 en un cajero del centro a las 23:40, la noche anterior a que su marido 'apareciera'. La plata no viaja al rescate: viaja a una caja de zapatos de su casa.",
          clueKey: "cajero-vera",
          order: 2,
        },
        {
          label: "Revisar el informe de los auditores externos",
          resultText:
            "El último borrador de la firma auditora marca un faltante de $1.600.000 en Transportes Elizalde y la reunión de cierre del ejercicio está citada para la semana siguiente.",
          clueKey: "auditoria",
          order: 3,
        },
      ],
    },
    {
      key: "galpon",
      name: "Galpón de la ruta",
      description:
        "Un galpón metálico a 4 km de la planta, al costado de la ruta, donde Gustavo 'apareció atado'. Conserva las sogas, el vaso térmico y el olor a humedad de la espera de alguien que nunca tuvo miedo.",
      order: 3,
      actions: [
        {
          label: "Revisar la titularidad del galpón",
          resultText:
            "La escritura del galpón está a nombre de Transportes Elizalde S.A. El 'calabozo' del secuestro es un depósito propio de la empresa desde hace diez años.",
          clueKey: "galpon-propio",
          order: 1,
        },
        {
          label: "Examinar el piso alrededor de las sogas",
          resultText:
            "Al lado del lugar donde 'estaba atado': tres colillas de tabaco importado, la única marca que fuma Gustavo, y su vaso térmico de la camioneta. Nadie esperando con él fumó otra cosa.",
          clueKey: "colillas",
          order: 2,
        },
      ],
    },
    {
      key: "puesto-guardia",
      name: "Puesto de guardia",
      description:
        "La garita del portón, con el monitor de cámaras, las planillas de rondas y la mesa donde Tadeo ceba mate. Es el lugar donde alguien durmió la siesta más cara de su vida.",
      order: 4,
      actions: [
        {
          label: "Comparar la planilla de rondas con el reloj del portón",
          resultText:
            "La planilla de Tadeo registra la ronda de las 01:30 y la de las 02:45, las dos firmadas con exactamente la misma hora: 03:10. Alguien la llenó a las tres y diez, toda junta, cuando despertó.",
          clueKey: "planilla-tadeo",
          order: 1,
        },
        {
          label: "Pedir el rastreo telefónico de la llamada de las 02:17",
          resultText:
            "La llamada al teléfono de Vera se registró en la torre de la propia planta, a 4 km del galpón donde Gustavo dice que estaba atado. El GPS del teléfono lo deja fijo dentro del predio a esa hora.",
          clueKey: "torre-telefono",
          order: 2,
        },
      ],
    },
  ],

  clues: [
    {
      key: "torre-telefono",
      title: "Rastreo del teléfono",
      description:
        "La llamada de las 02:17 conectó con la torre de la propia planta, a 4 km del lugar del 'secuestro'. El GPS del teléfono confirma la planta: quien pidió el rescate no estaba en el calabozo, estaba en el predio de la empresa.",
      icon: "PhoneCall",
      type: "DIGITAL",
      importance: "CLAVE",
      locationKey: "puesto-guardia",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "camara-planta",
      title: "Cámara del portón 01:55",
      description:
        "La camioneta de Gustavo entra a la planta a las 01:55 —él dice que a esa hora lo abandonaban en el galpón— y sale a las 02:10 en dirección a ese mismo galpón. La cámara muestra a Gustavo al volante, solo.",
      icon: "Video",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "porton",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "galpon-propio",
      title: "El galpón pertenece a la empresa",
      description:
        "La escritura del galpón figura a nombre de Transportes Elizalde S.A. El 'secuestro' ocurrió en un depósito propio del secuestrado, propiedad de la empresa hace diez años.",
      icon: "Landmark",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "galpon",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "nota-rescate",
      title: "La nota de rescate",
      description:
        "Impresa en la impresora de la oficina de Gustavo, sin huellas y con errores de tipeo que coinciden con los borradores del historial de su PC. La nota se escribió y se imprimió en el propio despacho del secuestrado.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "oficina-gustavo",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "colillas",
      title: "Colillas en el galpón",
      description:
        "Junto al lugar donde 'estaba atado', tres colillas de una marca de tabaco importado que solo fuma Gustavo y su vaso térmico de la camioneta. El único fumador en la escena fue el propio secuestrado.",
      icon: "Cigarette",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "galpon",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "auditoria",
      title: "Cierre del ejercicio contable",
      description:
        "El informe de los auditores señala un faltante de $1.600.000 en Transportes Elizalde y una auditoría externa citada para la semana siguiente. Todo el apuro de la empresa estaba en ese borrador.",
      icon: "BarChart3",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "oficina-gustavo",
      implicatesSuspectKey: "gustavo",
    },
    {
      key: "cajero-vera",
      title: "Movimientos del cajero",
      description:
        "Retiro de $40.000 por la tarjeta de Vera a las 23:40 la noche del secuestro. No fue el inicio de un rescate: fue miedo del marido de la plata, moviendo la cuenta a un cajón de su casa.",
      icon: "Receipt",
      type: "DIGITAL",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "oficina-gustavo",
      implicatesSuspectKey: "vera",
    },
    {
      key: "camara-rogelio",
      title: "Cámara del portón 02:30",
      description:
        "El coche de Rogelio entra a la planta a las 02:30 y sale a las 02:50, sin cargar nada. No hay planilla que lo registre. Rogelio mintió sobre su noche... por una razón que no es el secuestro.",
      icon: "Video",
      type: "DIGITAL",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "porton",
      implicatesSuspectKey: "rogelio",
    },
    {
      key: "planilla-tadeo",
      title: "Planilla de rondas falsificada",
      description:
        "Las rondas de las 01:30 y las 02:45 de Tadeo están firmadas con la misma hora: las 03:10. Se sentó a llenarla toda junta cuando despertó. Tapó su siesta... y dejó un agujero exactamente cuando la planta tenía actividad.",
      icon: "ClipboardList",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "puesto-guardia",
      implicatesSuspectKey: "tadeo",
    },
  ],

  dialogues: [
    // ---------------- GUSTAVO ----------------
    {
      suspectKey: "gustavo",
      question: "Preguntá tranquilo, inspector. A esta gente no la suelto tan fácil de mi abrazo.",
      order: 1,
      options: [
        {
          key: "gustavo_noche",
          label: "Contámelo desde el principio: ¿cómo fue el secuestro?",
          responseText:
            "Salí de la oficina a las nueve, todo normal. En la rotonda de la ruta me cortaron una camioneta oscura, dos tipos, me subieron a un furgón y me vendaron. No me pegaban: me hablaban de plata. A las dos me tiraron en un galpón y me dijeron que el rescate se arreglaba por teléfono. El teléfono me lo habían llevado y no me lo devolvieron hasta la mañana.",
        },
        {
          key: "gustavo_rescate",
          label: "¿Y el rescate? Nunca se pagó ni volvieron a llamar.",
          requiresOptionKey: "gustavo_noche",
          responseText:
            "Ahí está el detalle raro. Exigieron dos millones y después de la llamada no contestaron nunca más. Mi mujer iba a juntar lo que pudiera y no tuvo de dónde. A la mañana me encontraron y los tipos se esfumaron sin un peso. Para mí eran unos improvisados.",
        },
        {
          key: "gustavo_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu camioneta entrando a la planta a las 01:55",
          requiresClueKey: "camara-planta",
          responseText:
            "Esa es mi camioneta, sí... yo dije que los tipos me la llevaron conmigo adentro, tirado en la caja. Que aparezca entrando a mi propia planta no me dice que yo manejara. La lleva cualquiera con la llave del taller. Yo a esa hora estaba atado, se lo juro.",
        },
        {
          key: "gustavo_ev_torre",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el rastreo que ubica tu teléfono en la planta a las 02:17",
          requiresClueKey: "torre-telefono",
          responseText:
            "El teléfono lo tenían los secuestradores, no yo. Se lo llevaron para pedir el rescate desde mi línea, para que la familia no dudara. Que la llamada haya picado en la torre de la planta significa que el que llamó estaba en la planta... no que yo estuviera. No pudo ser a las dos de la mañana, con lo que yo estaba pasando.",
        },
      ],
    },
    {
      suspectKey: "gustavo",
      question: "Me ve calmo porque ya pasó lo peor. La empresa, la familia... lo único que queda es agradecer.",
      order: 2,
      options: [
        {
          key: "gustavo_empresa",
          label: "¿Cómo venía la empresa en lo económico?",
          responseText:
            "Los números son números. Ajustados, como toda empresa de transporte, pero sanos. Si quiere papeles, hay papeles: le pido al contador que los muestre. Yo no le voy a dar letra.",
        },
        {
          key: "gustavo_ev_auditoria",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el informe de auditores con el faltante de $1.600.000",
          requiresClueKey: "auditoria",
          responseText:
            "...eso es un borrador preliminar. Habla de observaciones de registro, no de un faltante. Y mire lo que le digo: si hubiera un problema así, ¿yo iba a montar un secuestro justo la semana que viene la auditoría? Eso lo hace un desesperado, y yo nunca fui un hombre desesperado.",
        },
        {
          key: "gustavo_ev_nota",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la nota de rescate impresa en tu impresora",
          requiresClueKey: "nota-rescate",
          responseText:
            "A mi impresora llega de todo, y la oficina la usan cuatro personas más. La nota... tiene errores de tipeo que yo no leí con calma porque estaba con el corazón a mil. Debe ser una broma de mal gusto del que la armó.",
        },
        {
          key: "gustavo_ev_galpon",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la escritura del galpón a nombre de tu empresa",
          requiresClueKey: "galpon-propio",
          responseText:
            "Es un depósito viejo que usamos para guardar pallets, cualquier empleado lo sabe. Y si me iban a secuestrar, ¿por qué iban a elegir mi propio galpón? Para que nadie tocara el teléfono ni hiciera ruido: los tipos conocían la empresa, eso es lo que más me asusta.",
        },
      ],
    },

    // ---------------- VERA ----------------
    {
      suspectKey: "vera",
      question: "Yo atendí ese teléfono a las dos y cuarto y se me cayó el mundo. Ahora solo quiero que lo devuelvan entero.",
      order: 1,
      options: [
        {
          key: "vera_llamada",
          label: "¿Cómo fue el llamado de las 02:17?",
          responseText:
            "Sonó el fijo porque el celular estaba cargando. Era él, estaba aterrado, me dijo que lo tenían secuestrado y que pidieran dos millones. Se cortó y no volvieron a llamar jamás. No supe más nada hasta la mañana.",
        },
        {
          key: "vera_policia",
          label: "¿Por qué no llamaste a la policía en el momento?",
          requiresOptionKey: "vera_llamada",
          responseText:
            "Llamé a la planta, llamé a seguridad, llamé a mi cuñado. A la policía la llamé recién al amanecer, cuando ya no había señal y me pregunté si debería haber llamado antes. Me dio miedo que me escucharan, que los tipos le hicieran algo con el teléfono en la mano.",
        },
        {
          key: "vera_ev_cajero",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el retiro de $40.000 de tu tarjeta a las 23:40",
          requiresClueKey: "cajero-vera",
          responseText:
            "Lo retiré yo, a la noche, antes de que sonara el teléfono. Hacía semanas que Gustavo venía raro con el dinero, no dormía con la plata en el banco sin saber si hacía falta. Lo saqué y lo guardé en casa, en un cajón, como una vieja cagona. La desconfianza tiene una cara y la mía se llama miedo.",
        },
      ],
    },
    {
      suspectKey: "vera",
      question: "Ustedes buscan culpas. Yo estoy buscando marido.",
      order: 2,
      options: [
        {
          key: "vera_casa",
          label: "¿La plata del rescate estaba junta en la casa?",
          requiresOptionKey: "vera_ev_cajero",
          responseText:
            "Los cuarenta mil que saqué y algo más. No alcanzaban ni de lejos para dos millones. Gustavo pidió una cifra imposible, como si supiera que nadie iba a poder pagarla nunca. Eso es lo que más me da vueltas: pidió el rescate que sabía que no iba a cobrar.",
        },
        {
          key: "vera_asegurada",
          label: "¿Cómo era la relación de ustedes en los últimos meses?",
          responseText:
            "Rara. Dormía mal, se encerraba en la oficina de la planta, mentía con los viajes. Pensé que me engañaba con otra o que se estaba fundiendo en silencio. Las dos cosas me daban el mismo miedo.",
        },
        {
          key: "vera_amante",
          label: "¿Qué relación tenés con Rogelio, el jefe de logística?",
          requiresOptionKey: "vera_asegurada",
          responseText:
            "Rogelio es el jefe de logística... y sí, hubo algo, hace meses, y se terminó. No lo dije porque sé cómo mira el barrio a la esposa que se besa con el empleado del marido. Pero acá está mi verdad: yo no pasé de mi casa a la planta a secuestrar a nadie. La única que necesitó mentir por vergüenza, y no por plata, fui yo.",
        },
        {
          key: "vera_ev_auditoria",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el informe de auditores sobre el faltante",
          requiresClueKey: "auditoria",
          responseText:
            "Yo le dije, le dije que no podía sostener la farsa... él me juraba que era un problema de caja y que lo iba a resolver antes de la auditoría. Nunca me habló de un secuestro. Yo le creía el problema de plata, no que fuera capaz de mandarse una cosa así.",
        },
      ],
    },

    // ---------------- ROGELIO ----------------
    {
      suspectKey: "rogelio",
      question: "Con treinta años en el galpón no me van a colgar un secuestro por una ronda de mate. Yo dormí en mi casa, se acabó.",
      order: 1,
      options: [
        {
          key: "rogelio_noche",
          label: "¿Dónde estuviste la madrugada del secuestro?",
          responseText:
            "Me fui de la planta a las siete, cené con mi señora, la tele y a dormir, como toda la vida. Me enteré de todo recién a la mañana, cuando me llamaron de la planta con el revuelo del patrón.",
        },
        {
          key: "rogelio_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu coche en la cámara del portón a las 02:30",
          requiresClueKey: "camara-rogelio",
          responseText:
            "...está bien. Fui. A las dos y media pasé por la planta a buscar un permiso del despacho aduanero que tenía que entregar sí o sí a primera hora. Entré, agarré el sobre, y volví a casa. No me quedé ni veinte minutos.",
        },
        {
          key: "rogelio_permiso",
          label: "¿Un permiso a las 02:30? Nadie trabaja esa hora por papeles.",
          requiresOptionKey: "rogelio_ev_camara",
          responseText:
            "No es por el papel, es por el flete. Vengo haciendo turnos de noche con la gente del despacho porque quedé con una deuda de la quiebra de un socio, y la cubro laburando de noche a precio de hora. Si el patrón se entera de que trabajo de madrugada para otros, pierdo todo. Por eso mentí. La vergüenza hace mentir a la gente honesta, inspector.",
        },
        {
          key: "rogelio_llamadas",
          label: "El teléfono de Gustavo marcó la torre de la planta a las 02:17. ¿Qué viste en el portón?",
          responseText:
            "Yo entré a las 02:30, un cuarto de hora después. El portón estaba cerrado y abrí con mi control, no vi vehículos raros ni luces. Si su teléfono sonó en la planta antes de que yo llegara, yo no estaba ahí para escucharlo.",
        },
      ],
    },
    {
      suspectKey: "rogelio",
      question: "Yo no quiero problemas, quiero que el patrón aparezca y que la flota siga andando. Eso era todo.",
      order: 2,
      options: [
        {
          key: "rogelio_vera",
          label: "¿Qué es Vera para vos?",
          responseText:
            "La señora del dueño. La saludo en la oficina y colaboro con la documentación de la flota. Nada más, y le molesta que me lo pregunte.",
        },
        {
          key: "rogelio_confidente",
          label: "La gente de la cuadra los vio juntos más de una vez.",
          requiresOptionKey: "rogelio_vera",
          responseText:
            "Vivimos en la misma cuadra, nos cruzamos en el almacén y en el club... está bien, hubo algo, hace meses, y se terminó. Ella es la esposa del patrón y yo soy el que más quilombos puede perder en esta historia. Por eso mentí en la primera declaración y por eso no abrí la boca con mi señora. Pero a Gustavo no lo toqué ni con las manos ni con la plata.",
        },
        {
          key: "rogelio_nivel",
          label: "¿Cómo venía la planta este año, números en mano?",
          responseText:
            "Yo controlo logística, no plata. Pero las cuentas de lo que sale y lo que entra las veo pasar todos los días, y en los últimos meses Gustavo hacía unos fierros que no cerraban. Compró chatarra a precio de oro y la vendió a precio de amigo. No soy contador, pero sé cuando un barco se hunde.",
        },
      ],
    },

    // ---------------- TADEO ----------------
    {
      suspectKey: "tadeo",
      question: "Quince años en el portón y nunca vi un secuestro ni una caja abierta de más. Esta noche me tocó la noche negra.",
      order: 1,
      options: [
        {
          key: "tadeo_rondas",
          label: "Contame tus rondas de la madrugada.",
          responseText:
            "Hice la ronda de la una y media: portón, galpón de herramientas, oficina. Marqué todo. A las dos y cuarenta y cinco repetí la vuelta, sin novedad, como consta en la planilla. No vi ni una sombra.",
        },
        {
          key: "tadeo_ev_planilla",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la planilla con las dos rondas firmadas a la misma hora",
          requiresClueKey: "planilla-tadeo",
          responseText:
            "Yo... me quedé dormido. Me levanté a las tres y diez y llené la planilla toda junta, apurado, para que no se notara. La siesta en el puesto me cuesta el laburo y lo sé. Por eso la falsifiqué. Ahora me van a echar, pero no tengo nada que ver con un secuestro.",
        },
        {
          key: "tadeo_siesta",
          label: "¿Te dormiste justo cuando entraban y salían camionetas?",
          requiresOptionKey: "tadeo_ev_planilla",
          responseText:
            "El portón de abajo es automático: abre con control remoto y el registro lo lleva el sistema, no yo. Y yo a esa hora estaba arriba, en la garita, durmiendo como un tronco. No abro nada a mano de noche. El portón anduvo solo y la cámara anotó lo que quiso anotar.",
        },
        {
          key: "tadeo_miedo",
          label: "¿Por qué no firmaste la planilla en el momento, como siempre?",
          requiresOptionKey: "tadeo_siesta",
          responseText:
            "Por miedo. Quince años y un solo papel con un agujero me tiraba abajo la jubilación de la guarida. No se me ocurrió otra cosa que inventar la ronda de memoria. Y ahora resulta que esa noche justo pasó lo que pasó. Si supiera que se iba a armar este quilombo, habría quedado despierto hasta el amanecer.",
        },
      ],
    },
    {
      suspectKey: "tadeo",
      question: "Dormí una siesta, llené un papel mal y ya soy cómplice de un secuestro. Qué país.",
      order: 2,
      options: [
        {
          key: "tadeo_partes",
          label: "¿Qué viste en las cámaras cuando despertaste?",
          responseText:
            "Volví a mirarlas recién a la mañana, con el revuelo. El portón registró la camioneta del patrón entrando a la una y cincuenta y saliendo a las dos y diez, y el coche de Rogelio a las dos y media. De Tadeo no hay nada raro, porque el que mira soy yo.",
        },
        {
          key: "tadeo_ev_torre",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el rastreo que ubica el teléfono en la planta a las 02:17",
          requiresClueKey: "torre-telefono",
          responseText:
            "¿El teléfono del patrón dentro de la planta a las dos y cuarto de la madrugada? Si yo hubiera estado despierto, habría visto la camioneta, la luz de la oficina, cualquier cosa. Pero no: yo dormía arriba como un bendito. Le fallé a todos con esa siesta, y ahora nadie me cree.",
        },
        {
          key: "tadeo_patron",
          label: "¿Gustavo solía entrar a la planta de madrugada?",
          requiresOptionKey: "tadeo_partes",
          responseText:
            "Es el dueño, tiene el control y la llave de todo, entra y sale cuando se le antoja sin avisar a nadie. Yo no tengo por qué mirar el auto del patrón ni pedirle explicaciones. Esa es la diferencia entre el guardia y el dueño: las puertas le abren a él aunque yo duerma.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "21:00",
      text: "Gustavo firma la salida en el libro del portón y se va manejando su camioneta.",
      isPublic: true,
    },
    {
      time: "23:40",
      text: "La tarjeta de Vera retira $40.000 en el cajero automático del centro.",
      revealedByClueKey: "cajero-vera",
    },
    {
      time: "01:55",
      text: "La cámara del portón registra la camioneta de Gustavo ENTRANDO a la planta, con él al volante. Él declaró que a esa hora lo abandonaban en el galpón.",
      revealedByClueKey: "camara-planta",
    },
    {
      time: "02:10",
      text: "La misma camioneta sale de la planta en dirección al galpón de la ruta. Al volante va una sola persona: Gustavo.",
      revealedByClueKey: "camara-planta",
    },
    {
      time: "02:17",
      text: "La llamada al teléfono de Vera se registra en la torre de la propia planta, a 4 km del galpón.",
      revealedByClueKey: "torre-telefono",
    },
    {
      time: "02:30",
      text: "El coche de Rogelio entra a la planta y sale a las 02:50 sin cargar nada.",
      revealedByClueKey: "camara-rogelio",
    },
    {
      time: "03:10",
      text: "Tadeo completa la planilla de rondas: las rondas de la 01:30 y las 02:45 quedan firmadas con la misma hora.",
      revealedByClueKey: "planilla-tadeo",
    },
    {
      time: "06:30",
      text: "Un camionero encuentra a Gustavo 'secuestrado' en el galpón de la ruta, apenas atado y con el labio cortado.",
      isPublic: true,
    },
  ],

  deductions: [
    {
      title: "La llamada del rescate salió de la empresa",
      text: "El teléfono de Gustavo marcó la torre de la propia planta a las 02:17 y el galpón donde apareció 'atado' pertenece a Transportes Elizalde. Nadie lo secuestró en un calabozo ajeno: el secuestro nació en el predio del secuestrado.",
      requiredClueKeys: ["torre-telefono", "galpon-propio"],
      order: 1,
    },
    {
      title: "Gustavo se llevó a sí mismo al galpón",
      text: "La cámara del portón lo muestra entrando a su planta a las 01:55 y saliendo a las 02:10 hacia el galpón, que es de su propia empresa. En el lugar, las colillas de su tabaco importado y su vaso térmico: el 'secuestrado' fumó y esperó sentado, solo, la hora de aparecer.",
      requiredClueKeys: ["camara-planta", "colillas", "galpon-propio"],
      order: 2,
    },
    {
      title: "La nota de rescate se escribió en su propia oficina",
      text: "La nota se imprimió en la impresora del despacho de Gustavo, sin huellas, con errores de tipeo idénticos a los borradores del historial de su PC. La 'exigencia' de los secuestradores salió del mismo teclado del secuestrado.",
      requiredClueKeys: ["nota-rescate"],
      order: 3,
    },
    {
      title: "El apuro estaba en los números",
      text: "El informe de auditores marca un faltante de $1.600.000 y la auditoría externa venía la semana siguiente. Un rescate de dos millones 'que nadie pudo pagar' era la forma de llenar el pozo antes del cierre: el único que perdía todo en el cierre era el dueño.",
      requiredClueKeys: ["auditoria"],
      requiredOptionKeys: ["gustavo_ev_auditoria"],
      order: 4,
    },
    {
      title: "Tres secretos que no son complicidad",
      text: "Vera retiró $40.000 por desconfianza, Rogelio entró a la planta a las 02:30 a buscar un permiso cubriendo un turno por deuda y Tadeo falsificó su planilla para tapar una siesta. Ninguno de los tres explica el teléfono en la planta ni las colillas en el galpón: sus mentiras son íntimas, la del patrón era de dos millones.",
      requiredClueKeys: ["cajero-vera", "camara-rogelio", "planilla-tadeo", "torre-telefono"],
      requiredOptionKeys: ["vera_ev_cajero", "rogelio_ev_camara", "tadeo_ev_planilla"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      { label: "El desfalco de la empresa iba a destaparse en la auditoría y montó el secuestro para conseguir el rescate antes del cierre", isCorrect: true, order: 1 },
      { label: "Necesitaba plata para pagar una deuda de juego de su esposa y montó todo una sola noche", order: 2 },
      { label: "Quería hundir a Rogelio, el jefe de logística, para tapar un fraude de la aduana", order: 3 },
      { label: "Le debía dos millones a un prestamista y el rescate era el canal de pago en negro", order: 4 },
    ],
    methods: [
      { label: "Se ató él mismo y simuló el secuestro usando su teléfono desde la propia planta", isCorrect: true, order: 1 },
      { label: "Contrató a dos hombres del conurbano y arregló una entrega de rescate en la ruta", order: 2 },
      { label: "Fingió el secuestro pero un operario manejó la camioneta para despistar las cámaras", order: 3 },
      { label: "Escondió el rescate en el galpón de la empresa para recuperarlo sin que se notara", order: 4 },
    ],
  },
};