import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/hero.jpg')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            创新材料科技
            <br />
            <span className="text-secondary">引领绿色未来</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl"
          >
            深圳市晶凡硕新材料科技有限公司，专注于新型建筑材料的研发、销售与服务，为客户提供高品质的绿色建材解决方案。
          </motion.p>

        </div>
      </div>
    </section>
  );
};
