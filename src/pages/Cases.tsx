import { useState } from 'react';
import { motion } from 'framer-motion';
import { cases } from '../data/mockData';
import { Card } from '../components/common/Card';
import { Image } from '../components/common/Image';
import { Seo } from '../components/common/Seo';
import { MapPin, Building2, ChevronDown } from 'lucide-react';

// 获取所有案例类型
const caseTypes = Array.from(new Set(cases.map((c) => c.type)));

export const Cases = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // 根据类型筛选案例
  const filteredCases = selectedType === 'all'
    ? cases
    : cases.filter((c) => c.type === selectedType);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Seo
        title="工程案例"
        description="晶凡硕新材料工程案例展示，包括商业综合体、交通枢纽、体育场馆等标志性建筑项目。"
        keywords={['工程案例', '建筑项目', '商业综合体', '交通枢纽', '体育场馆', '晶凡硕', '绿色建材']}
      />
      <div className="py-16 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">工程案例</h1>
          <p className="text-gray-600 text-lg">见证我们参与的标志性工程项目</p>
        </div>

        {/* 筛选栏 */}
        <div className="mb-10 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">项目类型：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedType === 'all'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                全部案例
              </button>
              {caseTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="ml-auto text-gray-500 text-sm">
              共 {filteredCases.length} 个案例
            </div>
          </div>
        </div>

        {/* 案例列表 */}
        <div className="space-y-8">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-full"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                          {item.type}
                        </span>
                        <h3 className="text-xl font-bold text-dark mb-2">{item.name}</h3>
                        <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* 描述内容 */}
                    <p
                      className={`text-gray-600 mb-4 transition-all duration-300 ${
                        expandedId === item.id ? '' : 'line-clamp-3'
                      }`}
                    >
                      {item.description}
                    </p>
                    
                    {/* 展开/收起按钮 */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
                    >
                      {expandedId === item.id ? '收起' : '查看详情'}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {item.materials.map((material, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-light text-primary text-xs font-medium rounded-lg"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 无案例时的空状态 */}
        {filteredCases.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">暂无相关案例</h3>
            <p className="text-gray-500">请尝试其他类型筛选</p>
          </div>
        )}
      </div>
      </div>
    </>
  );
};
