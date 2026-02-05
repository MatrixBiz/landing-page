import { useForm } from '../../hooks/useForm';
import type { CallbackFormData } from '../../hooks/useForm';
import { InputField } from '../ui/InputField';
import { Button } from '../ui/Button';

interface ModalFormProps {
  onSubmit: (data: CallbackFormData) => Promise<void> | void;
}

export const ModalForm = ({ onSubmit }: ModalFormProps) => {
  const {
    formData,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useForm({ onSubmit });

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full flex flex-col items-center space-y-8"
    >
      <div className="w-full flex flex-col items-center space-y-8">
        <InputField
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя"
          required
          disabled={isSubmitting}
          error={errors.name}
        />

        <InputField
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Номер телефона"
          required
          disabled={isSubmitting}
          error={errors.phone}
          inputMode="numeric"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="h-[83px]"
        style={{ 
          width: '421px', 
          maxWidth: '100%',
          borderRadius: '41.5px',
        }}
      >
        Позвоните мне!
      </Button>
    </form>
  );
};