import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  CheckSquare,
  Calendar,
  Eye,
  Download,
  Copy,
  Check,
  ChevronDown,
  Building,
  Package,
  Layers,
  FileCheck,
  ShieldCheck,
  Monitor,
  Snowflake,
  Clock,
  Handshake,
  Headphones,
  Wrench,
  Truck,
  Anchor,
  ListOrdered
} from 'lucide-react';
import { DocumentItem } from '../types';

interface ItemCardProps {
  item: DocumentItem;
  index: number;
  onPreview: (url: string, title: string, category: string, code?: string) => void;
  onToast: (message: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  index,
  onPreview,
  onToast
}) => {
  const [copied, setCopied] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  // Pick semantic icon matching the category and type
  const getCategoryIcon = (category: string, title: string, type: string) => {
    const combined = `${category} ${title}`.toLowerCase();
    if (combined.includes('gate control')) return Truck;
    if (combined.includes('cfs')) return Building;
    if (combined.includes('bodega')) return Package;
    if (combined.includes('control documentos')) return FileCheck;
    if (combined.includes('sag')) return ShieldCheck;
    if (combined.includes('control room')) return Monitor;
    if (combined.includes('reefer')) return Snowflake;
    if (combined.includes('buffer')) return Clock;
    if (combined.includes('porteo')) return Layers;
    if (combined.includes('patio') || combined.includes('almacén')) return Anchor;
    if (combined.includes('equipo') || combined.includes('maquinaria')) return Wrench;
    if (combined.includes('customer service')) return Headphones;
    if (combined.includes('comercial')) return Handshake;
    return type === 'procedure' ? FileText : CheckSquare;
  };

  const Icon = getCategoryIcon(item.category, item.title, item.type);

  const handleCopyLink = () => {
    if (item.pdfUrl) {
      navigator.clipboard.writeText(item.pdfUrl);
      setCopied(true);
      onToast(`Enlace copiado: ${item.title}`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fileFormat =
    item.fileType?.toUpperCase() ||
    (item.pdfUrl?.includes('docs.google.com') ? 'GDOC' : item.pdfUrl?.includes('drive.google.com') ? 'DRIVE' : 'PDF');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.03, 0.25),
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#003B6F]/40 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Subtle top accent gradient on hover */}
      <div className="h-0.5 w-full bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#003B6F] group-hover:to-amber-400 transition-all duration-300" />

      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-[#003B6F] group-hover:bg-[#003B6F] group-hover:text-white transition-colors duration-200 shrink-0 shadow-2xs">
              <Icon className="w-6 h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                {item.code && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#E6F0FA] text-[#003B6F] rounded-md border border-sky-200">
                    {item.code}
                  </span>
                )}
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-slate-700 rounded-md">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60 rounded-md">
                  {fileFormat}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#003B6F] transition-colors leading-snug">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 mt-2.5 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.date}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-medium">Oficial y Vigente</span>
                {item.steps && item.steps.length > 0 && (
                  <>
                    <span className="text-slate-300">•</span>
                    <button
                      type="button"
                      onClick={() => setShowSteps(!showSteps)}
                      className="inline-flex items-center gap-1 text-[#003B6F] hover:underline font-semibold cursor-pointer"
                    >
                      <ListOrdered className="w-3.5 h-3.5" />
                      {showSteps ? 'Ocultar pasos' : `Ver pasos (${item.steps.length})`}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0 self-end sm:self-center">
            {item.pdfUrl && (
              <button
                type="button"
                onClick={() => onPreview(item.pdfUrl, item.title, item.category, item.code)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#003B6F] hover:bg-[#00264A] text-white shadow-xs hover:shadow-sm transition-all cursor-pointer"
                title="Abrir vista previa del documento"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>
            )}

            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Descargar o abrir documento"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Abrir</span>
              </a>
            )}

            {item.pdfUrl && (
              <button
                type="button"
                onClick={handleCopyLink}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                title="Copiar enlace directo"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Steps accordion */}
        <AnimatePresence>
          {showSteps && item.steps && item.steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 pt-4 border-t border-slate-100 overflow-hidden"
            >
              <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-2.5 flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-[#003B6F]" />
                Etapas Operativas del Procedimiento:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {item.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/60"
                  >
                    <span className="w-5 h-5 rounded-md bg-[#003B6F]/10 text-[#003B6F] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
