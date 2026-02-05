import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModalKp } from '../../hooks/useModalKp';
import { ModalKp } from '../modal/modalKp';
import { ModalKpForm } from '../modal/modalKpForm';

interface DropdownItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export const TopBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const kpModal = useModalKp();
  const [kpSubmitSuccess] = useState(false);

  const customersItems: DropdownItem[] = [
    {
      id: 'catalog',
      label: 'Каталог товаров',
      href: 'https://docs.google.com/spreadsheets/d/1IOjysSANR1_s6ibpwOSmrmzdq-xpP8QlJhVlrBT8GIg/edit?usp=sharing',
      isExternal: true,
    },
    {
      id: 'request',
      label: 'Запросить КП',
      onClick: () => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        kpModal.open();
      },
    },
    {
      id: 'contacts',
      label: 'Контакты',
      href: '/contacts',
    },
    {
      id: 'payment',
      label: 'Оплата и доставка',
      href: '/payment-delivery',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCustomersMouseEnter = () => {
    setActiveDropdown('customers');
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
        setActiveDropdown(null);
      }
    }, 100);
  };

  const renderDesktopDropdown = (items: DropdownItem[]) => (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 z-40 mt-3 min-w-[280px]"
      onMouseEnter={() => setActiveDropdown('customers')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="py-3 px-6">
          {items.map((item) => {
            const baseClass =
              'block py-3 text-base lg:text-lg xl:text-[22px] font-bold text-[#2A2720] hover:text-[#E30613] hover:underline transition';

            if (item.onClick) {
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className={`${baseClass} text-left w-full`}
                >
                  {item.label}
                </button>
              );
            }

            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={baseClass}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link key={item.id} to={item.href || '#'} className={baseClass}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Мобильная версия */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img
              src="assets/svg/phone-icon.svg"
              className="w-4 h-4"
              alt="Телефон"
            />
            <a
              href="tel:88001012258"
              className="text-sm font-bold text-[#2A2720] hover:text-[#E30613] transition whitespace-nowrap"
            >
              8 (800) 101 22 58
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="text-sm font-bold text-[#2A2720] hover:text-[#E30613] transition px-3 py-1 rounded-lg border border-gray-300"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Выпадающее мобильное меню */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="absolute left-0 right-0 top-full z-40 bg-white shadow-lg border-t border-gray-200">
            <div className="py-4 px-6">
              <div className="mb-4">
                <div className="text-lg font-bold text-[#E30613] mb-3">Для заказчиков</div>
                <div className="space-y-3">
                  {customersItems.map((item) => {
                    const baseClass = 'block py-2 text-base font-bold text-[#2A2720] hover:text-[#E30613] hover:underline transition';

                    if (item.onClick) {
                      return (
                        <button
                          key={item.id}
                          onClick={item.onClick}
                          className={`${baseClass} text-left w-full`}
                        >
                          {item.label}
                        </button>
                      );
                    }

                    if (item.isExternal) {
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={baseClass}
                        >
                          {item.label}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.id}
                        to={item.href || '#'}
                        className={baseClass}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-lg font-bold text-[#E30613] mb-3">Для дилеров</div>
                <Link
                  to="/dealers"
                  className="text-base font-bold text-[#2A2720] hover:text-[#E30613] hover:underline transition block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Информация для дилеров
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Десктоп версия */}
      <div className="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-8 xl:gap-16">
        <div
          className="relative"
          ref={dropdownRef}
          onMouseEnter={handleCustomersMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button className="
            text-base font-bold text-[#2A2720] hover:text-[#E30613] transition whitespace-nowrap
            md:text-lg
            lg:text-xl
            xl:text-[30px]
            pt-1
          ">
            Для заказчиков
          </button>
          {activeDropdown === 'customers' && renderDesktopDropdown(customersItems)}
        </div>

        <Link
          to="/dealers"
          className="
            text-base font-bold text-[#2A2720] hover:text-[#E30613] transition whitespace-nowrap
            md:text-lg
            lg:text-xl
            xl:text-[30px]
            pt-1
          "
        >
          Для дилеров
        </Link>

        <div className="flex items-center gap-1 md:gap-2 xl:gap-3 pt-1">
          <a
            href="tel:+79375861212"
            className="
              text-sm font-bold text-[#2A2720] hover:text-[#E30613] transition whitespace-nowrap
              md:text-base
              lg:text-lg
              xl:text-[30px]
            "
          >
            📞 +7 (937) 586-12-12
          </a>
        </div>
      </div>

      <ModalKp isOpen={kpModal.isOpen} onClose={kpModal.close} title="ЗАПРОСИТЬ КП">
        {kpSubmitSuccess ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Запрос отправлен!</h3>
            <p className="text-xl text-gray-600 text-center">
              Откроется почтовый клиент
            </p>
          </div>
        ) : (
          <ModalKpForm onSubmit={() => {}} />
        )}
      </ModalKp>
    </>
  );
};