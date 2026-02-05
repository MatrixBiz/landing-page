import { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalPhoneProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
}

export const ModalPhone = ({
  isOpen,
  onClose,
  title = 'закажите звонок',
  children,
  closeOnOverlayClick = true,
}: ModalPhoneProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      aria-modal="true"
      aria-hidden={!isOpen}
      role="dialog"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-[43px] shadow-[4px_8px_15px_rgba(0,0,0,0.25)] 
                   w-[694px] max-w-[90vw] h-[446px] max-h-[90vh] overflow-hidden
                   focus:outline-none flex flex-col"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 uppercase">
            {title}
          </h2>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-[603px] flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};