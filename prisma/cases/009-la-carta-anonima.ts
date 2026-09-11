import type { CaseDef } from "./types";

/**
 * CASO 009 — La carta anónima
 * Dificultad: FÁCIL | Extorsión contra el presidente de una cooperativa
 *
 * QUÉ OCURRIÓ REALMENTE
 * Silvio Roldán, presidente de la cooperativa de vivienda "Alma Azul", recibe
 * cartas anónimas que amenazan con revelar que infló los costos de las obras.
 * El dato es VERDADERO: Roldán infló un 20% los costos durante dos años.
 * El chantajista es MARTA PELLIZA, la secretaria administrativa. Su hijo perdió
 * un ascenso que Roldán bloqueó y ella decidió vengarse exponiéndolo. Imprimía
 * las cartas en la impresora de la oficina (de madrugada, con su código de
 * usuario), imitaba la letra con un espejo para la 'e' y las mandaba desde el
 * correo de la esquina, a dos cuadras, para que el matasellos no delatara el
 * buzón interno.
 *
 * QUÉ NO ES CRIMEN: el chantaje existe pero el chantajista no es quien más lo
 * parece. Roldán SÍ infló los costos: esa es la verdad que sale a la luz, y por
 * eso el caso 'de un lado del acusador' se da vuelta.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Dino: tesorero. Sabía de la inflación de costos y se calló porque Roldán le
 *   dio un préstamo. Aterrorizado de que lo destapen, pero inocente de las cartas.
 * - Teo: hijo del portero, el bromista. La PRIMERA carta fue una broma suya que
 *   imitó el formato. La tercera (el chantaje real) no es de él. Hay dos autores.
 * - Rodas: abogado de la cooperativa. Sabía la verdad de los costos por los
 *   contratos que él mismo redactó y la calló para proteger al presidente.
 */
export const case009: CaseDef = {
  code: "CASO-009",
  slug: "la-carta-anonima",
  title: "La carta anónima",
  intro:
    "Tres cartas llegaron a la sede de la cooperativa Alma Azul en una semana. La primera pudo ser un chiste de mal gusto; la tercera ya no. 'Sé lo de los costos de obra. Los socios van a saber que inflaste los números. Vamos a arreglar esto o la cooperativa entera va a reventar.' Silvio Roldán, presidente desde hace quince años, tembló al recibirla y hoy no da la cara. Lo raro: quien manda las cartas parece conocer el funcionamiento de la sede al detalle, y las cartas llegan de un correo de la esquina que nadie de la cooperativa usa. Hay una verdad bajo las amenazas y dos manos escribiendo. Una sola mano quiere el poder.",
  scene: "oficina",
  victim: {
    name: "Silvio Roldán",
    age: 58,
    job: "Presidente de la cooperativa de vivienda 'Alma Azul'",
  },
  place: "Sede de la cooperativa Alma Azul",
  timeOfCrime: "09:15",
  difficulty: "FACIL",
  order: 9,
  requiredLevel: 1,
  motive:
    "Marta Pelliza, secretaria administrativa, tenía un motivo personal: su hijo perdió el ascenso que Roldán bloqueó en la gerencia de proyectos y ella decidió vengarse exponiéndolo. Con el expediente de costos en la mano, descubrió que la amenaza tenía base real y la usó: no pedía plata, pedía que la verdad saliera a la luz para hundir al presidente.",
  method:
    "Marta imprimía las cartas en la impresora de la oficina de madrugada, con su propio código de usuario, imitando la letra de Roldán con un espejo en la 'e'. Las escribía en papel del talonario interno y las mandaba desde el correo de la esquina, a dos cuadras de la sede, para que el matasellos no delatara el buzón del edificio.",
  resolutionText:
    "El papel de la tercera carta es del talonario interno de la cooperativa, con la marca de agua de la impresora de recepción. El log de impresiones de madrugada registra un tiraje con el código de usuario de administración —Marta— la noche anterior a cada carta. La letra imita la de Roldán pero falla en la 'e': una letra copiada con espejo, no escrita de puño. El matasellos dice correo de la esquina, a dos cuadras: quien la mandó salió a propósito para no tocar el buzón interno. Y la agenda de turnos de Marta guarda la anotación 'carta a Roldán, correo 08:40' con el borrador del sobre. La primera carta la hizo Teo como broma —su carpeta de recortes y el marcador grueso lo confirman—, pero la tercera es de otra mano, paciente y aduladora. El expediente de costos confirma lo que las cartas denuncian: Roldán infló los costos un 20% durante dos años, con sobrefacturación de la ferretería Fénix, el negocio de su cuñado. Silvio no era un santo, pero el chantaje es un delito, y quien lo montó sabía exactamente qué había en ese expediente y en esa agenda de turnos: la secretaria administrativa, Marta Pelliza. Dino se calló por un préstamo, Rodas por lealtad y Teo por una broma; ninguno imprimió de madrugada.",
  xpReward: 450,
  coinReward: 200,
  guiltyKey: "marta",

  suspects: [
    {
      key: "marta",
      name: "Marta Pelliza",
      age: 51,
      job: "Secretaria administrativa",
      relationship: "Administra recepción, impresora y agenda de turnos",
      bio: "Impecable, puntual, la primera que llegó a mirar el cuerpo... perdón, a mirar las cartas. Se apena con el presidente como nadie y hasta se 'autocritica': fue ella quien le sugirió a Roldán chequear los costos de obra. La empatía le sale tan prolija que parece calcada.",
      avatarColor: "#5a3a4a",
      alibi: "Dice que el día de la tercera carta salió a las 18:30 y que las noches de la semana se fue a su casa, 'sin excepciones'. No se le mueve un pelo de la cola.",
      openingStatement:
        "Lo que están haciendo con el presidente es horrible: alguien lo está tirando al barro por una gestión de años. Yo misma le sugerí chequear los costos, para que quede todo limpio. Que no me acusen a mí por laburar bien.",
      order: 1,
    },
    {
      key: "dino",
      name: "Dino Ferreyra",
      age: 48,
      job: "Tesorero",
      relationship: "Manejaba los pliegos y los cierres de obra",
      bio: "El hombre de los balances de la cooperativa. Suda cuando alguien nombra 'Fénix' y cambia de tema cuando se habla del préstamo que Roldán le dio hace dos años. Sabe algo que no lo deja dormir, y no son las cartas.",
      avatarColor: "#3a5a4a",
      alibi: "Estuvo en la sede hasta las 23:00 los días de las cartas, 'cerrando números'. Nadie más que el portero lo puede confirmar.",
      openingStatement:
        "Yo cierro los números, no los escribo. Si el presidente está en problemas por costos, hablemos de costos: los asientos están, la plata se movió, y lo que no cierra es que venga un anónimo a hacer de juez.",
      order: 2,
    },
    {
      key: "teo",
      name: "Teo Mansilla",
      age: 19,
      job: "Hijo del portero / auxiliar",
      relationship: "Vive en el edificio, conoce cada rincón",
      bio: "El pibe de las macanas. Tiene una carpeta con recortes de prensa, un marcador grueso y un historial de 'bromas' que a nadie le hacen gracia. Cuando las cartas se volvieron serias, dejó de reírse.",
      avatarColor: "#4a5a3a",
      alibi: "El día de la tercera carta dice que estuvo en el patio desde las 21:00 'hasta tarde, mirando el club'. Nadie lo vio entrar a la sede de noche.",
      openingStatement:
        "Mire, yo hice macanas, demasiadas. Pero esto de las cartas no es una macana, es otra cosa, y ojalá que quien sea que la hizo sepa que yo no tengo nada que ver.",
      order: 3,
    },
    {
      key: "rodas",
      name: "Hernán Rodas",
      age: 62,
      job: "Abogado de la cooperativa",
      relationship: "Redactó los contratos de obra",
      bio: "Veinticinco años de asesor letrado. Sabe exactamente qué firmó, qué cifras pasaron por su escritorio y por qué no las cuestionó: porque las pasó su cliente. La toga lo hace parecer un cómplice profesional.",
      avatarColor: "#4a3a5a",
      alibi: "Dice que no pisa la sede de noche desde hace cinco años y que las cartas las leyó recién por el correo de Roldán.",
      openingStatement:
        "Yo represento a la cooperativa y a su presidente. Hay preguntas que, como abogado, sé de qué lado del silencio se contestan. Pero esta extorsión es un delito, y el derecho se pone del lado del que no teme los papeles.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "recepcion",
      name: "Recepción y administración",
      description:
        "El escritorio de Marta, la impresora multifunción y el buzón del edificio, todo en una misma olla. Es la única habitación de la sede que vive con el teléfono pegado y la puerta siempre abierta.",
      order: 1,
      actions: [
        {
          label: "Revisar la impresora de la oficina",
          resultText:
            "El papel de la bandeja tiene la marca de agua del talonario interno de Alma Azul: el mismo papel borrador de la tercera carta, con el filo gastado de la impresora. Se imprimió acá adentro, no en un locutorio.",
          clueKey: "tipo-fuente",
          order: 1,
        },
        {
          label: "Pedir el log de impresiones de la semana",
          resultText:
            "El registro muestra dos tirajes de madrugada, el lunes a las 02:10 y el miércoles a las 02:40, firmados con el código de usuario de administración. De día nadie imprime cartas: de noche, alguien usó la impresora de la oficina.",
          clueKey: "tinta-impresora",
          order: 2,
        },
        {
          label: "Revisar la agenda de turnos de la secretaria",
          resultText:
            "Entre los turnos del mes, una anotación con lapicera negra: 'carta a Roldán, correo 08:40', el día de la tercera carta. En la solapa, un borrador arrugado con la letra imitada y una 'e' dibujada varias veces, como quien practica una firma.",
          clueKey: "agenda-marta",
          order: 3,
        },
      ],
    },
    {
      key: "archivo",
      name: "Archivo de la cooperativa",
      description:
        "Estanterías metálicas con los expedientes de quince años de obras. El de costos duerme en el estante del fondo, entre cierres de obra que nadie revisó dos veces.",
      order: 2,
      actions: [
        {
          label: "Abrir el expediente de costos de obra",
          resultText:
            "Los costos de las obras grandes están inflados un veinte por ciento y eso se sostiene con sobrefacturas de la ferretería Fénix. Hay planillas dobles: una para la asamblea y otra con los números reales. El chantaje, acá, tiene base.",
          clueKey: "expediente-costos",
          order: 1,
        },
        {
          label: "Comparar las facturas de Fénix con los cierres",
          resultText:
            "Las facturas de la ferretería Fénix caen siempre en los mismos períodos que los cierres de obra, con montos que redondean y se repiten. Fénix es del cuñado de Roldán: el sobrecosto tiene nombre, apellido y lazo familiar.",
          clueKey: "contrato-fenix",
          order: 2,
        },
        {
          label: "Buscar la carpeta personal del portero",
          resultText:
            "La carpeta de Teo tiene recortes de prensa de casos de 'cartas anónimas' con la frase 'si sabés las consecuencias' subrayada con un marcador grueso. El mismo marcador aparece gastado en la mesa del acompañamiento de la puerta.",
          clueKey: "anotacion-teo",
          order: 3,
        },
      ],
    },
    {
      key: "oficina-presidente",
      name: "Oficina del presidente",
      description:
        "El escritorio de Roldán, las tres cartas en una carpeta celeste sobre la mesa y la ventana que da al patio. El presidente está del otro lado de la puerta, en silencio, contando los días.",
      order: 3,
      actions: [
        {
          label: "Examinar las tres cartas",
          resultText:
            "La primera está escrita con marcador grueso, letra de pibe, apurada. La tercera está hecha con una letra finita, paciente, que imita la letra de Roldán pero falla en las 'e': una letra copiada, con espejo o con plantilla, no del puño de nadie.",
          clueKey: "sobre-escrito",
          order: 1,
        },
        {
          label: "Revisar los sobres",
          resultText:
            "Los tres sobres están matasellados en el correo de la esquina, a dos cuadras de la sede, entre las 08:00 y las 08:50. El buzón interno de Alma Azul no procesó ninguna de las tres: alguien las llevó a propósito hasta el correo.",
          clueKey: "matasellos",
          order: 2,
        },
        {
          label: "Hablar con el presidente",
          resultText:
            "Roldán habla entrecortado, con las manos sobre la carpeta celeste. 'No sé quién es, pero no le pago. Si destapan lo de los costos... destapan lo que hay: una cooperativa que se pagó mal una obra. Yo no maté a nadie. Pero no voy a mentir y decir que no tengo miedo.'",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "tipo-fuente",
      title: "Papel de la impresora de la oficina",
      description:
        "La tercera carta está impresa en papel del talonario interno de Alma Azul, con la marca de agua de la sede y el filo gastado de la impresora multifunción de recepción. No salió de un locutorio ni de un ciber: salió de adentro del edificio.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "recepcion",
    },
    {
      key: "tinta-impresora",
      title: "Log de impresiones de madrugada",
      description:
        "Dos tirajes nocturnos, lunes 02:10 y miércoles 02:40, con el código de usuario de administración. Las cartas se imprimieron de noche, en la oficina cerrada, con la sesión de la secretaria. De día nadie imprime cartas.",
      icon: "Printer",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "recepcion",
    },
    {
      key: "matasellos",
      title: "El matasellos de los sobres",
      description:
        "Las tres cartas están mataselladas en el correo de la esquina, a dos cuadras de la sede, entre las 08:00 y las 08:50. El buzón interno de Alma Azul no se usó: quien las mandó salió a propósito para que no quedara rastro en el edificio.",
      icon: "Stamp",
      type: "DOCUMENTO",
      importance: "BAJA",
      locationKey: "oficina-presidente",
    },
    {
      key: "sobre-escrito",
      title: "La letra de la tercera carta",
      description:
        "La tercera carta imita la letra del presidente, pero falla en las 'e': una letra paciente, copiada, con espejo o plantilla. Las cartas se imitan, no se escriben del puño. La primera, en cambio, es de marcador grueso y letra de pibe.",
      icon: "PenLine",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "oficina-presidente",
    },
    {
      key: "expediente-costos",
      title: "Expediente de costos de obra",
      description:
        "Los costos inflados un veinte por ciento durante dos años, sostenidos con sobrefacturas de la ferretería Fénix y planillas dobles: una para la asamblea y otra con los números reales. El chantaje no inventa el delito: lo hace público.",
      icon: "Receipt",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "archivo",
    },
    {
      key: "contrato-fenix",
      title: "Contratos con la ferretería Fénix",
      description:
        "Las facturas de Fénix caen siempre en los mismos períodos que los cierres de obra, con montos que se repiten. Fénix pertenece al cuñado de Roldán: el sobrecosto tiene nombre y apellido, y ahora también un lazo incómodo para el presidente.",
      icon: "FileSignature",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "archivo",
    },
    {
      key: "anotacion-teo",
      title: "La carpeta de Teo",
      description:
        "Recortes de prensa de 'cartas anónimas' y la frase 'si sabés las consecuencias' subrayada con un marcador grueso. La primera carta salió de esta carpeta: fue una broma de pibe que imitó el formato. Las otras dos, no.",
      icon: "BookOpen",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "archivo",
      implicatesSuspectKey: "teo",
    },
    {
      key: "agenda-marta",
      title: "La agenda de turnos de Marta",
      description:
        "Una anotación con lapicera negra: 'carta a Roldán, correo 08:40', el día de la tercera carta. En la solapa, un borrador arrugado con la letra imitada y una 'e' dibujada varias veces, como quien practica una firma para que salga idéntica.",
      icon: "NotebookTabs",
      type: "DOCUMENTO",
      importance: "CLAVE",
      locationKey: "recepcion",
      implicatesSuspectKey: "marta",
    },
  ],

  dialogues: [
    // ---------------- MARTA ----------------
    {
      suspectKey: "marta",
      question: "Pregunte, que no tengo nada que esconder: yo soy la que limpia la oficina cuando todos se van, la que sabe dónde vive cada convenio.",
      order: 1,
      options: [
        {
          key: "marta_sufrimiento",
          label: "¿Cómo está el presidente con estas cartas?",
          responseText:
            "Destrozado, y con razón: que lo amenacen por su gestión es horrible. Yo le sugerí que hablemos con la policía desde la primera carta y él no quiso, por el qué dirán en la asamblea. Ahora ya está la policía, o sea usted. Me alegra que esté.",
        },
        {
          key: "marta_costos",
          label: "¿Qué pensás del contenido de la carta, lo de los costos inflados?",
          requiresOptionKey: "marta_sufrimiento",
          responseText:
            "Una barbaridad. Yo misma le propuse a Roldán chequear los costos de obra el mes pasado, por transparencia, para que a nadie se le ocurra sospechar. Si hubiera algo raro, ¿para qué iba a querer yo que los mire otra gente?",
        },
        {
          key: "marta_turnos",
          label: "¿Quiénes estuvieron en la sede los días de las cartas?",
          responseText:
            "Dino, que se queda hasta tarde con los números, y Teo, que siempre está porque su papá es el portero. Yo salgo a las seis y media, como el resto de la administración. De noche la sede es de esos dos y del silencio.",
        },
        {
          key: "marta_matasellos",
          label: "¿Por qué las cartas vienen del correo de la esquina?",
          responseText:
            "No sabría decirle. La cooperativa casi no manda correo físico; lo que se manda, sale de acá o de la terminal. Si alguien las llevó al correo de la esquina, es porque no quiso que el buzón de acá quedara en el medio.",
        },
        {
          key: "marta_ev_tinta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el log de impresiones de madrugada",
          requiresClueKey: "tinta-impresora",
          responseText:
            "(lo mira sin pestañear) La impresora de recepción imprime actualizaciones del sistema a la madrugada, eso es del servidor. Mi código de usuario... mire, a las dos de la mañana yo estoy durmiendo en mi casa. Pregúntele a Dino, él vive con la llave del archive y de la red.",
        },
        {
          key: "marta_ev_agenda",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la anotación de tu agenda",
          requiresClueKey: "agenda-marta",
          responseText:
            "(se le corta el aire) Eso... eso lo anoté porque el presidente me pidió que le avisara de una carta formal que salía ese día. El correo de la esquina, sí, es más rápido que la terminal. No entiendo por qué me muestra mi propia letra como si fuera una confesión.",
        },
      ],
    },
    {
      suspectKey: "marta",
      question: "¿Más preguntas? Yo las respondo todas, y después vuelvo a la impresora, que no se limpia sola.",
      order: 2,
      options: [
        {
          key: "marta_teo",
          label: "¿Teo hacía bromas con cartas?",
          responseText:
            "El chico es un caso: historietas, recortes, letras raras. Pero esto no es una macana, son amenazas. Y una amenaza la escribe un adulto con mala leche, no un pibe con un marcador. Yo no lo defendería si fuera él, pero no es él.",
        },
        {
          key: "marta_fenix",
          label: "¿Qué sabés de la relación de Roldán con la ferretería Fénix?",
          responseText:
            "Que es del cuñado, todo el mundo lo sabe, no es un secreto. Compraban los materiales de obra ahí desde antes de que yo entrara. ¿Que eso se parece a un sobrecosto? Los que manejan los montos son Dino y el presidente; yo ni me acerco a las facturas.",
        },
        {
          key: "marta_ev_fuente",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el papel de la impresora en la carta",
          requiresClueKey: "tipo-fuente",
          responseText:
            "El papel del talonario de Alma Azul se usa para todo: memorandos, actas, avisos. Cualquiera con dos minutos en recepción agarró un folio alguna vez. Que la carta esté en papel de acá no me dice quién la escribió, me dice que se escribió cerca.",
        },
        {
          key: "marta_ev_sobre",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la letra imitada de la tercera carta",
          requiresClueKey: "sobre-escrito",
          responseText:
            "Es la letra del presidente... casi. Se nota que la imitaron, sí, la 'e' no le sale natural a nadie salvo a él. Yo le dicto las cartas a Roldán todos los días y le conozco la mano: para imitarla hay que mirarla mucho, vivir cerca de su escritorio.",
        },
      ],
    },

    // ---------------- DINO ----------------
    {
      suspectKey: "dino",
      question: "Yo cierro los números con la luz apagada y la conciencia acomodada. Si algo no cierra en esa carpeta, hace tiempo que no es mío.",
      order: 1,
      options: [
        {
          key: "dino_costos",
          label: "Hablemos del expediente de costos de obra.",
          responseText:
            "(se acomoda los anteojos) Los costos se auditaron y se asentaron: el presidente los aprobaba y yo los pasaba a libro. No hubo una asamblea que los cuestionara en dos años. Si hay un número retocado, no me lo mostraron a mí.",
        },
        {
          key: "dino_prestamo",
          label: "¿Qué relación tenés con Roldán más allá de la tesorería?",
          responseText:
            "Me dio un préstamo personal cuando mi hija arrancó la facultad, del bolsillo de él, sin un papel de por medio. Por eso le estoy agradecido, y por eso me duele que lo estén atacando. No es una deuda: es una lealtad.",
        },
        {
          key: "dino_miedo",
          label: "¿Qué sabés de estas cartas?",
          requiresOptionKey: "dino_prestamo",
          responseText:
            "Nada, y me asustan tanto como a él. Si esto se hace público, los socios nos van a colgar a todos, a mí el primero, que asenté los números. El que las escribió conoce el expediente: eso es información de adentro, del archivo o del despacho del presidente.",
        },
        {
          key: "dino_ev_expediente",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el expediente de costos",
          requiresClueKey: "expediente-costos",
          responseText:
            "(se queda helado) Eso... eso es un expediente viejo, los sobrecostos de Fénix se justificaban con los aumentos de materiales de ese año. Había diferencias, sí, pero las cubría la propia obra. Yo asenté lo que me daban. No soy quién para tocar la firma del presidente.",
        },
        {
          key: "dino_ev_fenix",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las facturas de Fénix",
          requiresClueKey: "contrato-fenix",
          responseText:
            "Fénix es del cuñado del presidente, usted ya lo sabe: se ve mal, el cuñado cobrando de más. Pero eso no lo vuelve un crimen... y aunque lo fuera, no es mío. Yo no mandé ninguna carta. No tengo el coraje ni la letra para eso.",
        },
      ],
    },
    {
      suspectKey: "dino",
      question: "¿Quiere que hablemos de mi parte en esto? Hablemos, pero sin cámaras en el medio: la tesorería es una herida, no un escenario.",
      order: 2,
      options: [
        {
          key: "dino_calle",
          label: "Si sabías de la inflación de costos, ¿por qué no lo dijiste?",
          requiresOptionKey: "dino_prestamo",
          responseText:
            "(silencio largo) Porque me callaron con un préstamo y porque el presidente es el que me dio el primer trabajo en serio. Soy un cobarde, no un delincuente. Pero estas cartas no las escribí yo: si fuera por destapar, hace dos años que lo destapaba en una asamblea, no por mensajito",
        },
        {
          key: "dino_noche",
          label: "¿Qué hacías en la sede hasta las 23:00 los días de las cartas?",
          responseText:
            "Cerrar los asientos del mes, la rutina de siempre: planillas, el sello, el libro. La impresora no la usaba ni en pedo: imprimo los balances en la imprenta para que no se vean manoseados. De madrugada el edificio está cerrado y yo en mi casa.",
        },
        {
          key: "dino_ev_tinta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el log de impresiones con código de administración",
          requiresClueKey: "tinta-impresora",
          responseText:
            "El código del tiraje es de administración, no mío. Yo nunca tuve sesión en la impresora: los usuarios los da de alta y de baja la secretaria administrativa, Marta. Si quieren saber quién imprimió de noche, pregúntenle a quien administra los códigos.",
        },
        {
          key: "dino_ev_matasellos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el matasellos del correo de la esquina",
          requiresClueKey: "matasellos",
          responseText:
            "El correo de la esquina... yo paso por ahí todos los meses a pagar un impuesto, y nunca vi a nadie de la cooperativa. El que mandó la carta se tomó el trabajo de caminar dos cuadras para no dejar el buzón de acá de testigo. Eso lo hace alguien que conoce el movimiento de esta sede, no un socio de afuera.",
        },
      ],
    },

    // ---------------- TEO ----------------
    {
      suspectKey: "teo",
      question: "Yo hice macanas, lo asumo. Pero esta carta me da miedo a mí también, y yo no tengo miedo de nada.",
      order: 1,
      options: [
        {
          key: "teo_broma",
          label: "Dicen que la primera carta fue una broma tuya.",
          responseText:
            "(se ríe, nervioso) Una macana, sí. Imité el formato de las cartas serias con un marcador grueso y la puse en el casillero del presidente como si fuera un aviso de morosidad. Fue un día de esos. Cuando apareció la segunda y la tercera, entendí que alguien copió mi idea o que la cosa era en serio. Yo ya estaba aterrado.",
        },
        {
          key: "teo_dos",
          label: "La primera carta y la tercera no son de la misma mano.",
          requiresOptionKey: "teo_broma",
          responseText:
            "¿Vio? Yo uso el marcador así, grueso, apurado. La tercera tiene una letra finita, paciente, de oficina. Yo no tengo esa paciencia, y a la tercera carta ya lo único que yo garabateaba era la renuncia en mi cabeza.",
        },
        {
          key: "teo_noche",
          label: "¿Quién se quedaba de noche en la sede?",
          responseText:
            "Marta hasta las seis y media, Dino hasta las once con los números, el presidente se iba a las ocho. Yo me quedaba rondando porque mi viejo es el portero y a casa... no me quiero quedar tampoco. El edificio me conoce más que nadie.",
        },
        {
          key: "teo_marta",
          label: "¿Y la secretaria entraba de noche?",
          requiresOptionKey: "teo_noche",
          responseText:
            "No... en realidad sí, dos veces la vi volver después de las ocho. Decía que se había olvidado la cartera. La noche antes de la tercera carta la vi salir rápido, con un sobre en la mano, rumbo a la esquina. No le di importancia, pensé que era un pago.",
        },
        {
          key: "teo_ev_carpeta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu carpeta con los recortes",
          requiresClueKey: "anotacion-teo",
          responseText:
            "Es mi carpeta de boludeces: recortes de prensa, la frase marcada porque me hizo gracia, el marcador. Lo que no está ahí es la tercera carta. Eso lo escribió alguien con letra de caligrafía, no yo, que garabateo hasta mi propia firma.",
        },
      ],
    },
    {
      suspectKey: "teo",
      question: "¿Olvidábamos algo más? Yo hablo con usted porque usted es el primero que me toma en serio en este edificio.",
      order: 2,
      options: [
        {
          key: "teo_edificio",
          label: "De noche, ¿quién puede usar la impresora sin que nadie lo note?",
          responseText:
            "Cualquiera con la llave de recepción y un poco de ojo. Mi viejo tiene llave de todo; la secretaria deja la suya guardada en el cajón del escritorio —yo se lo vi hacer mil veces. De noche no hay nadie para ver quién imprime, solo queda el log.",
        },
        {
          key: "teo_fenix",
          label: "¿Qué sabés de la ferretería Fénix?",
          responseText:
            "Que es del tío del presidente, del cuñado, de la familia. Los pibes del barrio decimos que cobra caro, pero todos los cobran caro cuando el cliente quiere. Yo nunca vi las facturas, pero mi viejo siempre decía: 'al presidente no le conviene que se miren esos números'.",
        },
        {
          key: "teo_ev_matasellos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el matasellos del correo de la esquina",
          requiresClueKey: "matasellos",
          responseText:
            "El correo de la esquina queda a dos cuadras, para el lado de la plaza. Yo floto por ahí todo el día y no vengo acá a darle mi visto bueno: si alguien de acá fue a mandar una carta a ese correo, lo habrá visto más de uno. Es un mitre que no se esconde.",
        },
        {
          key: "teo_ev_sobre",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la letra de la tercera carta",
          requiresClueKey: "sobre-escrito",
          responseText:
            "Esa letra no es la mía y tampoco la de mi marcador. Es la letra de alguien que copia, una 'e' que le sale de memoria de tanto mirar la imagen del presidente. Yo no me quedo mirando a nadie, fíjese: yo miro los partidos en el club.",
        },
      ],
    },

    // ---------------- RODAS ----------------
    {
      suspectKey: "rodas",
      question: "¿De qué lado quiere que le hable? ¿Del derecho, del mío... o del lado de la verdad de los papeles?",
      order: 1,
      options: [
        {
          key: "rodas_fenix",
          label: "Hablemos de los contratos con la ferretería Fénix.",
          responseText:
            "Fénix es un proveedor histórico de la cooperativa; yo redacté los contratos con los precios que me pasaban los de obra. Los números los ponían Roldán y Dino, yo le sacaba los dientes legales. Si el precio estaba alto, no era mi papel señalarlo: era el de la administración.",
        },
        {
          key: "rodas_sospechas",
          label: "¿Vos no notaste nada raro en esos contratos?",
          requiresOptionKey: "rodas_fenix",
          responseText:
            "Un abogado ve patrones, no los denuncia. Algunas facturas de Fénix coincidían demasiado con los cierres de obra, con montos que se repetían como un estribillo. Lo hablé en privado con Roldán, me pidió que lo dejara, y lo dejé. Eso me vuelve cómplice de un silencio, no autor de una amenaza.",
        },
        {
          key: "rodas_vinculo",
          label: "¿Quién podía querer dañar al presidente?",
          responseText:
            "El que lo quería destruir no lo amenazó de frente: usó el expediente, que es información de adentro. Nadie de afuera sabe qué hay en la carpeta de costos ni en qué cajón se guarda. La carta es de alguien que trabaja a un par de escritorios del suyo.",
        },
        {
          key: "rodas_ev_expediente",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el expediente de costos",
          requiresClueKey: "expediente-costos",
          responseText:
            "El expediente muestra sobrecostos del veinte por ciento en dos años, sí, con facturas dobles y las de Fénix de fondo. Es feo, y la próxima vez que haya un asamblea va a ser feísimo. Pero el chantaje no lo hizo quien revisa papeles con esta tranquilidad: lo hizo una mano de administración, que los mira todos los días desde el otro lado de la mesa.",
        },
        {
          key: "rodas_ev_contrato",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los contratos firmados con Fénix",
          requiresClueKey: "contrato-fenix",
          responseText:
            "Son mis firmas, no lo niego. Los reescribí tres veces con cláusulas de ajuste que hoy me hacen ruido. Si usted piensa que el abogado que calló es el que amenaza, se equivoca de método: yo tengo el expediente y nunca toqué la impresora de esa sede.",
        },
      ],
    },
    {
      suspectKey: "rodas",
      question: "¿Recorremos las tres cartas? Puedo ayudarle a leer entre líneas: para eso me pagan.",
      order: 2,
      options: [
        {
          key: "rodas_primera",
          label: "¿Qué lee entre la primera y la tercera carta?",
          responseText:
            "La primera es un balbuceo de pibe: marcador, letra apurada, cero vocación de delito. La tercera es otra persona: letra imitada con paciencia, amenaza medida, con conocimiento del expediente. Si me pregunta como letrado, hay dos manos. Si me pregunta como hombre, un pibe hizo una macana y una mujer de oficina la aprovechó.",
        },
        {
          key: "rodas_ley",
          label: "¿Qué delito es mandar cartas anónimas de este tipo?",
          responseText:
            "Extorsión, aunque no pida plata: amenazar con revelar un hecho para torcer la voluntad de otro es el nudo de la figura. Lo gracioso del caso es que el hecho revelado es verdadero. El derecho no absuelve al chantajista porque su víctima sea un ladrón. Las dos cosas se juzgan aparte.",
        },
        {
          key: "rodas_ev_matasellos",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el matasellos del correo de la esquina",
          requiresClueKey: "matasellos",
          responseText:
            "El correo de la esquina está a dos cuadras y media. Eso descarta al pibe del portero —no sale del radio del edificio con un sobre, todo el mundo lo conoce— y a un socio de afuera, que no tendría por qué esquivar el buzón interno. Quien fue hasta allá quería borrar el rastro de origen.",
        },
        {
          key: "rodas_ev_tinta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el log de impresiones de madrugada",
          requiresClueKey: "tinta-impresora",
          responseText:
            "Impresiones de madrugada con código de administración. En la cooperativa, el único da de alta y de baja los usuarios de la impresora es la secretaria administrativa. Es una recomendación procesal, no una acusación: miren quién administra los códigos y van a encontrar al dueño del tiraje.",
        },
        {
          key: "rodas_ev_agenda",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la agenda de turnos de la secretaria",
          requiresClueKey: "agenda-marta",
          responseText:
            "(lee, calla y devuelve la agenda despacio) Yo no comento pruebas de una clienta sin hablar antes con ella. Pero entienda una cosa: una persona que guarda un borrador aparentemente inofensivo en su agenda no cuenta eso porque confíe en usted. Lo guarda porque el papel la delató más de la cuenta.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "lunes",
      text: "La primera carta aparece en el casillero del presidente: una broma con marcador grueso y letra de pibe. Nadie la toma en serio.",
      revealedByOptionKey: "teo_broma",
    },
    {
      time: "lunes 02:10",
      text: "El log de la impresora registra un tiraje nocturno con el código de usuario de administración.",
      revealedByClueKey: "tinta-impresora",
    },
    {
      time: "martes",
      text: "Una segunda carta llega a la sede, esta vez con contenido real: 'sé lo de los costos de obra'. Matasellada en el correo de la esquina.",
      revealedByClueKey: "matasellos",
    },
    {
      time: "miércoles 02:40",
      text: "Nuevo tiraje de madrugada en la impresora de recepción, con el mismo código de administración.",
      revealedByClueKey: "tinta-impresora",
    },
    {
      time: "miércoles 08:40",
      text: "La agenda de turnos de Marta registra 'carta a Roldán, correo 08:40'. Teo la ve salir con un sobre rumbo a la esquina.",
      revealedByOptionKey: "teo_marta",
    },
    {
      time: "miércoles 09:15",
      text: "Roldán recibe la tercera carta, la más dura. Llama a Rodas y después a la policía.",
      isPublic: true,
    },
    {
      time: "miércoles 10:00",
      text: "La primera reunión de la asamblea extraordinaria se suspende. La cooperativa entera espera la resolución del caso.",
      isPublic: true,
    },
  ],

  deductions: [
    {
      title: "La primera carta era una broma",
      text: "La primera carta y la tercera no son de la misma mano: marcador grueso y letra de pibe contra una letra finita que imita a Roldán. La carpeta de Teo con los recortes y el marcador gastado explica la primera; el sobre-escrito con la 'e' fallada explica que la tercera es una imitación paciente. La amenaza real no empezó con el pibe.",
      requiredClueKeys: ["anotacion-teo", "sobre-escrito", "matasellos"],
      requiredOptionKeys: ["teo_dos", "rodas_primera"],
      order: 1,
    },
    {
      title: "El chantaje tiene un autor real, de adentro",
      text: "El papel es del talonario interno, el tiraje nocturno se hizo con el código de administración y la agenda de la secretaria anota 'carta a Roldán, correo 08:40' con un borrador de letra imitada. Las tres cosas sumadas no son casualidad: son una sola mano con acceso a recepción, impresora y turnos.",
      requiredClueKeys: ["tipo-fuente", "tinta-impresora", "agenda-marta"],
      requiredOptionKeys: ["dino_ev_tinta"],
      order: 2,
    },
    {
      title: "La verdad detrás del chantaje",
      text: "El expediente no miente: los costos inflados un veinte por ciento con sobrefacturas de la ferretería Fénix son lo que las cartas denuncian. El chantaje no inventa el delito: lo hace público. Roldán es ladrón y víctima a la vez, y las dos cosas van por carriles distintos en este caso.",
      requiredClueKeys: ["expediente-costos", "contrato-fenix"],
      requiredOptionKeys: ["rodas_ley"],
      order: 3,
    },
    {
      title: "Quien mandó la carta se delató al salir",
      text: "Las tres cartas salieron del correo de la esquina, que la cooperativa casi no usa: salirse del edificio fue el intento de borrar el origen. Pero ese camino ya lo vio Teo la mañana de la tercera carta, y una sola persona de la sede tenía la anotación, la sesión de impresora y los turnos para convertir una hora de oficina en un matasellos.",
      requiredClueKeys: ["matasellos", "agenda-marta", "tinta-impresora"],
      requiredOptionKeys: ["teo_marta"],
      order: 4,
    },
    {
      title: "Los que callaron no son los que amenazan",
      text: "Dino se calló un préstamo, Rodas calló por lealtad y Teo bromeó con un marcador. Ninguno administraba la impresora ni tenía por qué practicar una 'e' imitada en su agenda. Los silencios de la sede explican el secreto del expediente; solo la gestora de turnos explica las cartas.",
      requiredClueKeys: ["expediente-costos", "anotacion-teo", "agenda-marta", "tipo-fuente"],
      requiredOptionKeys: ["dino_calle", "teo_ev_carpeta", "rodas_sospechas"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      {
        label: "Su hijo perdió el puesto que Roldán bloqueó y decidió vengarse exponiéndolo",
        isCorrect: true,
      },
      {
        label: "Dino quería tapar su complicidad en los sobrecostos antes de que lo descubrieran",
      },
      {
        label: "Rodas buscaba quedarse con la defensa de la cooperativa y hundir al presidente",
      },
      {
        label: "Teo llevó la broma demasiado lejos y siguió por miedo a que descubrieran su juego",
      },
    ],
    methods: [
      {
        label: "Imprimía las cartas en la oficina y las mandaba desde el correo de la esquina",
        isCorrect: true,
      },
      {
        label: "Las escribía a mano y las dejaba en el buzón interno del edificio",
      },
      {
        label: "Las mandaba por el correo central de la ciudad para evitar cualquier rastro local",
      },
      {
        label: "Las hacía llegar por el hijo del portero para no pisar la oficina de correos",
      },
    ],
  },
};