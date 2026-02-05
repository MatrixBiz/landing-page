import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/svg/logo.svg?react';

export const Header = () => {
  return (
    <header className="absolute z-30 top-4 md:top-[57px] left-4 md:left-[132px]">
      <div className="flex flex-col items-center">

        <Link to="/" className="mb-2 md:mb-0 block hover:opacity-90 transition-opacity">
          <Logo 
            className="w-48 md:w-[282.62px] h-auto cursor-pointer"
            style={{
              height: 'auto',
              opacity: 1
            }}
          />
        </Link>

        <Link 
          to="/" 
          className="text-[#E30613] font-bold text-center hover:opacity-90 transition-opacity"
          style={{ 
            fontSize: 'clamp(16px, 3vw, 28px)',
            lineHeight: '1.2',
            fontWeight: 700,
            fontFamily: 'Manrope, sans-serif',
            width: '100%',
            margin: '0 auto',
            textDecoration: 'none'
          }}
        >
          Акционерное общество<br />
          "ФАБРИКА ЗВЕЗДА"
        </Link>
        
      </div>
    </header>
  );
};