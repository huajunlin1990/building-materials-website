import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { newsList } from '../../data/mockData';

const getExcerpt = (content: string): string => {
  const cleaned = content.replace(/\s+/g, ' ').trim();
  return cleaned.length > 80 ? cleaned.substring(0, 80) + '...' : cleaned;
};

export const NewsSection = () => {
  const displayNews = newsList.slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">行业动态</h2>
          <p className="section-subtitle">关注行业最新资讯与动态</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to="/news" className="block">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                <p className="text-gray-600">{getExcerpt(item.content)}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/news" className="btn-secondary">
            查看更多资讯
          </Link>
        </div>
      </div>
    </section>
  );
};
