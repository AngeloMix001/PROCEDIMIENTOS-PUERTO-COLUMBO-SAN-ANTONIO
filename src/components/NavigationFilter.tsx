import React from 'react';
import { motion } from 'motion/react';
import { Search, X, Filter, RotateCcw, FileText, CheckSquare } from 'lucide-react';

interface NavigationFilterProps {
  activeTab: 'procedure' | 'checklist';
  onTabChange: (tab: 'procedure' | 'checklist') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  proceduresCount: number;
  checklistsCount: number;
  totalFiltered: number;
  totalItems: number;
  onResetFilters: () => void;
}

export const NavigationFilter: React.FC<NavigationFilterProps> = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  proceduresCount,
  checklistsCount,
  totalFiltered,
  totalItems,
  onResetFilters
}) => {
  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'all';

  return (
    <div className="space-y-4 mb-8">
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Tab switch with animated highlight */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onTabChange('procedure')}
            className={`relative flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer ${
              activeTab === 'procedure' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeTab === 'procedure' && (
              <motion.div
                layoutId="activeTabHighlight"
                className="absolute inset-0 bg-[#003B6F] rounded-lg shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <FileText className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Procedimientos ({proceduresCount})</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('checklist')}
            className={`relative flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer ${
              activeTab === 'checklist' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeTab === 'checklist' && (
              <motion.div
                layoutId="activeTabHighlight"
                className="absolute inset-0 bg-[#003B6F] rounded-lg shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <CheckSquare className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Check Lists ({checklistsCount})</span>
          </button>
        </div>

        {/* Search input with live clear button */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por código (ej: PR-GC, CK-BOD), título o departamento..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:border-[#003B6F] focus:ring-2 focus:ring-[#003B6F]/15 outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-md cursor-pointer"
              title="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category filters & results counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
          <span className="text-slate-400 text-xs font-medium flex items-center gap-1 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            Filtrar:
          </span>

          <button
            type="button"
            onClick={() => onCategoryChange('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#003B6F] text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            Todas ({totalItems})
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#003B6F] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 self-end sm:self-center shrink-0">
          <span>
            Mostrando <strong className="text-slate-800">{totalFiltered}</strong> de {totalItems}
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-[#003B6F] hover:text-[#00264A] font-semibold hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Restablecer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
