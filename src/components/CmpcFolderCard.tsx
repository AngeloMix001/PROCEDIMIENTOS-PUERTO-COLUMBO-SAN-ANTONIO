import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Folder,
  FolderOpen,
  Calendar,
  ChevronDown,
  Eye,
  ExternalLink,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import { DocumentItem, SubProcedureItem } from '../types';

interface CmpcFolderCardProps {
  item: DocumentItem;
  subItems: SubProcedureItem[];
  index: number;
  onPreview: (url: string, title: string, category: string, code?: string) => void;
  onToast: (message: string) => void;
}

export const CmpcFolderCard: React.FC<CmpcFolderCardProps> = ({
  item,
  subItems,
  index,
  onPreview,
  onToast
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (sub: SubProcedureItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(sub.pdfUrl);
    setCopiedId(sub.id);
    onToast(`Enlace copiado: ${sub.title}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.03, 0.25),
        ease: [0.16, 1, 0.3, 1]
      }}
      className="bg-white rounded-xl border border-slate-200/90 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Top accent gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-[#003B6F] to-sky-500" />

      {/* Folder Header - clickable to expand/collapse. 
          Per user request: ONLY the box to open/close is present (no preview or download in folder header). */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-start sm:items-center gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
            {isOpen ? <FolderOpen className="w-6 h-6" /> : <Folder className="w-6 h-6" />}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {item.code && (
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#E6F0FA] text-[#003B6F] rounded-md border border-sky-200">
                  {item.code}
                </span>
              )}
              <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-amber-100 text-amber-900 border border-amber-200 rounded-md">
                {item.badge || 'CARPETA DE PROCEDIMIENTOS & FICHAS'}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-sky-50 text-sky-800 rounded-md">
                {subItems.length} Documentos
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#003B6F] transition-colors">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {item.description}
              </p>
            )}

            <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {item.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">Procedimientos & Fichas Técnicas</span>
            </div>
          </div>
        </div>

        {/* ONLY the box to open or close the folder */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            <span>{isOpen ? 'Contraer' : 'Expandir'}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Expanded sub-procedures and technical fichas grid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-slate-100 bg-slate-50/70 p-5 sm:p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Folder className="w-4 h-4 text-[#003B6F]" />
                <span>Documentos Técnicos y Fichas Operativas CMPC</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                {subItems.length} registros oficiales
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subItems.map((sub, sIdx) => (
                <div
                  key={sub.id || sIdx}
                  className="group/item bg-white rounded-lg border border-slate-200/90 hover:border-[#003B6F]/40 p-3.5 flex flex-col justify-between gap-3 shadow-2xs hover:shadow-xs transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#003B6F]/10 flex items-center justify-center text-[#003B6F] shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      {sub.code && (
                        <span className="text-[9px] font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-xs border border-amber-200 inline-block mb-1">
                          {sub.code}
                        </span>
                      )}
                      <h4 className="text-xs font-bold text-slate-800 group-hover/item:text-[#003B6F] transition-colors leading-snug">
                        {sub.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {sub.date} • Google Docs
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onPreview(sub.pdfUrl, sub.title, item.category, sub.code)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#003B6F] hover:bg-[#00264A] text-white transition-colors cursor-pointer"
                      title="Ver documento oficial"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Vista</span>
                    </button>

                    <a
                      href={sub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      title="Abrir en pestaña nueva"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleCopyLink(sub, e)}
                      className="p-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                      title="Copiar enlace"
                    >
                      {copiedId === sub.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
