import { useState } from 'react';
import { motion } from 'framer-motion';
import { newsList } from '../data/mockData';
import { Card } from '../components/common/Card';
import { Image } from '../components/common/Image';
import { Seo } from '../components/common/Seo';
import { Calendar, User, BookOpen, ArrowRight } from 'lucide-react';

// 获取所有新闻分类
const newsCategories = Array.from(new Set(newsList.map((n) => n.category)));

export const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // 根据分类筛选新闻
  const filteredNews = selectedCategory === 'all'
    ? newsList
    : newsList.filter((n) => n.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Seo
        title="行业动态"
        description="晶凡硕新材料行业动态，提供最新政策解读、市场行情分析和行业资讯。"
        keywords={['行业动态', '政策解读', '市场行情', '建材资讯', '晶凡硕', '新材料', '建筑行业']}
      />
      <div className="py-16 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">行业动态</h1>
          <p className="text-gray-600 text-lg">关注行业最新资讯与市场动态</p>
        </div>

        {/* 筛选栏 */}
        <div className="mb-10 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">新闻分类：</span>
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
                全部资讯
              </button>
              {newsCategories.map((category) => (
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
              共 {filteredNews.length} 条资讯
            </div>
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="space-y-8">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {item.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-4">{item.title}</h2>
                    
                    <div
                      className={`text-gray-600 whitespace-pre-line leading-relaxed mb-4 transition-all duration-300 ${
                      expandedId === item.id ? '' : 'line-clamp-3'
                      }`}
                    >
                      {item.content}
                    </div>
                    
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-primary font-medium flex items-center gap-1 hover:underline"
                    >
                      {expandedId === item.id ? '收起' : '阅读全文'}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* 无新闻时的空状态 */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">暂无相关资讯</h3>
            <p className="text-gray-500">请尝试其他分类筛选</p>
          </div>
        )}
      </div>
      </div>
    </>
  );
};
