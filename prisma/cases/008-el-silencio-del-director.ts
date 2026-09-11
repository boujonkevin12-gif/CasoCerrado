import type { CaseDef } from "./types";

/**
 * CASO 008 — El silencio del director
 * Dificultad: DIFÍCIL | Envenenamiento en habitación cerrada
 *
 * QUÉ OCURRIÓ REALMENTE
 * El director del Conservatorio Nacional, Aníbal Trucco, apareció muerto en el
 * estudio de práctica 7: la puerta cerrada con llave por dentro, la llave en la
 * cerradura del lado interior, ventanas con rejas y pestillo interior, sin
 * signos de forzamiento. La causa fue ricina en el último trago de la botellita
 * de agua que tenía en el atril. Parecía suicidio o muerte natural; no fue
 * ninguna de las dos. El culpable es Lautaro Salcedo, asistente del director y
 * ex alumno estrella: Aníbal le robó la autoría de su composición
 * ('Pieza para viento, N°3'), la registró a su nombre y lo bloqueó de todo
 * concurso. Aníbal iba a estrenar esa obra la semana siguiente y a cobrar el
 * Premio Nacional de Composición con ella. Lautaro envenenó la botella de agua
 * mientras le alcanzaba las partituras a las 17:50. El 'misterio' de la
 * habitación cerrada no exculpa a nadie: era la costumbre de la víctima. Aníbal
 * se encerraba a practicar y tomaba la merienda en el atril; él mismo trabó la
 * puerta por dentro y después bebió.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Irene: la concertino tenía un affaire con Aníbal y, además, sabía que la
 *   'Pieza N°3' no era de él: se la había escuchado tocar a Lautaro años atrás
 *   en un recital de alumnos. Su coartada es de acero: ensayo de orquesta de
 *   18:00 a 20:00 con sesenta testigos.
 * - Valentina: la secretaria falsificó la planilla de horas para taparse la
 *   semana de exámenes que se tomó sin permiso. Por eso se ponía nerviosa
 *   cuando hablaban de registros. Se fue a las 17:00.
 * - Gastón: el jefe de mantenimiento pasó por el estudio 7 a las 18:10 a
 *   arreglar el timbre y notó que la puerta NO estaba bien cerrada: la dejó
 *   'a presión', y el pestillo, que nunca disparaba del todo bien, podía o no
 *   caer. Ocultó el defecto por miedo a que lo echen, y temió que la puerta
 *   'se cerrara por dentro' sin que nadie la tocara.
 */
export const case008: CaseDef = {
  code: "CASO-008",
  slug: "el-silencio-del-director",
  title: "El silencio del director",
  intro:
    "El Conservatorio Nacional despertó con una puerta cerrada que jamás iba a abrirse: Aníbal Trucco, 64 años, director del estudio, apareció muerto en el estudio 7 con la llave en la cerradura del lado interior, las ventanas enrejadas y sin un solo signo de violencia. La botellita de agua del atril quedó a medio tomar y el silencio del edificio trató de pasar el hecho por una muerte natural. Pero el último trago de esa botella no era agua, y en el escritorio del director hay un premio, una composición y una llamada que cuentan otra historia. Cuatro personas estuvieron en ese piso entre las 17:00 y las 18:45. Una de ellas sabía que la puerta cerrada por dentro era solo una costumbre.",
  scene: "escenario",
  victim: { name: "Aníbal Trucco", age: 64, job: "Director del Conservatorio" },
  place: "Conservatorio Nacional, estudio 7",
  timeOfCrime: "18:20",
  difficulty: "DIFICIL",
  order: 8,
  requiredLevel: 3,
  motive:
    "Aníbal Trucco le robó la autoría de la 'Pieza para viento, N°3' a Lautaro Salcedo, su ex alumno estrella: la registró a su nombre, la presentó como propia y dejó a Lautaro fuera de todas las convocatorias. La semana siguiente, el director iba a estrenar esa obra y a cobrar el Premio Nacional de Composición. Para Lautaro, la obra que le habían quitado iba a pagarle al ladrón el premio que a él le habían bloqueado.",
  method:
    "A las 17:48 Lautaro subió al piso con la bandeja de la merienda y las partituras, entró al estudio 7 cuando Aníbal estaba distraído, y vertió ricina en la botellita de agua del atril con una aguja a través de la tapa. Salió a las 17:55 por el registro de acceso. Aníbal se encerró solo, como hacía siempre, practicó y bebió el último trago envenenado. Cuando lo encontraron, la puerta seguía trabada por dentro con la llave del lado interior.",
  resolutionText:
    "El agua del atril tenía ricina y la tapa de la botellita conservaba la marca mínima de una aguja: nadie llegó a envenenar esa botella por casualidad. Y la 'habitación cerrada' no era un truco: era la costumbre del director, que se encerraba a practicar y merendaba en el atril todas las tardes. La llave por dentro la puso la propia víctima. El registro de acceso del piso marca a Lautaro entrando a las 17:48 y saliendo a las 17:55, la ventana exacta del envenenamiento, y las 'partituras' que dice haberle alcanzado estaban selladas en su poder desde tres días antes: fue al estudio a otra cosa. En el escritorio, la convocatoria del premio y la 'Pieza N°3' registrada a nombre de Aníbal, y en la agenda telefónica del director, la llamada de la víspera a su abogado 'por una autoría'. El testimonio del viejo recital de alumnos confirma lo que Irene ya sabía: esa música se la escuchó tocar a Lautaro años antes del premio. Todos tenían secretos —el affaire de Irene, las planillas truchas de Valentina, la puerta defectuosa de Gastón— pero ninguno explica quién tocó el agua del atril.",
  xpReward: 1200,
  coinReward: 600,
  guiltyKey: "lautaro",

  suspects: [
    {
      key: "lautaro",
      name: "Lautaro Salcedo",
      age: 29,
      job: "Asistente del director",
      relationship: "Asistente del director y ex alumno estrella",
      bio: "El mejor alumno que pasó por la cátedra de Aníbal, según los propios celadores. Sereno, apenado, es el primero en ofrecer la explicación de la puerta cerrada, con la resignación del que conoce las costumbres del muerto mejor que nadie. Nadie lo vio perder la compostura... y nadie lo vio lejos del estudio 7 cuando tocaba el agua.",
      avatarColor: "#2a4a3a",
      alibi:
        "Declara que a las 17:50 le alcanzó a Aníbal las partituras de la 'Pieza para viento, N°3' en la puerta del estudio 7 y volvió a la oficina. El registro de acceso lo marca en el piso de las 17:48 a las 17:55.",
      openingStatement:
        "Aníbal siempre se encerraba a practicar. Yo le alcancé las partituras, como pedía la rutina, y volví a mi escritorio. Si la puerta estaba cerrada por dentro, es porque él la cerró, como toda la vida. No hay misterio en esa puerta.",
      isGuilty: true,
      order: 1,
    },
    {
      key: "irene",
      name: "Irene Cassina",
      age: 34,
      job: "Concertino de la orquesta del conservatorio",
      relationship: "Concertino y confidente cercana del director",
      bio: "La primera cara del podio: dirige desde el atril de concertino y conoce cada partitura del repertorio de memoria... incluso las que el director jamás escribió. Mantiene una calma de ensayo con todo el edificio y evita mirar el escritorio del estudio 7.",
      avatarColor: "#4a3a5a",
      alibi:
        "Ensayo general de orquesta de 18:00 a 20:00, con sesenta músicos que la vieron en su atril sin moverse. Nadie la acerca al estudio 7 esa noche.",
      openingStatement:
        "Estuve todo el turno en el ensayo y lo saben. Si de algo me acusan, que me acusen de tocar: esa noche mi atril no se vació un solo minuto.",
      order: 2,
    },
    {
      key: "valentina",
      name: "Valentina Moro",
      age: 41,
      job: "Secretaria administrativa",
      relationship: "Secretaria administrativa del conservatorio",
      bio: "La dueña de las planillas: presentismo, llaves, permisos y la letra chica de los papeles del edificio. Se sonroja cuando el expediente nombra los registros de personal, y tiene una explicación para cada planilla... salvo la de su propia semana.",
      avatarColor: "#5a4a2a",
      alibi:
        "Declara que se fue a las 17:00 y que no volvió a pisar el piso hasta el día siguiente. El miedo a que revisen los registros de asistencia le tiembla en la voz cada vez que el tema aparece.",
      openingStatement:
        "Yo soy papeles, no música: planillas, permisos y orden en los registros. Si tienen dudas de papeles, hablamos con los papeles... y con calma, por favor.",
      order: 3,
    },
    {
      key: "gaston",
      name: "Gastón Puebla",
      age: 47,
      job: "Jefe de mantenimiento",
      relationship: "Jefe de mantenimiento del conservatorio",
      bio: "La caja de herramientas es su firma: dos vueltas por semana por los estudios, la lista de arreglos pendientes en la mano y un cerrajero que le arruina la reputación arreglo tras arreglo. Cuando pronuncia 'pestillo' le tiembla la voz, y sabe por qué.",
      avatarColor: "#3a4a5a",
      alibi:
        "Pasó por el estudio 7 a las 18:10 para arreglar el timbre del pasillo. Dice que la puerta estaba apenas cerrada, que no tocó la cerradura y que se fue sin darle importancia.",
      openingStatement:
        "La puerta del 7 es un dolor de cabeza de años: el pestillo a veces engancha y a veces no. Yo fui a arreglar un timbre, no a vigilar quién entra. Y si me preguntan, la dejo dicha: esa puerta no estaba bien trabada cuando yo pasé.",
      order: 4,
    },
  ],

  locations: [
    {
      key: "estudio-7",
      name: "Estudio de práctica 7",
      description:
        "El lugar donde Aníbal se encerraba a practicar: el atril, la partitura abierta, la botellita de agua a medio tomar y la llave quieta en la cerradura del lado interior. Las ventanas de reja están cerradas y el aire dejó de moverse hace horas.",
      order: 1,
      actions: [
        {
          label: "Examinar la botellita de agua del atril",
          resultText:
            "El último trago de la botella tiene residuos de ricina. En la tapa de goma, una marca mínima de aguja, casi imperceptible: el veneno entró por inyección, no por descuido.",
          clueKey: "botella-agua",
          order: 1,
        },
        {
          label: "Revisar la puerta y su cerradura",
          resultText:
            "El pestillo de la puerta tiene un juego raro: engancha con un golpe en seco y a veces no dispara del todo. Los peritos anotan el defecto antes de abrir la cerradura.",
          clueKey: "puerta-defecto",
          order: 2,
        },
        {
          label: "Observar la llave dentro de la cerradura, del lado interior",
          resultText:
            "La llave está puesta del lado interior, con la puerta trabada. Nadie pudo salir sin sacarla, y nadie pudo entrar desde afuera: la llave quedó del lado de adentro.",
          clueKey: "llave-interior",
          order: 3,
        },
        {
          label: "Revisar las partituras sobre el atril",
          resultText:
            "La 'Pieza para viento, N°3' está sobre el atril, abierta en el tercer movimiento. La hoja de envío de la editorial, que acompaña el sobre, está sellada con fecha de hace tres días.",
          clueKey: "partituras",
          order: 4,
        },
        {
          label: "Buscar entre los residuos del rincón del estudio",
          resultText:
            "Detrás del atril, tirado contra el zócalo, un pequeño envase de vidrio con un líquido viscoso en el interior. El contenido da positivo en el vehículo usado para la ricina.",
          clueKey: "envase-ricina",
          order: 5,
        },
      ],
    },
    {
      key: "pasillo",
      name: "Pasillo del piso de estudios",
      description:
        "El corredor angosto que une el estudio 7 con la oficina del director: el registro de accesos del piso, el libro de llaves de los estudios y el eco de los pasos de todos los que subieron esa tarde. El bedel lo recorre con la mirada baja y la memoria encendida.",
      order: 2,
      actions: [
        {
          label: "Pedir el registro de accesos del piso",
          resultText:
            "El registro electrónico deja asentado cada tarjeta: la de Lautaro marca la entrada a las 17:48 y la salida a las 17:55. La ventana exacta del envenenamiento. No hay otra tarjeta ajena al piso en toda la tarde.",
          clueKey: "tarjeta-acceso",
          order: 1,
        },
        {
          label: "Revisar el libro de llaves de los estudios",
          resultText:
            "El libro registra cada llave entregada: solo el director tenía llave del estudio 7. En la columna del día figura una novedad: la llave del 7 se pidió al mediodía y se devolvió... cuatro veces en la semana, siempre a nombre de la administración.",
          clueKey: "registro-llaves",
          order: 2,
        },
        {
          label: "Preguntar al bedel por el movimiento de la tarde",
          resultText:
            "'El asistente pasó con la bandeja a las 17:50, como siempre', dice el bedel. 'El director ya había entrado al 7 con el atril y la botella, como siempre. Y Gastón, el de mantenimiento, bajó apurado a las 18:15 diciendo que el timbre del 7 estaba fallado otra vez.'",
          order: 3,
        },
      ],
    },
    {
      key: "oficina-director",
      name: "Oficina del director",
      description:
        "El despacho con piano de cola, la mesa de partituras y el teléfono sobre el escritorio: el lugar donde Aníbal armaba programas, guardaba composiciones ajenas y firmaba lo que no escribía. Todo quedó en su lugar, como si la muerte no hubiera tocado ni un papel.",
      order: 3,
      actions: [
        {
          label: "Revisar la agenda de llamadas del director",
          resultText:
            "Un llamado saliente, el día anterior a las 12:30, al estudio del abogado de Aníbal. Nota en la agenda al lado del número: 'autorías. Pieza N°3. que me confirmen la registración.'",
          clueKey: "llamada-abogado",
          order: 1,
        },
        {
          label: "Leer lo que hay sobre el escritorio",
          resultText:
            "La convocatoria del Premio Nacional de Composición, con el sello de la secretaría de concursos, y sobre ella la documentación de la 'Pieza para viento, N°3' registrada a nombre de Aníbal Trucco, lista para el estreno de la semana siguiente.",
          clueKey: "premio",
          order: 2,
        },
        {
          label: "Meter mano en los cajones del escritorio",
          resultText:
            "Manuscritos, programas de conciertos y un sobre de la editorial con fecha de tres días atrás. Nada firmado por manos ajenas... salvo la letra del sobre de envío, que no es la de Aníbal.",
          order: 3,
        },
      ],
    },
    {
      key: "sala-ensayo",
      name: "Sala de ensayo",
      description:
        "La sala grande de la orquesta: atriles en semicírculo, la consola del concertino y el cartel del ensayo general. Ayer sonó la Sinfonía 40 de 18:00 a 20:00 con sesenta músicos que se vieron entre ellos todo el turno.",
      order: 4,
      actions: [
        {
          label: "Confirmar la coartada del ensayo",
          resultText:
            "El registro del ensayo es contundente: sesenta músicos de 18:00 a 20:00, un descanso a las 19:00 en la propia sala, y la concertino en su atril todo el tiempo, sin salir ni al pasillo. La coartada de Irene es una pared.",
          order: 1,
        },
        {
          label: "Buscar en el archivo del recital de alumnos",
          resultText:
            "En los programas de años atrás hay un recital de alumnos de composición. Al margen, anotado por un ex profesor: 'motivo de la pieza de Salcedo, el alumno de la promoción, tocado al piano esa noche'. La misma melodía de la 'Pieza N°3'.",
          clueKey: "testimonio-recital",
          order: 2,
        },
        {
          label: "Hablar con los músicos sobre el movimiento del piso",
          resultText:
            "Dos músicos vieron al asistente cruzar el pasillo con la bandeja a las 17:50 y confirmaron que el director no salió del estudio 7 en el descanso. Nadie escuchó quejarse al 7: solo el silencio habitual de la puerta cerrada.",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "botella-agua",
      title: "La botellita de agua con ricina",
      description:
        "El último trago del agua del atril tenía residuos de ricina. La tapa de goma conserva la marca mínima de una aguja: el veneno entró a través de la tapa, dejando la botella visualmente intacta.",
      icon: "Droplet",
      type: "FISICA",
      importance: "CLAVE",
      locationKey: "estudio-7",
      implicatesSuspectKey: "lautaro",
    },
    {
      key: "partituras",
      title: "Partituras selladas hace tres días",
      description:
        "La 'Pieza para viento, N°3' que Lautaro dice haberle 'alcanzado' a Aníbal ayer está sobre el atril, pero el sobre de la editorial que la acompaña está sellado desde hace tres días: las partituras ya estaban en el conservatorio mucho antes de su bandeja.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "estudio-7",
      implicatesSuspectKey: "lautaro",
    },
    {
      key: "tarjeta-acceso",
      title: "Acceso de Lautaro 17:48–17:55",
      description:
        "El registro electrónico del piso deja asentada la tarjeta de Lautaro: entrada a las 17:48, salida a las 17:55. La ventana exacta en la que el agua del atril pudo ser tocada, y la única tarjeta ajena al piso en toda la tarde.",
      icon: "KeyRound",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "pasillo",
      implicatesSuspectKey: "lautaro",
    },
    {
      key: "puerta-defecto",
      title: "El pestillo que no dispara bien",
      description:
        "El pestillo de la puerta del estudio 7 engancha a veces y a veces no: los peritos anotan que la puerta 'se cerraba a presión'. Es el defecto que Gastón ocultaba... pero no explica la llave que quedó trabada por dentro.",
      icon: "Search",
      type: "FISICA",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "estudio-7",
    },
    {
      key: "llave-interior",
      title: "La llave dentro, por el lado interior",
      description:
        "La llave quedó en la cerradura del lado interior, con la puerta trabada. Ningún pasillo ni balcón la explica: quien trabó la puerta estaba adentro cuando la trabó, y no salió por la puerta. La escena cerrada no se forzó.",
      icon: "KeyRound",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "estudio-7",
    },
    {
      key: "registro-llaves",
      title: "Libro de llaves de los estudios",
      description:
        "El libro de llaves indica que solo el director tenía llave del estudio 7, y que en la semana la llave se pidió y se devolvió cuatro veces 'a nombre de la administración'. Cualquiera en la administración pudo entrar el día anterior a dejar listo el terreno.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "pasillo",
    },
    {
      key: "llamada-abogado",
      title: "La llamada de Aníbal a su abogado",
      description:
        "El día anterior, a las 12:30, Aníbal llamó a su abogado y anotó al lado: 'autorías. Pieza N°3. que me confirmen la registración'. Había algo que confirmar antes del estreno, y no le sobraba tranquilidad.",
      icon: "Smartphone",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "oficina-director",
    },
    {
      key: "premio",
      title: "El premio y la composición a su nombre",
      description:
        "La convocatoria del Premio Nacional de Composición sobre el escritorio, con la 'Pieza para viento, N°3' registrada a nombre de Aníbal Trucco: la obra que iba a estrenar y a cobrar la semana siguiente.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "BAJA",
      locationKey: "oficina-director",
    },
    {
      key: "testimonio-recital",
      title: "El apunte del recital de alumnos",
      description:
        "En el archivo hay un programa de un recital de alumnos de años atrás, anotado de puño por un ex profesor: el motivo de una pieza de 'Salcedo', un alumno de la promoción, tocado en piano esa noche. Es la misma melodía de la 'Pieza N°3'.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "sala-ensayo",
    },
    {
      key: "envase-ricina",
      title: "Envase con el vehículo del veneno",
      description:
        "Un pequeño envase de vidrio tirado detrás del atril, con un líquido viscoso en el interior que da positivo en el vehículo de la ricina. Quien preparó el veneno no alcanzó a llevar el envase lejos.",
      icon: "Droplet",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "estudio-7",
    },
  ],

  dialogues: [
    // ---------------- LAUTARO ----------------
    {
      suspectKey: "lautaro",
      question: "Yo conozco cada costumbre de Aníbal: se encerraba a practicar, merendaba en el atril y trababa la puerta como si la casa fuera suya. Por eso la escena no me sorprende.",
      order: 1,
      options: [
        {
          key: "lautaro_tarde",
          label: "Contame tu recorrido de esa tarde, con horas.",
          responseText:
            "Coordiné la merienda del director, como todas las tardes. A las 17:50 subí al piso con la bandeja y las partituras de la 'Pieza N°3', lo dejé en la puerta del estudio 7 y volví a la oficina. A las seis me enteré de todo como todos: la puerta que nunca se abría se había quedado muda.",
        },
        {
          key: "lautaro_ev_acceso",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: tu acceso al piso entre las 17:48 y las 17:55",
          requiresClueKey: "tarjeta-acceso",
          responseText:
            "Es mi tarjeta y es mi entrada: la ventana que te digo es la misma de siempre, la de la bandeja. El registro no dice nada que yo no haya declarado: subí, dejé las partituras y bajé. Que el registro lo sepa no lo convierte en una conspiración.",
        },
        {
          key: "lautaro_ev_partituras",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: las partituras selladas hace tres días",
          requiresClueKey: "partituras",
          responseText:
            "...las partituras llegaron de la editorial el lunes y se quedaron en mi oficina hasta ayer: el sobre con el sello del envío se entrega cuando se entrega, no cuando a uno le conviene. Ayer se las alcancé porque el programa pedía el material sobre el atril. No es un crimen que el correo venga con su tiempo.",
        },
        {
          key: "lautaro_puerta",
          label: "¿Cómo explicás la puerta cerrada por dentro?",
          requiresOptionKey: "lautaro_tarde",
          responseText:
            "Por la costumbre de toda su vida: se encerraba. La llave en la cerradura del lado interior la ponía él, todas las tardes, para que nadie lo sacara del atril. Por eso nadie entró cuando lo encontraron: no es un truco, es la rutina de un hombre que practicaba en serio.",
        },
      ],
    },
    {
      suspectKey: "lautaro",
      question: "Fui su alumno, le debo la formación... y también le debo unos disgustos, como cualquier alumno a su maestro. Pero el maestro está muerto y yo no le hice nada.",
      order: 2,
      options: [
        {
          key: "lautaro_alumno",
          label: "¿Cómo quedó la relación entre el alumno estrella y el director?",
          responseText:
            "Salí del conservatorio con los mejores promedios y él me tomó como asistente durante un año. Después nos fuimos distanciando: él opinaba que mi música era 'de escuela', y yo opinaba que no me dejaba crecer con las suyas. El afecto y el rencor convivieron toda la vida, como en cualquier cátedra.",
        },
        {
          key: "lautaro_bloqueo",
          label: "Háblame del bloqueo de los concursos.",
          requiresOptionKey: "lautaro_alumno",
          responseText:
            "No me dejó presentarme a dos convocatorias regionales. Dijo que era por las ternas de alumnado, que no había lugar. Volví a intentarlo tres años después y ya era tarde: mi carrera salió de la sala de concursos por la puerta de atrás. El rencor, para qué negarlo, quedó.",
        },
        {
          key: "lautaro_ev_premio",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el premio y la 'Pieza N°3' registrada a nombre de Aníbal",
          requiresClueKey: "premio",
          responseText:
            "No sabía que la había registrado a su nombre. Aníbal me enseñó a componer y después me enseñó quién era él: capaz, la mejor lección. Pero registrar una obra no es lo mismo que ganarme yo la muerte: yo esa pieza ya la había hecho mía en la cabeza, no hacía falta matarlo para recuperarla.",
        },
      ],
    },

    // ---------------- IRENE ----------------
    {
      suspectKey: "irene",
      question: "Dieciocho a veinte: ensayo general. Tengo sesenta testigos, la partitura y el podio. No estuve cerca del estudio 7.",
      order: 1,
      options: [
        {
          key: "irene_ensayo",
          label: "Contame el ensayo de esa tarde.",
          responseText:
            "Ensayo general de la Sinfonía 40, de las seis a las ocho, sin cortes. Hubo un descanso de quince minutos y me quedé en mi atril repasando el segundo movimiento. Cualquiera de la orquesta puede confirmarlo: mi asiento no se vació.",
        },
        {
          key: "irene_vio",
          label: "¿Viste a alguien en el pasillo durante el ensayo?",
          responseText:
            "Un bedel con las llaves, una secretaria que salía apurada a las cinco y a Lautaro con la bandeja de la merienda, como a las 17:50. Al propio director no lo vi: sabíamos que se encerraba en el 7 y que no se le podía hablar hasta que abriera.",
        },
        {
          key: "irene_puerta",
          label: "¿La puerta del 7 estaba cerrada cuando pasaron?",
          responseText:
            "No me fijé. La puerta del 7 siempre está cerrada: es la marca de la casa. Pero ahora que lo dicen, yo tampoco la vi del todo trabada esa tarde: estaba entornada cuando viajé con la vista por el pasillo. No le di importancia, el 7 es 'intocable' para nosotros.",
        },
      ],
    },
    {
      suspectKey: "irene",
      question: "Lo que había entre el director y yo no es asunto del expediente... o, siendo honesta, capaz que el expediente va a querer saber. Empiece usted.",
      order: 2,
      options: [
        {
          key: "irene_relacion",
          label: "Háblame de tu relación con el director.",
          responseText:
            "Fui su concertino y algo más durante el último año. Un affaire que no se publicaba y que él tampoco quería publicar. No lo voy a negar con el tipo muerto: pero un affaire no se arregla envenenando la merienda de nadie, y menos con la orquesta entera mirándome el atril.",
        },
        {
          key: "irene_ev_recital",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el apunte del recital de alumnos con esa pieza",
          requiresClueKey: "testimonio-recital",
          responseText:
            "...esa música la conozco de antes, se la escuché tocar a Lautaro Salcedo hace años, en un recital de alumnos de fin de año. La 'Pieza para viento, N°3' no la escribió Aníbal. Lo supe siempre y me callé, porque callar en este edificio es también un instrumento.",
        },
        {
          key: "irene_celos",
          label: "¿Te molestaba que él estrenara esa obra?",
          requiresOptionKey: "irene_ev_recital",
          responseText:
            "Me molestaba, y bastante: sabía que la iba a estrenar y que iba a cobrar el premio por algo que no era suyo. Tenía celos de la obra y bronca por Lautaro. Pero la bronca y los celos no tocan el agua de nadie: yo toco el violín, y esa tarde toqué hasta las ocho.",
        },
      ],
    },

    // ---------------- VALENTINA ----------------
    {
      suspectKey: "valentina",
      question: "Yo no tengo nada que ver con la música: tengo planillas, permisos y llaves. Y las planillas de ayer están perfectas... pregúnteme y se las muestro.",
      order: 1,
      options: [
        {
          key: "valentina_horarios",
          label: "Contame de las planillas de horas del conservatorio.",
          responseText:
            "El presentismo es mío: seis planillas por mes, una por sección. Son monótonas y ordenadas, como debe ser. Si apareció un error en alguna, fue de carácter administrativo, no de mala fe. Yo no manejo músicas ni partituras: manejo papeles.",
        },
        {
          key: "valentina_miedo",
          label: "¿Por qué te ponés nerviosa cada vez que sale el tema de los registros?",
          requiresOptionKey: "valentina_horarios",
          responseText:
            "...porque hace dos semanas me tomé tres días para rendir unos exámenes sin pedirlos por escrito, y los cubrí cargando horas de otros días en la planilla. Si revisan los registros de presentismo, se va a notar. Lo hice por vergüenza, no por el director ni por su muerte: tenía miedo de que me echaran por administrativa y dejé un papel que no debía.",
        },
        {
          key: "valentina_17",
          label: "¿A qué hora te fuiste y qué viste en la salida?",
          responseText:
            "Me fui a las 17:00 en punto, por la puerta de administración, saludé al bedel y tomé el colectivo. A esa hora el director ya estaba encerrado en el 7 con su botella y su atril. Yo no volví a pisar el piso hasta el día siguiente, cuando ya era tarde para todo.",
        },
      ],
    },
    {
      suspectKey: "valentina",
      question: "Barajando la tarde del piso: todo estuvo tranquilo hasta las seis menos cuarto.",
      order: 2,
      options: [
        {
          key: "valentina_bandeja",
          label: "¿Viste a Lautaro con la bandeja esa tarde?",
          responseText:
            "Lo vi cruzar el pasillo con la bandeja de la merienda alrededor de las 17:50 y volver a bajar unos minutos después, a las 17:55. No es raro: el director tomaba la merienda en el atril, con la puerta entornada hasta que él la cerraba.",
        },
        {
          key: "valentina_puerta",
          label: "¿La puerta del estudio quedó entornada después de que pasó Lautaro?",
          requiresOptionKey: "valentina_bandeja",
          responseText:
            "Quedó entornada un momento y después la vi cerrarse de golpe desde adentro, se lo puedo jurar. El director cerró su puerta como todas las tardes y dejó el pasillo en silencio. Que yo mepa, nadie más subió hasta que encontraron el cuerpo.",
        },
        {
          key: "valentina_anibal",
          label: "¿Cómo estaba el director últimamente?",
          responseText:
            "Raro: discutía por teléfono, comía apurado en el atril y le pedía a todo el que pasaba noticias del premio. Tenía una obra encima que lo tenía enfermo de ansiedad. Pero eso era del estreno: no era un hombre que diera miedo, era un hombre que se guardaba cosas.",
        },
      ],
    },

    // ---------------- GASTÓN ----------------
    {
      suspectKey: "gaston",
      question: "Yo paso por los estudios dos veces por semana con la caja. El timbre del 7 es lo más fallado de todo el edificio, y ayer me tocó a mí otra vez.",
      order: 1,
      options: [
        {
          key: "gaston_timbre",
          label: "¿Estuviste en el estudio 7 esa tarde?",
          responseText:
            "A las 18:10 fui al pasillo a arreglar el timbre que cuelga junto a la puerta del 7. Toqué dos veces para probarlo, no me respondió nadie y me fui a los quince minutos. Esa puerta la vi entornada a presión: no estaba trabada como la dejan los demás.",
        },
        {
          key: "gaston_ev_puerta",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el informe de la puerta con el pestillo que no traba",
          requiresClueKey: "puerta-defecto",
          responseText:
            "¡Eso es lo que digo! Esa puerta a veces engancha y a veces no: el pestillo no dispara bien. Yo la dejé cerrada a presión, como se cierra sola, y no me quedé a mirar si trabó o no. A las seis y veinte el director estaba muerto con la puerta 'cerrada por dentro'... y yo con el miedo de que el pestillo me delatara.",
        },
        {
          key: "gaston_cerro",
          label: "¿La cerraste vos la puerta? ¿Tocaste la llave?",
          requiresOptionKey: "gaston_timbre",
          responseText:
            "No toqué la llave ni de lejos: yo no tengo llave del 7, con el timbre alcanza. La puerta la empujé para que no quedara abierta de par en par y me fui. Si el pestillo cayó después, cayó solo o lo trabó el director desde adentro... pero yo no puse esa llave.",
        },
      ],
    },
    {
      suspectKey: "gaston",
      question: "Todo lo que toco se rompe y todo lo que arreglo queda 'arreglado a medias'. Ya estoy acostumbrado al raje: me conozco el bochorno de memoria.",
      order: 2,
      options: [
        {
          key: "gaston_cerrajero",
          label: "Hablame de ese cerrajero y de las puertas.",
          responseText:
            "El cerrajero del conservatorio es un conocido del hijo del director: cobra barato y labura mal. Puertas que traban solas, pestillos que no bajan, timbres que suenan cuando quieren. La lista de arreglos pendientes la llevo yo y crece sola.",
        },
        {
          key: "gaston_lista",
          label: "¿La puerta del estudio 7 figura en la lista de arreglos?",
          requiresOptionKey: "gaston_cerrajero",
          responseText:
            "Figura. 'Pestillo del 7: engancha a veces', con un signo de pregunta al lado, del mes pasado. No me dejaron tocar la cerradura porque el director la consideraba intocable. Ahora entiendo por qué: el que conocía el defecto era el de adentro de la puerta.",
        },
        {
          key: "gaston_miedo",
          label: "¿Por qué no declaraste el defecto de la puerta antes?",
          responseText:
            "Porque temía que me echaran: soy el que debía haber anotado bien la falla y no la anoté. Y si se enteraban de que la puerta no trababa de verdad, el primer sospechoso era el que la conocía mejor que nadie. Pasé la tarde pensando que el pestillo me iba a delatar por mi propio trabajo mal hecho.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "Día previo, 12:30",
      text: "Aníbal llama a su abogado y anota: 'autorías. Pieza N°3. que me confirmen la registración'.",
      revealedByClueKey: "llamada-abogado",
      order: 1,
    },
    {
      time: "16:00",
      text: "Ensayo general de la orquesta en la sala de ensayo. Sesenta músicos en los atriles.",
      isPublic: true,
      order: 2,
    },
    {
      time: "16:30",
      text: "Aníbal entra al estudio 7 con la botella de agua y se encierra a practicar, como todas las tardes.",
      revealedByOptionKey: "valentina_puerta",
      order: 3,
    },
    {
      time: "17:00",
      text: "Valentina firma la salida y se va por administración.",
      revealedByOptionKey: "valentina_17",
      order: 4,
    },
    {
      time: "17:48",
      text: "La tarjeta de Lautaro registra su entrada al piso con la bandeja de la merienda.",
      revealedByClueKey: "tarjeta-acceso",
      order: 5,
    },
    {
      time: "17:55",
      text: "La misma tarjeta registra la salida de Lautaro del piso.",
      revealedByClueKey: "tarjeta-acceso",
      order: 6,
    },
    {
      time: "18:10",
      text: "Gastón pasa por el estudio 7 a arreglar el timbre y nota la puerta apenas entornada.",
      revealedByOptionKey: "gaston_timbre",
      order: 7,
    },
    {
      time: "18:20",
      text: "Hora estimada de la muerte. El estudio está cerrado por dentro y el último trago de la botella está envenenado.",
      isPublic: true,
      order: 8,
    },
    {
      time: "18:45",
      text: "Encuentran el cuerpo de Aníbal frente al atril del estudio 7.",
      isPublic: true,
      order: 9,
    },
  ],

  deductions: [
    {
      title: "La puerta cerrada era la costumbre, no un truco",
      text: "La llave quedó en la cerradura del lado interior y nadie la forzó: quien trabó la puerta estaba adentro. El defecto del pestillo que describe Gastón solo explica por qué alguien pudo dudar... pero la llave la puso la propia víctima, que se encerraba a practicar y merendar en el atril todas las tardes. La 'habitación cerrada' no esconde al que envenenó el agua: lo deja pasar como una rutina.",
      requiredClueKeys: ["botella-agua", "llave-interior", "puerta-defecto"],
      order: 1,
    },
    {
      title: "El último trago no fue natural",
      text: "La ricina en el agua y la marca de aguja en la tapa descartan la muerte natural y el suicidio: alguien tocó la botella del atril. El envase con el vehículo del veneno quedó tirado detrás del atril: el que preparó el veneno no llegó a llevarse los restos.",
      requiredClueKeys: ["botella-agua", "envase-ricina"],
      order: 2,
    },
    {
      title: "El trámite de las partituras era una farsa",
      text: "Lautaro dice que subió al piso solo a alcanzar las partituras, pero el sobre de la editorial estaba sellado desde tres días antes: las partituras ya estaban en su poder. Aun así, el registro lo marca entrando a las 17:48 y saliendo a las 17:55: la ventana exacta del envenenamiento. La excusa de la bandeja no justifica la coincidencia.",
      requiredClueKeys: ["partituras", "tarjeta-acceso"],
      requiredOptionKeys: ["lautaro_ev_partituras", "lautaro_tarde"],
      order: 3,
    },
    {
      title: "El premio y la autoría robada",
      text: "El director iba a estrenar la 'Pieza N°3' y a cobrar el Premio Nacional por una obra que no era suya. La llamada del día anterior a su abogado 'por una autoría' y el apunte del recital de alumnos confirman lo que el propio Lautaro sabía: esa música era de su autoría, y Aníbal se la había quitado.",
      requiredClueKeys: ["premio", "llamada-abogado", "testimonio-recital"],
      requiredOptionKeys: ["lautaro_ev_premio", "lautaro_bloqueo"],
      order: 4,
    },
    {
      title: "Los inocentes y sus secretos",
      text: "Irene cubrió un affaire y su conocimiento de la pieza; Valentina falsificó una planilla para taparse la semana de exámenes; Gastón ocultó una puerta defectuosa por miedo al despido. Ninguno explica la ricina en el agua del atril: sus secretos mueven celos, papeles y pestillos, no veneno.",
      requiredClueKeys: ["puerta-defecto", "premio"],
      requiredOptionKeys: ["irene_relacion", "valentina_miedo", "gaston_cerro"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      {
        label:
          "Aníbal le robó la composición, la iba a estrenar y a cobrar el premio; Lautaro quería venganza",
        isCorrect: true,
        order: 1,
      },
      {
        label:
          "Lautaro le debía una fortuna al director por el juicio por plagio de una pieza de su cátedra",
        order: 2,
      },
      {
        label:
          "Irene lo envenenó por celos del affaire y de la obra que iba a estrenar",
        order: 3,
      },
      {
        label:
          "Gastón lo mató para tapar su negocio de arreglos truchos en el edificio",
        order: 4,
      },
    ],
    methods: [
      {
        label:
          "Envenenó su botella de agua dejándola en el atril y la víctima se encerró sola para practicar",
        isCorrect: true,
        order: 1,
      },
      {
        label:
          "Le inyectó ricina en la mano mientras le alcanzaba la bandeja de la merienda",
        order: 2,
      },
      {
        label:
          "Trabó la puerta por fuera con una copia de la llave y lo dejó aislado sin avisar a nadie",
        order: 3,
      },
      {
        label:
          "Cambió su botellita por otra preparada la noche anterior y la dejó sobre el atril de memoria",
        order: 4,
      },
    ],
  },
};