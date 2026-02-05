import boxesImage from '../../../public/assets/boxes.png';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="w-full flex items-end md:items-center h-auto pt-24 md:pt-32">
      <div
        className="
          w-full
          max-w-[1440px]  
          mx-auto         
          px-4
          pb-4            
        "
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">

          <div className="max-w-2xl z-20">
            <h1
              className="font-bold text-[#2A2720] leading-tight mb-4 md:mb-6"
              style={{ 
                fontSize: 'clamp(32px, 8vw, 60px)',
                lineHeight: '1.1'
              }}
            >
              <span className="whitespace-nowrap">Картриджи</span>
              <span className="block whitespace-nowrap">
                от производителя
              </span>
            </h1>

            <button
              onClick={onOpenModal}
              className="
                w-full
                max-w-[350px]
                h-[60px]
                md:h-[87px]
                bg-[#E30613]
                text-white
                font-bold
                rounded-[45px]
                shadow-xl
                hover:bg-red-700
                hover:shadow-2xl
                transform
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <span
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                быстрая заявка
              </span>
            </button>
          </div>

          <div className="relative w-full md:w-[65%] max-w-[1023px] h-[260px] md:h-[443px] z-10">
            <div
              className="w-full h-full overflow-hidden"
              style={{
                borderRadius: '41px 0 0 0',
                backgroundColor: '#E30613',
              }}
            >
              <img
                src={boxesImage}
                alt="Картриджи"
                className="absolute bottom-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};