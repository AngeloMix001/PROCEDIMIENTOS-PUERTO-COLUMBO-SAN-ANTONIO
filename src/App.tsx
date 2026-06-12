import React, { useState } from 'react';
import {
  FileText,
  CheckSquare,
  Folder,
  Calendar,
  Eye,
  Download,
  Search,
  ChevronDown,
  ChevronUp,
  Building
} from 'lucide-react';

export interface SubProcedure {
  id: string;
  title: string;
  pdfUrl: string;
  date: string;
}

// Removed react-pdf imports as we now use iframes for better compatibility with Google Docs

const proceduresData = [
  { id: 1, title: "Procedimientos Gate Control", category: "Gate Control", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Verificar...", "Paso 2: Confirmar..."], pdfUrl: "https://docs.google.com/document/d/1mubwfwnF7lvISdDbVpS3vMlq5WnJ75ik/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 2, title: "Procedimientos CFS", category: "CFS", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Recepcionar...", "Paso 2: Coordinar..."], pdfUrl: "https://docs.google.com/document/d/1pQCNGFo41jJe_Zf7H_-SYITILlm8xQ-p/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 3, title: "Procedimientos Almacén Patio", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Identificar...", "Paso 2: Segregar..."], pdfUrl: "https://docs.google.com/document/d/1jhTqm5nkxGob7IgH3lQOjzVyzOX2G2ub/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 4, title: "Procedimientos Control Documentos", category: "Control Documentos", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Activar alarma...", "Paso 2: Evacuar..."], pdfUrl: "https://docs.google.com/document/d/16VLJHTmiZCXwYauo50TeJm8nRttTgu42/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 5, title: "Procedimientos Bodega", category: "Bodega", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Iniciar...", "Paso 2: Registrar..."], pdfUrl: "https://docs.google.com/document/d/1zvkTL6VuSYmeVMPAdEuoWizo4zic6YtK/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 6, title: "Procedimientos SAG", category: "SAG", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Revisar carga...", "Paso 2: Emitir certificado..."], pdfUrl: "https://docs.google.com/document/d/1SoVO9JG2UhFn435kZPMUMxXmB7hcSspw/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 7, title: "Procedimientos Control Room", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Monitorear...", "Paso 2: Registrar incidencias..."], pdfUrl: "https://docs.google.com/document/d/1RIVnKEPPZzd9GnKSj2JcXwOqMrLeJnA_/edit?usp=drive_link&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 8, title: "Procedimientos Porteos Full", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Verificar unidad...", "Paso 2: Autorizar ingreso..."], pdfUrl: "https://docs.google.com/document/d/1fBpJ7AehWyRj0bnzx-kR65TCdirCugbZ/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 9, title: "Procedimientos Porteos Vacíos", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Inspeccionar estado...", "Paso 2: Registrar salida..."], pdfUrl: "https://docs.google.com/document/d/1MRo5IdtP0gIQzJdYQ9pqkNTpB0Kl4HEF/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 10, title: "Procedimientos Reefer", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Conectar unidad...", "Paso 2: Verificar temperatura..."], pdfUrl: "https://docs.google.com/document/d/16jpKiHLLdeDIgBzqxd_BR4XR4x1ZDUze/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 11, title: "Procedimientos Buffer", category: "Buffer", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Monitorear patio...", "Paso 2: Gestionar flujo..."], pdfUrl: "https://docs.google.com/document/d/1Joz_crZlhfv43EH2PyV3tM6moY-hWKCl/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 12, title: "Protocolo Despacho de Unidades SAG", category: "SAG", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Validar documentación de despacho...", "Paso 2: Inspeccionar unidades y verificar sellos SAG..."], pdfUrl: "https://docs.google.com/document/d/1Lwt5Eb9bpRTvG8PVSrSpszSvnbudlkSh/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 13, title: "Procedimiento Acuerdos Comerciales", category: "Área Comercial", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Gestionar cotizaciones...", "Paso 2: Registrar contratos de servicios..."], pdfUrl: "https://docs.google.com/document/d/1xyS6JuMp4xgBxDzdZXTepsz8BEzcfugF/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 15, title: "Procedimiento Customer Service", category: "Customer Service", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Recepción de consultas de clientes...", "Paso 2: Canalización, gestión y seguimiento de requerimientos..."], pdfUrl: "https://docs.google.com/document/d/1hlLfLAFa637Znrt8oycVwLO1o_2KDM3L/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 16, title: "Seguimiento y mantención de equipos y maquinarias", category: "Equipos y Maquinarias", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Programar inspecciones de los equipos...", "Paso 2: Ejecutar y registrar las mantenciones preventivas y correctivas..."], pdfUrl: "https://drive.google.com/file/d/1HuAHU9PP_oQFbvqDt6mG8pTGQ8u8Y6H8/view?usp=sharing" },
  { id: 17, title: "Procedimientos CMPC", category: "CMPC", date: "Actual", type: "procedure" as const, pdfUrl: "https://drive.google.com/file/d/1m5Or0FdKL71oXVVM9Yjjj6Z_VY6RAkia/view?usp=sharing" },
];

const checklistsData = [
  { id: 1, title: "Check List Bodega", category: "Bodega", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar CFS...", "2. Enviar programación..."], pdfUrl: "https://drive.google.com/file/d/1-o7RkBU63e2kIn9vSeSpJZqkW93GvUZV/view?usp=sharing" },
  { id: 2, title: "Check List CFS", category: "CFS", date: "Versión 001", type: "checklist" as const, steps: ["1. Recepcionar listado...", "2. Coordinar retiro..."], pdfUrl: "https://drive.google.com/file/d/1gsCL7DzoLyiJZqwHpr8duIoXbn29lM9L/view?usp=sharing" },
  { id: 3, title: "Check List Gate Control", category: "Gate Control", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar Gate...", "2. Revisar sello..."], pdfUrl: "https://drive.google.com/file/d/1HhWdP6nfi5mITJ6kpC3Z2J4uh9Fa1-oP/view?usp=sharing" },
  { id: 4, title: "Check List Control Documentos", category: "Control Documentos", date: "Versión 002", type: "checklist" as const, steps: ["1. Revisar planificación...", "2. Identificar naves..."], pdfUrl: "https://drive.google.com/file/d/1-xrVViIgY2P66KgbjMSN32g645jepwHB/view?usp=sharing" },
  { id: 5, title: "Check List Almacén Patio", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar contenedor...", "2. Confirmar contacto..."], pdfUrl: "https://drive.google.com/file/d/1PY0lVHuJwrxyKZY1COBBFh5EjpWC1GZy/view?usp=sharing" },
  { id: 6, title: "Check List SAG", category: "SAG", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar carga...", "2. Confirmar certificación..."], pdfUrl: "https://drive.google.com/file/d/1fZvk3iw6thz0T6qN9KQ2-_g4UF1vJ6uW/view?usp=sharing" },
  { id: 7, title: "Check List Control Room", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Revisar monitores...", "2. Registrar novedades..."], pdfUrl: "https://drive.google.com/file/d/1hN_E0IKjjrLtNkXdEo_A27coUa9MA1PP/view?usp=drivesdk" },
  { id: 8, title: "Check List Porteos Full", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar sello...", "2. Validar documentación..."], pdfUrl: "https://drive.google.com/file/d/1Rxb224N922PcAMDRewYrf-A5QeNJqs2D/view?usp=drivesdk" },
  { id: 9, title: "Check List Porteos Vacíos", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Inspeccionar daños...", "2. Registrar número contenedor..."], pdfUrl: "https://drive.google.com/file/d/1tU0PdUlXzr96mjbVxfvf9AC8m3sX6cAe/view?usp=drivesdk" },
  { id: 10, title: "Check List Reefer", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar enchufe...", "2. Confirmar lectura temp..."], pdfUrl: "https://drive.google.com/file/d/1O3h0DCi87s1qbk9Uq_n2XxTtQgLq2p6q/view?usp=drivesdk" },
  { id: 11, title: "Check List Buffer", category: "Buffer", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar capacidad...", "2. Registrar movimientos..."], pdfUrl: "https://drive.google.com/file/d/1LjwECKR404wpl_2Dsdust7a79XGUukFh/view?usp=drivesdk" },
  { id: 12, title: "Check List Customer Service", category: "Área Comercial", date: "Versión 001", type: "checklist" as const, steps: ["1. Revisar requerimientos de clientes...", "2. Confirmar cotización autorizada..."], pdfUrl: "https://drive.google.com/file/d/1cPx-MXcLaV1XbuFXkIvry3JNwM20xUjN/view?usp=sharing" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'procedures' | 'checklists'>('procedures');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [subProcedures, setSubProcedures] = useState<SubProcedure[]>(() => {
    const default9 = [
      {
        id: "default-1",
        title: "CMPC - Proceso Operacional",
        pdfUrl: "https://docs.google.com/document/d/1hwMHfc-LtSWlQmyw95_vlw6RWBTA-U4S/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-2",
        title: "CMPC - Proceso Planificacion de Consolidados",
        pdfUrl: "https://docs.google.com/document/d/1hcH1x2WwGFGUTQApYfL-Cyu9K3lJHa7y/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-3",
        title: "CMPC - Proceso Recepcion de carga de productos",
        pdfUrl: "https://docs.google.com/document/d/1q3CK7_HAvrokRjn4tZu6FYDHq3a2mWgk/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-4",
        title: "CMPC - Proceso Almacenamiento de la carga",
        pdfUrl: "https://docs.google.com/document/d/1iexYGXFjj5fqGlIrAyIEkTtHi5puvovu/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-5",
        title: "CMPC - Proceso Picking de  carga",
        pdfUrl: "https://docs.google.com/document/d/1Cj4a4iwTtt-7dzooBDPTZTfEvxWbmtK7/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-6",
        title: "CMPC - Proceso Consolidacion de la carga",
        pdfUrl: "https://docs.google.com/document/d/1WNVASqmJ5YuuInoTje9l2xIoOReudewG/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-7",
        title: "CMPC - Proceso Despacho de Contenedor",
        pdfUrl: "https://docs.google.com/document/d/1MR7Fwm2p6JdkZPCxsy8JyRSb0hqf3OOi/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-8",
        title: "CMPC - Proceso Liquidacion de embarque",
        pdfUrl: "https://docs.google.com/document/d/1l_tcGAfw7lWUBAXVOA3aROUmXPKmmjXE/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      },
      {
        id: "default-9",
        title: "CMPC - Procedimiento Operaciones",
        pdfUrl: "https://docs.google.com/document/d/1EX4QZ2jsYFboBcof2bQNj24mGU4Ni-Gl/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true",
        date: "Actual"
      }
    ];

    const saved = localStorage.getItem('puerto_columbo_sub_procedures');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 9) {
          // Mapeamos los subprocedimientos guardados para asegurar que los elementos por defecto 
          // siempre usen el título actual configurado en el código.
          const updated = parsed.map((item: any) => {
            if (typeof item.id === 'string' && item.id.startsWith('default-')) {
              const matchingDefault = default9.find(d => d.id === item.id);
              if (matchingDefault) {
                return matchingDefault;
              }
            }
            return item;
          });
          // Guardamos el estado actualizado de vuelta en el localStorage
          localStorage.setItem('puerto_columbo_sub_procedures', JSON.stringify(updated));
          return updated;
        }
      } catch (e) {
        console.error(e);
      }
    }
    // If no previous storage exists or has less than 9 items, save and return the default list of 9 items
    localStorage.setItem('puerto_columbo_sub_procedures', JSON.stringify(default9));
    return default9;
  });

  const handleAddSubProcedure = (title: string, pdfUrl: string) => {
    const newSub: SubProcedure = {
      id: Date.now().toString(),
      title,
      pdfUrl,
      date: 'Actual'
    };
    const updated = [...subProcedures, newSub];
    setSubProcedures(updated);
    localStorage.setItem('puerto_columbo_sub_procedures', JSON.stringify(updated));
  };

  const handleDeleteSubProcedure = (id: string) => {
    const updated = subProcedures.filter(sub => sub.id !== id);
    setSubProcedures(updated);
    localStorage.setItem('puerto_columbo_sub_procedures', JSON.stringify(updated));
  };

  const filteredProcedures = proceduresData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredChecklists = checklistsData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-body text-on-surface p-4 sm:p-8 md:p-16 max-w-5xl mx-auto">
      <header className="mb-12 border-b border-outline pb-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <img src="https://res.cloudinary.com/djmo7ydpm/image/upload/v1776870967/logo-puerto_2xaaaaaaaaa_olrchx.png" alt="Puerto Columbo Logo" className="h-16 sm:h-20 w-auto" />
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-headline tracking-tight text-primary uppercase">Puerto Columbo San Antonio</h1>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-2 sm:mt-3">Sistema de Control Operativo</p>
        </div>
      </header>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center sm:p-4">
          <div className="bg-surface w-full h-full sm:h-[90vh] sm:max-w-5xl border-x sm:border border-outline p-2 sm:p-4 relative">
            <button 
              onClick={() => setPreviewUrl(null)} 
              className="absolute top-2 right-2 z-10 px-4 py-3 bg-primary text-on-primary text-xs uppercase font-bold shadow-lg"
            >
              Cerrar
            </button>
            {(() => {
              let finalUrl = previewUrl;
              if (previewUrl.includes('docs.google.com/document')) {
                finalUrl = previewUrl.split('?')[0].replace('/edit', '/preview');
              } else if (previewUrl.includes('drive.google.com/file')) {
                finalUrl = previewUrl.replace('/view', '/preview');
              } else if (!previewUrl.toLowerCase().endsWith('.pdf')) {
                finalUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(previewUrl)}&embedded=true`;
              }

              return (
                <iframe 
                  src={finalUrl}
                  className="w-full h-full mt-10" 
                  title="Vista previa del documento"
                  frameBorder="0"
                />
              );
            })()}
          </div>
        </div>
      )}

      <div className="relative mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
        <input
          type="text"
          placeholder="BUSCAR DOCUMENTOS O CATEGORÍAS..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border border-outline py-4 pl-12 pr-4 focus:border-primary text-xs uppercase tracking-widest outline-none transition-colors text-primary placeholder:text-on-surface-variant/50"
        />
      </div>

      <div className="flex gap-4 sm:gap-8 mb-10 border-b border-outline">
        <button
          className={`flex-1 sm:flex-none pb-4 text-xs md:text-sm uppercase tracking-widest transition-colors font-bold ${
            activeTab === 'procedures' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
          onClick={() => setActiveTab('procedures')}
        >
          Procedimientos
        </button>
        <button
          className={`flex-1 sm:flex-none pb-4 text-xs md:text-sm uppercase tracking-widest transition-colors font-bold ${
            activeTab === 'checklists' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
          onClick={() => setActiveTab('checklists')}
        >
          Check Lists
        </button>
      </div>

      <main>
        {activeTab === 'procedures' ? (
          <List 
            items={filteredProcedures} 
            emptyMessage="No se encontraron procedimientos." 
            onPreview={(url) => setPreviewUrl(url)} 
            subProcedures={subProcedures}
            onAddSubProcedure={handleAddSubProcedure}
            onDeleteSubProcedure={handleDeleteSubProcedure}
          />
        ) : (
          <List 
            items={filteredChecklists} 
            emptyMessage="No se encontraron check lists." 
            onPreview={(url) => setPreviewUrl(url)} 
            subProcedures={[]}
            onAddSubProcedure={() => {}}
            onDeleteSubProcedure={() => {}}
          />
        )}
      </main>
    </div>
  );
}

function List({ 
  items, 
  emptyMessage, 
  onPreview,
  subProcedures,
  onAddSubProcedure,
  onDeleteSubProcedure
}: { 
  items: any[], 
  emptyMessage: string, 
  onPreview: (url: string) => void,
  subProcedures: SubProcedure[],
  onAddSubProcedure: (title: string, pdfUrl: string) => void,
  onDeleteSubProcedure: (id: string) => void
}) {
  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-on-surface-variant text-xs uppercase tracking-widest border border-outline border-dashed">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {items.map(item => {
        const isCMPC = item.title.toUpperCase().includes("CMPC") || item.category.toUpperCase().includes("CMPC");
        return (
          <ItemCard 
            key={item.id}
            title={item.title} 
            category={item.category} 
            date={item.date} 
            type={item.type} 
            steps={item.steps}
            pdfUrl={item.pdfUrl}
            onPreview={onPreview}
            hasSubprocedures={isCMPC}
            subProceduresList={isCMPC ? subProcedures : []}
            onAddSubProcedure={isCMPC ? onAddSubProcedure : undefined}
            onDeleteSubProcedure={isCMPC ? onDeleteSubProcedure : undefined}
          />
        );
      })}
    </div>
  );
}

function ItemCard({ 
  title, 
  category, 
  date, 
  type, 
  steps, 
  pdfUrl, 
  onPreview,
  hasSubprocedures = false,
  subProceduresList = [],
  onAddSubProcedure,
  onDeleteSubProcedure
}: { 
  key?: any,
  title: string, 
  category: string, 
  date: string, 
  type: 'procedure' | 'checklist', 
  steps?: string[], 
  pdfUrl?: string, 
  onPreview?: (url: string) => void,
  hasSubprocedures?: boolean,
  subProceduresList?: SubProcedure[],
  onAddSubProcedure?: (title: string, pdfUrl: string) => void,
  onDeleteSubProcedure?: (id: string) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  let Icon = type === 'procedure' ? FileText : CheckSquare;
  if (title.toUpperCase().includes("CMPC") || category.toUpperCase().includes("CMPC")) {
    Icon = Folder;
  } else if (title.includes("CFS") && type === 'procedure') {
    Icon = Building;
  }
  
  return (
    <div className="group bg-surface border border-outline hover:border-primary transition-all">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-12 h-12 border border-outline flex items-center justify-center text-on-surface-variant bg-surface-container-lowest shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="font-headline text-xl text-primary">{title}</h4>
            {hasSubprocedures && (
              <span className="text-[9px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 border border-primary/20 font-bold">
                Carpeta de Procedimientos & Fichas
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">
            <span className="flex items-center gap-2"><Folder className="w-3 h-3" /> {category}</span>
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {date}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-4 sm:mt-0 ml-auto">
          {pdfUrl && !hasSubprocedures && (
            <button 
              onClick={() => onPreview && onPreview(pdfUrl)}
              className="p-4 border border-outline text-primary hover:bg-surface-container-highest transition-colors active:bg-primary/10" 
              title="Vista previa del documento principal"
            >
              <Eye className="w-5 h-5" />
            </button>
          )}

          {pdfUrl && !hasSubprocedures && (
            <a 
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-outline text-primary hover:bg-surface-container-highest transition-colors active:bg-primary/10" 
              title="Descargar documento principal"
            >
              <Download className="w-5 h-5" />
            </a>
          )}

          {(hasSubprocedures || !pdfUrl) && (
            <button 
              className="p-4 border border-outline text-primary hover:bg-surface-container-highest transition-colors active:bg-primary/10" 
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? "Contraer" : "Ver Carpeta de Procedimientos & Fichas"}
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          )}

        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-4 border-t border-outline bg-background/20 animate-in slide-in-from-top-2">
          {steps && steps.length > 0 && (
            <div className="mb-4">
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Pasos del Procedimiento Principal:</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasSubprocedures && (
            <div className="mt-4 border-t border-outline/30 pt-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2">
                  <Folder className="w-4 h-4 text-primary" /> Procedimientos & Fichas de {title}
                </h5>
                <span className="text-[9px] font-bold text-primary bg-primary/5 px-2 py-1 border border-primary/20 tracking-wider">
                  {subProceduresList.length} DOCUMENTO(S)
                </span>
              </div>

              {subProceduresList.length > 0 ? (
                <div className="space-y-2 mb-6 animate-in fade-in">
                  {subProceduresList.map((sub) => (
                    <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-surface border border-outline/40 hover:border-primary/60 transition-all gap-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wider font-bold text-primary">{sub.title}</p>
                          <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mt-0.5">{sub.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 self-end sm:self-auto">
                        {onPreview && (
                          <button
                            onClick={() => onPreview(sub.pdfUrl)}
                            className="p-2 border border-outline text-primary hover:bg-surface-container-highest transition-colors"
                            title="Vista Previa"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <a
                          href={sub.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-outline text-primary hover:bg-surface-container-highest transition-colors"
                          title="Abrir Documento"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs italic text-on-surface-variant/80 mb-6 uppercase tracking-widest">No hay procedimientos o fichas creadas aún.</p>
              )}


            </div>
          )}
        </div>
      )}
    </div>
  );
}




