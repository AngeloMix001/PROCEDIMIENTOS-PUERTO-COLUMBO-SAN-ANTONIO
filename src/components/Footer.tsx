import React from 'react';
import { ShieldCheck, Award, FileCheck2, Anchor } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3 font-headline">
              <Anchor className="w-5 h-5 text-sky-400" />
              <span>PUERTO COLUMBO S.A.</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Terminal extraportuario e infraestructura logística integral. Plataforma de acceso rápido y consulta oficial de procedimientos operativos normalizados y listas de chequeo en terreno para la sede San Antonio.
            </p>
            <div className="mt-3 text-[11px] text-slate-500 font-mono">
              Sede San Antonio • Región de Valparaíso, Chile
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Estándares de Calidad y Cumplimiento
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Norma ISO 9001:2015 • Gestión de Calidad</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Certificación BASC de Seguridad en la Cadena Logística</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Cumplimiento Normativo Aduana y SAG Chile</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Control Documental Interno
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs leading-relaxed text-slate-300">
              <p className="font-medium text-sky-300 mb-1">Revisión Vigente: Ciclo 2026</p>
              <p className="text-slate-400 text-[11px]">
                Todos los documentos contenidos en este portal corresponden a versiones aprobadas y homologadas para la operación continua en Terminal San Antonio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Puerto Columbo S.A. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Portal Operativo SAI</span>
            <span>•</span>
            <span className="text-emerald-400">100% En Línea</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
