import boxesImage from '../../../public/assets/boxes.png';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen w-full">
      <div 
        className="absolute bottom-8 md:bottom-[245px] left-4 md:left-[106px] z-20"
        style={{ 
          maxWidth: 'calc(100% - 32px)'
        }}
      >
        <div 
          className="mb-4 md:mb-[37px]"
        >
          <h1 
            className="font-bold leading-tight"
            style={{ 
              fontSize: 'clamp(32px, 8vw, 60px)',
              lineHeight: '1.1',
              color: '#2A2720',
              fontWeight: 700,
              fontStyle: 'normal',
              letterSpacing: '0%'
            }}
          >
            Картриджи <br />
            от производителя
          </h1>
        </div>

        <button
          onClick={onOpenModal}
          style={{
            width: 'min(304px, 100%)',
            height: 'clamp(60px, 10vw, 87px)',
            backgroundColor: '#E30613',
            fontWeight: 700,
            fontFamily: 'Manrope, sans-serif'
          }}
          className="hover:bg-red-700 active:bg-red-800 
                   text-white font-bold rounded-[45px] 
                   shadow-xl hover:shadow-2xl 
                   transform hover:-translate-y-1 active:translate-y-0
                   transition-all duration-300"
        >
          <span style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700 }}>
            быстрая заявка
          </span>
        </button>
      </div>

      <div 
        className="absolute right-0 bottom-[120px] z-10"
        style={{ 
          width: 'min(1023px, 70vw)',
          height: 'calc(min(443px, 60vh) - 30px)', 
          maxWidth: '1023px'
        }}
      >
        <div 
          className="w-full h-full rounded-tl-[41px] overflow-hidden relative"
          style={{ 
            borderRadius: '41px 0 0 0',
            backgroundColor: '#E30613'
          }}
        >
          <img 
            src={boxesImage} 
            alt="Картриджи" 
            className="w-full absolute"
            style={{ 
              height: '405px', 
              bottom: '0',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  );
};