import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/sections/footer';

export default function PaymentDeliveryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DADADC]">

      <Header />

      <main className="flex-grow">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">

          <div className="hidden md:block md:w-[470px]"></div>

          <div className="flex-1 px-4 md:px-0 py-16 space-y-12">

            <section>
              <h1 className="contacts-heading text-4xl md:text-5xl mb-8">🛒 Оплата заказа</h1>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">Способы оплаты:</h2>
              <div className="pl-4 space-y-2">
                <p className="contacts-heading">
                  <strong>Безналичный расчет (для юридических лиц):</strong> выставление счета и оплата по реквизитам
                </p>
              </div>
            </section>

            <section>
              <h1 className="contacts-heading text-4xl md:text-5xl mb-8">🚚 Доставка товаров</h1>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">Варианты доставки:</h2>
              <div className="pl-4 space-y-4">
                <p className="contacts-heading"><strong>Самовывоз:</strong> адрес склада или пункта выдачи заказов</p>
                <p className="contacts-heading"><strong>Курьерская доставка по РФ:</strong></p>
                <div className="pl-4 space-y-1">
                  <p className="contacts-heading">• Бесплатно при заказе от 5 000 000 руб.</p>
                  <p className="contacts-heading">• Стоимость стандартной доставки рассчитывается индивидуально.</p>
                </div>
                <p className="contacts-heading"><strong>Доставка транспортной компанией</strong></p>
                <p className="contacts-heading"><strong>Срок доставки:</strong> Междугородняя доставка: от 10 календарных дней (уточняйте срок индивидуально)</p>
              </div>
            </section>

            <section>
              <h1 className="contacts-heading text-4xl md:text-5xl mb-8">⚠️ Важная информация:</h1>
              <div className="pl-4 space-y-2">
                <p className="contacts-heading">• Все цены указаны с учетом НДС.</p>
                <p className="contacts-heading">• Окончательная сумма доставки рассчитывается менеджером после оформления заказа.</p>
                <p className="contacts-heading">• Возможна предварительная консультация по вопросам оплаты и доставки по телефону или e-mail.</p>
              </div>
            </section>

            <section>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">3. Возможность расчета стоимости доставки</h2>
            </section>

            <section>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">4. Бонусы и акции</h2>
            </section>

            <section>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">5. Обучение и консультации</h2>
              <div className="pl-4 space-y-1">
                <p className="contacts-heading">• Онлайн-консультации от нашего специалиста (чат).</p>
                <p className="contacts-heading">• Статьи и инструкции по выбору и замене картриджа.</p>
                <p className="contacts-heading">• Информация о совместимости продуктов с различными моделями принтеров.</p>
              </div>
            </section>

            <section>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">6. Отзывы и рекомендации</h2>
            </section>

            <section>
              <h2 className="contacts-heading text-xl md:text-2xl mb-4">7. Операции с заказами</h2>
            </section>

          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}
