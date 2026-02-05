import { Header } from '../../components/layout/Header';
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
    <div className="min-h-screen flex flex-col bg-[#DADADC]">

      <Header />

      <main className="flex-grow">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
          <div className="hidden md:block md:w-[470px]"></div>
          <div className="flex-1 px-4 md:px-0 py-16">
          <h1 className="contacts-heading text-4xl md:text-5xl mb-8">Контакты</h1>

          <div className="flex flex-col gap-6 md:gap-8">

            <div>
              <h2 className="contacts-heading text-xl md:text-2xl">
                Телефон горячей линии: 
                <a href="tel:+79375861212" className="text-[#E30613] hover:opacity-80 ml-1">
                  +7 (937) 586-12-12
                </a>
              </h2>
              <p className="contacts-text text-base md:text-lg mt-1">
                (ежедневно с 9:00 до 18:00)
              </p>
            </div>

            <div>
              <h2 className="contacts-heading text-xl md:text-2xl">
                Telegram: 
                <a href="https://t.me/fabrikazvezda" target="_blank" rel="noopener noreferrer" className="text-[#E30613] hover:opacity-80 ml-1">
                  @fabrikazvezda
                </a>
              </h2>
            </div>

            <div>
              <h2 className="contacts-heading text-xl md:text-2xl">
                Почта для переписки: 
                <a href="mailto:info@zvezdafabrika.ru" className="text-[#E30613] hover:opacity-80 ml-1">
                  info@zvezdafabrika.ru
                </a>
              </h2>
            </div>

            <div>
              <h2 className="contacts-heading text-xl md:text-2xl mb-2">График работы:</h2>
              <div className="flex flex-col gap-1 md:gap-2">
                <p className="contacts-heading text-base md:text-lg">Понедельник – Пятница: 09:00 – 18:00</p>
                <p className="contacts-heading text-base md:text-lg">Обеденный перерыв: 12:00 – 13:00</p>
                <p className="contacts-heading text-base md:text-lg">Суббота, воскресенье: Выходные дни</p>
              </div>
            </div>

            <div>
              <button
                onClick={modal.open}
                className="contacts-heading-link text-[#E30613] hover:opacity-80 transition-opacity duration-200"
              >
                Запросить звонок
              </button>
            </div>
          </div>
          </div>
        </div>
      </main>

      <Footer />

      <ModalPhone
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="ЗАКАЖИТЕ ЗВОНОК"
      >
        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Спасибо!</h3>
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
