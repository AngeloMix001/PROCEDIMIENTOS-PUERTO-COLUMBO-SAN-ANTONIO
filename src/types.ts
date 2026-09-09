export interface DocumentItem {
  id: string | number;
  code: string;
  title: string;
  category: string;
  date: string;
  type: 'procedure' | 'checklist';
  fileType?: 'gdoc' | 'drive' | 'docx' | 'pdf';
  description?: string;
  steps?: string[];
  pdfUrl: string;
  isFolder?: boolean;
  badge?: string;
  subItems?: SubProcedureItem[];
}

export interface SubProcedureItem {
  id: string;
  code: string;
  title: string;
  date: string;
  pdfUrl: string;
  fileType?: 'gdoc' | 'drive' | 'docx' | 'pdf';
}

export interface SubProcedure {
  id: string;
  title: string;
  pdfUrl: string;
  date: string;
}

export interface PreviewDocumentState {
  url: string | null;
  title: string;
  category: string;
  code?: string;
}
