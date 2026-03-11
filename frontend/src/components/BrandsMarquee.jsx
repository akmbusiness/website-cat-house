import Marquee from 'react-fast-marquee';

const brands = [
  'Cat Plus', 'Royal Canin', 'Whiskas', 'Huraira', 'Brit', 'Loqma', 'Purina', 'Hills',
];

export default function BrandsMarquee() {
  return (
    <div data-testid="brands-marquee" className="bg-[#1A1A1A] py-4 overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {brands.map((brand, i) => (
          <span key={i} className="mx-8 text-sm font-semibold text-[#D4AF37] uppercase tracking-widest whitespace-nowrap">
            {brand}
            <span className="mx-8 text-white/30">·</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
