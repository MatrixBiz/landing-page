import { Header } from '../../components/layout/Header';
import { TopBar } from '../../components/layout/TopBar';
import { Footer } from '../../components/sections/footer';

export default function PaymentDeliveryPage() {
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
          <section>
            <h1 className="contacts-heading mb-8">
              🛒 Оплата заказа
            </h1>
            
            <h2 className="contacts-heading mb-4">
              Способы оплаты:
            </h2>
            
            <div className="pl-4 space-y-4">
              <p className="contacts-heading">
                <strong>Безналичный расчет (для юридических лиц):</strong> выставление счета и оплата по реквизитам
              </p>
            </div>
          </section>
          
          <section>
            <h1 className="contacts-heading mb-8">
              🚚 Доставка товаров
            </h1>
            
            <h2 className="contacts-heading mb-4">
              Варианты доставки:
            </h2>
            
            <div className="pl-4 space-y-6">
              <div>
                <p className="contacts-heading mb-2">
                  <strong>Самовывоз:</strong> адрес склада или пункта выдачи заказов
                </p>
              </div>
              
              <div>
                <p className="contacts-heading mb-2">
                  <strong>Курьерская доставка по РФ</strong>:
                </p>
                <div className="pl-4 space-y-2">
                  <p className="contacts-heading">
                    • Бесплатно при заказе от 5 000 000 руб.
                  </p>
                  <p className="contacts-heading">
                    • Стоимость стандартной доставки сроки рассчитываются индивидуально.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="contacts-heading mb-2">
                  <strong>Доставка транспортной компанией</strong>
                </p>
              </div>
              
              <div>
                <p className="contacts-heading mb-2">
                  <strong>Срок доставки:</strong>
                </p>
                <p className="contacts-heading pl-4">
                  Междугородняя доставка: от 10 календарных дней (уточняйте срок индивидуально)
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h1 className="contacts-heading mb-8">
              ⚠️ Важная информация:
            </h1>
            
            <div className="pl-4 space-y-4">
              <p className="contacts-heading">
                • Все цены указаны с учетом НДС.
              </p>
              <p className="contacts-heading">
                • Окончательная сумма доставки рассчитывается менеджером после оформления заказа.
              </p>
              <p className="contacts-heading">
                • Возможна предварительная консультация по вопросам оплаты и доставки по телефону или e-mail.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="contacts-heading mb-4">
              3. Возможность расчета стоимости доставки
            </h2>
            
            <div className="pl-4 space-y-4">

            </div>
          </section>
          
          <section>
            <h2 className="contacts-heading mb-4">
              4. Бонусы и акции
            </h2>
          </section>
          
          <section>
            <h2 className="contacts-heading mb-4">
              5. Обучение и консультации
            </h2>
            
            <div className="pl-4 space-y-2">
              <p className="contacts-heading">
                • Онлайн-консультации от нашего специалиста (чат).
              </p>
              <p className="contacts-heading">
                • Статьи и инструкции по выбору и замене картриджа.
              </p>
              <p className="contacts-heading">
                • Информация о совместимости продуктов с различными моделями принтеров.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="contacts-heading mb-4">
              6. Отзывы и рекомендации
            </h2>
            
            <div className="pl-4 space-y-4">

            </div>
          </section>
          
          <section>
            <h2 className="contacts-heading mb-4">
              7. Операции с заказами
            </h2>
            
            <div className="pl-4 space-y-4">
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}