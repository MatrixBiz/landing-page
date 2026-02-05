import { useState, useCallback, useEffect } from 'react';

interface UseModalKpOptions {
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  blockScroll?: boolean;
}

export const useModalKp = (options: UseModalKpOptions = {}) => {
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