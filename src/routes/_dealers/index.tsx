import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/sections/footer';

export default function DealersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DADADC]">

      <Header />

      <main className="flex-grow">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">

          <div className="hidden md:block md:w-[470px]"></div>

          <div className="flex-1 px-4 md:px-0 py-16 space-y-12">

            <div>
              <h2 className="contacts-heading text-3xl md:text-4xl mb-6">
                Как стать дилером
              </h2>
              <p className="contacts-text text-lg md:text-xl">
                Для того, чтобы стать дилером, подпишите дилерский договор. 
                Договор можете запросить по почте{' '}
                <a href="mailto:info@zvezdafabrika.ru" className="text-[#E30613] hover:opacity-80">
                  info@zvezdafabrika.ru
                </a>
              </p>
            </div>

            <div>
              <h2 className="contacts-heading text-3xl md:text-4xl mb-6">
                Как стать дистрибьютором
              </h2>
              <p className="contacts-text text-lg md:text-xl mb-4">
                Для того, чтобы стать дистрибьютером, нужно соответствовать следующим критериям:
              </p>
              <ul className="contacts-text list-disc pl-8 space-y-2 text-lg md:text-xl">
                <li>подписать дистрибьюторский договор</li>
                <li>
                  Договор можете запросить по почте{' '}
                  <a href="mailto:info@zvezdafabrika.ru" className="text-[#E30613] hover:opacity-80">
                    info@zvezdafabrika.ru
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}
