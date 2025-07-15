'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Eye, MapPin, ExternalLink } from 'lucide-react';

const places = [
  {
    id: 1,
    title: 'Eiffel Tower',
    description: '360° Paris views, romantic vibes, nightly lights.',
    image: '/assests/p1.jpg',
    tags: ['Landmark', 'Photo Spot', 'Night View'],
  },
  {
    id: 2,
    title: 'Santorini Cliffs',
    description: 'Blue domes, sunset magic, Aegean sea charm.',
    image: '/assests/p2.jpg',
    tags: ['Sunset', 'Sea View', 'Honeymoon'],
  },
  {
    id: 3,
    title: 'Great Wall of China',
    description: 'Historic defense marvel across northern China.',
    image: '/assests/p3.jpg',
    tags: ['UNESCO', 'Hiking', 'History'],
  },
  {
    id: 4,
    title: 'Banff National Park',
    description: 'Turquoise lakes, wildlife, majestic peaks.',
    image: '/assests/p4.jpg',
    tags: ['Lakes', 'Nature', 'Camping'],
  },
  {
    id: 5,
    title: 'Colosseum',
    description: 'Gladiator fights & Roman architecture legacy.',
    image: '/assests/p5.jpg',
    tags: ['Roman', 'UNESCO', 'Guided Tour'],
  },
];

export default function PlacesSlider() {
  return (
    <div className="bg-black min-h-screen relative z-0">
      <section className="py-16 text-white relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Popular{' '}
            <span className="bg-gradient-to-r from-[#00cfff] to-[#0044ff] bg-clip-text text-transparent">
              Places
            </span>
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides
          effect="coverflow"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="px-6"
        >
          {places.map((place) => (
            <SwiperSlide key={place.id}>
              <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-white/10">
                {/* Image container with background fallback */}
                <div className="relative w-full h-[400px] bg-black">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold">{place.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{place.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {place.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                      <MapPin size={18} />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
