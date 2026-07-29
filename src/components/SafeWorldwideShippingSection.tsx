import { PackageCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function SafeWorldwideShippingSection() {
  return (
    <section className="bg-[#F8F7F4] py-20 px-6 border-t border-[#E5E3DF]">
      <div className="max-w-[84rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <PackageCheck className="w-8 h-8 mx-auto mb-4 text-[#121212]" strokeWidth={1} />
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-[#121212] mb-2">
              БЕЗПЕЧНА ДОСТАВКА ПО СВІТУ
            </h3>
            <p className="text-[#6E6D6B] text-sm font-light leading-relaxed">
              Ми розробили спеціальне 3-шарове пакування. Гарантуємо 100% цілісність посуду під час відправки Новою Поштою або DHL у будь-яку країну (Worldwide shipping).
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-[#121212]" strokeWidth={1} />
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-[#121212] mb-2">
              БЕЗПЕЧНО ДЛЯ ЇЖІ ТА НАПОЇВ
            </h3>
            <p className="text-[#6E6D6B] text-sm font-light leading-relaxed">
              Використовуємо виключно німецькі та іспанські безсвинцеві харчові глазурі. Посуд не вбирає запахи та є абсолютно безпечним для щоденного використання.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#121212]" strokeWidth={1} />
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-[#121212] mb-2">
              ПОСУДОМИЙНА МАШИНА ТА МІКРОХВИЛЬОВКА
            </h3>
            <p className="text-[#6E6D6B] text-sm font-light leading-relaxed">
              Завдяки випалу при температурі 1220°C наш посуд стає міцним як камінь. Його можна мити в посудомийній машині та гріти в мікрохвильовці.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
