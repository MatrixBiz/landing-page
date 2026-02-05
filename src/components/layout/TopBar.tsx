import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModalKp } from '../../hooks/useModalKp';
import { ModalKp } from '../modal/modalKp';
import { ModalKpForm } from '../modal/modalKpForm.tsx';

interface DropdownItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export const TopBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const customersRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const kpModal = useModalKp();
  const [kpSubmitSuccess, setKpSubmitSuccess] = useState(false);

  const customersItems: DropdownItem[] = [
    { 
      id: 'catalog', 
      label: 'Каталог товаров', 
      href: 'https://docs.google.com/spreadsheets/d/1IOjysSANR1_s6ibpwOSmrmzdq-xpP8QlJhVlrBT8GIg/edit?usp=sharing',
      isExternal: true
    },
    { 
      id: 'request', 
      label: 'Запросить КП', 
      onClick: () => {
        setActiveDropdown(null);
        kpModal.open();
      },
      isExternal: false
    },
    { 
      id: 'contacts', 
      label: 'Контакты', 
      href: '/contacts',
      isExternal: false
    },
    { 
      id: 'payment', 
      label: 'Оплата и доставка', 
      href: '/payment-delivery',
      isExternal: false
    },
  ];

  const handleKpSubmit = async (type: 'factory' | 'partners') => {
    if (type === 'factory') {
      const subject = encodeURIComponent('Запрос КП от завода');
      const body = encodeURIComponent('Здравствуйте!\n\n\n\nС уважением,');
      const mailto = `mailto:info@zvezdafabrika.ru?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    } else {
      const subject = encodeURIComponent('Запрос КП от завода и партнеров');
      const body = encodeURIComponent('Здравствуйте!\n\n\n\nС уважением,');
      const emails = 'info@zvezdafabrika.ru,kerala2018@mail.ru,politon_td@mail.ru';
      const mailto = `mailto:${emails}?subject=${subject}&body=${body}&cc=kerala2018@mail.ru,politon_td@mail.ru`;
      window.location.href = mailto;
    }

    setKpSubmitSuccess(true);
    setTimeout(() => {
      kpModal.close();
      setKpSubmitSuccess(false);
    }, 2000);
  };

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (customersRef.current && !customersRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const renderDropdown = (items: DropdownItem[], dropdownName: string) => {
    return (
      <div 
        className="absolute top-full z-40 overflow-hidden"
        style={{ 
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: '280px'
        }}
        onMouseEnter={() => handleMouseEnter(dropdownName)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 mt-2">
          <div className="py-3 px-6">
            {items.map((item) => {
              if (item.onClick) {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.onClick?.();
                      handleItemClick();
                    }}
                    className="block w-full text-left py-3 text-[#2A2720] hover:text-[#E30613] hover:underline transition-colors duration-150 text-[24px] font-bold whitespace-nowrap"
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
                    className="block py-3 text-[#2A2720] hover:text-[#E30613] hover:underline transition-colors duration-150 text-[24px] font-bold whitespace-nowrap"
                    onClick={() => handleItemClick()}
                  >
                    {item.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.id}
                  to={item.href || '#'}
                  className="block py-3 text-[#2A2720] hover:text-[#E30613] hover:underline transition-colors duration-150 text-[24px] font-bold whitespace-nowrap"
                  onClick={() => handleItemClick()}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="absolute top-[100px] right-100 w-1/2 h-16 z-30 flex items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <div className="w-1/4"></div>

          <div className="flex-1 flex items-center justify-around gap-20">
            <div 
              className="relative" 
              ref={customersRef}
              onMouseEnter={() => handleMouseEnter('customers')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-[#2A2720] hover:text-[#E30613] transition-colors duration-200 text-[30px] font-bold whitespace-nowrap"
              >
                Для заказчиков
              </button>

              {activeDropdown === 'customers' && renderDropdown(customersItems, 'customers')}
            </div>

            <Link
              to="/dealers"
              className="text-[#2A2720] hover:text-[#E30613] transition-colors duration-200 text-[30px] font-bold whitespace-nowrap"
            >
              Для дилеров
            </Link>

            <div className="flex items-center gap-6 ">
              <a 
                href="tel:+79375861212" 
                className="text-[#2A2720] hover:text-[#E30613] transition-colors duration-200 text-[30px] font-bold whitespace-nowrap"
              >
                📞 +7 (937) 586-12-12
              </a>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>

      <ModalKp
        isOpen={kpModal.isOpen}
        onClose={kpModal.close}
        title="ЗАПРОСИТЬ КП"
      >
        {kpSubmitSuccess ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center 
                          justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                      d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Запрос отправлен!
            </h3>
            <p className="text-xl text-gray-600 text-center">
              Откроется почтовый клиент для отправки
            </p>
          </div>
        ) : (
          <ModalKpForm onSubmit={handleKpSubmit} />
        )}
      </ModalKp>
    </>
  );
};