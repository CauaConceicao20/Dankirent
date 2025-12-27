export interface ModalData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string | null;
  action?: () => void;
}