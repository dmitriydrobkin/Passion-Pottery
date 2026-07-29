import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: 'cups' | 'plates' | 'vases' | 'sets';
  categoryLabel: string;
  tag?: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Горнятко «SEA BREEZE»', price: '3 500 ₴', category: 'cups', categoryLabel: 'Чашки та горнятка', tag: 'Єдиний екземпляр', image: '/images/prod_1.jpg' },
  { id: '2', name: 'Горнятко «SWALLOW»', price: '2 800 ₴', category: 'cups', categoryLabel: 'Чашки та горнятка', tag: 'В наявності', image: '/images/prod_2.jpg' },
  { id: '3', name: 'Набір «PROTEA»', price: '3 500 ₴', category: 'sets', categoryLabel: 'Подарункові набори', tag: 'Розкіш', image: '/images/prod_3.jpg' },
  { id: '4', name: 'Тарілка «SLIP TRAILING»', price: '1 900 ₴', category: 'plates', categoryLabel: 'Тарілки та боули', tag: 'Єдиний екземпляр', image: '/images/prod_4.jpg' },
  { id: '5', name: 'Горнятко «MORNING MOOD»', price: '1 700 ₴', category: 'cups', categoryLabel: 'Чашки та горнятка', tag: 'Бестселер', image: '/images/prod_5.jpg' },
  { id: '6', name: 'Набір «FIRST SIGHT»', price: '3 000 ₴', category: 'sets', categoryLabel: 'Подарункові набори', tag: 'Новинка', image: '/images/prod_6.jpg' },
  { id: '7', name: 'Горня «ROSE MOOD»', price: '1 700 ₴', category: 'cups', categoryLabel: 'Чашки та горнятка', tag: 'Під замовлення', image: '/images/prod_7.jpg' },
  { id: '8', name: 'Піала «QUEEN»', price: '2 000 ₴', category: 'cups', categoryLabel: 'Чашки та горнятка', tag: 'Залишилось 2 шт', image: '/images/prod_8.jpg' },
];

const FILTERS = [
  { id: 'all', label: 'Всі вироби' },
  { id: 'cups', label: 'Чашки та горнятка' },
  { id: 'plates', label: 'Тарілки та боули' },
  { id: 'vases', label: 'Вази та декор' },
  { id: 'sets', label: 'Подарункові набори' },
];

export function InteractiveBoutiqueCatalogSection() {
  const [activeFilterId, setActiveFilterId] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeFilterId === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeFilterId);
  }, [activeFilterId]);

  return (
    <section className="bg-white py-24 px-6 max-w-[84rem] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E3DF] pb-8 mb-16 gap-6">
        <div>
          <h2 className="font-sans font-light text-3xl md:text-5xl text-[#121212]">
            Авторська кераміка <br className="block md:hidden" /> в наявності
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-6">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilterId(filter.id)}
              className={`text-sm tracking-wider pb-1 transition-colors cursor-pointer ${
                activeFilterId === filter.id 
                  ? 'border-b-2 border-[#121212] text-[#121212] font-semibold' 
                  : 'text-[#6E6D6B] hover:text-[#121212] font-light border-b-2 border-transparent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[4/5] w-full bg-[#F8F7F4] overflow-hidden cursor-pointer border border-[#E5E3DF]/50 mb-5">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {product.tag && (
                <div className="absolute top-3 left-3 bg-white/95 text-[#121212] text-[10px] uppercase font-bold px-3 py-1 tracking-widest shadow-sm">
                  {product.tag}
                </div>
              )}
              <button className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 hover:bg-[#121212] hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                <Plus className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="pt-3 md:pt-4 flex flex-col items-start gap-1 text-left">
              <span className="font-sans text-sm md:text-base font-normal text-[#121212] group-hover:underline block cursor-pointer leading-tight">
                {product.name}
              </span>
              <span className="text-[11px] md:text-xs text-[#6E6D6B] block font-light mt-0.5">
                {product.categoryLabel}
              </span>
              <span className="font-sans font-semibold text-sm md:text-base text-[#121212] mt-1.5">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
