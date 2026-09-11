import type { CaseDef } from "./types";

/**
 * CASO 002 — La caja fuerte vacía
 * Dificultad: MEDIO | Fraude / robo simulado
 *
 * QUÉ OCURRIÓ REALMENTE
 * Damián Ferré, contador, venía desviando fondos con facturas truchas. El primer
 * viernes de cada mes la caja fuerte de la casa de remates "Casas Blancas" se
 * llena con el efectivo de la semana. Damián aprobó (como contable) el pedido de
 * la empresa de seguridad para cambiar el DVR el viernes por la noche, sabiendo
 * que las cámaras del sótano quedarían apagadas 21:40–22:10. A las 22:05 abrió la
 * caja con el código (lo tenía escrito en un apunte viejo), retiró el efectivo,
 * lo escondió en el falso techo del depósito de embalajes y simuló la rotura de
 * la ventana del sótano golpeándola DESDE ADENTRO, para que pareciera un robo
 * externo.
 *
 * QUIÉN NO ES CULPABLE (y por qué parece sospechoso)
 * - Vilma: cajera. Viene haciendo fraude de caja chica (montos chicos) desde hace
 *   meses. Su miedo no es el robo del viernes: es que la auditoría destape su
 *   pilfering. Inocente del robo grande.
 * - Matías: técnico de RG. Instaló la ventana de mantenimiento porque su empresa
 *   iba a cambiar el DVR. Su secreto: esa madrugada 'extra' la usó para revisar
 *   un rig de criptominería en la sala de servidores. Inexplicablemente en el
 *   edificio a la hora del robo, pero sin relación.
 * - Luciano: jefe de seguridad. Tiene la anotación '1924' (el código) en el
 *   puesto, negligente pero real. Estuvo viendo fútbol solo en la sala de guardia.
 * - Clara: hija del dueño y gerenta. Abrió la caja a las 20:10 para recuperar un
 *   regalo que le había guardado a su padre. No quiere que él se entere: por eso
 *   niega haber estado en el sótano esa noche.
 */
export const case002: CaseDef = {
  code: "CASO-002",
  slug: "la-caja-fuerte-vacia",
  title: "La caja fuerte vacía",
  intro:
    "Al abrir, la caja fuerte de Casas Blancas —$480.000 en efectivo— estaba vacía. La ventana del sótano, rota. La alarma, muda. El director de la casa insiste en que sin llave y sin código no se puede entrar, y en esa bóveda guardaban el efectivo del primer viernes de cada mes. Anoche, justo anoche, las cámaras del pasillo se quedaron 'en mantenimiento' durante media hora. Ahora hay que descubrir si fue un ladrón, un empleado o los dos a la vez.",
  scene: "caja",
  victim: { name: "Eugenio Casas (robo a Casas Blancas)", age: 72, job: "Fundador de la casa de remates" },
  place: "Casas Blancas, sótano — sala de bóveda",
  timeOfCrime: "22:05",
  difficulty: "MEDIO",
  order: 2,
  requiredLevel: 1,
  motive:
    "Damián Ferré venía desfalcando la caja con facturas falsas hacía meses y necesitaba tapar el agujero antes del cierre anual. El efectivo del primer viernes lo dejaba con la caja completa por delante. Armó el robo para culpar a un extraño y quedarse con el dinero de una sola vez.",
  method:
    "Aprobó la ventana de mantenimiento de cámaras del viernes a la noche (21:40–22:10), entró al sótano con el código 1924 anotado en su vieja agenda, abrió la caja a las 22:05, retiró el efectivo, lo ocultó en el falso techo del depósito y rompió la ventana desde adentro con el martillo del taller para simular un robo externo.",
  resolutionText:
    "La rotura de la ventana caía hacia afuera: se golpeó desde adentro. El dinero nunca salió del edificio: estaba en el falso techo del depósito. Las aperturas del log (17:30 Vilma, 20:10 Clara y 22:05 sin cámara) mostraban que quien abrió la caja en el robo usó el código exacto, sin errores, en la única media hora sin cámaras. Quien sabía del horario de mantenimiento, quien firmó el presupuesto del cambio de DVR y quien tenía la caja al día era el contador: Damián Ferré. Vilma solo ocultaba su fraude de caja chica; Matías, su rig; Luciano, su negligencia; y Clara, un regalo.",
  xpReward: 650,
  coinReward: 320,
  guiltyKey: "damian",

  suspects: [
    {
      key: "damian",
      name: "Damián Ferré",
      age: 40,
      job: "Contador",
      relationship: "Responsable del flujo de caja",
      bio: "Doce años en Casas Blancas, el hombre de los números. Conoce a la perfección cuándo se llena la caja, quién aprueba cada orden y qué firmas se cruzan en el edificio.",
      avatarColor: "#8b3a3a",
      alibi: "Dice que se fue a las 19:30 y que pasó la noche en su casa con la gente de la mudanza de su suegra. Punto.",
      openingStatement:
        "Si tengo que explicar una vez más que la caja se llena el primer viernes y que yo no tengo la llave... el contador mira los números, no toca el efectivo.",
      order: 1,
    },
    {
      key: "vilma",
      name: "Vilma Roca",
      age: 28,
      job: "Cajera / tesorera",
      relationship: "Hacía el corte de caja del viernes",
      bio: "La última persona que tocó el efectivo antes de que entrara a la bóveda. Seis meses en el puesto. Palpita nerviosa cuando hablan de auditorías, y hoy más que nunca.",
      avatarColor: "#4a3a5a",
      alibi: "Hizo el corte de caja a las 17:30 y se fue, dice, 'directo a la facultad'. Nadie la vio salir después de la 17:45.",
      openingStatement:
        "Yo dejé la caja completa, la conté dos veces como me enseñaron. Si falta plata, no fue en mi horario.",
      order: 2,
    },
    {
      key: "matias",
      name: "Matías Quiroga",
      age: 31,
      job: "Técnico de seguridad (contratado)",
      relationship: "Empresa RG, encargado del cambio de DVR",
      bio: "El técnico que programó la 'ventana de mantenimiento' de las cámaras. Estuvo físicamente en el edificio hasta las 21:15, media hora antes de que empezara el apagón de cámaras.",
      avatarColor: "#3a5a4a",
      alibi: "Declaró que el cambio de DVR se hizo al mediodía y que a la noche no volvió nunca.",
      openingStatement:
        "El DVR lo cambié a las doce y quedó andando. La ventana del viernes a la noche era una actualización remota del sistema, no hace falta presencia.",
      order: 3,
    },
    {
      key: "luciano",
      name: "Luciano Prado",
      age: 52,
      job: "Jefe de seguridad",
      relationship: "Dueño de las llaves y del puesto de guardia",
      bio: "Treinta años cuidando la puerta. Escribe los códigos en papeles de la oficina porque 'somos de la misma familia'. A la hora del robo estaba solo, mirando el partido en la sala de guardia.",
      avatarColor: "#5a4a2a",
      alibi: "Dice que no se movió del puesto de guardia entre las 21:00 y las 23:00. El partido terminó 2 a 1.",
      openingStatement:
        "Yo abro a las siete, cierro a las siete, y los viernes los guardias jóvenes miran el fútbol conmigo en la salita. No me muevo de ahí.",
      order: 4,
    },
    {
      key: "clara",
      name: "Clara Portela",
      age: 34,
      job: "Gerenta comercial",
      relationship: "Hija del fundador",
      bio: "La hija de Eugenio quiere reestructurar la casa y venderla. Discute con su padre por eso desde hace meses. Fue vista entrando al edificio la noche del viernes a eso de las 20:00.",
      avatarColor: "#3a4a5a",
      alibi: "Dijo que no volvió a la casa el viernes a la noche y que vio a su padre al mediodía solamente.",
      openingStatement:
        "Para que quede claro: yo quiero vender esta empresa, no vaciarla. Y a mi padre no me lo tocan.",
      order: 5,
    },
  ],

  locations: [
    {
      key: "boveda",
      name: "Sala de la bóveda",
      description:
        "La caja fuerte abierta contra la pared, la ventana rota a su izquierda y el charco de vidrios en el piso. El silencio del sótano se siente como una confesión.",
      order: 1,
      actions: [
        {
          label: "Examinar la rotura de la ventana",
          resultText:
            "Los fragmentos de vidrio están del lado de AFUERA del edificio y uno rebotó contra la pared interna: la ventana se golpeó desde adentro. No hay rastros de palanca en el marco.",
          clueKey: "ventana-rotura",
          order: 1,
        },
        {
          label: "Revisar la caja fuerte por restos",
          resultText:
            "En el borde interior de la puerta, un recorte de papel de la fecha del día: un albarán de depósito de la semana pasada que 'no tendría que estar ahí'.",
          clueKey: "albaran-clara",
          order: 2,
        },
        {
          label: "Revisar el acceso al sótano",
          resultText:
            "La puerta del sótano no está forzada: se abrió con tarjeta. El log de lecturas de la noche del viernes se guarda en la oficina del jefe de seguridad.",
          order: 3,
        },
      ],
    },
    {
      key: "deposito",
      name: "Depósito de embalajes",
      description:
        "Cajas, papel burbuja y un techo de paneles de yeso donde alguien guardó algo que no debería guardarse. El polvo del piso está alterado en línea recta.",
      order: 2,
      actions: [
        {
          label: "Seguir el rastro de polvo",
          resultText:
            "Las marcas en el polvo del piso vienen del sótano y se cortan justo debajo de los paneles del falso techo. Alguien caminó cargando algo pesado.",
          clueKey: "esquirlas",
          order: 1,
        },
        {
          label: "Correr el panel del falso techo",
          resultText:
            "El panel cede como un cajón gastado. Adentro, un bolso de lona con la totalidad del efectivo: los $480.000 completos. El dinero jamás salió del edificio.",
          clueKey: "panel-techo",
          order: 2,
        },
      ],
    },
    {
      key: "absolutos",
      name: "Oficinas administrativas",
      description:
        "Cuentas por pagar, el archivo de la casa y el escritorio del contador. Nadie le prestó atención al papelero del contador esta semana.",
      order: 3,
      actions: [
        {
          label: "Revisar el escritorio del contador",
          resultText:
            "Entre los papeles del contador, una orden de pago aprobada para RG (la empresa de seguridad) con fecha del viernes y el detalle 'cambio de DVR y actualización de sistema'. La firma es suya.",
          clueKey: "orden-rg",
          order: 1,
        },
        {
          label: "Pedir el registro de aperturas de la caja",
          resultText:
            "El log del viernes: 17:30 (Vilma, corte de caja), 20:10 (Clara, sin comentario) y 22:05 (sin cámara, sin nombre). Ningún intento fallido en todo el mes. Quien abrió a las 22:05 conocía el código exacto.",
          clueKey: "log-codigo",
          order: 2,
        },
        {
          label: "Pedir los movimientos del mes",
          resultText:
            "Los asientos cierran salvo por gastos menores en 'varios', de montos chicos y frecuentes, aumentando desde marzo. Alguien chupa la caja chica, pero no de a 480 mil.",
          clueKey: "caja-chica",
          order: 3,
        },
      ],
    },
    {
      key: "sala-seguridad",
      name: "Puesto de guardia",
      description:
        "La salita oscura de los cuidadores con el televisor, la radio y una libreta mugrienta donde Luciano anota todo. La ventana de mantenimiento está anotada al pie de la página.",
      order: 4,
      actions: [
        {
          label: "Hojear la libreta del guardia",
          resultText:
            "El viernes: '20:10 cámara pasillo: sale la piba de gerencia con una caja envuelta. Raro pero no es mi problema.' Debajo, garabateado: '1924'.",
          clueKey: "anotacion-1924",
          order: 1,
        },
        {
          label: "Pedir el registro de tarjetas de la noche",
          resultText:
            "21:15 Matías paga salida con su tarjeta de RG... y vuelve a entrar a las 21:49 con una tarjeta de 'servicios técnicos' que caducó hace cuatro meses.",
          clueKey: "acceso-matias",
          order: 2,
        },
        {
          label: "Revisar la sala de servidores",
          resultText:
            "Detrás del rack, un rig de criptominería improvisado conectado a la corriente del servidor. Caliente, recién apagado. Nadie responde quién es el dueño.",
          clueKey: "rig-minado",
          order: 3,
        },
      ],
    },
  ],

  clues: [
    {
      key: "ventana-rotura",
      title: "Rotura de la ventana desde adentro",
      description:
        "Los fragmentos cayeron hacia afuera y el rebote dejó una marca en la pared interna. La ventana se rompió con un golpe seco desde el interior: el robo 'externo' fue montado.",
      icon: "Hammer",
      type: "FISICA",
      importance: "ALTA",
      locationKey: "boveda",
    },
    {
      key: "albaran-clara",
      title: "Albarán de depósito de la semana pasada",
      description:
        "En el borde de la puerta de la caja, un albarán del banco con fecha de la semana anterior y una caja envuelta en papel de regalo. Alguien guardó una caja en la bóveda días atrás.",
      icon: "Package",
      type: "DOCUMENTO",
      importance: "MEDIA",
      locationKey: "boveda",
      implicatesSuspectKey: "clara",
    },
    {
      key: "esquirlas",
      title: "Rastro de polvo y esquirlas",
      description:
        "Las marcas de arrastre cortan en el polvo del depósito justo bajo un panel del techo, con minúsculas esquirlas de vidrio sobre el panel. El camino fue: bóveda, depósito, techo.",
      icon: "Footprints",
      type: "FISICA",
      importance: "BAJA",
      locationKey: "deposito",
    },
    {
      key: "panel-techo",
      title: "Los 480.000 en el falso techo",
      description:
        "El bolso de lona con todo el efectivo, intacto, escondido en el falso techo del depósito. El robo fue un montaje: el dinero nunca salió del edificio y el ladrón lo dejó bien guardado para recuperarlo.",
      icon: "Wallet",
      type: "FISICA",
      importance: "CLAVE",
      locationKey: "deposito",
    },
    {
      key: "orden-rg",
      title: "Orden aprobada para el cambio de DVR",
      description:
        "Orden de pago a la empresa RG firmada por el contador con fecha del viernes: 'cambio de DVR y actualización de sistema, ventana 21:40–22:10'. Quien aprobó la ventana sabía que las cámaras del sótano estarían mudas.",
      icon: "FileText",
      type: "DOCUMENTO",
      importance: "ALTA",
      locationKey: "absolutos",
      implicatesSuspectKey: "damian",
    },
    {
      key: "log-codigo",
      title: "Registro de aperturas de la caja (viernes)",
      description:
        "17:30 Vilma; 20:10 Clara; 22:05 sin nombre ni cámara. Sin intentos fallidos en todo el mes: quien abrió a las 22:05 usó el código exacto. El código no se tira a la suerte.",
      icon: "KeyRound",
      type: "DIGITAL",
      importance: "CLAVE",
      locationKey: "absolutos",
    },
    {
      key: "caja-chica",
      title: "Asientos irregulares de caja chica",
      description:
        "Gastos menores en 'varios', montos chicos y constantes desde marzo. Es el patrón clásico de un fraude de caja chica de alguien de tesorería, no del asalto grande.",
      icon: "Receipt",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "absolutos",
      implicatesSuspectKey: "vilma",
    },
    {
      key: "anotacion-1924",
      title: "El apunte '1924' del guardia",
      description:
        "En la libreta del puesto, garabateado junto al parte del viernes: '1924'. Es el código de la caja, el año de fundación. Luciano lo tiene escrito donde cualquiera del edificio puede verlo hace años.",
      icon: "ScrollText",
      type: "DOCUMENTO",
      importance: "BAJA",
      isRedHerring: true,
      locationKey: "sala-seguridad",
      implicatesSuspectKey: "luciano",
    },
    {
      key: "acceso-matias",
      title: "Reingreso de Matías a las 21:49",
      description:
        "Matías firmó salida a las 21:15... y volvió a entrar a las 21:49 con una tarjeta de 'servicios técnicos' vencida. Estuvo en el edificio mientras arrancaba la ventana de las cámaras.",
      icon: "ScanLine",
      type: "DIGITAL",
      importance: "MEDIA",
      locationKey: "sala-seguridad",
      implicatesSuspectKey: "matias",
    },
    {
      key: "rig-minado",
      title: "Rig de criptominería en el servidor",
      description:
        "Un rig improvisado, caliente al tacto, conectado a la corriente del servidor y a la red del edificio. Alguien lo usaba de noche y lo apagó apurado. Explica por qué estuvo alguien 'sin motivo' en el edificio.",
      icon: "Cpu",
      type: "FISICA",
      importance: "MEDIA",
      isRedHerring: true,
      locationKey: "sala-seguridad",
      implicatesSuspectKey: "matias",
    },
  ],

  dialogues: [
    // ---------------- DAMIAN ----------------
    {
      suspectKey: "damian",
      question: "Contaduría no firma cheques ni toca plata: firma papeles. Si hay un agujero, está en la caja, no en mi escritorio.",
      order: 1,
      options: [
        {
          key: "damian_caja",
          label: "¿Cuándo se llena la caja fuerte y quién entra?",
          responseText:
            "El primer viernes de cada mes entra el efectivo de la semana y se queda hasta el lunes. Entran tres personas con código: Vilma, el jefe de seguridad y la gerenta. Yo no tengo el código, nunca lo tuve.",
        },
        {
          key: "damian_rg",
          label: "¿Quién aprobó la ventana de mantenimiento de las cámaras?",
          requiresOptionKey: "damian_caja",
          responseText:
            "La orden llegó de la empresa de seguridad por canales normales y la aprobó... mmm, la aprobé yo, el contador aprueba los pagos. Cambio de DVR y actualización, una cosa de rutina que se hace una vez por año.",
        },
        {
          key: "damian_noche",
          label: "¿Dónde estuviste anoche entre las 21 y las 23?",
          responseText:
            "Salí del edificio a las siete y media. Después, en casa de mi suegra, ayudando con la mudanza hasta tarde. Mi cuñado puede confirmarlo.",
        },
        {
          key: "damian_1924",
          label: "¿Tenías idea de que el código de la bóveda es una fecha?",
          requiresOptionKey: "damian_caja",
          responseText:
            "Es sabido que el patrón usa el año de fundación. Yo no entro a la bóveda, no tendría que saberlo, y sin embargo lo sé como lo sabe medio edificio. El problema de esta casa es justamente ese descuido.",
        },
        {
          key: "damian_ev_orden",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la orden firmada para el cambio de DVR",
          requiresClueKey: "orden-rg",
          responseText:
            "Es mi firma, es el pago a RG. Aprobar un cambio de DVR no es planear un robo: es la tercera vez este año que se cambian esos equipos. Si la sospecha es que el contador aprovechó su firma, me hago cargo del descuido, no del dinero.",
        },
        {
          key: "damian_ev_bolso",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el efectivo apareció en el falso techo",
          requiresClueKey: "panel-techo",
          responseText:
            "¿Apareció completo y dentro del edificio? Entonces no hubo robo externo: hubo un montaje. Y un montaje lo arma alguien que no quiere que el dinero salga... o alguien que se quedó con las manos vacías y espera recuperarlo.",
        },
      ],
    },

    // ---------------- VILMA ----------------
    {
      suspectKey: "vilma",
      question: "Uno trabaja con la plata de los demás y cuando falta, siempre es la cajera. Lo tengo asumido desde el primer día.",
      order: 1,
      options: [
        {
          key: "vilma_corte",
          label: "Contame el corte de caja del viernes.",
          responseText:
            "A las cinco y media conté el efectivo, armé los fajos, los pesé y los metí en la caja con mis manos. Cerré y marqué el movimiento. No hubo apuro ni nada raro: fue el viernes de todos los viernes.",
        },
        {
          key: "vilma_salida",
          label: "¿A qué hora te fuiste?",
          responseText:
            "Diez para las seis estaba saliendo por la puerta de calle, directo a la facultad. Pueden preguntarle a la profesora si quieren, me vio llegar tarde, como siempre.",
        },
        {
          key: "vilma_ev_caja",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: los asientos irregulares de caja chica",
          requiresClueKey: "caja-chica",
          responseText:
            "Eso... eso es 'varios', gastos menores, lo pagan con el fondo de caja chica y se anotan así. Cualquiera de tesorería lo sabe. ¿Usted está insinuando que me llevaba un poquito? Porque la auditoría va a mostrar que cada peso está... la mayoría de los pesos está. No me haga decir cosas que no quiero decir en voz alta.",
        },
        {
          key: "vilma_ev_bolso",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el efectivo en el falso techo",
          requiresClueKey: "panel-techo",
          responseText:
            "¿Apareció todo y adentro? Ah... ¿y entonces quién rompió la ventana y por qué mierda no se lo llevó? Perdón. Pero si hubiera sido yo, habría escondido la plata afuera, no en el techo de mi propio trabajo.",
        },
      ],
    },

    // ---------------- MATIAS ----------------
    {
      suspectKey: "matias",
      question: "Mi única función era asegurar que las cámaras cambiaran de DVR sin perder un día de grabación. La ventana la pidió el sistema.",
      order: 1,
      options: [
        {
          key: "matias_horario",
          label: "¿Por qué la actualización se hizo un viernes a la noche?",
          responseText:
            "Eso lo elige el sistema: ventanas de bajo uso, viernes a la noche es el mejor momento. El DVR nuevo quedó instalado al mediodía y a la noche se actualizó por red, en remoto. No se necesita que nadie esté acá.",
        },
        {
          key: "matias_reingreso",
          label: "El registro de tarjetas dice que volviste a las 21:49.",
          requiresOptionKey: "matias_horario",
          responseText:
            "¿Adónde? ... está bien. Volví porque me dejé el cargador de la notebook en el servidor. Entré, lo agarré y me fui. La tarjeta vencida es un trámite que arrastro, la verdad.",
        },
        {
          key: "matias_ev_rig",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el rig de criptominería del servidor",
          requiresClueKey: "rig-minado",
          responseText:
            "... Se acabó el cuento del cargador. El rig es mío, lo armé acá porque la electricidad y el aire acondicionado del edificio me convienen. Lo vengo revisando de noche cuando puedo. Es plata que hago de a pesos, hace meses. No tengo nada que ver con una caja fuerte ni con 480 mil.",
        },
        {
          key: "matias_ev_bolso",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: el efectivo en el falso techo",
          requiresClueKey: "panel-techo",
          responseText:
            "¿La plata apareció en el techo del depósito? Yo ni sé qué hay en ese depósito. Mi mundo son los cables y los servidores del primer piso. Si quería un robo, ¿por qué dejaría la plata guardada donde se va a encontrar?",
        },
      ],
    },

    // ---------------- LUCIANO ----------------
    {
      suspectKey: "luciano",
      question: "Treinta años y nunca vi un desfalco. Soy el que no se mueve del puesto, y anoche no me moví.",
      order: 1,
      options: [
        {
          key: "luciano_noche",
          label: "¿Cómo fue tu noche del viernes?",
          responseText:
            "Cerramos a las siete, quedamos el pibe de conserjería y yo. Me puse el partido en la salita y no me moví. A las once y media hice la ronda y vi todo en orden.",
        },
        {
          key: "luciano_1924",
          label: "¿Qué es el '1924' que tenés anotado?",
          requiresOptionKey: "luciano_noche",
          responseText:
            "El año de fundación. Se usa para la puerta del fondo desde siempre, la anoto para que los chicos nuevos no se olviden. Mire, me van a echar por descuidador, es verdad que eso no se hace. Pero yo duermo acá dentro de noche, no me conviene que entren a robar.",
        },
        {
          key: "luciano_cpu",
          label: "¿Quién usa la sala de servidores de noche?",
          responseText:
            "Nadie, esa sala es del sistema. A veces el técnico de RG se queda un rato a la noche cuando actualiza, fuma en la puerta y se va. Siempre me avisa por radio.",
        },
        {
          key: "luciano_ev_nota",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del pasillo a las 20:10",
          requiresClueKey: "albaran-clara",
          responseText:
            "Es la piba de gerencia con una caja envuelta, la vi y lo anoté porque fue raro: a esa hora ya no queda nadie. Bajó a la bóveda, subió y se fue. No la seguí, no es mi problema lo que hagan los directivos.",
        },
      ],
    },

    // ---------------- CLARA ----------------
    {
      suspectKey: "clara",
      question: "Mi padre construyó esta casa con su alma y yo quiero venderla porque no da más. Venderla, no vaciarla: una cosa es discutir y otra es robarle.",
      order: 1,
      options: [
        {
          key: "clara_viernes",
          label: "¿Estuviste en el edificio el viernes a la noche?",
          responseText:
            "Vine al mediodía a comer con papá y me fui. A la noche no volví: estaba en casa con mi hija. Afirmo eso con total tranquilidad.",
        },
        {
          key: "clara_ev_camara",
          kind: "MOSTRAR_EVIDENCIA",
          label: "Mostrar: la cámara del pasillo a las 20:10 con tu figura",
          requiresClueKey: "albaran-clara",
          responseText:
            "Esa soy yo, es cierto... fui a retirar algo que había guardado en la bóveda la semana pasada. Un regalo para el cumpleaños de papá. No quise que lo viera, por eso lo guardé ahí. No tiene nada que ver con el robo: la caja estaba abierta y completa cuando me fui.",
        },
        {
          key: "clara_casa",
          label: "¿Qué fue lo que guardaste y retiraste?",
          requiresOptionKey: "clara_ev_camara",
          responseText:
            "Un reloj que heredé de mi abuela. La caja la dejé cerrada y con candado, lo prometo. Pregúntenle a la cámara de las 20:15: la saqué en la misma caja envuelta y me fui.",
        },
        {
          key: "clara_padre",
          label: "Se sabe que querés vender la empresa.",
          responseText:
            "Quiero que la casa deje de sangrar plata. Eso no me da ganas de sabotearla, me da razones para que se venda bien. Un robo de 480 mil no baja el precio del galpón: baja el precio de mi padre.",
        },
      ],
    },
  ],

  timeline: [
    {
      time: "17:30",
      text: "Vilma hace el corte de caja y deja el efectivo en la bóveda.",
      revealedByOptionKey: "vilma_corte",
    },
    {
      time: "20:10",
      text: "La cámara del pasillo registra a Clara entrando y saliendo de la bóveda con una caja envuelta.",
      revealedByClueKey: "albaran-clara",
    },
    {
      time: "21:15",
      text: "Matías firma la salida... y su tarjeta vuelve a entrar a las 21:49.",
      revealedByClueKey: "acceso-matias",
    },
    {
      time: "21:40–22:10",
      text: "Ventana de mantenimiento: las cámaras del sótano quedan apagadas.",
      revealedByClueKey: "orden-rg",
    },
    {
      time: "22:05",
      text: "La bóveda se abre con el código exacto mientras no hay cámaras.",
      revealedByClueKey: "log-codigo",
    },
    {
      time: "22:11",
      text: "Se restablecen las cámaras. El pasillo del sótano está vacío y la ventana, recién rota.",
      revealedByClueKey: "ventana-rotura",
    },
    {
      time: "03:00",
      text: "Luciano hace la ronda nocturna: todo en orden, según su parte.",
      revealedByOptionKey: "luciano_noche",
    },
  ],

  deductions: [
    {
      title: "La ventana se rompió desde adentro",
      text: "Los fragmentos hacia afuera y el rebote en la pared interna descartan al ladrón externo. La escena se montó para que el robo 'viniera de la calle'.",
      requiredClueKeys: ["ventana-rotura"],
      order: 1,
    },
    {
      title: "El dinero nunca salió del edificio",
      text: "El bolso con los 480.000 en el falso techo no es el botín de un ladrón: es el escondite de alguien que puede volver a buscarlo. El escenario es un montaje, no un robo.",
      requiredClueKeys: ["panel-techo", "esquirlas"],
      order: 2,
    },
    {
      title: "Quien abrió la caja conocía el código",
      text: "Sin un intento fallido en todo el mes y en la única media hora sin cámaras, la apertura de las 22:05 fue de alguien con el código exacto. El '1924' garabateado se lo sabe medio edificio.",
      requiredClueKeys: ["log-codigo", "anotacion-1924"],
      order: 3,
    },
    {
      title: "La ventana de mantenimiento no fue casualidad",
      text: "La orden de cambio de DVR con la ventana exacta la firmó el contador. Quien sabía que las cámaras estarían mudas era quien aprobaba los pagos a RG: Damián Ferré.",
      requiredClueKeys: ["orden-rg", "log-codigo"],
      order: 4,
    },
    {
      title: "Los secretos pequeños se guardan aparte",
      text: "El miedo de Vilma es su caja chica; el de Matías, su rig; el de Luciano, sus anotaciones; el de Clara, un regalo. Ninguno explica la plata en el techo. Solo quien podía programar el silencio de las cámaras podía armar todo el montaje.",
      requiredClueKeys: ["caja-chica", "rig-minado", "anotacion-1924", "albaran-clara", "panel-techo"],
      requiredOptionKeys: ["vilma_ev_caja", "matias_ev_rig", "clara_ev_camara", "damian_ev_bolso"],
      order: 5,
    },
  ],

  accusation: {
    motives: [
      { label: "Cubría el desfalco que venía cometiendo con documentos falsos", isCorrect: true },
      { label: "Quería hundir a la gerenta para que la empresa no se vendiera" },
      { label: "Financiaba una adicción y necesitaba el golpe único" },
      { label: "Le debía el dinero a la empresa de seguridad por un chantaje" },
    ],
    methods: [
      { label: "Abrió la caja en la ventana de mantenimiento, guardó la plata y simuló la rotura desde adentro", isCorrect: true },
      { label: "Entró por la ventana rota de la calle con una ganzúa para la caja" },
      { label: "Copió la tarjeta del guardia y abrió la caja en horario de siesta" },
      { label: "Usó a un cómplice de RG para desviar las cámaras y cargar el efectivo" },
    ],
  },
};