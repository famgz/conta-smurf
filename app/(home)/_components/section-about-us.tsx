import AboutUsCard from '@/app/(home)/_components/about-us-card';

export default function HomeAboutUsSection() {
  const items = [
    {
      imageUrl: '/images/our-mission.png',
      title: 'Your trust, Our Mission',
      text: 'Founded in 2023, we earn your trust through quality assurance with our products and services, guaranteeing an unparalleled gaming journey. Explore our website, we have everything to guarantee a better League of Legends experience.',
      className: '',
    },
    {
      imageUrl: '/images/satisfaction.png',
      title: 'Your satisfaction is essential!',
      text: 'Since the beginning, ContaSmurf has been the definitive League of Legends portal. Our dedication is focused on delivering exceptional service and real-time support. Elevate your game with our carefully chosen top-tier accounts!',
      className: '',
    },
    {
      imageUrl: '/images/we-care.png',
      title: 'We care about you!',
      text: 'Our focus is to deliver incredible service to all of our customers. ContaSmurf sells high quality products and we have numerous positive feedbacks.',
      className: '',
    },
  ];

  const text = `Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
          Sehena hexanade, pren rerat, och olig såsom nätvandra. Föliligen suk
          dösonyss för att religen de orik megande att bektigt. Prio nevav, i
          ber lase därför att antikrati tåktiga till hexarat. Laheten heterodat
          exoliga nysam heteroligen vengen i parapp. Någonstansare vissa, fastän
          sitskate traktiga. Fönat milig soskade heterovababel. Lagelingar
          hoheng nidölig. On rerengen reska. För teraktigt om kak, rasam.
          Paradiktisk fajisk har trahingar telett es jungen såsom åpese i
          detöhet. Dira anar. Homoling pana ker drevkultur rent alltså kontrade
          i bill. Inism rehärade samt valing att hjulboja dins. Nyktig
          kroföfaktig en mast geos misusade i ässade som sin.`;

  return (
    <div className="flex-center !overflow-x-visible !overflow-y-scroll !rounded-none px-8">
      <div className="flex h-full max-w-[1200px] flex-col justify-center gap-4 xl:justify-between">
        <h2 className="text-left text-3xl font-extrabold text-brass shadow-brass text-shadow-sm xl:text-center xl:text-6xl">
          About us
        </h2>

        {/* TODO: map over array passing index to card, which will behavior based on odd/even index */}

        <div className="flex flex-col gap-8 xl:flex-row xl:justify-between">
          {items.map((x, index) => (
            <AboutUsCard index={index} {...x} key={x.title} />
          ))}
        </div>

        <p
          className="text-justify text-[10px] font-light max-xl:line-clamp-5 xl:text-sm"
          title={text}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
