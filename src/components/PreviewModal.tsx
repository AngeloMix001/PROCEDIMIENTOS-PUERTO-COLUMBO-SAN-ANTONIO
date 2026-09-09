import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Copy,
  Check,
  ExternalLink,
  Download,
  X,
  Loader2
} from 'lucide-react';
import { PreviewDocumentState } from '../types';

interface PreviewModalProps {
  document: PreviewDocumentState;
  onClose: () => void;
  onToast: (message: string) => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  document,
  onClose,
  onToast
}) => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { url, title, category, code } = document;

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!url) return null;

  // Transform URL into embeddable preview format
  const getEmbedUrl = (rawUrl: string): string => {
    if (rawUrl.includes('drive.google.com')) {
      return rawUrl.replace('/view', '/preview');
    }
    if (rawUrl.includes('docs.google.com')) {
      return rawUrl.split('/edit')[0] + '/preview';
    }
    return `https://docs.google.com/viewer?url=${encodeURIComponent(rawUrl)}&embedded=true`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    onToast('Enlace copiado al portapapeles');
    setTimeout(() => setCopied(false), 2000);
  };

  const embedSrc = getEmbedUrl(url);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[88vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#00264A] to-[#003B6F] text-white flex items-center justify-between gap-4 shrink-0 border-b border-sky-900/40">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-200 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {code && (
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-xs">
                      {code}
                    </span>
                  )}
                  <span className="text-[11px] font-medium text-sky-200 uppercase tracking-wider">
                    {category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
                  {title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                title="Copiar enlace directo"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir en pestaña externa"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Abrir en Pestaña</span>
              </a>

              <a
                href={url}
                download
                target="_blank"
                rel="noopener noreferrer"
                title="Descargar archivo"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Descargar</span>
              </a>

              <div className="h-6 w-px bg-white/20 mx-1" />

              <button
                type="button"
                onClick={onClose}
                title="Cerrar vista previa (ESC)"
                className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-500 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Iframe Body */}
          <div className="relative flex-1 bg-slate-100 overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 z-10">
                <Loader2 className="w-8 h-8 text-[#003B6F] animate-spin mb-2" />
                <p className="text-xs text-slate-500 font-medium tracking-wide">
                  Cargando vista previa oficial del documento...
                </p>
              </div>
            )}
            <iframe
              src={embedSrc}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0"
              title={`Vista previa - ${title}`}
            />
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span className="truncate">
              Puerto Columbo San Antonio • Repositorio Documental Seguro
            </span>
            <span className="shrink-0 text-[11px] text-slate-400">
              Presione <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded-sm text-[10px] text-slate-700 font-mono">ESC</kbd> para salir
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
