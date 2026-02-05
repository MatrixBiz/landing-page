import { useState, useCallback, useEffect } from 'react';

interface UseModalOptions {
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  blockScroll?: boolean;
}

export const useModal = (options: UseModalOptions = {}) => {
  const {
    closeOnEscape = true,
    closeOnOverlayClick = true,
    blockScroll = true,
  } = options;
  
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close, closeOnEscape]);

  useEffect(() => {
    if (blockScroll && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, blockScroll]);

  return {
    isOpen,
    open,
    close,
    toggle,
    closeOnEscape,
    closeOnOverlayClick,
  };
};