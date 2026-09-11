import type { CaseDef } from "./types";

/**
 * CASO 010 — El saboteador del puente
 * Dificultad: EXPERTO | Sabotaje a una obra de infraestructura
 *
 * QUÉ OCURRIÓ REALMENTE
 * La obra del puente San Roque iba a renovar la concesión a Cimenta SA. Renato
 * Vega, su ingeniero jefe, fundó en silencio la contratista rival "Soupensil"
 * y saboteó su propia obra para que Cimenta cayera en desgracia y la concesión
 * pasara a su empresa fantasma. Esa madrugada, en la ventana de 23:10-23:20 en
 * que la torre de iluminación quedó ciega por el cambio de lámpara, limó las
 * tracas de tres de las seis uniones de la celosía. A las 23:17 la grúa movió
 * la viga, la unión cedió, la estructura quedó colgando y un obrero cayó cuatro
 * metros. Diez segundos después, Renato 'alertó' desde la obra: el héroe ya
 * estaba ahí. El culpable es Renato.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Saúl: jefe de obra. No hizo la ronda de inspección nocturna de esa noche
 *   porque se estaba durmiendo la siesta en la casilla. Se llena de culpa,
 *   pero es inocente del sabotaje.
 * - Marcelo: operador de la grúa. Movió la viga sin el permiso de maniobra
 *   porque la obra iba atrasada; fue el gatillo que hizo ceder lo que ya
 *   estaba cortado. Miente sobre el horario por la falta de permiso.
 * - Ludmila: inspectora de calidad. Aprobó la última tanda de espárragos sin
 *   el ensayo de dureza, por presión de obra, y ocultó el formulario. Inocente.
 */
export const case010: CaseDef = {
  code: "CASO-010",
  slug: "el-saboteador-del-puente",
  title: "El saboteador del puente",
  intro:
    "A las 23:17, en la obra del puente carretero San Roque, se soltaron las uniones de una línea de apoyo del encofrado y la estructura quedó colgando con un ruido que se escuchó hasta la ruta. Pedro Núñez, un obrero del turno nocturno, cayó cuatro metros y quedó grave. La empresa lo quiso vender como accidente de obra: una unión que 'cedió por el viento'. Diez segundos después del colapso, el ingeniero jefe ya había llamado por teléfono para avisar, porque 'pasaba casualmente por la obra'. Los espárragos de la celosía tienen la traca limada: tres de seis uniones cortadas a mano, de un lado que no se ve a simple vista. Esto no se soltó solo. Alguien con acceso, con planos y con ganas de que la obra parara lo cortó casi del todo... y después se apuró a ser el primero en alertar.",
  scene: "puente",
  victim: { name: "Obra del puente San Roque", age: 0, job: "" },
  place: "Puente carretero San Roque, obra en vía",
  timeOfCrime: "23:17",
  difficulty: "EXPERTO",
  order: 10,
  requiredLevel: 4,
  motive:
    "Renato Vega tenía un conflicto de interés: era ingeniero jefe de Cimenta SA, la constructora del puente, y a la vez estaba detrás de la contratista rival 'Soupensil'. Quería que la obra fracasara y que pareciera culpa del jefe de obra, para que la concesión del puente pasara a su empresa fantasma.",
  method:
    "Conocía la ventana exacta de la inspección nocturna (23:00-23:30) y el apagón de la torre de iluminación por el cambio de lámpara (23:10-23:20). Esa madrugada limó las tracas de tres de las seis uniones de la celosía, dejándolas ceder a simple agitación. A las 23:17 la grúa movió la viga, la unión cortada reventó y la estructura se vino abajo. Diez segundos después, Renato llamó desde la obra 'alertando' del problema.",
  resolutionText:
    "Los espárragos de la celosía tenían la traca limada a mano en tres de seis uniones: un corte que no se ve de frente y que se hace con lima y paciencia, no con un accidente. La viruta de limado encontrada en el hueco de la pasarela y las marcas de lima coincidentes en el ángulo de ataque lo prueban; la lima del taller que cualquiera usaba fue una pista falsa que llevaba a todo el mundo y a nadie. La cámara de la torre de iluminación mostró el hueco exacto del apagón, de 23:10 a 23:20: la única ventana sin ojos en la que alguien pudo limar sin que lo vieran. El log de la grúa registró el movimiento de Marcelo a las 23:16 sin permiso de maniobra, el gatillo que hizo ceder la estructura... sobre un espárrago que ya venía cortado. La planilla de inspección de Saúl no tenía la firma de la ronda nocturna: había dormido la siesta y la culpa se le subió como un peso muerto. El formulario de calidad de Ludmila aprobaba la última tanda sin el ensayo de dureza, una aprobación apurada que era un error, no un sabotaje. Y cuando la cámara del peaje mostró el coche de Renato pasando a las 23:05, y el registro de su teléfono la llamada a las 23:18, exactamente diez segundos después del colapso, desde la propia obra, la 'casualidad' se terminó: el ingeniero jefe ya estaba ahí antes de que sonara la alarma. Sabía dónde y cuándo cortar porque había firmado las pautas de inspección y conocía la agenda del apagón; y tenía para qué: que la obra fracasara y la concesión pasara a Soupensil, la contratista rival que él mismo había fundado. El accidente tenía autor de sobra: no era el viento, era su ambición.",
  xpReward: 1400,
  coinReward: 700,
  guiltyKey: "renato",

  suspects: [
    {
      key: "renato",
      name: "Renato Vega",
      age: 51,
      job: "Ingeniero jefe de Cimenta SA",
      relationship: "Responsable técnico de la obra del puente",
      bio: "El ingeniero jefe que participó del pliego, firmó las pautas de inspección y conoce el puente de memoria porque lo diseñó en la mesa de dibujo. Es, además, el primero que 'alertó' del colapso, diez segundos después de que sonara: venía de la reunión de la concesión y paró 'de casualidad' en la obra.",
      avatarColor: "#3a4a5a",
      alibi: "Dice que esa noche venía de la reunión de renovación de la concesión, que paró en la obra 'de casualidad' a verificar un punto del pliego y que se enteró del colapso cuando ya estaba ahí.",
      openingStatement:
        "Qué noche, eh. Diez segundos después del ruido ya estaba llamando para que vinieran, y todavía tengo el susto en el cuerpo. Yo conozco este puente como mi escritorio: si alguien lo saboteó, lo voy a encontrar antes que ningún perito, se lo aseguro.",
      isGuilty: true,
      order: 1,
    },
    {
      key: "saul",
      name: "Saúl Ferreyra",
      age: 46,
      job: "Jefe de obra de Cimenta SA",
      relationship: "Responsable de obra y de las inspecciones de turno",
      bio: "Veinte años de obra, el hombre que lleva la planilla de inspecciones pegada al pecho. Esta noche la planilla tiene una firma que no está, y el peso de esa firma le cuelga del cuello como una soga. Si sale que no inspeccionó, lo echan; si sale que saboteó, lo encarcelan. Él no sabe cuál de las dos cosas le da más miedo.",
      avatarColor: "#4a5a3a",
      alibi: "La ronda de las 23:00 de su planilla figura firmada y 'sin novedad'. Nadie afuera de la obra lo vio entre las 22:50 y las 23:20.",
      openingStatement:
        "Yo cargo con cada viga de este puente sobre las espaldas desde el primer pilote. Si me dicen que la unión estaba cortada, háganme el favor de mostrarla: porque si alguien cortó, lo cortó a mis espaldas, y esa culpa no me la saca nadie.",
      order: 2,
    },
    {
      key: "marcelo",
      name: "Marcelo Aguirre",
      age: 39,
      job: "Operador de la grúa (turno nocturno)",
      relationship: "Operaba la grúa torre del encofrado",
      bio: "El hombre de la grúa desde hace siete años, con las uñas rotas de manejar pórticos y el oído puesto en el zumbido de la máquina. Esa noche movió la viga que hizo ceder la celosía; y la movió sin permiso de maniobra, porque la obra iba atrasada y la jefa de maniobras no estaba. Inocente del corte, culpable de la movida, y lo sabe.",
      avatarColor: "#5a4a2a",
      alibi: "Dice que a las 23:17 estaba haciendo 'maniobra programada de viga' con permiso de la jefa de maniobras, que 'se había retirado temprano y le daba el visto bueno por teléfono'.",
      openingStatement:
        "La viga se movió, el estribo se vino abajo y el pibe cayó. Yo fui el de la grúa, sí, pero la grúa no corta un espárrago: la grúa mueve lo que el trabajo le pide. Si me quieren echar la culpa, que primero muestren el espárrago.",
      order: 3,
    },
    {
      key: "ludmila",
      name: "Ludmila Peralta",
      age: 34,
      job: "Aparejadora e inspectora de calidad",
      relationship: "Controlaba la calidad de materiales y pruebas de acero",
      bio: "La que revisa cada lote de espárragos antes de que entren a obra. La última tanda la aprobó sin hacerles la prueba de dureza, por presión del calendario, y el formulario con la firma 'aceptado' ahora está oculto en su casillero. Sabe que si el defecto parece autorizado por ella, su carrera se hunde antes que el puente.",
      avatarColor: "#3a5a4a",
      alibi: "Dice que el día anterior salió del trabajo a las 17:00 y que el formulario de la última tanda lo completó 'al día siguiente de la entrega, con el resultado del laboratorio'.",
      openingStatement:
        "Los espárragos que entraron a obra pasaron mi control, todos, y de esa tanda tengo el papel. Si el papel dice que estaban bien, estaban bien. Lo único que les pido es que no confundan una inspección con un sabotaje.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "obra-encofrado",
      name: "Obra y estructura de encofrado",
      description:
        "El corazón de la obra: la celosía metálica que sostiene el encofrado del tablero, con la línea de apoyo que se soltó. El perito dejó cintas amarillas alrededor y la viga todavía cuelga a la mitad, como una pregunta sin responder.",
      order: 1,
      actions: [
        {
          label: "Examinar las uniones de la celosía",
          resultText:
            "Tres de las seis uniones de la línea de apoyo tienen la traca limada: un corte a mano, prolijo, que a simple vista parece una fisura natural. Las tres cabezas muestran marcas de lima con el mismo ángulo de ataque. El perito lo marca: fue hecho a propósito, una por una.",
          clueKey: "esparragos-limados",
          order: 1,
        },
        {
          label: "Rastrear el hueco de la pasarela técnica",
          resultText:
            "En el hueco de la pasarela que pasa por debajo de la celosía, donde nadie mira, hay viruta metálica fina: el residuo de limar. El carbón de la viruta coincide con el acero de los espárragos, no con la chatarra de la obra.",
          clueKey: "polvo-lima",
          order: 2,
        },
      ],
    },
    {
      key: "pasarela",
      name: "Pasarela técnica y torre de iluminación",
      description:
        "La pasarela elevada que bordea la estructura, con la torre de iluminación de 20 metros que iluminaba todo el frente de trabajo de noche. Su cámara panorámica mira directo a la celosía y a la plancha de trabajo, cuando no está apagada.",
      order: 2,
      actions: [
        {
          label: "Bajar la cámara de la torre de iluminación",
          resultText:
            "La cámara de la torre graba de corrido... menos entre las 23:10 y las 23:20: un hueco exacto de diez minutos que coincide con el cambio de lámpara que la jefa de mantenimiento había anotado. Ni diez segundos más: justo la ventana para limar sin que nadie viera.",
          clueKey: "camara-torre",
          order: 1,
        },
        {
          label: "Ver la cámara del portón de casetas",
          resultText:
            "En el portón, entre las 22:40 y las 23:40, entran y salen dos camionetas y un auto gris. La patente del auto gris pertenece a una unidad que la empresa no tiene registrada en obra. Nadie anotó el ingreso.",
          clueKey: "auto-renato",
          order: 2,
        },
      ],
    },
    {
      key: "casilla-obra",
      name: "Casilla de obra",
      description:
        "La casilla prefabricada con tres escritorios, la planilla de inspecciones en la pared, la caja de herramientas con llave francesa y un rincón con el colchón donde Saúl 'revisa papeles' de madrugada. Olor a café recalentado y a culpa.",
      order: 3,
      actions: [
        {
          label: "Revisar la planilla de inspecciones",
          resultText:
            "La ronda de las 22:40 está firmada por Saúl, pero la de las 23:00 está en blanco: no tiene la firma que corresponde a la última ronda nocturna. La hoja fue llenada 'en bloque' de un tirón, con la misma lapicera y la misma hora.",
          clueKey: "planilla-inspeccion",
          order: 1,
        },
        {
          label: "Buscar el formulario de calidad del último lote",
          resultText:
            "En el casillero de Ludmila, debajo de un chaleco, un formulario marca 'ACEPTADO' la última tanda de espárragos... con el casillero del ensayo de dureza en blanco y una fecha tipeada sobre otra. La aprobación que luego 'se completó' con el resultado.",
          clueKey: "aprobacion-esparragos",
          order: 2,
        },
        {
          label: "Revisar la caja de herramientas del taller",
          resultText:
            "En el cajón de las herramientas hay una lima de mano con virutas frescas en los dientes y el mango gastado. Pero la caja es de uso común: la usa el taller entero, y cualquier técnico la deja limpia. Como pista, lleva a todos lados y a ningún lado.",
          clueKey: "hoja-corte",
          order: 3,
        },
      ],
    },
    {
      key: "porton-casetas",
      name: "Portón de casetas y peaje",
      description:
        "El acceso a la obra por el portón de casetas, con una cabina, un registro de entrada manual y la cámara del puesto de peaje de la ruta a trescientos metros, que enfoca la única salida a la ruta provincial.",
      order: 4,
      actions: [
        {
          label: "Consultar el log de movimientos de la grúa",
          resultText:
            "El log electrónico de la grúa registra un movimiento de viga a las 23:16, sin permiso de maniobra asociado en el sistema. La maniobra 'programada' de la que habla Marcelo figura recién a las 23:19... tres minutos después del colapso.",
          clueKey: "registro-grua",
          order: 1,
        },
        {
          label: "Cotejar el auto gris con la cámara del peaje",
          resultText:
            "La cámara del peaje de la ruta registra el mismo auto gris cruzando hacia la obra a las 23:05. La patente pertenece a Renato Vega, ingeniero jefe de Cimenta: el mismo que declaró venir 'de la reunión de la concesión' que terminó a las 22:30... en el otro sentido de la ruta.",
          clueKey: "auto-renato-peaje",
          order: 2,
        },
        {
          label: "Pedir el detalle de llamadas del celular de Renato",
          resultText:
            "El teléfono de Renato registra una llamada saliente a las 23:18... desde la zona de la obra, a 10 segundos del colapso. El registro de la torre celular lo ubica en el predio desde las 23:02, no llegando a las 23:18. La llamada la hizo desde adentro.",
          clueKey: "celular-renato",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "esparragos-limados",
      title: "Espárragos con la traca limada",
      description:
        "Tres de las seis uniones de la línea de apoyo tienen la traca limada a mano: un corte prolijo que no se ve de frente y que cede a simple agitación. Las tres muestran marcas de lima con el mismo ángulo de ataque: fueron limadas una por una, a propósito, con tiempo y herramienta.",
      icon: "Wrench",
      type: "FISICA",
      importance: "CLAVE",
      locationKey: "obra-encofrado",
      implicatesSuspectKey: "renato",
    },
    {
      key: "polvo-lima",
      title: "Viruta de limado en la pasarela",
      description:
        "En el hueco de la pasarela técnica, justo debajo de la celosía y fuera de toda vista, hay viruta metálica fina: el residuo de limar. El perito comparó el carbón y coincide con el acero de los espárragos. El que limó lo hizo desde ese hueco, sin correr, con la torre apagada.",
      icon: "Sparkles",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "obra-encofrado",
    },
    {
      key: "camara-torre",
      title: "Cámara de la torre: el hueco de 23:10-23:20",
      description:
        "La cámara de la torre de iluminación graba de corrido, salvo entre 23:10 y 23:20: diez minutos exactos de señal cortada que coinciden con el cambio de lámpara anotado en el parte de mantenimiento. La única ventana sin ojos para limar tres uniones... y el momento exacto del corte.",
      icon: "Video",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "pasarela",
    },
    {
      key: "registro-grua",
      title: "Log de la grúa: movida sin permiso a las 23:16",
      description:
        "El log electrónico de la grúa registra el movimiento de la viga a las 23:16 sin el permiso de maniobra en el sistema. El permiso 'programado' que Marcelo invoca figura cargado recién a las 23:19, tres minutos después del colapso. La viga se movió: el espárrago ya estaba cortado.",
      icon: "MoveHorizontal",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "porton-casetas",
      implicatesSuspectKey: "marcelo",
    },
    {
      key: "planilla-inspeccion",
      title: "La ronda nocturna sin firma",
      description:
        "La planilla de inspecciones tiene la ronda de las 22:40 firmada por Saúl, pero la de las 23:00 está en blanco, llenada 'en bloque' con la misma lapicera. La inspección de la noche que se cortó la celosía no se hizo: nadie recorrió la pasarela, y esa firma que falta carga a Saúl de una culpa que no es la del sabotaje.",
      icon: "ClipboardList",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "casilla-obra",
      implicatesSuspectKey: "saul",
    },
    {
      key: "aprobacion-esparragos",
      title: "Aprobación de espárragos sin ensayo de dureza",
      description:
        "El formulario de calidad que Ludmila firmó la mañana previa aprueba la última tanda de espárragos... con el casillero del ensayo de dureza en blanco y una fecha tipeada sobre otra. La tanda que entró a obra quedó 'aceptada' por apuro del calendario, sin la prueba que la validaba.",
      icon: "FileCheck",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "casilla-obra",
      implicatesSuspectKey: "ludmila",
    },
    {
      key: "auto-renato",
      title: "Auto gris sin registrar en el portón",
      description:
        "En el portón de casetas, entre las 22:40 y las 23:40, entran dos camionetas y un auto gris cuya patente no está registrada en obra. Nadie anotó su ingreso en el registro manual, pero la cámara lo deja entrar a las 23:05, en plena ventana de cámara apagada.",
      icon: "Car",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "pasarela",
      implicatesSuspectKey: "renato",
    },
    {
      key: "auto-renato-peaje",
      title: "Auto de Renato en el peaje a las 23:05",
      description:
        "La cámara del puesto de peaje registra el auto gris con la patente de Renato Vega pasando hacia la obra a las 23:05. La reunión de la concesión, según el acta, terminó a las 22:30, a ochenta kilómetros de ahí... en la dirección opuesta. El ingeniero jefe llegó a la obra veinte minutos antes del colapso, no 'en la casualidad' de las 23:18.",
      icon: "Car",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "porton-casetas",
      implicatesSuspectKey: "renato",
    },
    {
      key: "celular-renato",
      title: "La llamada de las 23:18 desde la obra",
      description:
        "El registro de la torre celular ubica el teléfono de Renato en el predio desde las 23:02. La llamada que hizo 'alertando del colapso' a las 23:18, diez segundos después del ruido, fue hecha desde adentro de la obra: no llegó corriendo al escucharlo, ya estaba ahí. El héroe esperaba la escena.",
      icon: "PhoneCall",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "porton-casetas",
      implicatesSuspectKey: "renato",
    },
    {
      key: "reunion-concesion",
      title: "Acta de la reunión de la concesión",
      description:
        "El acta de la presentación de la concesión del puente lista dos empresas: Cimenta SA, la actual constructora, y Soupensil SRL, una contratista nueva. Los papeles muestran que los socios de Soupensil... coinciden con contactos personales de Renato Vega. La empresa fantasma del ingeniero jefe compite con la suya propia.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "BAJA",
      locationKey: "casilla-obra",
      implicatesSuspectKey: "renato",
    },
    {
      key: "hoja-corte",
      title: "La lima del taller",
      description:
        "Una lima de mano con virutas frescas en los dientes y el mango gastado, en la caja de herramientas del taller de uso común. La prueba de comparación no cierra: la lima no tiene marca de mano única y la usa cualquier técnico de la obra. Una pista que lleva a todos lados y a ningún lado... menos a la viruta del hueco.",
      icon: "Slice",
      type: "FISICA",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "casilla-obra",
    },
  ],

  dialogues: [
    // ---------------- RENATO ----------------
    {
      suspectKey: "renato",
      question: "Yo firmé las pautas de inspección de este puente: sé exactamente lo que hay que mirar. Pregunte todo lo que quiera.",
      order: 1,
      options: [
        {
          key: "renato_reunion",
          label: "Contame de tu noche, desde la reunión.",
          responseText:
            "Salí de la presentación de la concesión a las veintidós y media, tranquilo, con un café en la mano. De yapa me agarró una llamada de la obra y paré 'de casualidad' para verificar un punto del pliego que me había quedado dando vueltas. Llegué a las veintitrés y catorce, cinco o seis minutos antes del ruido.",
        },
        {
          key: "renato_alerta",
          label: "¿Cómo fue que diste la alerta?",
          requiresOptionKey: "renato_reunion",
          responseText:
            "Estaba bajando del auto cuando escuché el ruido seco, como un mazazo en el hierro. Llamé apenas, a la 23:18, con el celular, para que cortaran todo y mandaran a la gente afuera. Si hubiera llegado diez minutos después, el obrero grave seríamos dos.",
        },
        {
          key: "renato_ev_auto",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu auto en el peaje a las 23:05",
          requiresClueKey: "auto-renato",
          responseText:
            "La cámara del peaje... puede ser mi patente, sí, tengo un coche gris. Debe haber salido con una sombra fantasma a la hora que dice. La reunión terminó a las 22:30, si el peaje me pone a las 23:05 cruzando hacia la obra, estaba manejando muy tranquilo. No veo qué delito hay en parar temprano en una obra que es mía.",
        },
        {
          key: "renato_ev_celular",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu teléfono ubicado en la obra desde las 23:02",
          requiresClueKey: "celular-renato",
          responseText:
            "¿El registro me ubica adentro desde las 23:02? Eso es un margen de error de la antena, mire la de la ruta: a veces te posiciona de más o de menos. Yo llamé a las 23:18, el registro de mi llamada lo confirma, y esa es la prueba de que llegué después del ruido, no antes.",
        },
        {
          key: "renato_pautas",
          label: "¿Quién conocía la hora de la inspección nocturna?",
          requiresOptionKey: "renato_alerta",
          responseText:
            "La planilla de inspecciones y el parte de mantenimiento los manejan cuatro personas: el jefe de obra, la inspectora de calidad, el operador de la grúa y yo. La ventana de la Torre, el cambio de lámpara, estaba anotada en el parte. Cualquier técnico de la obra podía leer esos papeles.",
        },
      ],
    },
    {
      suspectKey: "renato",
      question: "Soy ingeniero, no magistrado: yo miro el hierro, no las almas. Pero el hierro esta vez habla, y habla de una mano.",
      order: 2,
      options: [
        {
          key: "renato_obra",
          label: "¿Cómo venía la obra de puente?",
          responseText:
            "Con atraso, como todas. El calendario del pliego pedía el tablero para marzo y estamos en mayo con el encofrado a medio armar. Eso genera tensión y, si me apura, genera descuidos: maniobras de apuro, inspecciones corridas, gente durmiendo la siesta donde no corresponde.",
          requiresOptionKey: "renato_reunion",
        },
        {
          key: "renato_ev_acta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el acta con Soupensil entre tus socios",
          requiresClueKey: "reunion-concesion",
          responseText:
            "Soupensil es una contratista chica que se presentó a la licitación, nada más. ¿Que aparece un apellido conocido entre los socios? El apellido Vega es común en el gremio. Mi trabajo es que Cimenta gane esa concesión, no que se la lleve un competidor.",
        },
        {
          key: "renato_ev_esparragos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los espárragos con la traca limada",
          requiresClueKey: "esparragos-limados",
          responseText:
            "Eso es un corte de lima, de mano, con la torre apagada... ¿me está diciendo que alguien de MI obra limó tres uniones para que esto se viniera abajo? Yo firmé las pautas de inspección, mi firma está en cada planilla. Si hay un saboteador en este puente, quiero ser yo el que lo encuentre antes que todos, se lo juro por el diseño que dibujé.",
        },
        {
          key: "renato_saul",
          label: "¿Confiaste en Saúl para las inspecciones?",
          requiresOptionKey: "renato_ev_esparragos",
          responseText:
            "Saúl es un capataz de fierro, de esos que se quedan la noche entera por una junta. Pero esa noche, la del colapso, no estaba afuera haciendo la ronda. La planilla lo va a condenar más que a nadie si no aparece... y ojalá aparezca, porque si se acabó la confianza en la obra, se acabó todo.",
        },
      ],
    },

    // ---------------- SAUL ----------------
    {
      suspectKey: "saul",
      question: "Yo soy el del casco con la cresta, el que camina la obra dos veces por turno. Caminarla y que esto pase como pasó... me deja sin noche.",
      order: 1,
      options: [
        {
          key: "saul_ronda",
          label: "Contame la ronda de inspección de esa noche.",
          responseText:
            "Hice la ronda de las diez y cuarenta, completa, de punta a punta, con la linterna. La noche estaba tranquila, el encofrado firmado y la celosía en su lugar. La ronda siguiente no llegué a hacerla: estaba en la casilla preparando el parte del cambio de turno cuando sonó todo.",
        },
        {
          key: "saul_planilla",
          label: "La planilla no tiene la firma de la ronda de las 23.",
          requiresOptionKey: "saul_ronda",
          responseText:
            "La última ronda... no me alcanzó a firmarla, se cortó la luz en la casilla y me quedé resolviendo el tablero. Si la hoja está en blanco es un detalle de lapicera, no de saboteo: yo estaba a cuarenta metros de la celosía cuando cedió, lo puede jurar el que pasaba.",
        },
        {
          key: "saul_ev_planilla",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la planilla con la ronda nocturna sin firmar",
          requiresClueKey: "planilla-inspeccion",
          responseText:
            "...está llenada en bloque, toda de una misma mano. Bueno, la llené de un tirón a la mañana, sí, para no perder el parte. La ronda de las 23 no la hice: me quedé dormido en la casilla, de sueño, como un boludo. Esa es toda la verdad. No limé ningún espárrago, solo dormí donde no correspondía, y esa cama ya me va a costar el laburo.",
        },
        {
          key: "saul_renato",
          label: "¿Cómo era trabajar con Renato, el ingeniero?",
          responseText:
            "Un tipo de escritorio con ojo de obra: cuando venía, venía tarde y sabía demasiado. A veces me llamaba una hora antes para decirme 'andá a mirar la unión norte', como si hubiera nacido dentro de la planilla. La última semana andaba más pegote que nunca: justo cuando la concesión estaba en juego.",
        },
      ],
    },
    {
      suspectKey: "saul",
      question: "Una cosa es dormirse una siesta y otra flojear un puente. Pero hoy nadie me va a creer la diferencia.",
      order: 2,
      options: [
        {
          key: "saul_culpa",
          label: "¿Sentís culpa por lo de Pedro?",
          responseText:
            "Culpa tengo y de sobra: dormí en mi puesto y un hombre quedó grave. Si yo hubiera hecho la ronda de las 23, tal vez veía la junta floja y la frenaba a tiempo. Pero la junta no se afloja sola: se corta con una lima, y una lima se afila antes del incendio, no durante. Yo no corté nada, tengo las manos limpias aunque sucias de sueño.",
        },
        {
          key: "saul_marcelo",
          label: "¿Qué sabés de la maniobra de Marcelo?",
          requiresOptionKey: "saul_culpa",
          responseText:
            "Marcelo mueve la grúa como si manejara una bici: firme, prolijo, sin permiso cuando falta y le pisa adelante la obra. Esa noche movió la viga a las 23:16, me enteré después, y sin la jefa de maniobras presente. Lo voy a defender porque no cortó nada: pero sí apuró una movida que, con el hierro ya cortado, fue la gota que reventó la junta.",
        },
        {
          key: "saul_ev_esparragos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los espárragos con marcas de lima",
          requiresClueKey: "esparragos-limados",
          responseText:
            "Ese ángulo de ataque... una persona sola, parada en el hueco de la pasarela, limando tranquila con la torre apagada. Eso explica por qué no lo vi en la ronda de la 22:40: todavía no estaba cortado. Y explica también por qué se apagó la torre justo esa media hora: el del cambio de lámpara y el de la lima trabajaron en el mismo turno.",
        },
        {
          key: "saul_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el hueco de la cámara de la torre",
          requiresClueKey: "camara-torre",
          responseText:
            "Diez minutos exactos de señal cortada, justo la ventana del cambio de lámpara que el parte anotaba. El que limó supo que esa ventana existía y cuándo iba a pasar. ¿Quién lo sabía? Los que firman papeles y partes de mantenimiento. Yo firmé planillas, pero el cambio de lámpara lo anotó otra persona.",
        },
      ],
    },

    // ---------------- MARCELO ----------------
    {
      suspectKey: "marcelo",
      question: "Yo soy el de la grúa: la ropa tiene grasa y los oídos acostumbrados al hierro. No me venga con cuentos de permiso de maniobra, acá se busca a un saboteador.",
      order: 1,
      options: [
        {
          key: "marcelo_maniobra",
          label: "¿Cómo fue la maniobra de las 23:16?",
          responseText:
            "Una movida de viga programada: la jefa de maniobras me dio el visto bueno por teléfono y la hice a las once y dieciséis, puntual. Mové la carga despacio, la estructura agarró el viento y se escuchó el ruido. Si el permiso no está cargado en el sistema es por el quilombo de la obra, no porque yo sea un improvisado.",
        },
        {
          key: "marcelo_log",
          label: "El log dice que el permiso figura recién a las 23:19.",
          requiresOptionKey: "marcelo_maniobra",
          responseText:
            "Puede que lo cargaran tarde... la jefa no estaba en la obra y la carga la hice yo después del colapso, cuando ya era un quilombo. Sí, la moví sin el permiso cargado, ¿y qué? La obra iba atrasada, la viga no esperaba y nadie quería quedarse un día más en el horno. La culpa que tengo es de apuro, no de sabotaje.",
        },
        {
          key: "marcelo_ev_registro",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el registro de la grúa sin permiso",
          requiresClueKey: "registro-grua",
          responseText:
            "Ahí está, lo admito, la movida a las 23:16 sin permiso. Yo fui el que movió la viga. Pero la viga no cortó el espárrago: la viga lo encontró ya cortado. Si eso no fuera así, la movida de una viga de ocho toneladas no revienta una junta el primer día. El hierro venía flojo de antes.",
        },
        {
          key: "marcelo_horario",
          label: "¿A qué hora arrancaste tu turno?",
          responseText:
            "A las diez y cuarenta, con el cambio de turno. De ahí a las dos de la mañana estuve en la cabina y bajé dos veces al baño: a las once y media y a la una menos cuarto. Si me preguntan por la celosía, yo la veía desde arriba de la grúa, de costado, con la torre encendida.",
        },
      ],
    },
    {
      suspectKey: "marcelo",
      question: "Una grúa no corta nada: levanta o baja. A esta le tocó ser la que destapó la podredumbre.",
      order: 2,
      options: [
        {
          key: "marcelo_viento",
          label: "¿Pudo ser el viento, como dijo la empresa?",
          responseText:
            "El viento que hacía esa noche no mueve ni la lona del bar playero. La estructura se vino abajo con la viga recién puesta encima: el acero agarró la carga a la mitad y reventó. Para que un espárrago falle así, o venía picado o venía cortado. Y no había picadura: había lima.",
        },
        {
          key: "marcelo_ev_esparragos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los espárragos con la traca limada",
          requiresClueKey: "esparragos-limados",
          responseText:
            "Tres uniones limadas de seis, con la marca de la lima en el mismo ángulo... eso no entra en una obra por accidente: alguien lo hizo de noche, con la torre apagada, y esperando a que la movida de la carga hiciera el trabajo sucio. El que limó sabía que yo muevo la grúa. Me usaron, inspector, me usaron de gatillo.",
        },
        {
          key: "marcelo_quien",
          label: "¿Quién sabía que ibas a mover la viga esa noche?",
          requiresOptionKey: "marcelo_ev_esparragos",
          responseText:
            "¡Mucha gente! La movida estaba pedida desde el día anterior en el parte, la veían el jefe de obra, la inspectora de calidad y el ingeniero jefe. Y la hora exacta la sabía quien leyera la planilla: la ventana de la maniobra estaba anotada... junto con la hora del apagón de la torre. Los dos papeles se miran en la misma mesa.",
        },
        {
          key: "marcelo_ludmila",
          label: "¿Cómo llevás con Ludmila la aprobación de materiales?",
          responseText:
            "Ludmila es de las que no dejan pasar nada... o de las que se bajan los lentes para no ver, según el apuro. La última tanda de espárragos entró 'aceptada' y a nadie se le ocurrió preguntarle por el ensayo. Yo no soy perito: soy el que levanta el hierro. Pero el hierro que entró sin ensayo no me parece una excusa para que un puente se caiga.",
        },
      ],
    },

    // ---------------- LUDMILA ----------------
    {
      suspectKey: "ludmila",
      question: "Yo controlo lo que entra a obra: cada lote de acero, cada prueba de laboratorio con su número. La calidad no es un asunto de simpatía.",
      order: 1,
      options: [
        {
          key: "ludmila_tanda",
          label: "Contame de la última tanda de espárragos.",
          responseText:
            "El lote entró el martes con su certificado de fábrica en regla. Le hice la revisión visual, quedó marcado 'aceptado' y pasó a la celosía. La prueba de dureza se hace en laboratorio y el resultado llegó después, como siempre: por eso el formulario se completa con una fecha posterior a la entrega. Es el procedimiento de toda la obra.",
        },
        {
          key: "ludmila_form",
          label: "¿Puedo ver el formulario de esa tanda?",
          requiresOptionKey: "ludmila_tanda",
          responseText:
            "Está en el casillero de la casilla, lo traje para el comité. Ah, si ustedes ya lo vieron... bueno, lo tuvieron que ver con la prueba en blanco porque la máquina del laboratorio estuvo caída dos días y completé el casillero cuando llegó el resultado. La aprobación adelantada fue un atajo administrativo, no una falta.",
        },
        {
          key: "ludmila_ev_form",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el formulario con el ensayo de dureza en blanco",
          requiresClueKey: "aprobacion-esparragos",
          responseText:
            "Sí, lo firmé así, sin el ensayo hecho, y por eso lo saco del armario: tenía la presión del calendario encima y el certificado de fábrica era suficiente en mi cabeza. Marqué 'aceptado' sin la prueba completa. Esa fue una decisión mía, equivocada, y no la voy a culpar ni al laboratorio ni al apuro. Pero aceptar un lote rápido no es limar tres uniones de noche. Eso yo no lo hago ni bajo una grúa.",
        },
        {
          key: "ludmila_saul",
          label: "¿Cómo ves el tema de las inspecciones de Saúl?",
          requiresOptionKey: "ludmila_form",
          responseText:
            "Saule hace las rondas en serio, pero dormir la siesta en la casilla la noche que pasó lo que pasó... me da pena, porque es honesto, tan honesto que se hunde solo. El que hizo esto no duerme siesta: conoce la planilla, el parte de mantenimiento y la ventana exacta. Mis aprobaciones apuradas y su ronda dormida son ruido; el saboteador está en el ruido, escondido atrás de nosotros dos.",
        },
      ],
    },
    {
      suspectKey: "ludmila",
      question: "El acero es mudo hasta que cede, y cuando cede, habla solo. Hay que saber escucharlo sin echarme la culpa a priori.",
      order: 2,
      options: [
        {
          key: "ludmila_miedo",
          label: "¿Qué miedo tenés de este expediente?",
          responseText:
            "Que parezca que autorice el defecto. Firmé una aprobación sin ensayo y esa hoja, en manos de un perito, me convierte en la que 'dejó pasar' el acero limado... cuando la lima fue otra mano, otra cabeza, otra noche entera. Si esto termina en juicio, mi firma y mi apuro van a bailar solos en el expediente. Por eso escondí el formulario: para arreglar a tiempo lo que no se puede arreglar.",
        },
        {
          key: "ludmila_ev_esparragos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las marcas de lima en las uniones",
          requiresClueKey: "esparragos-limados",
          responseText:
            "Ese ángulo de lima es de alguien que trabajó con la torre apagada, parado en el hueco de la pasarela, con tiempo y sin que nadie lo viera. No es un acto de apuro: es un acto de planificación. Quien lo hizo sabía dónde iba a estar la grúa a las 23:16, sabía cuándo se cortaba la luz de la torre y sabía qué junta aguantaba el peso. Eso está en las planillas que se leen en la oficina de Renato.",
        },
        {
          key: "ludmila_renato",
          label: "¿Cómo trabajás con Renato?",
          requiresOptionKey: "ludmila_ev_esparragos",
          responseText:
            "Renato revisa el acero como quien revisa un hijo: con exceso. Ese es el problema: sabe demasiado de cada lote, de cada junta, de cada parte de mantenimiento. La última semana andaba en la obra de noche 'de casualidad' dos o tres veces. La casualidad, en un puente, suele esconder una orden de trabajo.",
        },
        {
          key: "ludmila_pedro",
          label: "¿El obrero que cayó, Pedro, cómo era?",
          responseText:
            "Pedro Núñez, el del hierro de la noche: diez años en andamios y un hijo chico. No era de los que se arriesgan de más; era de los que cumplen. Que haya caído porque una junta estaba limada de antemano me saca el sueño más que mi propio formulario. El responsable está en la obra, con casco, y debe estar mirando la tele tranquilo.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "Día previo · 17:00",
      text: "Ludmila aprueba la última tanda de espárragos con el casillero del ensayo de dureza en blanco. La tanda entra a obra 'aceptada'.",
      revealedByClueKey: "aprobacion-esparragos",
    },
    {
      time: "22:30",
      text: "Termina la reunión de la concesión. Renato declara 'venir de ahí'.",
      revealedByClueKey: "reunion-concesion",
    },
    {
      time: "22:40",
      text: "Cambio de turno en la obra. Saúl firma la primera ronda; Marcelo sube a la grúa.",
      isPublic: true,
    },
    {
      time: "23:05",
      text: "La cámara del peaje registra el auto gris de Renato pasando hacia la obra, en sentido contrario a la reunión.",
      revealedByClueKey: "auto-renato",
    },
    {
      time: "23:10-23:20",
      text: "La torre de iluminación queda apagada por el cambio de lámpara: la cámara de la torre no registra señal durante diez minutos exactos.",
      revealedByClueKey: "camara-torre",
    },
    {
      time: "23:15",
      text: "La planilla de inspecciones no tiene la firma de la ronda nocturna de Saúl: la última ronda de la noche no se hizo.",
      revealedByClueKey: "planilla-inspeccion",
    },
    {
      time: "23:16",
      text: "El log de la grúa registra la movida de la viga sin permiso de maniobra cargado en el sistema.",
      revealedByClueKey: "registro-grua",
    },
    {
      time: "23:17",
      text: "La unión limada cede bajo la carga. La celosía se suelta, la línea de apoyo queda colgando y Pedro Núñez cae cuatro metros. Queda grave.",
      isPublic: true,
    },
    {
      time: "23:18",
      text: "Renato llama 'alertando' del colapso... desde dentro de la obra, diez segundos después del ruido. El registro de la torre celular lo ubica ahí desde las 23:02.",
      revealedByClueKey: "celular-renato",
    },
    {
      time: "23:40",
      text: "Los primeros peritos llegan a obra y acordonan la celosía. La hipótesis de la empresa es 'viento'. Ninguno la sostiene.",
      isPublic: true,
    },
    {
      time: "07:00",
      text: "Con la luz del día, el perito descubre el limado en tres de las seis uniones: corte a mano, marcas de lima y viruta en el hueco de la pasarela.",
      revealedByClueKey: "esparragos-limados",
    },
  ],

  deductions: [
    {
      title: "El corte fue a mano, con lima",
      text: "Tres uniones limadas, una por una, con el mismo ángulo de ataque, y la viruta en el hueco de la pasarela que nadie mira: no fue una falla de material ni un golpe. Fue trabajo de dedo y lima, hecho con calma, escondido.",
      requiredClueKeys: ["esparragos-limados", "polvo-lima"],
      order: 1,
    },
    {
      title: "La ventana del sabotaje: el apagón exacto",
      text: "La cámara de la torre de iluminación registra un hueco de señal de 23:10 a 23:20, justo el cambio de lámpara anotado en el parte. El saboteador limó en esa ventana: la única diez minutos sin ojos de toda la obra. Y la planilla de inspecciones acredita que esa noche nadie recorrió la pasarela para vérselo.",
      requiredClueKeys: ["camara-torre", "planilla-inspeccion"],
      requiredOptionKeys: ["renato_pautas"],
      order: 2,
    },
    {
      title: "Quién sabía dónde y cuándo",
      text: "Para cortar en la unión justa, con la ventana del apagón exacta y el peso de la grúa calculado, había que leer la planilla de inspección nocturna y el parte de mantenimiento de la torre. Esos papeles se manejan en la mesa de la casilla: el jefe de obra, la inspectora, el operador... y el ingeniero que firmó las pautas de inspección y venía 'de casualidad' de la reunión de la concesión.",
      requiredClueKeys: ["planilla-inspeccion", "camara-torre", "reunion-concesion"],
      requiredOptionKeys: ["saul_ev_camara", "marcelo_quien"],
      order: 3,
    },
    {
      title: "Marcelo fue el gatillo, no la causa",
      text: "El log de la grúa muestra la movida de las 23:16 sin permiso: Marcelo movió la viga e hizo ceder la unión. Pero el registro no limó nada: la traca ya estaba cortada, y una unión sana no revienta el primer día con una carga normal. Su culpa es el apuro de la obra, no el sabotaje.",
      requiredClueKeys: ["registro-grua", "esparragos-limados"],
      requiredOptionKeys: ["marcelo_ev_registro", "marcelo_ev_esparragos"],
      order: 4,
    },
    {
      title: "El 'héroe' que llegó antes de la alerta",
      text: "La cámara del peaje ubica el auto de Renato en la obra a las 23:05, y el registro de su teléfono lo posiciona dentro del predio desde las 23:02. Su llamada de 'alerta' a las 23:18 salió desde adentro: no llegó corriendo al escucharlo, ya estaba ahí esperando que la viga se moviera. El que da la alarma diez segundos después del ruido no es testigo: es parte de la escena.",
      requiredClueKeys: ["auto-renato", "celular-renato"],
      requiredOptionKeys: ["renato_ev_auto", "renato_ev_celular"],
      order: 5,
    },
    {
      title: "Los inocentes con sus fallas",
      text: "La aprobación de Ludmila sin ensayo de dureza era un error administrativo con la presión del calendario encima, no la autorización de un defecto: el acero entró sano y fue limado después. La siesta de Saúl en la casilla dejó un hueco en la inspección, pero ningún capataz que duerme dormido lima tres uniones con la torre apagada. Uno se equivocó por apuro, el otro por sueño: los dos son ruido. El que calculó todo no se equivoca de nada.",
      requiredClueKeys: ["aprobacion-esparragos", "planilla-inspeccion"],
      requiredOptionKeys: ["ludmila_ev_form", "saul_ev_planilla"],
      order: 6,
    },
  ],

  accusation: {
    motives: [
      {
        label:
          "Quería que la obra fracasara para que la concesión pasara a su empresa fantasma, su conflicto de interés",
        isCorrect: true,
      },
      { label: "Le guardaba rencor al jefe de obra Saúl por un ascenso que le negaron" },
      { label: "Temía que el atraso de la obra le costara el puesto a él antes que a Cimenta" },
      { label: "Apostaba en contra del contrato por una deuda con la empresa rival" },
    ],
    methods: [
      {
        label: "Limó las tracas de tres uniones de la celosía en la ventana de cámara apagada",
        isCorrect: true,
      },
      { label: "Aflojó las uniones con llave durante la maniobra de carga de la grúa" },
      { label: "Sustituyó los espárragos originales por otros defectuosos de una partida rechazada" },
      { label: "Cortó el cable de la grúa a control remoto para que la viga cayera sobre la junta" },
    ],
  },
};