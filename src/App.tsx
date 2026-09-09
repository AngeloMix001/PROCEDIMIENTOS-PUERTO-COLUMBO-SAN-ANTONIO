import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Header } from './components/Header';
import { NavigationFilter } from './components/NavigationFilter';
import { ItemCard } from './components/ItemCard';
import { CmpcFolderCard } from './components/CmpcFolderCard';
import { PreviewModal } from './components/PreviewModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { PROCEDURES_DATA, CHECKLISTS_DATA, INITIAL_CMPC_DOCS } from './data/procedures';
import { PreviewDocumentState, DocumentItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'procedure' | 'checklist'>('procedure');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [previewDoc, setPreviewDoc] = useState<PreviewDocumentState>({
    url: null,
    title: '',
    category: '',
    code: undefined
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  };

  // Base dataset depending on tab
  const currentDataset = activeTab === 'procedure' ? PROCEDURES_DATA : CHECKLISTS_DATA;

  // Extract unique categories for current tab
  const categories = useMemo(() => {
    const cats = Array.from(new Set(currentDataset.map((item) => item.category)));
    return cats.sort();
  }, [currentDataset]);

  // Reset category if not in new tab's categories
  const handleTabChange = (tab: 'procedure' | 'checklist') => {
    setActiveTab(tab);
    setSelectedCategory('all');
  };

  // Filter items based on active search and category
  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return currentDataset.filter((item: DocumentItem) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Query filter
      if (!query) return true;

      const inCode = item.code?.toLowerCase().includes(query) ?? false;
      const inTitle = item.title.toLowerCase().includes(query);
      const inCategory = item.category.toLowerCase().includes(query);
      const inDesc = item.description?.toLowerCase().includes(query) ?? false;
      const inSteps = item.steps?.some((s) => s.toLowerCase().includes(query)) ?? false;

      // Also search within CMPC sub-items if this is the folder
      let inSubItems = false;
      if (item.isFolder) {
        inSubItems = INITIAL_CMPC_DOCS.some(
          (sub) =>
            sub.title.toLowerCase().includes(query) ||
            sub.code.toLowerCase().includes(query)
        );
      }

      return inCode || inTitle || inCategory || inDesc || inSteps || inSubItems;
    });
  }, [currentDataset, selectedCategory, searchQuery]);

  const handleOpenPreview = (url: string, title: string, category: string, code?: string) => {
    setPreviewDoc({
      url,
      title,
      category,
      code
    });
  };

  const handleClosePreview = () => {
    setPreviewDoc({
      url: null,
      title: '',
      category: '',
      code: undefined
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen maritime-grid flex flex-col selection:bg-[#003B6F] selection:text-white">
      {/* Maritime Corporate Header */}
      <Header
        proceduresCount={PROCEDURES_DATA.length}
        checklistsCount={CHECKLISTS_DATA.length}
        cmpcCount={INITIAL_CMPC_DOCS.length}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Navigation, Search and Filter Controls */}
        <NavigationFilter
          activeTab={activeTab}
          onTabChange={handleTabChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          proceduresCount={PROCEDURES_DATA.length}
          checklistsCount={CHECKLISTS_DATA.length}
          totalFiltered={filteredItems.length}
          totalItems={currentDataset.length}
          onResetFilters={handleResetFilters}
        />

        {/* Document Cards Grid */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              if (item.isFolder) {
                return (
                  <CmpcFolderCard
                    key={item.id}
                    item={item}
                    subItems={INITIAL_CMPC_DOCS}
                    index={index}
                    onPreview={handleOpenPreview}
                    onToast={showToast}
                  />
                );
              }

              return (
                <ItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  onPreview={handleOpenPreview}
                  onToast={showToast}
                />
              );
            })}
          </AnimatePresence>

          {/* Empty Search State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-slate-200 p-10 sm:p-14 text-center shadow-xs"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <SearchX className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800">
                No se encontraron documentos
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1 mb-5 leading-relaxed">
                No existen registros que coincidan con los criterios de búsqueda o el departamento seleccionado.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-[#003B6F] hover:bg-[#00264A] text-white transition-all shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer Filtros</span>
              </button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Document Preview Modal */}
      <PreviewModal
        document={previewDoc}
        onClose={handleClosePreview}
        onToast={showToast}
      />

      {/* Feedback Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
