import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cases } from '../../data/mockData';

export const CaseGallery = () => {
  const displayCases = cases.slice(0, 3);
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">工程案例</h2>
          <p className="section-subtitle">成功服务众多大型工程项目</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Link to="/cases">
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-500">{item.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/cases" className="btn-secondary">
            查看更多案例
          </Link>
        </div>
      </div>
    </section>
  );
};
