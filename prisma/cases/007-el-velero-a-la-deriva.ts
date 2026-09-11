import type { CaseDef } from "./types";

/**
 * CASO 007 — El velero a la deriva
 * Dificultad: MEDIO | Muerte velada como accidente marítimo
 *
 * QUÉ OCURRIÓ REALMENTE
 * El capitán Celso Brandão desapareció en la travesía de cabotaje de la goleta
 * "María de los Cielos". El primer oficial Simón Ortiz discutió con él porque la
 * travesía cargaba 200 kilos de más: sobrepeso de carga frutera que arriesgaba
 * multas. El patrón quiso volver a puerto y Simón necesitaba llegar sí o sí para
 * pagar una deuda. Se pelearon en cubierta, durante una ola Simón lo empujó y
 * Celso cayó sin chaleco. Simón simuló el accidente: desplegó la balsa, dejó el
 * chaleco de repuesto, borró el registro de VHF y programó el rumbo automático.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Marcela: la esposa había iniciado el divorcio y tenía una póliza de seguro de
 *   vida recién renovada sobre Celso. Parece que cobra el seguro; es inocente.
 *   Estaba en el puerto esa noche, para discutir el divorcio, no para despedirse.
 * - Dante: el dueño del astillero instaló un equipo de navegación que fallaba y
 *   Celso lo había denunciado en su taller. Sabe que el rumbo grabado 'no es
 *   confiable' y prefiere que la culpa recaiga en el GPS. Inocente.
 * - Ranino: el socio de la flota es el prestamista de Simón. Sospechoso por la
 *   deuda y las amenazas de embargo, pero estaba en el puerto. Inocente.
 */
export const case007: CaseDef = {
  code: "CASO-007",
  slug: "el-velero-a-la-deriva",
  title: "El velero a la deriva",
  intro:
    "La goleta 'María de los Cielos' apareció a la deriva en el Canal Norte, la balsa de emergencia desplegada y un chaleco rojo colgado del púlpito. Del patrón, Celso Brandão, no hay rastro. El primer oficial jura que la tormenta de las 03:40 lo tiró por la borda y que se hizo todo lo que se podía hacer: el llamado de socorro, la balsa, las luces. Pero el velero navegaba solo con rumbo programado, en la radio no quedó ninguna llamada de emergencia y la bitácora tiene una letra que no es la del patrón. Alguien siguió a bordo después de la caída.",
  scene: "velero",
  victim: { name: "Celso Brandão", age: 54, job: "Patrón de la goleta 'María de los Cielos'" },
  place: "Canal Norte, a 8 millas de la costa",
  timeOfCrime: "03:40",
  difficulty: "MEDIO",
  order: 7,
  requiredLevel: 2,
  motive:
    "Simón Ortiz le debía $120.000 a Ranino y el pagaré vencía la semana de la travesía: tenía que llegar con la carga de fruta sí o sí para pagarle al acreedor. Celso Brandão detectó 200 kilos de sobrepeso que arriesgaban una multa y quiso dar la vuelta. Discutieron en cubierta y, durante una ola, el forcejeo tiró al patrón al agua sin chaleco.",
  method:
    "Simón simuló el accidente: desplegó la balsa a mano sin disparar el cartucho de CO2, colgó un chaleco de repuesto arrugado del púlpito, borró el tramo de VHF donde se debía registrar la llamada de socorro y programó el autopiloto a las 03:42 para que el velero siguiera a la deriva. La tripulación dormía en los camarotes y el último tramo de la bitácora quedó escrito con su letra.",
  resolutionText:
    "No fue la tormenta: fue un forcejeo. La 'María de los Cielos' cargaba 200 kilos de más y Celso quiso volver, pero Simón no podía volver: su pagaré vencía esa semana y la carga era su única paga. El autopiloto se programó a las 03:42, después de la caída; el VHF tiene un hueco de siete minutos sin socorro; la bitácora cambió de letra tras las 03:15; y la balsa se desplegó a mano, con el cartucho intacto y la funda cortada desde abajo. El chaleco colgado del púlpito era un repuesto arrugado: el chaleco personal de Celso quedó guardado en su camarote, porque cayó sin él. La póliza renovada de Marcela y el GPS defectuoso de Dante fueron dos distracciones inocentes. El que tenía prisa, deuda y la cabina para sí era el primer oficial: Simón Ortiz.",
  xpReward: 750,
  coinReward: 380,
  guiltyKey: "simon",

  suspects: [
    {
      key: "simon",
      name: "Simón Ortiz",
      age: 41,
      job: "Primer oficial",
      relationship: "Primer oficial de la goleta",
      bio: "Seis años al lado del patrón, la voz que cuenta la versión de la tormenta con la calma de quien la ensayó. Ayudó en la búsqueda desde el puerto y repite los horarios de memoria, como un parte.",
      avatarColor: "#3a4a5a",
      alibi: "Declara que a las 03:40 el patrón salió a proa a ajustar un cabo, que una ola lo barrió y que cayó sin chaleco. Dice que emitió el llamado de socorro, desplegó la balsa y dejó el chaleco rojo a modo de señal.",
      openingStatement:
        "Hice todo lo que se podía hacer esa noche. El patrón me enseñó a no largar un barco sin dejar la escena clara. La escena quedó clara.",
      order: 1,
      isGuilty: true,
    },
    {
      key: "marcela",
      name: "Marcela Brandão",
      age: 49,
      job: "Esposa del capitán",
      relationship: "Esposa de Celso",
      bio: "La mujer del patrón, separada de hecho y con un divorcio iniciado que nadie del puerto conoce del todo. Dice que esa noche fue al muelle 'a despedirse'. La cámara del muelle la marca discutiendo con Celso antes del zarpe.",
      avatarColor: "#4a3a5a",
      alibi: "Dice que llegó al muelle a las 21:00, le dejó un termo con café en la cabina y se fue llorando antes de que la tripulación la viera.",
      openingStatement:
        "Yo fui al muelle a despedirme, como hice en todos los zarpes de una vida en el mar. Que nadie convierta a una viuda en asesina por haber estado en su propio puerto.",
      order: 2,
    },
    {
      key: "dante",
      name: "Dante Ferreyra",
      age: 62,
      job: "Dueño del astillero",
      relationship: "Dueño del astillero que equipó la goleta",
      bio: "El del astillero, el que instaló el equipo de navegación que fallaba. Celso lo había denunciado por el defecto en su propio taller y en la oficina municipal. Si el rumbo grabado aparece 'roto', la culpa cae sobre él y su garantía.",
      avatarColor: "#5a4a2a",
      alibi: "Dice que durmió en su casa a media cuadra del puerto y que no firmó ninguna salida de lancha esa noche.",
      openingStatement:
        "Yo vendí e instalé el equipo, sí. Y el equipo fallaba, sí. Pero el GPS viejo no empuja a nadie al agua. Eso se los va a decir hasta la torre del puerto.",
      order: 3,
    },
    {
      key: "ranino",
      name: "Ranino Cáceres",
      age: 55,
      job: "Socio de la flota",
      relationship: "Socio financiero de la flota y acreedor de Simón",
      bio: "El socio que pone la plata y cobra los fletes. La mitad del muelle le debe una parte de la otra mitad. Simón le debe $120.000 con vencimiento esta semana, y Ranino no es hombre de esperar embarcaciones que no llegan.",
      avatarColor: "#2a4a3a",
      alibi: "Declara que estaba en su oficina del puerto hasta la 01:00 y después en su casa. No se embarcó en la travesía.",
      openingStatement:
        "Yo sostengo la flota y cobro cuando la fruta toca destino. Si el barco no llegaba, el primero en la fila del embargo era yo. ¿Usted cree que voy a hundir lo que me paga mi propia jubilación?",
      order: 4,
    },
  ],

  locations: [
    {
      key: "proa",
      name: "Cubierta de proa",
      description:
        "La cubierta delantera de la goleta, donde Simón dice que Celso cayó. La borda de babor está más limpia que el resto del barco, y el púlpito conserva un chaleco rojo colgado con demasiada prolijidad para la tormenta que se describe.",
      order: 1,
      actions: [
        {
          label: "Restregar la borda de babor",
          resultText:
            "La madera de la borda de babor recién lavada con agua dulce, no salada: alguien la pasó con la manguera a bordo. El frotis levanta rastros de sangre lavados, un rasguño superficial que se quiso borrar.",
          clueKey: "sangre-proa",
          order: 1,
        },
        {
          label: "Revisar el chaleco rojo del púlpito",
          resultText:
            "El chaleco colgado es un repuesto: está arrugado, con la hebilla torcida y sin uso reciente. El chaleco personal de Celso no está acá. Alguien colgó un chaleco que no era el del patrón.",
          clueKey: "chaleco-rojo",
          order: 2,
        },
        {
          label: "Inspeccionar la balsa de emergencia",
          resultText:
            "La balsa está desplegada pero el cartucho de CO2 no se disparó: la abrieron a mano con la palanca manual y la funda quedó cortada desde abajo. No se activó por presión de agua: se armó despacio, de a dos manos.",
          clueKey: "balsa",
          order: 3,
        },
      ],
    },
    {
      key: "cabina-mando",
      name: "Cabina de mando",
      description:
        "La timonera con la radio VHF, el panel del autopiloto y la mesa de cartas donde se lleva la bitácora. El orden es engañoso: los equipos trabajan, pero la noche dejó su marca en los archivos.",
      order: 2,
      actions: [
        {
          label: "Volcar el registro de VHF de la noche",
          resultText:
            "No hay ninguna llamada de socorro entre las 03:30 y las 04:00. Peor: el archivo muestra un hueco de siete minutos, borrado a mano desde el propio equipo. Alguien limpió la última conversación del patrón.",
          clueKey: "registro-vhf",
          order: 1,
        },
        {
          label: "Leer la programación del autopiloto",
          resultText:
            "El autopiloto se programó a las 03:42 desde el panel de mando, con destino de deriva hacia el canal. Diez minutos después del horario de la caída, alguien siguió en esta cabina decidiendo el rumbo.",
          clueKey: "rumbo-auto",
          order: 2,
        },
        {
          label: "Hojear la bitácora del patrón",
          resultText:
            "La última entrada, '03:15 rumbo casa, mar picado', está escrita con una letra distinta a la de las páginas anteriores. El tramo final de la bitácora lo escribió otra persona después de la caída.",
          clueKey: "diario-navio",
          order: 3,
        },
      ],
    },
    {
      key: "camarote-capitan",
      name: "Camarote del patrón",
      description:
        "El camarote de popa, cerrado, con la puerta sin forzar. Celso dormía con la puerta trabada desde adentro cuando estaba descansando, y esta noche se la encontró abierta.",
      order: 3,
      actions: [
        {
          label: "Buscar el chaleco personal de Celso",
          resultText:
            "El chaleco de trabajo del patrón está guardado en el armario, intacto y seco. Si cayó al agua, no fue con el chaleco puesto ni se lo llevó a proa: quedó acá, donde lo deja cada noche.",
        },
        {
          label: "Revisar los documentos del patrón",
          resultText:
            "Entre las cartas náuticas y los papeles del armario, una póliza de seguro de vida sobre Celso, renovada hace tres semanas, con beneficiaria: Marcela Brandão.",
          clueKey: "agenda-marcela",
          order: 1,
        },
      ],
    },
    {
      key: "puerto",
      name: "Muelle del puerto",
      description:
        "El frente del puerto donde amarra la flota de cabotaje: la oficina de Ranino, el taller de Dante y el punto donde se vio por última vez a Celso discutir antes de zarpar.",
      order: 4,
      actions: [
        {
          label: "Pedirle la libreta de cuentas a Ranino",
          resultText:
            "En la libreta del socio, entre los fletes por cobrar, un pagaré firmado por Simón Ortiz por $120.000 con vencimiento la misma semana de la travesía. Al lado, un anotador: 'si no llega, embargo'.",
          clueKey: "pagare-simon",
          order: 1,
        },
        {
          label: "Revisar el equipo de navegación retirado del taller",
          resultText:
            "El GPS del lote defectuoso que vendió Dante, con registro de devolución 'falla intermitente' y el sello de garantía sin sellar la puerta. Una falla real que Dante calla: la multa del taller lo hundiría.",
          clueKey: "gps-dante",
          order: 2,
        },
      ],
    },
  ],

  clues: [
    {
      key: "registro-vhf",
      title: "Registro de VHF de la noche",
      description:
        "No hay ninguna llamada de socorro entre las 03:30 y las 04:00, y el archivo muestra un hueco de siete minutos borrado a mano. Se recuperó parcialmente: la última voz registrada es la del patrón discutiendo, no pidiendo ayuda.",
      icon: "Radio",
      type: "DIGITAL",
      importance: "CLAVE",
      locationKey: "cabina-mando",
      implicatesSuspectKey: "simon",
    },
    {
      key: "rumbo-auto",
      title: "Rumbo automático configurado",
      description:
        "El autopiloto se programó a las 03:42 desde el panel de mando, con una trayectoria que mantiene la deriva hacia el canal. Alguien lo configuró DESPUÉS de la caída. El velero no se quedó solo: alguien siguió a bordo.",
      icon: "Navigation",
      type: "DIGITAL",
      importance: "ALTA",
      locationKey: "cabina-mando",
      implicatesSuspectKey: "simon",
    },
    {
      key: "diario-navio",
      title: "Bitácora del velero",
      description:
        "La última entrada, '03:15 rumbo casa, mar picado', no está escrita por el patrón: el tramo final de la bitácora tiene la letra del primer oficial. Alguien rellenó la historia después de la caída.",
      icon: "BookOpen",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "cabina-mando",
      implicatesSuspectKey: "simon",
    },
    {
      key: "chaleco-rojo",
      title: "Chaleco rojo del púlpito",
      description:
        "El chaleco colgado del púlpito es de repuesto: está arrugado, con la hebilla torcida, sin uso. El chaleco personal de Celso aparece guardado en su camarote, intacto. La señal naranja se colgó a propósito.",
      icon: "LifeBuoy",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "proa",
      implicatesSuspectKey: "simon",
    },
    {
      key: "balsa",
      title: "La balsa desplegada",
      description:
        "Desplegada, pero el cartucho de CO2 no se disparó: se la alimentó a mano con la palanca manual y la funda quedó cortada desde abajo. La balsa de emergencia se armó con calma, no por el gatillo de presión.",
      icon: "Sailing",
      type: "FISICA",
      importance: "MEDIA",
      locationKey: "proa",
      implicatesSuspectKey: "simon",
    },
    {
      key: "sangre-proa",
      title: "Manchas en la cubierta de proa",
      description:
        "La borda de babor fue lavada con agua dulce de la manguera, no con agua de mar. El frotis levanta rastros de sangre de un rasguño superficial que se intentó borrar. Alguien limpió la escena con la luz del temporal.",
      icon: "Droplet",
      type: "FISICA",
      importance: "ALTA",
      locationKey: "proa",
    },
    {
      key: "pagare-simon",
      title: "Pagaré de Ortíz",
      description:
        "En la libreta de cuentas de Ranino, un pagaré firmado por Simón Ortiz por $120.000, vencimiento la semana de la travesía, con la anotación 'si no llega, embargo' al margen. Simón necesitaba llegar con la carga sí o sí.",
      icon: "ScrollText",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "puerto",
      implicatesSuspectKey: "simon",
    },
    {
      key: "agenda-marcela",
      title: "La póliza nueva",
      description:
        "Una póliza de seguro de vida sobre Celso, renovada hace tres semanas en el fondo común del muelle, con beneficiaria Marcela Brandão. Parece un incentivo para quien cobra con la muerte... y es solo un papel renovado por inercia.",
      icon: "FileHeart",
      type: "DOCUMENTO",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "camarote-capitan",
      implicatesSuspectKey: "marcela",
    },
    {
      key: "gps-dante",
      title: "El GPS reclamado",
      description:
        "Un equipo de navegación con registro de devolución por 'falla intermitente', vendido originalmente por el taller de Dante, con el sello de garantía todavía en la caja. El problema técnico que Dante calla por miedo a la multa del taller.",
      icon: "Satellite",
      type: "FISICA",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "puerto",
      implicatesSuspectKey: "dante",
    },
  ],

  dialogues: [
    // ---------------- SIMON ----------------
    {
      suspectKey: "simon",
      question: "Hice todo lo que se podía hacer esa noche. La tormenta nos agarró, el patrón pisó mal y yo largué la balsa y el llamado.",
      order: 1,
      options: [
        {
          key: "simon_version",
          label: "Contame exactamente cómo cayó el patrón.",
          responseText:
            "Veníamos con mar picado desde las dos y cuarenta. Celso salió a proa a revisar un cabo suelto, se agarró del pasamano cuando la ola lo levantó y se fue. Yo estaba en la cabina, escuché el grito, salí y ya era tarde. El chaleco rojo quedó colgado del púlpito, como consta.",
        },
        {
          key: "simon_socorro",
          label: "¿Qué hiciste después, en el momento?",
          requiresOptionKey: "simon_version",
          responseText:
            "Emití el llamado de emergencia por VHF, desplegué la balsa y puse las luces de emergencia. Todo lo que se hace en un accidente se hizo esa noche, en orden y rápido. Después quedamos a la deriva esperando que alguien viniera.",
        },
        {
          key: "simon_ev_vhf",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el registro de VHF sin ninguna llamada de socorro",
          requiresClueKey: "registro-vhf",
          responseText:
            "¿El archivo está roto? Puede haberse cortado por el agua: esa noche la radio se mojó, cualquiera que haya navegado sabe que el VHF jode con el salitre. Pero el llamado se hizo, se los juro por la vida del patrón.",
        },
        {
          key: "simon_ev_rumbo",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el autopiloto programado a las 03:42",
          requiresClueKey: "rumbo-auto",
          responseText:
            "El rumbo automático... puede haber quedado puesto de antes, o del zarpe, o de la última corrección que hizo el patrón. Yo nunca toqué ese panel después de la caída. Si la máquina dice 03:42, la máquina se equivoca de reloj: yo estaba en cubierta mirando el agua.",
        },
      ],
    },
    {
      suspectKey: "simon",
      question: "El mar no perdona, pero el puerto tampoco. Llegar con la carga era todo para esta gente.",
      order: 2,
      options: [
        {
          key: "simon_carga",
          label: "¿Qué llevaba la 'María de los Cielos' esa noche?",
          responseText:
            "Fruta del sur, la última zafra, todo declarado por el muelle. Una carga noble: cajones de peras y manzanas que no aguantan una semana más en bodega. Por eso zarpamos con retraso y por eso había que llegar.",
        },
        {
          key: "simon_apuro",
          label: "Se te notaba apurado por llegar.",
          requiresOptionKey: "simon_carga",
          responseText:
            "La flota cobra contra entrega. Si la fruta llega podrida, no cobra nadie: ni la familia del patrón, ni la tripulación, ni el socio que puso la plata. El apuro no era mío, era de todos los que esperan en el muelle.",
        },
        {
          key: "simon_ev_pagare",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el pagaré de la libreta de Ranino",
          requiresClueKey: "pagare-simon",
          responseText:
            "...eso es un tema privado entre mi acreedor y yo, y no tiene nada que ver con una tormenta. Sí, le debía ciento veinte mil a Ranino y el vencimiento era esa semana. La deuda se pagaba en destino con el flete. Nunca pensé en resolverla con una cosa así.",
        },
        {
          key: "simon_patron",
          label: "¿Cómo estabas con Celso antes de zarpar?",
          responseText:
            "Teníamos diferencias de criterio, como en cualquier barco. En el mar las diferencias se hablan en cubierta y se terminan a los gritos o a los silencios. El patrón era un hombre de honor y yo lo respetaba. Que una discusión de mando terminara en un accidente no hace de mí otra cosa que un testigo desafortunado.",
        },
      ],
    },

    // ---------------- MARCELA ----------------
    {
      suspectKey: "marcela",
      question: "Yo fui al muelle a despedirme, como hice en todos los zarpes de una vida en el mar. Que no conviertan a una viuda en asesina por estar en su propio puerto.",
      order: 1,
      options: [
        {
          key: "marcela_puerto",
          label: "¿A qué hora estuviste en el muelle?",
          responseText:
            "Llegué a las nueve de la noche, antes del zarpe. Le dejé a Celso un termo con café caliente en la cabina y me fui sin anunciarme, para no entorpecer la maniobra. Lo vi subir a cubierta y me volví llorando a casa.",
        },
        {
          key: "marcela_divorcio",
          label: "La gente del puerto dice que ibas a divorciarte.",
          requiresOptionKey: "marcela_puerto",
          responseText:
            "Sí. Estábamos separados de hecho desde hacía meses y el papel oficial no salía. Eso fue así, y también es así que yo lo quería. En el mar uno se casa dos veces: una en el registro y otra cuando el barco no vuelve.",
        },
        {
          key: "marcela_ev_poliza",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la póliza de vida renovada hace tres semanas",
          requiresClueKey: "agenda-marcela",
          responseText:
            "La renovó la compañía del puerto, como todos los años, por costumbre del fondo común de la flota. Que haya vencido hace tres semanas no significa que yo quisiera cobrarla. Si hubiera querido esa plata, no habría pasado once años esperando que él volviera de cada viaje.",
        },
        {
          key: "marcela_noche",
          label: "¿Hablaron esa noche, al teléfono?",
          responseText:
            "A las diez sonó el mío y cortaron. Un mensaje, nada más. Celso nunca fue de llamar desde el barco: decía que el mar era para los que saben esperar. Dormí con el teléfono en la mano, como todas las noches de temporal.",
        },
      ],
    },
    {
      suspectKey: "marcela",
      question: "Celso vivía para ese casco. Yo quería el divorcio, no la tragedia. Son dos cosas muy distintas.",
      order: 2,
      options: [
        {
          key: "marcela_discusion",
          label: "La cámara del muelle los marca discutiendo antes del zarpe.",
          requiresOptionKey: "marcela_divorcio",
          responseText:
            "Sí, discutimos. Fui a decirle que firmara los papeles de una vez y nos peleamos junto al muelle, a los gritos, como dos tontos. Se subió caliente al barco y partió. Esa es la verdad que no quise decir porque me da vergüenza, no porque esconda otra cosa.",
        },
        {
          key: "marcela_astillero",
          label: "¿Qué opinaba Celso del equipo que le instaló Dante?",
          responseText:
            "Celso reclamaba por el GPS viejo desde hace meses, decía que perdía señal en mar abierto. Lo denunció en el taller y en la oficina municipal; con Dante se llevaba mal desde eso. El GPS era el único equipo del barco del que mi marido desconfiaba, y con razón.",
        },
        {
          key: "marcela_ev_sangre",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los rastros de sangre lavados en la borda",
          requiresClueKey: "sangre-proa",
          responseText:
            "¿Sangre lavada con la manguera, a bordo? Celso tenía un corte en la mano derecha desde hacía dos días, se lo hizo con la sierra del taller arreglando un motor. Si hay sangre de él en el barco, puede ser de eso mismo. Pero que esté lavada con agua dulce, y no con la lluvia... eso me da tanto miedo que no lo quiero pensar.",
        },
      ],
    },

    // ---------------- DANTE ----------------
    {
      suspectKey: "dante",
      question: "Yo vendí e instalé el equipo, sí. Y el equipo fallaba, sí. Pero el GPS viejo no empuja a nadie al agua.",
      order: 1,
      options: [
        {
          key: "dante_equipo",
          label: "¿Qué le pasaba al GPS de la 'María'?",
          responseText:
            "Perdía señal en mar abierto, un defecto del lote completo. Lo vendí yo, lo instalé yo, y lo reclamaban en el registro del taller como devolución. Cuando el barco apareció a la deriva, mi primer pensamiento fue que me iban a culpar a mí por la navegación.",
        },
        {
          key: "dante_denuncia",
          label: "Celso te denunció por el defecto, ¿no?",
          requiresOptionKey: "dante_equipo",
          responseText:
            "Sí, en la oficina municipal y en mi propio taller. Me tembló la garantía encima y el seguro del astillero. Si el GPS aparecía como la causa, la culpa era mía por negligencia y la multa me hundía. Por eso no dije enseguida que el equipo era defectuoso.",
        },
        {
          key: "dante_ev_gps",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el equipo con el sello de garantía y el registro de devolución",
          requiresClueKey: "gps-dante",
          responseText:
            "Es el equipo, con el registro de devolución y el sello sin romper. Sí, es el lote defectuoso. Callé la parte de la garantía porque la multa del taller me mataba. Pero un GPS que pierde señal no desata un temporal ni tira a un hombre por la borda. Eso lo hace una mano.",
        },
        {
          key: "dante_ev_rumbo",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el autopiloto programado a las 03:42",
          requiresClueKey: "rumbo-auto",
          responseText:
            "El rumbo que quedó grabado no es confiable, cualquiera en el muelle lo sabe: ese GPS se perdía. Pero mire la hora: las 03:42, diez minutos después de la caída. El autopiloto no se programa solo y no se programa con un GPS roto: se programa con una mano puesta en el panel, en la cabina, a las 03:42.",
        },
      ],
    },
    {
      suspectKey: "dante",
      question: "Yo arreglo cascos y cobro por arreglos. La flota es de Ranino y la goleta era el orgullo de Celso. Me quedó la deuda y la culpa del GPS encima.",
      order: 2,
      options: [
        {
          key: "dante_noche",
          label: "¿Dónde estuviste vos la madrugada del accidente?",
          responseText:
            "En casa, durmiendo, a media cuadra del puerto. Si quiere, el guardia del muelle le va a confirmar que mi lancha no salió esa noche y que mi camioneta estuvo estacionada hasta el amanecer. Yo puedo acompañar la caída del GPS, no la de un hombre.",
        },
        {
          key: "dante_flota",
          label: "¿Cómo te llevabas con la flota de Ranino?",
          responseText:
            "Ranino me paga los arreglos y me debe la mitad. Celso era mi mejor cliente hasta que el GPS se convirtió en mi cruzada. La última vez que nos vimos, él me dijo que el equipo se lo cambiara gratis o te denunciaba. Cambiárselo gratis no podía, y la denuncia llegó igual.",
        },
        {
          key: "dante_ev_balsa",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la balsa abierta a mano, sin disparo de CO2",
          requiresClueKey: "balsa",
          responseText:
            "La balsa se abre sola con el cartucho y el agua: tira el pasador y chau. Que esté abierta a mano, con la palanca, y con la funda cortada desde abajo no es obra de una emergencia: es obra de alguien que tenía un barco que hundir y quiso que pareciera un accidente. Yo no estuve a bordo para abrir ni la funda.",
        },
      ],
    },

    // ---------------- RANINO ----------------
    {
      suspectKey: "ranino",
      question: "Yo sostengo la flota y cobro cuando la fruta toca destino. Si el barco no llegaba, el primero en la fila del embargo era yo.",
      order: 1,
      options: [
        {
          key: "ranino_pagares",
          label: "Contame de los pagarés.",
          responseText:
            "Todo el que mueve fruta debe plata en este muelle, es la ley del negocio. Yo financio la operación completa: el casco, el flete, el combustible. Y cobro cuando la carga se entrega, no antes. Por eso un barco que no llega. a mí no me conviene ni de lejos.",
        },
        {
          key: "ranino_ev_pagare",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el pagaré de Simón con tu libreta",
          requiresClueKey: "pagare-simon",
          responseText:
            "Ortiz me debía ciento veinte mil, con vencimiento esa misma semana. Sí, lo tengo anotado y con la amenaza de embargo al margen, porque soy así de seco con los números. Iba a pagarme con el flete de la travesía. Si el barco no llegaba, la deuda quedaba en el agua... y yo perdía lo mío, no ganaba nada. El que tenía que llegar con esa carga era él.",
        },
        {
          key: "ranino_amenaza",
          label: "¿Lo amenazaste con el embargo?",
          requiresOptionKey: "ranino_ev_pagare",
          responseText:
            "Le dije que la deuda se cobra, no que nadie desapareciera. La plata no mata a la gente, inspector. Si quisiera cobrarme algo de esa forma, elegiría no ser el acreedor del primer oficial del barco hundido. Es el peor negocio del mundo.",
        },
        {
          key: "ranino_busqueda",
          label: "¿Quién organizó la búsqueda?",
          responseText:
            "Al amanecer mandé mi lancha de apoyo y llamé a la flota entera. El que mueve plata en este puerto y no mueve la lancha cuando un patrón cae al agua, no trabaja más en el gremio. Aún no aparece el cuerpo, y eso es lo que más me duele.",
        },
      ],
    },
    {
      suspectKey: "ranino",
      question: "Yo no maté a nadie. Pero conozco a todos los que suben a mis barcos, y esa noche había una sola persona en la cabina con prisa.",
      order: 2,
      options: [
        {
          key: "ranino_flota",
          label: "¿Quién iba en la 'María' esa noche?",
          responseText:
            "El patrón, el primer oficial y dos muchachos de muelle que duermen en proa. La goleta carga cinco cuando quiere; salió liviana, con retraso y con la carga completa. Por el peso, la hicimos pesar dos veces: no sobraba ni un cajón... bueno, eso creía el muelle.",
        },
        {
          key: "ranino_sobrepeso",
          label: "¿Había sobrepeso en la carga?",
          requiresOptionKey: "ranino_flota",
          responseText:
            "Escuché de boca del patrón, a los gritos en el muelle, que la travesía iba con doscientos kilos de más y que eso era una multa fija. Celso quería volver a rearmar el flete, y Ortiz se puso del color del pergamino: sin entrega no había paga. Esa discusión la escucharon hasta las gaviotas.",
        },
        {
          key: "ranino_ev_poliza",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la póliza de Marcela recién renovada",
          requiresClueKey: "agenda-marcela",
          responseText:
            "¿La póliza? Yo le dije a Marcela que no jugara con esas cosas, que la flota tiene seguro de casco y que un seguro de vida sobre un marido en una travesía es de mal augurio. Pero que justo la renueven en diciembre, como todos los años, no la convierte en asesina: Marcela no sabe ni dónde queda la proa de una goleta.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "21:00",
      text: "La 'María de los Cielos' zarpa con retraso, con la carga de fruta completa y una discusión fresca entre el patrón y el primer oficial.",
      isPublic: true,
    },
    {
      time: "02:40",
      text: "Entra el temporal: mar picado y viento en contra del canal.",
      isPublic: true,
    },
    {
      time: "03:15",
      text: "Última entrada de la bitácora: 'rumbo casa, mar picado'. Ya no la escribe el patrón.",
      revealedByClueKey: "diario-navio",
    },
    {
      time: "03:40",
      text: "Hora de la caída según la versión de Simón: el patrón sale a proa y una ola lo barre.",
      revealedByOptionKey: "simon_version",
    },
    {
      time: "03:42",
      text: "El autopiloto se programa desde la cabina de mando. Diez minutos después de la caída, alguien sigue a bordo decidiendo el rumbo.",
      revealedByClueKey: "rumbo-auto",
    },
    {
      time: "03:49",
      text: "Hueco de siete minutos en el registro de VHF, borrado a mano. No hay ninguna llamada de socorro.",
      revealedByClueKey: "registro-vhf",
    },
    {
      time: "06:15",
      text: "La 'María de los Cielos' aparece a la deriva en el Canal Norte, con la balsa desplegada y el chaleco rojo en el púlpito.",
      isPublic: true,
    },
    {
      time: "09:00",
      text: "La flota de búsqueda llega al lugar. Del patrón no hay rastro.",
      isPublic: true,
    },
  ],

  deductions: [
    {
      title: "La balsa se armó a mano: fue montaje",
      text: "La balsa de emergencia se desplegó con la palanca manual y la funda cortada desde abajo, sin que el cartucho de CO2 se disparara. El chaleco del púlpito era un repuesto arrugado: el chaleco personal de Celso quedó intacto en su camarote. Las señales de emergencia se armaron con calma, después de la tragedia.",
      requiredClueKeys: ["balsa", "chaleco-rojo"],
      order: 1,
    },
    {
      title: "Nadie pidió ayuda y alguien rellenó la historia",
      text: "El registro de VHF no tiene ninguna llamada de socorro y muestra un hueco de siete minutos borrados. La bitácora, que el patrón escribía sin falta, cambia de letra después de las 03:15. No hubo socorro real, pero sí hubo alguien que continuó el diario del barco.",
      requiredClueKeys: ["registro-vhf", "diario-navio"],
      requiredOptionKeys: ["simon_socorro"],
      order: 2,
    },
    {
      title: "El velero no se quedó solo tras la caída",
      text: "El autopiloto se programó a las 03:42, después del horario de la caída, y la borda de babor apareció lavada con agua dulce de manguera. Alguien siguió a bordo, dirigió la deriva y limpió la escena con la luz del temporal. Un accidente no se limpia ni se programa.",
      requiredClueKeys: ["rumbo-auto", "sangre-proa"],
      order: 3,
    },
    {
      title: "El que tenía urgencia era Simón",
      text: "El pagaré de $120.000 vencía la semana de la travesía y el sobrepeso de la carga arriesgaba la multa y la entrega. El patrón quería volver a rearmar el flete; el primer oficial tenía que llegar sí o sí. La discusión en el muelle y la deuda dibujan la única prisa a bordo.",
      requiredClueKeys: ["pagare-simon"],
      requiredOptionKeys: ["ranino_sobrepeso", "simon_ev_pagare"],
      order: 4,
    },
    {
      title: "Las distracciones inocentes del puerto",
      text: "La póliza renovada de Marcela es una costumbre anual del muelle, y el GPS defectuoso de Dante es una falla técnica que solo le costaría una multa al astillero. Ninguna de las dos explica un autopiloto programado a las 03:42 ni una balsa abierta a mano: solo la persona que seguía en la cabina explica eso.",
      requiredClueKeys: ["agenda-marcela", "gps-dante", "rumbo-auto"],
      requiredOptionKeys: ["marcela_ev_poliza", "dante_ev_gps"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      { label: "Simón debía llegar con la carga o perdía todo con su acreedor; discutió con el patrón y el forcejeo lo tiró al agua", isCorrect: true, order: 1 },
      { label: "Quería heredar la goleta y la flota a través de la póliza de accidentes", order: 2 },
      { label: "Le pagaba a Dante para que el GPS defectuoso hundiera el barco y cobrar el seguro del casco", order: 3 },
      { label: "Discutió con el patrón por el reparto de un cargamento de fruta contrabandeada", order: 4 },
    ],
    methods: [
      { label: "Lo empujó durante la tormenta y simuló el accidente desplegando la balsa y borrando el VHF", isCorrect: true, order: 1 },
      { label: "Lo dejó atado en el camarote y armó la escena de la caída con la tripulación dormida", order: 2 },
      { label: "Lanzó la balsa con la palanca sobre él en el temporal y cargó la culpa sobre el GPS defectuoso", order: 3 },
      { label: "Lo noqueó en proa y lo arrojó por la borda aprovechando la oscuridad del temporal", order: 4 },
    ],
  },
};