import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';
import { Section } from '../common/Section';
import { Image } from '../common/Image';
import { Button } from '../common/Button';

export const ProductCategories = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section.Header
          label="产品系列"
          title="核心产品"
          subtitle="高品质新材料，满足各类建筑需求"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-all duration-500"
            >
              <Link to="/products" className="block h-full">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1 text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      查看详情 <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-dark">{category.name}</h3>
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button rightIcon={ArrowRight}>
            <Link to="/products">查看全部产品</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
