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

// Removed react-pdf imports as we now use iframes for better compatibility with Google Docs

const proceduresData = [
  { id: 1, title: "Procedimientos Gate Control", category: "Gate Control", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Verificar...", "Paso 2: Confirmar..."], pdfUrl: "https://docs.google.com/document/d/1mubwfwnF7lvISdDbVpS3vMlq5WnJ75ik/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 2, title: "Procedimientos CFS", category: "CFS", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Recepcionar...", "Paso 2: Coordinar..."], pdfUrl: "https://docs.google.com/document/d/1pQCNGFo41jJe_Zf7H_-SYITILlm8xQ-p/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 3, title: "Procedimientos Almacén Patio", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Identificar...", "Paso 2: Segregar..."], pdfUrl: "https://docs.google.com/document/d/1jhTqm5nkxGob7IgH3lQOjzVyzOX2G2ub/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 4, title: "Procedimientos Control Documentos", category: "Control Documentos", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Activar alarma...", "Paso 2: Evacuar..."], pdfUrl: "https://docs.google.com/document/d/16VLJHTmiZCXwYauo50TeJm8nRttTgu42/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 5, title: "Procedimientos Bodega", category: "Bodega", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Iniciar...", "Paso 2: Registrar..."], pdfUrl: "https://docs.google.com/document/d/1zvkTL6VuSYmeVMPAdEuoWizo4zic6YtK/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 6, title: "Procedimientos SAG", category: "SAG", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Revisar carga...", "Paso 2: Emitir certificado..."], pdfUrl: "https://docs.google.com/document/d/1q51xq2fKYj5qFKfaQoAmzgeqC4E9wYpu/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 7, title: "Procedimientos Control Room", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Monitorear...", "Paso 2: Registrar incidencias..."], pdfUrl: "https://docs.google.com/document/d/1RIVnKEPPZzd9GnKSj2JcXwOqMrLeJnA_/edit?usp=drive_link&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 8, title: "Procedimientos Porteos Full", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Verificar unidad...", "Paso 2: Autorizar ingreso..."], pdfUrl: "https://docs.google.com/document/d/1fBpJ7AehWyRj0bnzx-kR65TCdirCugbZ/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 9, title: "Procedimientos Porteos Vacíos", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Inspeccionar estado...", "Paso 2: Registrar salida..."], pdfUrl: "https://docs.google.com/document/d/1MRo5IdtP0gIQzJdYQ9pqkNTpB0Kl4HEF/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 10, title: "Procedimientos Reefer", category: "Almacén Patio", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Conectar unidad...", "Paso 2: Verificar temperatura..."], pdfUrl: "https://docs.google.com/document/d/16jpKiHLLdeDIgBzqxd_BR4XR4x1ZDUze/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
  { id: 11, title: "Procedimientos Buffer", category: "Buffer", date: "Actual", type: "procedure" as const, steps: ["Paso 1: Monitorear patio...", "Paso 2: Gestionar flujo..."], pdfUrl: "https://docs.google.com/document/d/1Joz_crZlhfv43EH2PyV3tM6moY-hWKCl/edit?usp=sharing&ouid=115558709160216474718&rtpof=true&sd=true" },
];

const checklistsData = [
  { id: 1, title: "Check List Bodega", category: "Bodega", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar CFS...", "2. Enviar programación..."], pdfUrl: "https://drive.google.com/file/d/1-o7RkBU63e2kIn9vSeSpJZqkW93GvUZV/view?usp=sharing" },
  { id: 2, title: "Check List CFS", category: "CFS", date: "Versión 001", type: "checklist" as const, steps: ["1. Recepcionar listado...", "2. Coordinar retiro..."], pdfUrl: "https://drive.google.com/file/d/1gsCL7DzoLyiJZqwHpr8duIoXbn29lM9L/view?usp=sharing" },
  { id: 3, title: "Check List Gate Control", category: "Gate Control", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar Gate...", "2. Revisar sello..."], pdfUrl: "https://drive.google.com/file/d/1nCHLAlTD_yMgUqlWfWZOKLnGHYGeuuT_/view?usp=sharing" },
  { id: 4, title: "Check List Control Documentos", category: "Control Documentos", date: "Versión 002", type: "checklist" as const, steps: ["1. Revisar planificación...", "2. Identificar naves..."], pdfUrl: "https://drive.google.com/file/d/1-xrVViIgY2P66KgbjMSN32g645jepwHB/view?usp=sharing" },
  { id: 5, title: "Check List Almacén Patio", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar contenedor...", "2. Confirmar contacto..."], pdfUrl: "https://drive.google.com/file/d/1PY0lVHuJwrxyKZY1COBBFh5EjpWC1GZy/view?usp=sharing" },
  { id: 6, title: "Check List SAG", category: "SAG", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar carga...", "2. Confirmar certificación..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-a/view?usp=sharing" },
  { id: 7, title: "Check List Control Room", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Revisar monitores...", "2. Registrar novedades..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-b/view?usp=sharing" },
  { id: 8, title: "Check List Porteos Full", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar sello...", "2. Validar documentación..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-c/view?usp=sharing" },
  { id: 9, title: "Check List Porteos Vacíos", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Inspeccionar daños...", "2. Registrar número contenedor..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-d/view?usp=sharing" },
  { id: 10, title: "Check List Reefer", category: "Almacén Patio", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar enchufe...", "2. Confirmar lectura temp..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-e/view?usp=sharing" },
  { id: 11, title: "Check List Buffer", category: "Buffer", date: "Versión 001", type: "checklist" as const, steps: ["1. Verificar capacidad...", "2. Registrar movimientos..."], pdfUrl: "https://drive.google.com/file/d/1-placeholder-f/view?usp=sharing" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'procedures' | 'checklists'>('procedures');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const filteredProcedures = proceduresData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredChecklists = checklistsData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-body text-on-surface p-8 md:p-16 max-w-5xl mx-auto">
      <header className="mb-12 border-b border-outline pb-8 flex items-center gap-6">
        <img src="https://res.cloudinary.com/djmo7ydpm/image/upload/v1776870967/logo-puerto_2xaaaaaaaaa_olrchx.png" alt="Puerto Columbo Logo" className="h-20 w-auto" />
        <div>
          <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-primary uppercase">Puerto Columbo San Antonio</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-3">Sistema de Control Operativo</p>
        </div>
      </header>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-background/80 flex items-center justify-center p-4">
          <div className="bg-surface w-full max-w-4xl h-[80vh] border border-outline p-4 relative">
            <button 
              onClick={() => setPreviewUrl(null)} 
              className="absolute top-2 right-2 px-4 py-2 bg-primary text-on-primary text-xs uppercase"
            >
              Cerrar Vista Previa
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

      <div className="flex gap-8 mb-10 border-b border-outline">
        <button
          className={`pb-4 text-xs md:text-sm uppercase tracking-widest transition-colors ${
            activeTab === 'procedures' 
              ? 'text-primary border-b border-primary' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
          onClick={() => setActiveTab('procedures')}
        >
          Procedimientos
        </button>
        <button
          className={`pb-4 text-xs md:text-sm uppercase tracking-widest transition-colors ${
            activeTab === 'checklists' 
              ? 'text-primary border-b border-primary' 
              : 'text-on-surface-variant hover:text-primary'
          }`}
          onClick={() => setActiveTab('checklists')}
        >
          Check Lists
        </button>
      </div>

      <main>
        {activeTab === 'procedures' ? (
          <List items={filteredProcedures} emptyMessage="No se encontraron procedimientos." onPreview={(url) => setPreviewUrl(url)} />
        ) : (
          <List items={filteredChecklists} emptyMessage="No se encontraron check lists." onPreview={(url) => setPreviewUrl(url)} />
        )}
      </main>
    </div>
  );
}

function List({ items, emptyMessage, onPreview }: { items: any[], emptyMessage: string, onPreview: (url: string) => void }) {
  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-on-surface-variant text-xs uppercase tracking-widest border border-outline border-dashed">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {items.map(item => (
        <ItemCard 
          key={item.id}
          title={item.title} 
          category={item.category} 
          date={item.date} 
          type={item.type} 
          steps={item.steps}
          pdfUrl={item.pdfUrl}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}

function ItemCard({ title, category, date, type, steps, pdfUrl, onPreview }: { title: string, category: string, date: string, type: 'procedure' | 'checklist', steps?: string[], pdfUrl?: string, onPreview?: (url: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  let Icon = type === 'procedure' ? FileText : CheckSquare;
  if (title.includes("CFS") && type === 'procedure') {
    Icon = Building;
  }
  
  return (
    <div className="group bg-surface border border-outline hover:border-primary transition-all">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-12 h-12 border border-outline flex items-center justify-center text-on-surface-variant bg-surface-container-lowest shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-headline text-xl text-primary mb-3">{title}</h4>
          <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest text-on-surface-variant">
            <span className="flex items-center gap-2"><Folder className="w-3 h-3" /> {category}</span>
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {date}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          {pdfUrl && (
            <button 
              onClick={() => onPreview && onPreview(pdfUrl)}
              className="p-3 border border-outline text-primary hover:bg-surface-container-highest transition-colors" 
              title="Vista previa"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}

          {pdfUrl && (
            <a 
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-outline text-primary hover:bg-surface-container-highest transition-colors" 
              title="Descargar"
            >
              <Download className="w-4 h-4" />
            </a>
          )}

          {!pdfUrl && (
            <button 
              className="p-3 border border-outline text-primary hover:bg-surface-container-highest transition-colors" 
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? "Contraer" : "Expandir"}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}

        </div>
      </div>
      
      {isExpanded && steps && (
        <div className="px-6 pb-6 pt-0 border-t border-outline animate-in slide-in-from-top-2">
          <ul className="space-y-2 mt-4 text-sm text-on-surface-variant font-body">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

