import { useCallback, useState, type ChangeEvent } from "react";

interface CallbackFormData {
    name: string;
    phone: string;
}

interface UseFormProps {
    onSubmit: (data: CallbackFormData) => Promise<void> | void;
    initialValues?: CallbackFormData;
}

export const useForm = ({ onSubmit, initialValues }: UseFormProps) => {
    const [formData, setFormData] = useState<CallbackFormData>(
        initialValues || { name: '', phone: ''}
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<CallbackFormData>>({});

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        let processedValue = value;
        if (name === 'phone') {
            processedValue = value.replace(/[^\d+]/g, '');
        }

        setFormData(prev => ({
            ...prev,
            [name]: processedValue,
        }));

        if (errors[name as keyof CallbackFormData]) {
            setErrors(prev => ({...prev, [name]: undefined }));
        }
    }, [errors]);

    const validateForm = (): boolean => {
        const newErrors: Partial<CallbackFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Введите имя';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Имя должно быть не короче 2 символов';
        }

        const phoneRegex = /^[0-9]{11}$/;
            if (!formData.phone.trim()) {
                newErrors.phone = 'Введите номер телефона';
            } else if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Введите 11 цифр (например: 89001234567)';
            }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit =  useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await onSubmit(formData);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }, [formData, onSubmit]);

    const resetForm = useCallback(() => {
        setFormData(initialValues || { name: '', phone: '' });
        setErrors({});
    }, [initialValues]);

    return {
        formData,
        isSubmitting,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        setFormData,
    };
};

export type { CallbackFormData };