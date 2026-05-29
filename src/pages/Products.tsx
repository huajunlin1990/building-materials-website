import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { products, productCategories } from '../data/mockData';
import { Card } from '../components/common/Card';
import { Image } from '../components/common/Image';
import { Button } from '../components/common/Button';
import { Seo } from '../components/common/Seo';
import { ShoppingCart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProductSeries {
  categoryId: string;
  name: string;
  description: string;
  image: string;
}

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const scrollToSection = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const section = sectionRefs.current[categoryId];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrevScroll = (categoryId: string) => {
    const container = document.getElementById(`scroll-container-${categoryId}`);
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleNextScroll = (categoryId: string) => {
    const container = document.getElementById(`scroll-container-${categoryId}`);
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.category === categoryId);
  };

  const getCategoryInfo = (categoryId: string): ProductSeries | undefined => {
    const category = productCategories.find(c => c.id === categoryId);
    if (!category) return undefined;
    return {
      categoryId: category.id,
      name: category.name,
      description: category.description,
      image: category.image
    };
  };

  const seriesOrder = productCategories.map(c => c.id);

  return (
    <>
      <Seo
        title="产品中心"
        description="晶凡硕新材料产品中心，提供高品质塑胶地板、橡胶制品、建筑装饰材料等新型建材产品，满足各类工程需求。"
        keywords={['塑胶地板', '橡胶制品', '建筑装饰材料', '化工原料', '建材产品', '建筑材料', '晶凡硕', '产品中心']}
      />
      
      <div className="py-16 bg-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-dark mb-4">产品中心</h1>
            <p className="text-gray-600 text-lg">高品质新材料，满足各类建筑需求</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-dark">选择产品系列</h3>
              <div className="text-sm text-gray-500">共 {productCategories.length} 个系列</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(category.id)}
                  className={`relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300 group ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" 
                       style={{ backgroundImage: `url(${category.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="relative z-10">
                    <h4 className="font-bold text-dark text-lg mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      查看详情 <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-16">
            {seriesOrder.map((categoryId, seriesIndex) => {
              const categoryInfo = getCategoryInfo(categoryId);
              const seriesProducts = getProductsByCategory(categoryId);
              
              if (!categoryInfo) return null;

              return (
                <motion.section
                  key={categoryId}
                  ref={(el) => { sectionRefs.current[categoryId] = el; }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-3xl shadow-sm overflow-hidden"
                >
                  <div 
                    className="relative h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${categoryInfo.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
                    <div className="relative z-10 h-full flex items-center px-8 md:px-12">
                      <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                          <span className="text-white/90 text-sm font-medium">
                            系列 {seriesIndex + 1}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                          {categoryInfo.name}
                        </h2>
                        <p className="text-white/80 text-lg">
                          {categoryInfo.description}
                        </p>
                        <div className="mt-4 text-white/70 text-sm">
                          共 {seriesProducts.length} 款产品
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="relative">
                      <div 
                        id={`scroll-container-${categoryId}`}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {seriesProducts.map((product, productIndex) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                            className="flex-shrink-0 w-80"
                          >
                            <Card className="h-full hover:shadow-card transition-all duration-500 group">
                              <div className="relative h-48 overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  className="transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-primary/90 backdrop-blur text-white text-sm font-medium rounded-full">
                                    {categoryInfo.name}
                                  </span>
                                </div>
                              </div>
                              <Card.Body>
                                <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                <div className="border-t border-gray-100 pt-4 mb-4">
                                  <h4 className="text-sm font-semibold text-gray-500 mb-2">产品规格：</h4>
                                  <ul className="space-y-1">
                                    {product.specs.map((spec, i) => (
                                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                                        {spec}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-2xl font-bold text-primary">{product.price}</span>
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
                      
                      {seriesProducts.length > 3 && (
                        <>
                          <button
                            onClick={() => handlePrevScroll(categoryId)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 z-10"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={() => handleNextScroll(categoryId)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 z-10"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

          {productCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">暂无产品</h3>
              <p className="text-gray-500">产品正在持续更新中</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};
