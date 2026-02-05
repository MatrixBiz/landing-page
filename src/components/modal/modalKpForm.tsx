import { useState } from 'react';
import { Button } from '../ui/Button.tsx';

interface ModalKpFormProps {
  onSubmit: (type: 'factory' | 'partners') => Promise<void> | void;
}

export const ModalKpForm = ({ onSubmit }: ModalKpFormProps) => {
  const [selectedOption, setSelectedOption] = useState<'factory' | 'partners' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFactoryClick = async () => {
    setSelectedOption('factory');
    setIsSubmitting(true);
    try {
      await onSubmit('factory');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnersClick = async () => {
    setSelectedOption('partners');
    setIsSubmitting(true);
    try {
      await onSubmit('partners');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <Button
        onClick={handleFactoryClick}
        isLoading={isSubmitting && selectedOption === 'factory'}
        disabled={isSubmitting}
        variant="primary"
        className="h-[83px] w-full max-w-md mx-auto"
        style={{ 
          borderRadius: '41.5px',
        }}
      >
        Одно КП только от завода
      </Button>

      <Button
        onClick={handlePartnersClick}
        isLoading={isSubmitting && selectedOption === 'partners'}
        disabled={isSubmitting}
        variant="primary"
        className="h-[83px] w-full max-w-md mx-auto"
        style={{ 
          borderRadius: '41.5px',
        }}
      >
        Несколько КП завод + партнеры
      </Button>
    </div>
  );
};