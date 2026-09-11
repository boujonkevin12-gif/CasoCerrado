import type { CaseDef } from "./types";

/**
 * CASO 004 — El último tren
 * Dificultad: DIFÍCIL | Robo con violencia en un tren
 *
 * QUÉ OCURRIÓ REALMENTE
 * A las 23:47 el último tren de la noche, el N°37, entró a Estación Central y
 * encontraron a Gabriel Molina inconsciente en el pasillo del último vagón: le
 * robaron el teléfono. Nadie llamó a la ambulancia hasta varios minutos después
 * de que la formación se detuviera. El culpable es Martín Vega, el guardia de
 * seguridad de la estación: arrastra deudas de juego, conoce los horarios
 * muertos de las cámaras del último vagón y con su llave maestra cortó el
 * registro de cámaras durante seis minutos exactos (23:41–23:47). Golpeó a
 * Gabriel para llevarse el teléfono de alta gama y lo empeñó al día siguiente
 * con nombre falso.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Laura: mintió sobre su viaje. Dijo que fue en un tren anterior para evitar
 *   a Gabriel, pero en realidad subió al último vagón y bajó en Almagro, la
 *   estación anterior, porque no se animó a confrontarlo por el departamento
 *   que comparten. No vio el ataque.
 * - Diego: el fotógrafo estaba en el andén porque un estudio de investigación
 *   privada lo contrató para seguir a Gabriel, envuelto en una causa de
 *   sobornos. Esa es la razón de sus fotos de la puerta del último vagón. No
 *   quiso declarar el contrato por miedo a quedar pegado.
 * - Sofía: la periodista dijo que nunca llegó a hablarse con Gabriel. Es
 *   mentira: se vieron a las 23:20 en el andén y él le pasó un USB con los
 *   contratos truchos. Ocultó la reunión para proteger su fuente.
 */
export const case004: CaseDef = {
  code: "CASO-004",
  slug: "el-ultimo-tren",
  title: "El último tren",
  intro:
    "A las 23:47 el último tren de la noche entró a Estación Central y, cuando el maquinista abrió la puerta del último vagón, lo esperaba un pasajero en el suelo: Gabriel Molina, 42 años, empresario, aturdido por un golpe que no recuerda y sin el teléfono en el bolsillo. Nadie llamó a la ambulancia hasta minutos después de que el tren se detuviera, y esas cámaras del último vagón no registraron nada de lo que pasó. Cuatro personas estuvieron en el andén o en el tren esa noche y todas tienen una versión distinta de la misma hora. Una de ellas sabe exactamente lo que pasó entre las 23:41 y las 23:47.",
  scene: "tren",
  victim: { name: "Gabriel Molina", age: 42, job: "Empresario" },
  place: "Estación Central",
  timeOfCrime: "23:47",
  difficulty: "DIFICIL",
  order: 4,
  requiredLevel: 2,
  motive:
    "Martín Vega arrastraba deudas de juego que ya lo tenían ahogado, y esa noche sabía exactamente quién viajaba en el último vagón: Gabriel Molina, un empresario que siempre sacaba el mismo tren y viajaba con un teléfono de alta gama que se le había visto en el andén más de una vez. Seis minutos de cámaras muertas eran todo lo que necesitaba para pagar la quiniela y el hipódromo en una sola empresa.",
  method:
    "A las 23:41 Martín usó la llave maestra del depósito para cortar el registro de cámaras del último vagón. Entró al tren por la puerta que da al andén, golpeó a Gabriel por sorpresa en el pasillo y le robó el teléfono. a las 23:47, cuando la formación entró a Estación Central, el golpe ya estaba hecho y la cámara ya volvía a filmar. Al día siguiente empeñó el teléfono en una casa de la avenida con nombre falso.",
  resolutionText:
    "El corte de cámaras del último vagón duró exactamente seis minutos, iniciado desde la consola con la llave maestra que solo maneja el personal de seguridad: no fue un fallo del sistema, fue una llave. El libro del depósito tiene esa llave fuera de su caja justo en esa ventana, y el casillero de Martín guarda el recibo del empeño del teléfono, firmado con un nombre que no es el suyo. Las fotos del andén no mienten: a las 23:44 el guardia está junto a la puerta del último vagón, a pesar de haber declarado que su ronda corta no llegó más allá de la boca del andén. Gabriel no recuerda el golpe y solo sabe que le faltaba el teléfono: un asalto al paso que, según las cámaras, jamás ocurrió. Las deudas de juego de Martín eran de conocimiento público en la estación, y su explicación del 'pasajero mareado' es una escena armada para el expediente. Laura subió al último vagón y bajó en Almagro sin animarse a hablar con él; Diego estaba ahí cumpliendo un contrato de investigación; Sofía ocultó la reunión de las 23:20 para proteger su fuente. Los tres mintieron por miedo. Solo uno mintió para tapar un golpe.",
  xpReward: 900,
  coinReward: 450,
  guiltyKey: "martin",

  suspects: [
    {
      key: "martin",
      name: "Martín Vega",
      age: 38,
      job: "Guardia de seguridad de la estación",
      relationship: "Guardia de seguridad del turno noche",
      bio: "Diez años cuidando Estación Central, la mayoría de noche. Colabora con calma, da detalles de horarios que nadie le pidió y se pone a resguardar el expediente de las cámaras con una dedicación que llama la atención. Todo el plantel sabe que el juego lo viene comiendo los últimos dos años.",
      avatarColor: "#5a4a2a",
      alibi:
        "Declaró que entró al turno a las 22:00, que hizo una ronda corta del andén dos a las 23:30 y que volvió a la oficina de guardia hasta el quilombo del tren. El registro de cámaras y las fotos del andén cuentan una ronda más larga.",
      openingStatement:
        "Ya veo la cara con la que me miran: el guardia que roba en su propia estación. Diez años acá adentro. Pregunte nomás... yo no soy el que le sacó el celular a nadie, pero conozco cada minuto de esa noche.",
      isGuilty: true,
      order: 1,
    },
    {
      key: "laura",
      name: "Laura Ferreyra",
      age: 31,
      job: "Abogada",
      relationship: "Ex pareja de Gabriel, abogada",
      bio: "Tres años con Gabriel y una separación que terminó en papeles de abogado: el departamento que compraron a medias sigue sin escriturar y ella, justamente abogada, no quiere que la causa se mezcle con el bolsillo. Dice que viajó en un tren anterior para no cruzárselo. El registro de pasajeros del N°37 la pone en el último vagón.",
      avatarColor: "#4a3a5a",
      alibi:
        "Sostiene que viajó a las 23:15, dos servicios antes del último, para no encontrarse con Gabriel. Su boleto es verdadero... y no alcanza para sacarla del andén donde el tren N°37 registró a una pasajera que coincide con su descripción.",
      openingStatement:
        "Van a querer encajarme la ex mujer despechada que lo siguió por el andén. Nos separamos con abogados, no con gritos. Yo viajé antes que él para no cruzarlo, y eso se puede comprobar.",
      order: 2,
    },
    {
      key: "diego",
      name: "Diego Rotundo",
      age: 27,
      job: "Fotógrafo",
      relationship: "Fotógrafo freelance, testigo del andén",
      bio: "Cámara y trípode, un proyecto de 'series de estaciones nocturnas' y demasiada plata encima para un fotógrafo que nunca muestra su portfolio. Las fotos que sacó esa noche dan la hora exacta del tren... y a él ni le tiembla el pulso cuando las revisan.",
      avatarColor: "#2a4a6a",
      alibi:
        "Dijo que estaba en el andén haciendo fotografía documental de estaciones vacías. La carpeta que dejó en el banco y el contenido de la memoria de cámara cuentan la historia de un encargo, no de un proyecto artístico.",
      openingStatement:
        "Esa noche trabajé en el andén: fotos, trípode, esperando que el último tren llegara y el andén se quedara vacío. Lo que salió en esas fotos, lo entrego yo mismo. No tengo problema en que las vean.",
      order: 3,
    },
    {
      key: "sofia",
      name: "Sofía Ríos",
      age: 35,
      job: "Periodista",
      relationship: "Periodista de investigación",
      bio: "Firma 'S. Ríos' en un suplemento de investigación: cubre sobornos urbanos desde hace seis años. Dice que esa noche solo pasó por la estación de casualidad, y el pendrive que llevaba en la cartera contradice la mitad de lo que declara.",
      avatarColor: "#3a4a5a",
      alibi:
        "Declaró que nunca se vio con Gabriel esa noche y que pasó por el andén de casualidad. Un pendrive con contratos de su empresa y la agenda de la víctima arman otro escenario.",
      openingStatement:
        "Periodista de investigación: yo no entrego fuentes ni material a una causa sin antes cruzar mis notas. Si hablamos, hablamos con las reglas claras.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "estacion",
      name: "Vestíbulo de Estación Central",
      description:
        "El hall frío de las 23:00: la boletería cerrada, la mesa de objetos perdidos con una lámpara encendida y el cartel luminoso del último tren. Nadie recuerda haber visto nada raro hasta la corrida hacia el andén tres.",
      order: 1,
      actions: [
        {
          label: "Pedir el registro de boletos vendidos en la boletería",
          resultText:
            "La ventanilla guarda la lista del día: un boleto a nombre de Laura Ferreyra, comprado a las 23:15, dos servicios antes que el último tren. El billete tiene el sello de la validadora de ese tren anterior: es genuino.",
          clueKey: "boleto-laura",
          order: 1,
        },
        {
          label: "Revisar la mesa de objetos perdidos del turno noche",
          resultText:
            "Nada de esa noche: un paraguas inglés, una bufanda y un solo zapato bajo el mostrador. El encargado jura que el teléfono de Gabriel nunca pasó por ahí.",
          order: 2,
        },
        {
          label: "Preguntar al personal cuándo llegó el pedido de ambulancia",
          resultText:
            "'El tren llegó a las 23:47 y el auxilio se pidió recién pasada la medianoche', dice el boletero. 'Unos diez minutos mirando al tipo tirado antes de que a alguien se le ocurriera llamar.'",
          order: 3,
        },
      ],
    },
    {
      key: "vagon",
      name: "Último vagón del tren N°37",
      description:
        "El vagón quedó retenido para la pericia: pasillo angosto, asientos de dos plazas, el olor a metal y asiento de tela. Gabriel cayó a un costado del pasillo, cerca de la puerta del andén, y perdió el teléfono sin recordar el resto.",
      order: 2,
      actions: [
        {
          label: "Examinar la mancha del pasillo",
          resultText:
            "Una mancha de sangre seca en la chapa del pasillo, cerca de la puerta del andén, a la altura de la cabeza de un hombre caído. No es un rasguño de flete: es el impacto de un golpe.",
          clueKey: "mancha-sangre",
          order: 1,
        },
        {
          label: "Espolvorear el piso por huellas de calzado",
          resultText:
            "Entre las huellas del pasillo hay una que repite: una bota de seguridad con la suela de goma acanalada típica del personal de estación. Deja rastros desde la puerta hasta donde cayó Gabriel.",
          clueKey: "huella-bota",
          order: 2,
        },
        {
          label: "Revisar la campera de Gabriel en el asiento",
          resultText:
            "En el bolsillo interno de la campera hay una agenda. El apunte de la última página dice, con letra apurada: 'S. Ríos — 23:30 — andén, sobre los contratos'.",
          clueKey: "nota-sofia",
          order: 3,
        },
      ],
    },
    {
      key: "anden",
      name: "Andén 3",
      description:
        "El andén del último tren: bancos de madera, rejillas de desagüe y la franja amarilla donde nadie se para. A esta hora, la quietud es tan espesa que una conversación se escucha de punta a punta.",
      order: 3,
      actions: [
        {
          label: "Revisar el desagüe junto al andén",
          resultText:
            "En la rejilla del desagüe, una tarjeta SIM recién tirada, intacta. Gabriel no tenía señal en el bolsillo al llegar al hospital: alguien sacó la SIM del teléfono robado y la descartó con apuro.",
          clueKey: "sim-descartada",
          order: 1,
        },
        {
          label: "Leer el registro de pasajeros del tren N°37",
          resultText:
            "El último tren viajó casi vacío. Entre los datos del controlador figura un pasajero sin validar y una anomalía: 'pasajera, fila 12, sin boleto válido'. La descripción que dejó el controlador: mujer de 30 a 35, pelo largo, cargando un portafolios. Coincide con Laura Ferreyra.",
          clueKey: "pasajera-37",
          order: 2,
        },
        {
          label: "Buscar en el borde del andén la memoria de cámara",
          resultText:
            "Entre la rejilla y el borde, una tarjeta de memoria de cámara tirada. Adentro hay una secuencia completa del andén noche: la puerta del último vagón, el tren llegando y una figura con chaleco de seguridad parada junto a la puerta a las 23:44.",
          clueKey: "fotos-diego",
          order: 3,
        },
        {
          label: "Revisar la carpeta olvidada en el banco",
          resultText:
            "Un folio de fotógrafo sin nombre apoya en el banco del andén. Adentro, un contrato entre Diego Rotundo y un estudio de investigación privada: seguimiento del señor Gabriel Molina, vinculado a una causa por sobornos. Pagos semanales y copia de la nota de encargo.",
          clueKey: "contrato-diego",
          order: 4,
        },
      ],
    },
    {
      key: "oficina-guardia",
      name: "Oficina de guardia y depósito",
      description:
        "Detrás del vestíbulo, la oficina donde se vigilan las cámaras de toda la estación: monitores apilados, el libro de llaves del depósito y los casilleros del personal de seguridad. El lugar donde la noche del N°37 debería haber estado filmada y quedó en negro.",
      order: 4,
      actions: [
        {
          label: "Abrir la consola de cámaras y su registro de cortes",
          resultText:
            "El sistema guarda cada corte de la noche. Además de las fallas técnicas programadas, hay un corte MÁS: las cámaras del último vagón quedaron sin señal entre las 23:41 y las 23:47, seis minutos exactos, iniciado desde la consola con llave maestra.",
          clueKey: "corte-camaras",
          order: 1,
        },
        {
          label: "Revisar el libro de llaves del depósito",
          resultText:
            "El libro registra la salida y la devolución de la llave maestra del juego de cámaras. En la columna del turno noche figura fuera de la caja entre las 23:20 y las 23:55, sin nombre y sin firma en la devolución.",
          clueKey: "llave-faltante",
          order: 2,
        },
        {
          label: "Abrir el casillero de Martín",
          resultText:
            "Entre las planillas y el termo, un recibo de una casa de empeño de la avenida: un teléfono de alta gama, ingresado al mediodía del día siguiente, a nombre de 'M. Vidal'. El apellido no coincide con el del guardia; el casillero sí.",
          clueKey: "recibo-empeno",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "mancha-sangre",
      title: "Mancha de sangre en el pasillo",
      description:
        "Sangre seca en la chapa del pasillo del último vagón, a la altura de un hombre caído. El golpe se dio ahí, cerca de la puerta del andén, y no fue un accidente de la formación.",
      icon: "Droplet",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "vagon",
    },
    {
      key: "huella-bota",
      title: "Huella de bota de seguridad",
      description:
        "Una huella que se repite entre la puerta del andén y el lugar donde cayó Gabriel: bota de seguridad con suela de goma acanalada, del tipo que usa el personal de la estación.",
      icon: "Footprints",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "vagon",
      implicatesSuspectKey: "martin",
    },
    {
      key: "boleto-laura",
      title: "Boleto de Laura de las 23:15",
      description:
        "Un boleto a nombre de Laura Ferreyra, comprado a las 23:15 en la boletería: dos servicios antes del último tren. El sello de la validadora confirma que viajó en ESE tren anterior. Es genuino... y no la saca del andén.",
      icon: "Ticket",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "estacion",
    },
    {
      key: "sim-descartada",
      title: "SIM descartada en el desagüe",
      description:
        "La tarjeta SIM del teléfono de Gabriel apareció tirada en la rejilla del desagüe del andén, intacta. El que robó el teléfono la sacó ahí mismo, con apuro, para no ser rastreado.",
      icon: "Smartphone",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "anden",
    },
    {
      key: "nota-sofia",
      title: "La nota 'S. Ríos — 23:30'",
      description:
        "La última página de la agenda de Gabriel: 'S. Ríos — 23:30 — andén, sobre los contratos', escrita con apuro el mismo día. Sofía Ríos declara que nunca se vieron.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "BAJA",
      locationKey: "vagon",
    },
    {
      key: "llave-faltante",
      title: "Llave maestra fuera de la caja",
      description:
        "El libro del depósito registra la llave maestra de cámaras fuera de su caja entre las 23:20 y las 23:55, sin firma de devolución. Alguien del personal la usó el tiempo exacto del corte.",
      icon: "KeyRound",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "oficina-guardia",
      implicatesSuspectKey: "martin",
    },
    {
      key: "corte-camaras",
      title: "Corte de cámaras de las 23:41",
      description:
        "Más allá de las fallas técnicas programadas, el sistema registra un corte manual de seis minutos exactos en las cámaras del último vagón: de las 23:41 a las 23:47, iniciado desde la consola con llave maestra. La noche del N°37 quedó en negro a propósito.",
      icon: "Video",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "oficina-guardia",
      implicatesSuspectKey: "martin",
    },
    {
      key: "recibo-empeno",
      title: "Recibo del empeño del teléfono",
      description:
        "Un recibo de una casa de empeño de la avenida por un teléfono de alta gama, ingresado al mediodía siguiente al ataque, a nombre de 'M. Vidal'. Está en el casillero de Martín, sin explicación posible.",
      icon: "Receipt",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "oficina-guardia",
      implicatesSuspectKey: "martin",
    },
    {
      key: "fotos-diego",
      title: "Fotos del andén: el guardia a las 23:44",
      description:
        "La secuencia de fotos del andén tiene hora a hora: a las 23:44 el guardia de seguridad está parado junto a la puerta del último vagón. Declaró que su ronda corta no llegó más allá de la boca del andén esa noche.",
      icon: "Camera",
      type: "DIGITAL",
      importance: "CLAVE",
      locationKey: "anden",
      implicatesSuspectKey: "martin",
    },
    {
      key: "pasajera-37",
      title: "Pasajera sin boleto en el N°37",
      description:
        "El registro del tren N°37 lista una anomalía: 'pasajera, fila 12, sin boleto válido'. La descripción del controlador coincide con Laura: mujer de 30 a 35, pelo largo, portafolios. Subió al último vagón sin haber pagado para ese tren.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "anden",
      implicatesSuspectKey: "laura",
    },
    {
      key: "usb-sofia",
      title: "Pendrive con los contratos",
      description:
        "Un pendrive con copias de los contratos de la empresa de Gabriel: sobreprecios, pagos a testaferros y los papeles de la causa por sobornos. Estaba en la cartera de Sofía y ella juró que no se había visto con él esa noche.",
      icon: "FileText",
      type: "DIGITAL",
      importance: "MEDIA",
      implicatesSuspectKey: "sofia",
    },
    {
      key: "contrato-diego",
      title: "El contrato de Diego con la agencia",
      description:
        "Un contrato entre Diego y un estudio de investigación privada: seguimiento de Gabriel Molina por una causa de sobornos, con pagos semanales. El 'proyecto documental' de Diego era encargo, no arte.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "anden",
      implicatesSuspectKey: "diego",
    },
  ],

  dialogues: [
    // ---------------- MARTÍN ----------------
    {
      suspectKey: "martin",
      question: "Ya los vi: el guardia que conoce los horarios de las cámaras es el sospechoso de siempre. Yo cuido esta estación hace diez años y conozco cada minuto de esa noche.",
      order: 1,
      options: [
        {
          key: "martin_turno",
          label: "Contame tu turno de anoche, de punta a punta.",
          responseText:
            "Entré a las 22:00, de punta a punta. Cargué el registro, miré los monitores. A las 23:30 hice la ronda corta del andén dos, hasta la boca nomas, y volví a la oficina. Ahí me quedé sentado con el termo hasta que la formación llegó y se armó el quilombo.",
        },
        {
          key: "martin_ronda",
          label: "¿Tan corta la ronda? ¿Y el último vagón?",
          requiresOptionKey: "martin_turno",
          responseText:
            "El último vagón tiene un punto ciego de cámaras desde antes de mi turno, todo el plantel lo sabe: se corta solo cuando no andan los renovadores. La ronda de las 23:30 la hice hasta la boca del andén dos y volví. No llegué a subir a ningún tren.",
        },
        {
          key: "martin_ev_fotos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la foto del guardia junto a la puerta del vagón a las 23:44",
          requiresClueKey: "fotos-diego",
          responseText:
            "...está bien, esa parte no la dije. Fui a cerrar la puerta del último vagón: el tren llegaba tarde y el maquinista la había dejado entreabierta en la estación anterior. Bajé a las 23:40, la trabé y de paso vi a un pasajero mareado en el pasillo, no le di importancia. A las 23:44 estaba ahí, sí. La oficina me queda a dos minutos y la ronda se me hizo larga por eso.",
        },
        {
          key: "martin_ev_corte",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el corte de cámaras de las 23:41 a las 23:47",
          requiresClueKey: "corte-camaras",
          responseText:
            "Ese registro lo maneja la consola maestra del depósito, no la oficina. Yo no la toqué: esos cortes los hace el de seguridad técnica cuando cambian los renovadores, yo solo miro los monitores. Si el sistema marcó un corte a mi nombre, marca mal.",
        },
      ],
    },
    {
      suspectKey: "martin",
      question: "Yo no escondo lo que soy. Con el sueldo de guardia no se aguanta un año de quiniela, y esa parte de mi vida la conoce toda la estación.",
      order: 2,
      options: [
        {
          key: "martin_deudas",
          label: "Todo el barrio habla de tus deudas de juego.",
          responseText:
            "Cierto, y no me hago el santo: juego al hipódromo y a la quiniela, y debo. Debo plata, no le debo explicaciones a nadie de esta estación. Deber no es lo mismo que andar robando pasajeros de tren.",
        },
        {
          key: "martin_llave",
          label: "La llave maestra de cámaras: ¿quién la maneja?",
          requiresOptionKey: "martin_deudas",
          responseText:
            "El registro de llaves es un desastre: la llave duerme en el cajón del depósito sin cuadrarla y cualquiera que conoce los casilleros la saca y la devuelve. Yo la conozco, claro, es mi oficio. Pero conocer la puerta no es abrirla.",
        },
        {
          key: "martin_ev_llave",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la llave maestra fuera de la caja entre las 23:20 y las 23:55",
          requiresClueKey: "llave-faltante",
          responseText:
            "Si el libro dice que la llave salió sin firma, es exactamente el desastre que te cuento: sale y entra sin control. Yo no la saqué, y si la sacó otro justo a esa hora, es porque me quieren enmarcar a mí con mi propio compañero.",
        },
        {
          key: "martin_ev_recibo",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el recibo del teléfono empeñado en tu casillero",
          requiresClueKey: "recibo-empeno",
          responseText:
            "Eso no lo vi en mi vida. Alguien lo metió ahí: mi casillero tiene la chapa corrida y lo saben los del turno. ¿Empeñar un teléfono de alta gama con nombre falso para pagar quiniela? Si empeñara algo, empeñaría el termo.",
        },
      ],
    },

    // ---------------- LAURA ----------------
    {
      suspectKey: "laura",
      question: "Ya me vieron como la ex mujer que lo siguió por el andén. La verdad es más simple: yo viajé antes para no cruzarlo, y eso se puede comprobar.",
      order: 1,
      options: [
        {
          key: "laura_tren",
          label: "¿En qué tren viajaste anoche?",
          responseText:
            "A las 23:15, dos servicios antes del último. Saqué el boleto en la ventanilla, viajé leyendo un expediente y bajé en Central. No vi a Gabriel, no lo busqué y no subí a ese tren. Pregúntenle al boletero si quiere, me conoce de años.",
        },
        {
          key: "laura_ev_boleto",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu boleto de las 23:15",
          requiresClueKey: "boleto-laura",
          responseText:
            "Es mi boleto, comprado en ventanilla, dos trenes antes que el último, con el sello de la validadora de ese tren. Eso es lo que digo: yo no estaba en el último vagón. El papel habla por mí.",
        },
        {
          key: "laura_ev_pasajera",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el registro del N°37 con una pasajera en fila 12 sin boleto",
          requiresClueKey: "pasajera-37",
          responseText:
            "...el registro puede decir lo que diga, pero lo que pasó fue así. Subí al último vagón con intención de hablarle, por el departamento, y cuando lo vi sentado no pude: me bajé en Almagro, la estación anterior. No subí a hablarle a Central. No vi ningún ataque: cuando el tren llegó a destino, yo ya estaba yendo en la otra dirección.",
        },
        {
          key: "laura_bajada",
          label: "¿Por qué lo seguiste si venías por el departamento y no por él?",
          requiresOptionKey: "laura_ev_pasajera",
          responseText:
            "Porque soy una cobarde, ¿está bien? Llevaba tres semanas armando la charla de la propiedad y cuando lo tuve a un vagón de distancia me congelé. La discusión por ese departamento me estaba destruyendo y no tuve el coraje de encararlo de frente.",
        },
      ],
    },
    {
      suspectKey: "laura",
      question: "El departamento que compramos a medias era el único vínculo que nos quedaba intacto... y el más grande que teníamos.",
      order: 2,
      options: [
        {
          key: "laura_departamento",
          label: "¿Qué había entre Gabriel y vos por el departamento?",
          responseText:
            "Comprábamos un dos ambientes a medias y nos separamos antes de escriturar. Yo quería vender y él quería quedarse con todo; él me ofreció quedarse con mi parte pagándome de menos. Abogados de por medio, telegramas, amenazas por escrito. La típica separación de bienes que termina en juicio.",
        },
        {
          key: "laura_discusion",
          label: "Dijeron que la discusión fue fuerte.",
          requiresOptionKey: "laura_departamento",
          responseText:
            "Discutimos feo, una semana antes, en el departamento vacío. Yo le tiré el telegrama y él me dijo que me iba a 'arreglar por la vía legal'. Esa noche pensé en hablarle para bajar el tono... y no pude. Pensar en hacerlo y hacerlo no es lo mismo: yo no lo esperé.",
        },
        {
          key: "laura_esperar",
          label: "¿Llegaste a esperarlo en la estación?",
          responseText:
            "No. Esperar a alguien para pelear es de obsesiva, y yo no soy así. Yo subí al vagón para hablarle y me bajé a mitad de camino porque no tuve el valor. Confundir el miedo con un plan es el error más caro de esta causa.",
        },
      ],
    },

    // ---------------- DIEGO ----------------
    {
      suspectKey: "diego",
      question: "Yo estaba en el andén por un laburo mío: una serie de estaciones vacías, fotografía documental de noche. Eso es todo.",
      order: 1,
      options: [
        {
          key: "diego_proyecto",
          label: "¿Qué proyecto nocturno te tenía en el andén?",
          responseText:
            "Una serie de estaciones abandonadas a medianoche: luces, carteles, sombras. Estuve un rato largo con el trípode esperando que el andén quedara limpio. El último tren llega a las 23:47 y después viene el silencio: esa es la foto que buscaba.",
        },
        {
          key: "diego_ev_contrato",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la carpeta con tu contrato de investigación privada",
          requiresClueKey: "contrato-diego",
          responseText:
            "...no es un proyecto documental, no del todo. Un estudio de investigación privada me paga para seguir a Gabriel Molina: fotos de la puerta del último vagón, quién se juntaba con él, a qué hora viajaba. No soy policía ni soy nada: un fotógrafo freelance al que le pagan por mirar. No lo dije porque el contrato me pega en una causa de sobornos.",
        },
        {
          key: "diego_causa",
          label: "¿Qué causa de sobornos?",
          requiresOptionKey: "diego_ev_contrato",
          responseText:
            "Gabriel estaba en el medio de una causa por sobornos en su empresa: contratos truchos, pagos a testaferros. La agencia quería material de sus movimientos de noche, sobre todo de los últimos días. Justo a esa hora, el último vagón, la puerta del andén: me pagaron para estar mirando exactamente ahí.",
        },
      ],
    },
    {
      suspectKey: "diego",
      question: "Si te soy sincero, la noche del andén el único que estuvo raro fue el guardia. Y a él no lo contrataron para fotografiarlo.",
      order: 2,
      options: [
        {
          key: "diego_guardia",
          label: "¿Viste a alguien cerca del último vagón?",
          responseText:
            "Al guardia de seguridad, dos veces. La primera como a las 23:40, parado mirando hacia el andén con el casco puesto. La segunda a las 23:44, de espaldas a la puerta del último vagón, como si acabara de salir de adentro. A esa hora nadie se acerca a la puerta sin motivo.",
        },
        {
          key: "diego_ev_fotos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la foto del guardia a las 23:44",
          requiresClueKey: "fotos-diego",
          responseText:
            "Es la hora que tiene la cámara grabada en la memoria: 23:44, el guardia junto a la puerta del último vagón. Me pidió que no lo fotografiara y le saqué la secuencia igual: los tipos que andan con llave no quieren salir en el expediente.",
        },
        {
          key: "diego_tren",
          label: "¿Y cuando llegó el tren?",
          responseText:
            "Llegó puntual a las 23:47. El guardia ya no estaba: se había ido hacia la oficina en cuanto silbó la formación a lo lejos. Después la puerta quedó abierta y alguien empezó a gritar desde adentro. De ahí en más, todos miraron lo mismo: un tipo tirado en el pasillo.",
        },
      ],
    },

    // ---------------- SOFÍA ----------------
    {
      suspectKey: "sofia",
      question: "Yo no voy a hablar mal de un muerto. Pero a Gabriel no lo vi esa noche, y punto.",
      order: 1,
      options: [
        {
          key: "sofia_reunion",
          label: "¿Coincidiste con Gabriel en la estación?",
          responseText:
            "No. No nos vimos. Yo estaba cubriendo otra nota y pasé por el andén de casualidad, de paso. Cuando encontraron el cuerpo me enteré como todos, por el ruido de la ambulancia.",
        },
        {
          key: "sofia_cartera",
          kind: "CONTINUAR",
          label: "¿Me dejás revisar tu cartera antes de seguir?",
          requiresOptionKey: "sofia_reunion",
          unlocksClueKey: "usb-sofia",
          responseText:
            "...está bien, miren lo que tengan que mirar. Ahí adentro hay algo que no tendría que estar: un pendrive. Saquenlo y lo abrimos juntos, pero no me van a sacar el nombre del que me lo dio así nomás.",
        },
        {
          key: "sofia_ev_usb",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el pendrive con los contratos",
          requiresClueKey: "usb-sofia",
          responseText:
            "Mierda. Está bien: nos vimos. Ese pendrive me lo pasó Gabriel a las 23:20 en el andén, me pidió que no publicara nada hasta contarme su versión, y yo se lo prometí. Después me fui. A las 23:30 ya estaba saliendo por el hall, antes de cualquier ataque.",
        },
      ],
    },
    {
      suspectKey: "sofia",
      question: "La agenda de Gabriel tiene un apunte con mi nombre y una hora. No lo voy a confirmar ni a negar sin cruzar antes mis propias notas.",
      order: 2,
      options: [
        {
          key: "sofia_ev_nota",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la nota 'S. Ríos — 23:30 — andén'",
          requiresClueKey: "nota-sofia",
          responseText:
            "S. Ríos soy yo, sí. '23:30, andén, sobre los contratos': Gabriel me citó para entregarme algo que no quería mandar por otra vía. Los contratos de su propia empresa, los que iba a denunciar a su manera.",
        },
        {
          key: "sofia_contratos",
          label: "¿Qué hay en esos contratos?",
          requiresOptionKey: "sofia_ev_usb",
          responseText:
            "Sobornos: sobreprecios, testaferros, pagos por contratos truchos de su empresa. Gabriel quería contarlo todo él primero, a su manera, y que yo publicara después con el material en la mano. Iba a entregarse la causa de sobornos con nombre y apellido.",
        },
        {
          key: "sofia_antes",
          label: "¿Y por qué te fuiste antes del ataque?",
          requiresOptionKey: "sofia_contratos",
          responseText:
            "Porque la reunión era a las 23:20 y duró diez minutos: me pasó el material, me pidió cautela y se fue hacia el andén. A las 23:30 yo cruzaba el hall de salida. Si yo hubiera estado cuando lo atacaron, hoy estaría muerta, o en la mira de la misma causa que él quería destapar.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "22:50",
      text: "Gabriel Molina llega a Estación Central y espera el último tren en el hall.",
      isPublic: true,
      order: 1,
    },
    {
      time: "23:20",
      text: "Sofía y Gabriel se encuentran en el andén. Él le entrega un pendrive con los contratos.",
      revealedByClueKey: "usb-sofia",
      order: 2,
    },
    {
      time: "23:30",
      text: "Sofía se retira por el hall. La reunión duró diez minutos y no volvió al andén.",
      revealedByOptionKey: "sofia_antes",
      order: 3,
    },
    {
      time: "23:35",
      text: "Gabriel sube al último vagón del tren N°37.",
      isPublic: true,
      order: 4,
    },
    {
      time: "23:41",
      text: "Las cámaras del último vagón quedan sin señal, iniciado desde la consola con llave maestra.",
      revealedByClueKey: "corte-camaras",
      order: 5,
    },
    {
      time: "23:44",
      text: "Las fotos de Diego registran al guardia de seguridad junto a la puerta del último vagón.",
      revealedByClueKey: "fotos-diego",
      order: 6,
    },
    {
      time: "23:47",
      text: "El tren N°37 llega a Estación Central y encuentran a Gabriel inconsciente en el pasillo del último vagón, sin el teléfono.",
      isPublic: true,
      order: 7,
    },
    {
      time: "23:52",
      text: "Las cámaras del último vagón vuelven a registrar imagen.",
      revealedByClueKey: "corte-camaras",
      order: 8,
    },
    {
      time: "00:05",
      text: "La ambulancia llega a Estación Central. Nadie llamó hasta minutos después del hallazgo.",
      isPublic: true,
      order: 9,
    },
  ],

  deductions: [
    {
      title: "El corte de cámaras era de adentro",
      text: "El corte de las 23:41 a las 23:47 no fue un fallo: se inició desde la consola con la llave maestra del depósito, y el libro la registra fuera de su caja justo en esa ventana. Quien estaba en el último vagón a esa hora manejaba las llaves de la estación.",
      requiredClueKeys: ["corte-camaras", "llave-faltante"],
      order: 1,
    },
    {
      title: "La ronda que no hizo",
      text: "Martín declaró que su ronda corta terminó en la boca del andén, pero la foto de Diego lo tiene parado junto a la puerta del último vagón a las 23:44, tres minutos después del corte de cámaras. Su explicación del 'pasajero mareado' puede ser o no verdadera: lo cierto es que estaba donde dijo que no estuvo.",
      requiredClueKeys: ["fotos-diego", "corte-camaras"],
      requiredOptionKeys: ["martin_ev_fotos"],
      order: 2,
    },
    {
      title: "El botín y el móvil",
      text: "Las deudas de juego de Martín eran públicas, el teléfono de alta gama de Gabriel desapareció del vagón y el recibo del empeño a nombre falso apareció en su casillero. El móvil estaba en el bolsillo de la víctima; el botín, en la avenida al mediodía siguiente.",
      requiredClueKeys: ["recibo-empeno", "corte-camaras"],
      requiredOptionKeys: ["martin_deudas"],
      order: 3,
    },
    {
      title: "La mentira con explicación inocente",
      text: "El boleto de Laura es verdadero y de dos trenes antes, pero el registro del N°37 la coloca en el último vagón sin boleto válido. Subió para enfrentar a Gabriel y se bajó en Almagro sin animarse. Es una mentira fea con cara humana: miedo, no un ataque. Nadie la vio en Central a las 23:47.",
      requiredClueKeys: ["boleto-laura", "pasajera-37"],
      requiredOptionKeys: ["laura_ev_pasajera"],
      order: 4,
    },
    {
      title: "La fuente estaba ahí y se fue",
      text: "La nota de la agenda y el pendrive prueban que Sofía se vio con Gabriel a las 23:20, media hora antes del ataque. Ocultó la reunión para proteger una fuente y un material explosivo, y se retiró a las 23:30. Su secreto es profesional, no criminal.",
      requiredClueKeys: ["usb-sofia", "nota-sofia"],
      requiredOptionKeys: ["sofia_ev_usb", "sofia_contratos"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      {
        label:
          "Necesitaba el dinero para pagar sus deudas de juego y sabía que Gabriel viajaba con un teléfono caro",
        isCorrect: true,
        order: 1,
      },
      {
        label:
          "Gabriel lo descubrió con el celular en el barrio y amenazó con denunciarlo en la empresa de seguridad",
        order: 2,
      },
      {
        label:
          "Trabajaba para el estudio que seguía a Gabriel y cobraba por cada foto y cada dato del andén",
        order: 3,
      },
      {
        label:
          "Le tenía bronca de años por un accidente en la estación que él nunca denunció",
        order: 4,
      },
    ],
    methods: [
      {
        label:
          "Cortó las cámaras con su llave maestra seis minutos, lo golpeó por sorpresa y empeñó el teléfono al día siguiente",
        isCorrect: true,
        order: 1,
      },
      {
        label:
          "Lo esperó en la boca del andén y lo empujó bajo la formación cuando entraba el tren",
        order: 2,
      },
      {
        label:
          "Lo drogó en el vagón y simuló un asalto para desviar la atención del pendrive con los contratos",
        order: 3,
      },
      {
        label:
          "Lo golpeó en el vestíbulo y lo arrastró hasta el último vagón para que pareciera un robo al paso",
        order: 4,
      },
    ],
  },
};