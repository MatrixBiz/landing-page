import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { ModalPhone, ModalForm } from '../../components/modal';
import { type CallbackFormData } from '../../hooks/useForm';
import { TopBar } from '../../components/layout/TopBar';
import { Header } from '../../components/layout/Header';
import { HeroSection } from '../../components/sections/HeroSection';
import { Footer } from './../../components/sections/footer.tsx';

export default function LandingPage() {
  const modal = useModal({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: CallbackFormData) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: `+7${data.phone.substring(1)}`,
          source: 'landing-page',
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        console.error('API ошибка:', await response.text());
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#DADADC]">

      <TopBar />

      <Header />

      <HeroSection onOpenModal={modal.open} />

      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>

      <ModalPhone
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="ЗАКАЖИТЕ ЗВОНОК"
      >
        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center 
                          justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                      d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Спасибо!
            </h3>
            <p className="text-xl text-gray-600 text-center">
              Мы перезвоним в течение 15 минут
            </p>
          </div>
        ) : (
          <ModalForm onSubmit={handleSubmit} />
        )}
      </ModalPhone>
    </div>
  );
}