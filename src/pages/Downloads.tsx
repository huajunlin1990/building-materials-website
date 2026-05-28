import { motion } from 'framer-motion';
import { Seo } from '../components/common/Seo';
import { Card } from '../components/common/Card';
import { Download, FileText, Book, FolderOpen, Award, ArrowRight } from 'lucide-react';

const downloads = [
  {
    id: 'product-catalog',
    icon: FolderOpen,
    title: '产品手册',
    description: '详细介绍公司全系产品的规格参数、应用场景和选型指南',
    size: '5.2 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/晶凡硕产品手册.txt',
  },
  {
    id: 'tech-guide',
    icon: Book,
    title: '技术安装指南',
    description: '塑胶地板安装施工标准流程、注意事项及验收标准',
    size: '2.8 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/技术安装指南.txt',
  },
  {
    id: 'solution-case',
    icon: FileText,
    title: '行业解决方案',
    description: '针对不同行业的地面材料解决方案及应用案例',
    size: '8.5 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/行业解决方案.txt',
  },
  {
    id: 'cert-quality',
    icon: Award,
    title: '资质认证证书',
    description: '产品质量检测报告、ISO认证、环保认证等相关证书',
    size: '3.1 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/资质认证说明.txt',
  },
  {
    id: 'price-sheet',
    icon: FileText,
    title: '产品价格表',
    description: '最新产品价格、规格及优惠政策说明',
    size: '0.5 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/产品价格表.txt',
  },
  {
    id: 'project-case',
    icon: FolderOpen,
    title: '工程案例集',
    description: '公司典型工程项目案例展示及客户评价',
    size: '12.3 MB',
    format: 'TXT',
    date: '2024-01',
    filePath: '/downloads/工程案例集.txt',
  },
];

export const Downloads = () => {
  return (
    <>
      <Seo
        title="资料下载"
        description="深圳市晶凡硕新材料科技有限公司产品手册、技术安装指南、行业解决方案等资料下载，为您提供全方位的参考资料。"
        keywords={['资料下载', '产品手册', '技术指南', '安装手册', '资质证书', '案例集']}
      />
      <div className="py-16 bg-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">资料下载</h1>
            <p className="text-gray-600 text-lg">下载产品资料、技术文档及资质证书</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 rounded-2xl p-6 md:p-8 mb-10"
          >
            <p className="text-gray-600 text-center">
              所有资料均为免费提供，如需纸质版或更多资料，请 <a href="/contact" className="text-primary font-medium hover:underline">联系我们</a>。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Body>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="px-2 py-0.5 bg-gray-100 rounded">{item.format}</span>
                          <span>{item.size}</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    
                    <a 
                      href={item.filePath}
                      download
                      className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      下载资料
                    </a>
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
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">更多服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <Card.Body>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">技术支持</h3>
                      <p className="text-gray-600 text-sm">专业的技术团队为您提供全程技术支持</p>
                    </div>
                    <a href="/contact" className="flex items-center gap-1 text-primary font-medium text-sm hover:underline">
                      咨询 <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">样品申请</h3>
                      <p className="text-gray-600 text-sm">免费申请产品样品，实地体验产品效果</p>
                    </div>
                    <a href="/contact" className="flex items-center gap-1 text-primary font-medium text-sm hover:underline">
                      申请 <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
