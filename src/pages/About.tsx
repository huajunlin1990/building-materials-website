import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Seo } from '../components/common/Seo';

const stats = [
  { icon: Users, value: '200+', label: '服务客户' },
  { icon: Globe, value: '10+', label: '覆盖城市' },
  { icon: Award, value: '3+', label: '资质认证' },
  { icon: TrendingUp, value: '8年', label: '行业经验' },
];

export const About = () => {
  return (
    <>
      <Seo
        title="关于我们"
        description="深圳市晶凡硕新材料科技有限公司，成立于2018年，专业从事新型建筑材料研发、销售与服务，主营塑胶地板、橡胶制品、建筑装饰材料等，8年行业经验，200+服务客户，致力于为客户提供高品质绿色建材解决方案。"
        keywords={['关于晶凡硕', '企业简介', '发展历程', '企业使命', '深圳新材料', '建材公司', '塑胶地板', '建筑装饰材料']}
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
            <p className="text-gray-600 text-lg">了解我们的企业愿景和发展历程</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">企业简介</h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  深圳市晶凡硕新材料科技有限公司成立于2018年11月09日，是一家专业从事新型建筑材料研发、销售与服务的综合性企业。
                  经过8年的发展，我们已成为华南地区知名的绿色建材供应商之一。
                </p>
                <p>
                  公司主营塑胶地板、橡胶制品、建筑装饰材料等各类新型建材产品，产品广泛应用于住宅、商业、
                  公共设施等各类工程项目。我们始终坚持"品质为本、服务至上"的经营理念，
                  致力于为客户提供优质的产品和专业的服务。
                </p>
                <p>
                  公司总部位于深圳市宝安区，拥有专业的技术团队和完善的售后服务体系，
                  已为超过200家客户提供了优质的产品和服务，与众多知名企业建立了长期战略合作关系。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">企业使命</h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  <strong>愿景：</strong>成为中国最具影响力的绿色建材供应链服务商
                </p>
                <p>
                  <strong>使命：</strong>为建筑行业提供优质、高效、环保的建材解决方案
                </p>
                <p>
                  <strong>价值观：</strong>诚信、创新、共赢、责任
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-primary font-medium">
                    "以质量求生存，以信誉求发展，以服务求满意"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">—— 企业经营理念</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">发展历程</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right mb-4 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900">2018年</h3>
                    <p className="text-gray-600">公司正式成立，落户深圳宝安，开启建材贸易新篇章</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold z-10">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-8" />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0" />
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-gray-900">2019年</h3>
                    <p className="text-gray-600">成立关联公司，业务范围进一步扩大</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right mb-4 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900">2021年</h3>
                    <p className="text-gray-600">完成办公地址升级，扩大仓储物流能力</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold z-10">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-8" />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0" />
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-gray-900">2024年</h3>
                    <p className="text-gray-600">深耕华南市场，成为区域领先的建材供应商</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
