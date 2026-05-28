import { motion } from 'framer-motion';
import { Seo } from '../components/common/Seo';
import { Card } from '../components/common/Card';
import { CheckCircle, Building2, Factory, Warehouse, Heart, Phone } from 'lucide-react';

const solutions = [
  {
    id: 'commercial',
    icon: Building2,
    title: '商业空间解决方案',
    description: '为写字楼、商场、酒店等商业空间提供专业的地面材料解决方案',
    features: [
      'PVC塑胶地板，防滑耐磨',
      '环保无甲醛，健康舒适',
      '花色多样，装饰效果好',
      '易于清洁，维护成本低',
    ],
    apply: '写字楼、商场、酒店、展厅',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: '工业厂房解决方案',
    description: '为电子厂、车间、仓库等工业场所提供专业地面材料方案',
    features: [
      '防静电地板，保护设备安全',
      '耐磨耐压，使用寿命长',
      '防火阻燃，符合国家标准',
      '抗化学腐蚀，适应特殊环境',
    ],
    apply: '电子厂、车间、仓库、实验室',
  },
  {
    id: 'medical',
    icon: Heart,
    title: '医疗场所解决方案',
    description: '为医院、诊所、养老院等医疗场所提供专业地面材料方案',
    features: [
      '抗菌防霉，安全卫生',
      '环保无污染，零甲醛',
      '防滑设计，保障安全',
      '隔音效果好，舒适安静',
    ],
    apply: '医院、诊所、养老院、体检中心',
  },
  {
    id: 'logistics',
    icon: Warehouse,
    title: '仓储物流解决方案',
    description: '为物流仓库、停车场等场所提供专业地面材料方案',
    features: [
      '高强度耐磨，承载力强',
      '防潮防尘，易于清洁',
      '施工快捷，减少停工',
      '性价比高，经济实用',
    ],
    apply: '物流仓库、停车场、货场',
  },
];

export const Solutions = () => {
  return (
    <>
      <Seo
        title="解决方案"
        description="深圳市晶凡硕新材料科技有限公司，为您提供商业空间、工业厂房、医疗场所、仓储物流等各类专业地面材料解决方案。"
        keywords={['解决方案', '地面材料', 'PVC地板', '防静电地板', '塑胶地板', '商业空间', '工业厂房']}
      />
      <div className="py-16 bg-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">解决方案</h1>
            <p className="text-gray-600 text-lg">专业的行业解决方案，满足不同场所需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Body>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">方案特点：</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        适用场所：{solution.apply}
                      </span>
                      <a 
                        href="/contact" 
                        className="flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        咨询详情
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">需要定制化解决方案？</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              我们提供专业的技术咨询和定制化方案设计，根据您的实际需求，
              为您推荐最合适的地面材料解决方案。欢迎联系我们！
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-primary font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              立即咨询
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};
