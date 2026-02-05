import { Header } from '../../components/layout/Header';
import { TopBar } from '../../components/layout/TopBar';
import { useModal } from '../../hooks/useModal';
import { ModalPhone, ModalForm } from '../../components/modal';
import { type CallbackFormData } from '../../hooks/useForm';
import { useState } from 'react';
import { Footer } from '../../components/sections/footer';

export default function ContactsPage() {
  const modal = useModal({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: CallbackFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Отправленные данные:', data);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      modal.close();
      setSubmitSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#DADADC]">
      <TopBar />
      <Header />

      <div 
        className="pt-[250px] pl-[600px] pr-8"
        style={{
          width: 'calc(100vw - 132px)',
          maxWidth: 'none'
        }}
      >
        <h1 className="contacts-heading mb-2">
          Контакты
        </h1>

        <div className="flex flex-col gap-2 w-full">
          <div className="w-full">
            <h2 className="contacts-heading mb-2 whitespace-nowrap">
              Телефон горячей линии: <a href="tel:+79375861212" className="text-[#E30613] hover:opacity-80">+7 (937) 586-12-12</a>
              <span className="contacts-text whitespace-nowrap"> (ежедневно с 9:00 до 18:00)</span>
            </h2>
          </div>

          <div className="w-full">
            <h2 className="contacts-heading whitespace-nowrap">
              Telegram: <a href="https://t.me/fabrikazvezda" target="_blank" rel="noopener noreferrer" className="text-[#E30613] hover:opacity-80">@fabrikazvezda</a>
            </h2>
          </div>

          <div className="w-full">
            <h2 className="contacts-heading whitespace-nowrap">
              Почта для переписки: <a href="mailto:info@zvezdafabrika.ru" className="text-[#E30613] hover:opacity-80">info@zvezdafabrika.ru</a>
            </h2>
          </div>

          <div className="w-full">
            <h2 className="contacts-heading mb-2 whitespace-nowrap">
              График работы:
            </h2>
            <div className="flex flex-col gap-2">
              <p className="contacts-heading whitespace-nowrap">
                Понедельник – Пятница: 09:00 – 18:00
              </p>
              <p className="contacts-heading whitespace-nowrap">
                Обеденный перерыв: 12:00 – 13:00
              </p>
              <p className="contacts-heading whitespace-nowrap">
                Суббота, воскресенье: Выходные дни
              </p>
            </div>
          </div>

          <div className="pt-8 w-full">
            <button
              onClick={modal.open}
              className="contacts-heading-link text-[#E30613] hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            >
              Запросить звонок
            </button>
          </div>
        </div>
      </div>
      <Footer />
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