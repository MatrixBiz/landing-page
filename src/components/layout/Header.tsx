import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';

export const Header = () => {
  return (
    <header className="relative z-30 w-full">
      <div className="
        max-w-[1440px]
        mx-auto
        px-4
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-[132px]
        pt-4
        sm:pt-6
        md:pt-8
        lg:pt-10
        xl:pt-[57px]
      ">
        <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          
          {/* Логотип и название */}
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="block hover:opacity-90 transition mb-1 sm:mb-2">
              <img
                src="assets/svg/logo.svg"
                alt="Логотип Фабрика Звезда"
                className="
                  w-32 h-auto
                  sm:w-40
                  md:w-48
                  lg:w-56
                  xl:w-[282px]
                "
              />
            </Link>

            <Link
              to="/"
              className="
                text-[#E30613]
                font-bold
                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg
                xl:text-xl
                leading-tight
                hover:opacity-90
                transition
                whitespace-nowrap
              "
            >
              <span className="sm:hidden">АО «ФАБРИКА ЗВЕЗДА»</span>
              <span className="hidden sm:inline">
                Акционерное общество<br />
                «ФАБРИКА ЗВЕЗДА»
              </span>
            </Link>
          </div>

          <div className="w-full sm:w-auto">
            <TopBar />
          </div>

        </div>
      </div>
    </header>
  );
};