import { Header } from '../../components/layout/Header';
import { TopBar } from '../../components/layout/TopBar';
import { Footer } from '../../components/sections/footer';

export default function DealersPage() {
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
        <div className="space-y-12">
          <div>
            <h2 className="contacts-heading mb-6">
              Как стать дилером
            </h2>
            <p className="contacts-text">
              Для того, чтобы стать дилером, подпишите дилерский договор. 
              Договор можете запросить по почте{' '}
              <a 
                href="mailto:info@zvezdafabrika.ru" 
                className="text-[#E30613] hover:opacity-80"
              >
                info@zvezdafabrika.ru
              </a>
            </p>
          </div>

          <div>
            <h2 className="contacts-heading mb-6">
              Как стать дистрибьютором
            </h2>
            <p className="contacts-text mb-4">
              Для того, чтобы стать дистрибьютером, нужно соответствовать следующим критериям:
            </p>
            <ul className="contacts-text list-disc pl-8 space-y-2">
              <li>подписать дистрибьюторский договор</li>
              <li>
                Договор можете запросить по почте{' '}
                <a 
                  href="mailto:info@zvezdafabrika.ru" 
                  className="text-[#E30613] hover:opacity-80"
                >
                  info@zvezdafabrika.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}