import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/mockData';
import { Card } from '../components/common/Card';
import { Image } from '../components/common/Image';
import { Button } from '../components/common/Button';
import { Seo } from '../components/common/Seo';
import { ShoppingCart, Filter } from 'lucide-react';

// 获取所有产品分类
const categories = Array.from(new Set(products.map((p) => p.category)));

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  // 根据分类筛选产品
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Seo
        title="产品中心"
        description="晶凡硕新材料产品中心，提供高品质水泥、钢材、砂石、瓷砖等建材产品，满足各类工程需求。"
        keywords={['水泥', '钢材', '砂石', '瓷砖', '建材产品', '建筑材料', '晶凡硕', '产品中心']}
      />
      <div className="py-16 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">产品中心</h1>
          <p className="text-gray-600 text-lg">丰富的建材产品，满足各类工程需求</p>
        </div>

        {/* 筛选栏 */}
        <div className="mb-10 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">产品分类：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                全部产品
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="ml-auto text-gray-500 text-sm">
              共 {filteredProducts.length} 个产品
            </div>
          </div>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur text-white text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <Card.Body>
                  <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">产品规格：</h4>
                    <ul className="space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    leftIcon={ShoppingCart}
                    isLoading={isLoading}
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    咨询详情
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 无产品时的空状态 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">暂无相关产品</h3>
            <p className="text-gray-500">请尝试其他分类筛选</p>
          </div>
        )}
      </div>
      </div>
    </>
  );
};
