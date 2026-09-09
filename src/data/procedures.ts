import { DocumentItem, SubProcedureItem } from '../types';

export const INITIAL_CMPC_DOCS: SubProcedureItem[] = [
  {
    id: "default-1",
    code: "CMPC-01",
    title: "CMPC - Proceso Operacional",
    pdfUrl: "https://docs.google.com/document/d/1hwMHfc-LtSWlQmyw95_vlw6RWBTA-U4S/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-2",
    code: "CMPC-02",
    title: "CMPC - Proceso Planificacion de Consolidados",
    pdfUrl: "https://docs.google.com/document/d/1hcH1x2WwGFGUTQApYfL-Cyu9K3lJHa7y/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-3",
    code: "CMPC-03",
    title: "CMPC - Proceso Recepcion de carga de productos",
    pdfUrl: "https://docs.google.com/document/d/1q3CK7_HAvrokRjn4tZu6FYDHq3a2mWgk/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-4",
    code: "CMPC-04",
    title: "CMPC - Proceso Almacenamiento de la carga",
    pdfUrl: "https://docs.google.com/document/d/1iexYGXFjj5fqGlIrAyIEkTtHi5puvovu/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-5",
    code: "CMPC-05",
    title: "CMPC - Proceso Picking de  carga",
    pdfUrl: "https://docs.google.com/document/d/1Cj4a4iwTtt-7dzooBDPTZTfEvxWbmtK7/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-6",
    code: "CMPC-06",
    title: "CMPC - Proceso Consolidacion de la carga",
    pdfUrl: "https://docs.google.com/document/d/1WNVASqmJ5YuuInoTje9l2xIoOReudewG/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-7",
    code: "CMPC-07",
    title: "CMPC - Proceso Despacho de Contenedor",
    pdfUrl: "https://docs.google.com/document/d/1MR7Fwm2p6JdkZPCxsy8JyRSb0hqf3OOi/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-8",
    code: "CMPC-08",
    title: "CMPC - Proceso Liquidacion de embarque",
    pdfUrl: "https://docs.google.com/document/d/1l_tcGAfw7lWUBAXVOA3aROUmXPKmmjXE/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  },
  {
    id: "default-9",
    code: "CMPC-09",
    title: "CMPC - Procedimiento Operaciones",
    pdfUrl: "https://docs.google.com/document/d/1EX4QZ2jsYFboBcof2bQNj24mGU4Ni-Gl/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
    date: "Actual",
    fileType: "gdoc"
  }
];

export const PROCEDURES_DATA: DocumentItem[] = [
  {
    id: 1,
    code: "PR-GC-001",
    title: "Procedimientos Gate Control",
    category: "Gate Control",
    date: "Actualizado • Versión 001",
    type: "procedure",
    fileType: "gdoc",
    description: "Normativa y directrices para el control de acceso, verificación documental de transportistas, inspección de sellos y registro de entrada/salida de unidades.",
    steps: [
      "Verificación de documentación del conductor y manifiesto de carga en portería.",
      "Inspección física de sellos de seguridad y estado de precintos del contenedor.",
      "Registro en el sistema informático de control de pesaje y autorización de ingreso.",
      "Asignación de bahía o posición de descarga en patio según planificación."
    ],
    pdfUrl: "https://docs.google.com/document/d/1mubwfwnF7lvISdDbVpS3vMlq5WnJ75ik/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 2,
    code: "PR-CFS-001",
    title: "Procedimientos CFS",
    category: "CFS",
    date: "Actualizado • Versión 001",
    type: "procedure",
    fileType: "gdoc",
    description: "Protocolo operativo para consolidación, desconsolidación de contenedores (LCL/FCL) y verificación de mercancías en estación de transferencia.",
    steps: [
      "Recepción y cotejo del manifiesto de carga consolidada con la orden de trabajo.",
      "Coordinación de cuadrilla de estiba y asignación de maquinaria para desconsolidación.",
      "Inspección minuciosa de embalajes y emisión de acta de avería si corresponde.",
      "Ubicación temporal y tarjado de bultos en zona techada asignada."
    ],
    pdfUrl: "https://docs.google.com/document/d/1pQCNGFo41jJe_Zf7H_-SYITILlm8xQ-p/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 3,
    code: "PR-ALP-001",
    title: "Procedimientos Almacén Patio",
    category: "Almacén Patio",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Instrucciones de apilamiento, estiba segura, segregación de cargas especiales y gestión de tránsitos de grúas en patios de almacenamiento.",
    steps: [
      "Identificación satelital o por radiofrecuencia de la unidad en patio.",
      "Segregación estricta de contenedores vacíos, llenos y con carga sobredimensionada.",
      "Control de alturas máximas de stacking de acuerdo a normas de estabilidad portuaria.",
      "Actualización inmediata de coordenadas en el sistema de gestión de patio."
    ],
    pdfUrl: "https://docs.google.com/document/d/1jhTqm5nkxGob7IgH3lQOjzVyzOX2G2ub/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 4,
    code: "PR-CDOC-002",
    title: "Procedimientos Control Documentos",
    category: "Control Documentos",
    date: "Actualizado • Versión 002",
    type: "procedure",
    fileType: "gdoc",
    description: "Gestión, resguardo, validación aduanera y trazabilidad de guías de despacho, conocimientos de embarque (B/L) y certificados de inspección.",
    steps: [
      "Recepción digital y física de despachos aduaneros y resoluciones de levante.",
      "Validación de firmas autorizadas y sellos de agencias de aduana acreditadas.",
      "Carga de metadatos al repositorio central institucional y archivo correlativo.",
      "Notificación automatizada a las áreas de facturación y despacho operacional."
    ],
    pdfUrl: "https://docs.google.com/document/d/16VLJHTmiZCXwYauo50TeJm8nRttTgu42/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 5,
    code: "PR-BOD-001",
    title: "Procedimientos Bodega",
    category: "Bodega",
    date: "Actualizado • Versión 001",
    type: "procedure",
    fileType: "gdoc",
    description: "Procedimiento estándar para la recepción, inventario selectivo, control de racks, almacenamiento de mercaderías e insumos operacionales.",
    steps: [
      "Iniciar verificación física contra orden de compra o guía de despacho recibida.",
      "Registro de número de lote, fecha de caducidad (si aplica) y condiciones físicas.",
      "Etiquetado con código de barras correlativo para trazabilidad interna.",
      "Almacenamiento en estanterías homologadas respetando capacidades de carga nominal."
    ],
    pdfUrl: "https://docs.google.com/document/d/1zvkTL6VuSYmeVMPAdEuoWizo4zic6YtK/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 6,
    code: "PR-SAG-001",
    title: "Procedimientos SAG",
    category: "SAG",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Normativa fito y zoosanitaria para inspecciones del Servicio Agrícola y Ganadero en recintos portuarios y extraportuarios.",
    steps: [
      "Revisión de documentación fitozoosanitaria y certificados de origen.",
      "Apertura e inspección física de unidades bajo supervisión de inspectores SAG.",
      "Muestreo y toma de contramuestras según protocolo oficial SAG.",
      "Emisión de certificado de inspección o acta de interdicción correspondiente."
    ],
    pdfUrl: "https://docs.google.com/document/d/1SoVO9JG2UhFn435kZPMUMxXmB7hcSspw/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 7,
    code: "PR-CR-001",
    title: "Procedimientos Control Room",
    category: "Almacén Patio",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Operación de consolas de monitoreo en tiempo real, videovigilancia CCTV, despacho de maquinaria y comunicación radial en patio.",
    steps: [
      "Monitoreo de cámaras perimetrales, accesos y zonas de estiba activa.",
      "Asignación radial de tareas operacionales a operadores de grúas.",
      "Registro y escalamiento inmediato de novedades e incidencias operativas.",
      "Supervisión continua del flujo de camiones y tiempos de ciclo en terminal."
    ],
    pdfUrl: "https://docs.google.com/document/d/1RIVnKEPPZzd9GnKSj2JcXwOqMrLeJnA_/edit?usp=drive_link&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 8,
    code: "PR-PF-001",
    title: "Procedimientos Porteos Full",
    category: "Almacén Patio",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Protocolo para el traslado y acarreo interno de contenedores llenos entre zonas de transferencia, aforos y acopio.",
    steps: [
      "Verificación de orden de porteo y estado físico del contenedor lleno.",
      "Comprobación de sellos de seguridad antes de autorizar movimiento.",
      "Traslado a velocidad controlada por vías habilitadas del terminal.",
      "Posicionamiento final y actualización de coordenadas en sistema."
    ],
    pdfUrl: "https://docs.google.com/document/d/1fBpJ7AehWyRj0bnzx-kR65TCdirCugbZ/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 9,
    code: "PR-PV-001",
    title: "Procedimientos Porteos Vacíos",
    category: "Almacén Patio",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Procedimiento para inspección, apilamiento y movimiento seguro de unidades vacías hacia y desde depósitos satélites.",
    steps: [
      "Inspección de daños estructurales (IICL) y estado de limpieza interior.",
      "Verificación de naviera propietaria y tipo de contenedor (20', 40', HC).",
      "Asignación de torre de acopio según especificación de naviera.",
      "Registro en sistema de salida o relocalización de la unidad vacía."
    ],
    pdfUrl: "https://docs.google.com/document/d/1MRo5IdtP0gIQzJdYQ9pqkNTpB0Kl4HEF/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 10,
    code: "PR-REF-001",
    title: "Procedimientos Reefer",
    category: "Almacén Patio",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Control de conexión eléctrica, monitoreo continuo de temperatura, humedad, ventilación y alarmas en contenedores refrigerados.",
    steps: [
      "Conexión eléctrica inmediata en torre de reefers asignada.",
      "Verificación de set point de temperatura según instructivo de embarque.",
      "Monitoreo cada 4 horas con registro formal en planilla de temperaturas.",
      "Activación de protocolo técnico de emergencia ante alarmas del equipo."
    ],
    pdfUrl: "https://docs.google.com/document/d/16jpKiHLLdeDIgBzqxd_BR4XR4x1ZDUze/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 11,
    code: "PR-BUF-001",
    title: "Procedimientos Buffer",
    category: "Buffer",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Gestión y ordenamiento de áreas de amortiguación operativa (Buffer) para camiones en espera de ingreso a puertos o terminales.",
    steps: [
      "Recepción y verificación previa de camiones en zona de pre-puerta / buffer.",
      "Chequeo de ventanas horarias y disponibilidad de citas portuarias.",
      "Regulación del flujo de salida hacia terminal para evitar congestión vial.",
      "Coordinación directa con gate principal y despacho de cargas."
    ],
    pdfUrl: "https://docs.google.com/document/d/1Joz_crZlhfv43EH2PyV3tM6moY-hWKCl/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 12,
    code: "PR-SAG-002",
    title: "Protocolo Despacho de Unidades SAG",
    category: "SAG",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Procedimiento oficial para la liberación y despacho de unidades de carga tras completar la inspección y resolución favorable del SAG.",
    steps: [
      "Validar documentación de despacho y resolución de levante SAG.",
      "Inspeccionar físicamente unidades y verificar colocación de sellos SAG.",
      "Cotejo de número de precinto oficial en sistema aduanero.",
      "Autorización de salida y entrega de guía de despacho timbrada."
    ],
    pdfUrl: "https://docs.google.com/document/d/1Lwt5Eb9bpRTvG8PVSrSpszSvnbudlkSh/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 13,
    code: "PR-COM-001",
    title: "Procedimiento Acuerdos Comerciales",
    category: "Área Comercial",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Metodología corporativa para formulación de convenios de servicio, determinación tarifaria, evaluación crediticia y formalización contractual con clientes.",
    steps: [
      "Recepción y análisis formal de requerimientos del cliente para el acuerdo comercial.",
      "Definición de tarifas, plazos, condiciones de pago y volumen proyectado de faenas.",
      "Confección del borrador del acuerdo y validación jurídica y operativa interna.",
      "Firma del acuerdo comercial, registro en el sistema corporativo y difusión a operaciones."
    ],
    pdfUrl: "https://docs.google.com/document/d/1xyS6JuMp4xgBxDzdZXTepsz8BEzcfugF/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 15,
    code: "PR-CS-001",
    title: "Procedimiento Customer Service",
    category: "Customer Service",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "gdoc",
    description: "Protocolos de atención al cliente portuario, seguimiento proactivo de faenas, gestión de reclamos, emisión de estados de situación y encuestas de servicio.",
    steps: [
      "Recepción de consultas y requerimientos operativos de clientes por canales oficiales.",
      "Canalización, verificación de factibilidad y asignación de prioridad operativa.",
      "Seguimiento activo del estado de contenedores y servicios en ejecución.",
      "Respuesta y cierre oportuno con registro en el sistema de gestión de clientes."
    ],
    pdfUrl: "https://docs.google.com/document/d/1hlLfLAFa637Znrt8oycVwLO1o_2KDM3L/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true"
  },
  {
    id: 16,
    code: "PR-EQM-001",
    title: "Seguimiento y Mantención de Equipos y Maquinarias",
    category: "Equipos y Maquinarias",
    date: "Actualizado • Vigente",
    type: "procedure",
    fileType: "drive",
    description: "Pautas de inspección preoperacional, programas de mantenimiento preventivo y correctivo para grúas Reach Stacker, horquillas, tractocamiones y generadores.",
    steps: [
      "Verificar el estado de operatividad de los equipos antes de iniciar las operaciones diarias.",
      "Registrar de inmediato cualquier desperfecto, ruido inusual o anomalía técnica en bitácora.",
      "Programar mantenimientos preventivos periódicos según horas de uso y manual de fabricante.",
      "Realizar la mantención correctiva o coordinar asistencia técnica especializada externa.",
      "Completar y firmar la bitácora oficial de inspección e intervención de los equipos."
    ],
    pdfUrl: "https://drive.google.com/file/d/1HuAHU9PP_oQFbvqDt6mG8pTGQ8u8Y6H8/view?usp=sharing"
  },
  {
    id: 17,
    code: "PR-CMPC-EXP",
    title: "Procedimientos CMPC",
    category: "CMPC",
    date: "Actualizado • Fichas Oficiales",
    type: "procedure",
    isFolder: true,
    badge: "CARPETA DE PROCEDIMIENTOS & FICHAS",
    description: "Colección integral de 9 fichas técnicas y procedimientos específicos para la recepción, preparación, picking y despacho de productos forestales y celulosa CMPC.",
    pdfUrl: "https://drive.google.com/file/d/1m5Or0FdKL71oXVVM9Yjjj6Z_VY6RAkia/view?usp=sharing"
  }
];

export const CHECKLISTS_DATA: DocumentItem[] = [
  {
    id: 1,
    code: "CK-BOD-001",
    title: "Check List Bodega",
    category: "Bodega",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Pauta de verificación diaria para orden, seguridad, señalética y control de inventarios físicos dentro de la bodega principal de almacenamiento.",
    steps: [
      "Verificar estado de iluminación, pasillos despejados y señalización de evacuación.",
      "Comprobar correcta rotulación y apilado de bultos según capacidades de rack.",
      "Revisión de extintores vigentes, mangueras y elementos de respuesta ante derrames.",
      "Confirmar registro al día en el sistema de entradas y salidas de materiales."
    ],
    pdfUrl: "https://drive.google.com/file/d/1-o7RkBU63e2kIn9vSeSpJZqkW93GvUZV/view?usp=sharing"
  },
  {
    id: 2,
    code: "CK-CFS-001",
    title: "Check List CFS",
    category: "CFS",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Lista de chequeo operativa previa y posterior al proceso de consolidación o desconsolidación en el área CFS.",
    steps: [
      "Revisar programación diaria de contenedores asignados al sector CFS.",
      "Inspeccionar cuadrilla con EPP reglamentario completo antes del inicio de maniobras.",
      "Verificar integridad estructural interna del contenedor (limpieza, olores, humedad).",
      "Validar precintado de seguridad y entrega de copias de tarja firmadas."
    ],
    pdfUrl: "https://drive.google.com/file/d/1gsCL7DzoLyiJZqwHpr8duIoXbn29lM9L/view?usp=sharing"
  },
  {
    id: 3,
    code: "CK-GC-001",
    title: "Check List Gate Control",
    category: "Gate Control",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Control metódico en caseta de ingreso y báscula: estado del conductor, unidad tractora, chasis, documentación y sellos aduaneros.",
    steps: [
      "Verificar vigencia de licencia de conductor, seguro obligatorio y revisión técnica.",
      "Revisar correspondencia de número de contenedor contra documentación de puerto.",
      "Chequear número de sello oficial sin signos de manipulación o rotura previa.",
      "Confirmar pesaje por eje y peso bruto total dentro de la tolerancia vial permitida."
    ],
    pdfUrl: "https://drive.google.com/file/d/1HhWdP6nfi5mITJ6kpC3Z2J4uh9Fa1-oP/view?usp=sharing"
  },
  {
    id: 4,
    code: "CK-CDOC-002",
    title: "Check List Control Documentos",
    category: "Control Documentos",
    date: "Versión 002",
    type: "checklist",
    fileType: "drive",
    description: "Lista de cotejo documental para liberación de cargas de importación y exportación ante aduana y agencias marítimas.",
    steps: [
      "Revisar planificación naviera, fecha estimada de arribo (ETA) y corte de stack (cut-off).",
      "Identificar naves operando y verificar correspondencia de manifiesto marítimo.",
      "Confirmar timbrajes aduaneros y autorización de retiro emitida por la agencia naviera.",
      "Validar firma de recepción conforme del transportista en la guía de despacho final."
    ],
    pdfUrl: "https://drive.google.com/file/d/1-xrVViIgY2P66KgbjMSN32g645jepwHB/view?usp=sharing"
  },
  {
    id: 5,
    code: "CK-ALP-001",
    title: "Check List Almacén Patio",
    category: "Almacén Patio",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Inspección de orden en bloques de acopio, vías de rodado de maquinaria pesada, segregación IMO y conexiones de contenedores refrigerados.",
    steps: [
      "Verificar estado de contenedor y posición física exacta en bloque de patio.",
      "Comprobar conexión eléctrica, set point de temperatura y alarma en unidades reefer.",
      "Confirmar que vías de circulación de Reach Stackers estén despejadas y señalizadas.",
      "Inspeccionar demarcaciones y segregación de sustancias peligrosas (norma IMO)."
    ],
    pdfUrl: "https://drive.google.com/file/d/1PY0lVHuJwrxyKZY1COBBFh5EjpWC1GZy/view?usp=sharing"
  },
  {
    id: 6,
    code: "CK-SAG-001",
    title: "Check List SAG",
    category: "SAG",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Verificación de cumplimiento de estándares del Servicio Agrícola y Ganadero para inspecciones fitosanitarias en terminal.",
    steps: [
      "Verificar arribo oportuno de inspector SAG a la zona de aforos.",
      "Revisar precintos y sellos de origen previo a la apertura de la unidad.",
      "Controlar cumplimiento de medidas fitozoosanitarias durante la descarga.",
      "Confirmar emisión de acta SAG de inspección y cierre conforme."
    ],
    pdfUrl: "https://drive.google.com/file/d/1fZvk3iw6thz0T6qN9KQ2-_g4UF1vJ6uW/view?usp=sharing"
  },
  {
    id: 7,
    code: "CK-CR-001",
    title: "Check List Control Room",
    category: "Almacén Patio",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Pauta de verificación diaria para sistemas de videovigilancia, telecomunicaciones y sistemas informáticos en sala de control.",
    steps: [
      "Revisar operatividad continua de monitores CCTV y sistema de grabación.",
      "Verificar cobertura radial y canales de comunicación con cuadrillas.",
      "Chequear estado del servidor de control de patio y enlaces de red.",
      "Registrar novedades operacionales de cambio de turno en bitácora digital."
    ],
    pdfUrl: "https://drive.google.com/file/d/1hN_E0IKjjrLtNkXdEo_A27coUa9MA1PP/view?usp=drivesdk"
  },
  {
    id: 8,
    code: "CK-PF-001",
    title: "Check List Porteos Full",
    category: "Almacén Patio",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Control de traslado de unidades cargadas entre bloques de almacenamiento y muelles o zonas de aforo aduanero.",
    steps: [
      "Verificar número de contenedor y placa de patente del camión de porteo.",
      "Comprobar estado del precinto aduanero y sello naviero.",
      "Validar autorización informática de porteo full en sistema TOS.",
      "Confirmar entrega conforme en balanza o punto de transferencia."
    ],
    pdfUrl: "https://drive.google.com/file/d/1Rxb224N922PcAMDRewYrf-A5QeNJqs2D/view?usp=drivesdk"
  },
  {
    id: 9,
    code: "CK-PV-001",
    title: "Check List Porteos Vacíos",
    category: "Almacén Patio",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Inspección técnica y de seguridad en el acarreo de contenedores vacíos para su clasificación y estiba.",
    steps: [
      "Inspeccionar físicamente el contenedor vacío (piso, paredes, techo, puertas).",
      "Registrar condición IICL o de daño previo si corresponde.",
      "Verificar naviera y código ISO de dimensiones del equipo.",
      "Confirmar posición de stacking asignada en depósito de vacíos."
    ],
    pdfUrl: "https://drive.google.com/file/d/1tU0PdUlXzr96mjbVxfvf9AC8m3sX6cAe/view?usp=drivesdk"
  },
  {
    id: 10,
    code: "CK-REF-001",
    title: "Check List Reefer",
    category: "Almacén Patio",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Pauta de inspección para racks de reefers, generadores y seguimiento de temperaturas de cargas refrigeradas.",
    steps: [
      "Verificar estado de enchufe industrial y cable de conexión a torre.",
      "Confirmar coincidencia de lectura del display con set point documental.",
      "Revisar ausencia de códigos de alarma activos en unidad refrigerada.",
      "Registrar periodicidad de monitoreo de temperatura y defreeze."
    ],
    pdfUrl: "https://drive.google.com/file/d/1O3h0DCi87s1qbk9Uq_n2XxTtQgLq2p6q/view?usp=drivesdk"
  },
  {
    id: 11,
    code: "CK-BUF-001",
    title: "Check List Buffer",
    category: "Buffer",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Control operativo y de seguridad para la zona Buffer de espera de camiones de transporte terrestre.",
    steps: [
      "Verificar capacidad disponible y orden de bahías en patio de buffer.",
      "Chequear correspondencia de cita de camiones antes de autorizar espera.",
      "Registrar hora de ingreso y tiempo estimado de permanencia en zona buffer.",
      "Controlar coordinación de salida sincronizada hacia caseta de pesaje."
    ],
    pdfUrl: "https://drive.google.com/file/d/1LjwECKR404wpl_2Dsdust7a79XGUukFh/view?usp=drivesdk"
  },
  {
    id: 12,
    code: "CK-CS-001",
    title: "Check List Customer Service",
    category: "Área Comercial",
    date: "Versión 001",
    type: "checklist",
    fileType: "drive",
    description: "Guía de seguimiento de calidad en la atención al cliente, plazos de respuesta a cotizaciones y confirmaciones de operaciones en curso.",
    steps: [
      "Revisar solicitudes de clientes pendientes en plataforma y correo corporativo.",
      "Confirmar validación de tarifas y autorizaciones comerciales vigentes.",
      "Enviar reportes de trazabilidad de faenas a clientes con contratos activos.",
      "Verificar cierre conforme de consultas e incidencias reportadas."
    ],
    pdfUrl: "https://drive.google.com/file/d/1cPx-MXcLaV1XbuFXkIvry3JNwM20xUjN/view?usp=sharing"
  }
];
