import { ProductCategory, Product, Case, News, CompanyStrength, NavItem } from '../types';

export const navItems: NavItem[] = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '工程案例', path: '/cases' },
  { name: '行业动态', path: '/news' },
  { name: '解决方案', path: '/solutions' },
  { name: '资料下载', path: '/downloads' },
  { name: '关于我们', path: '/about' },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'flooring',
    name: '塑胶地板',
    description: '环保塑胶地板，适用于各类场所',
    image: '/assets/images/flooring.jpg',
  },
  {
    id: 'rubber',
    name: '橡胶制品',
    description: '高品质橡胶制品，质量可靠',
    image: '/assets/images/rubber.jpg',
  },
  {
    id: 'decor',
    name: '装饰材料',
    description: '建筑装饰材料，美化空间',
    image: '/assets/images/decor.jpg',
  },
  {
    id: 'chemical',
    name: '化工原料',
    description: '优质化工原料，安全环保',
    image: '/assets/images/chemical.jpg',
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'PVC塑胶地板',
    category: 'flooring',
    price: '¥85/㎡',
    description: '环保PVC塑胶地板，防滑耐磨，适用于办公室、商场等场所',
    image: '/assets/images/flooring.jpg',
    specs: ['厚度：2.0mm', '耐磨层：0.3mm', '防火等级：B1级'],
  },
  {
    id: 'p2',
    name: '橡胶密封条',
    category: 'rubber',
    price: '¥12/米',
    description: '高品质橡胶密封条，防水防尘，适用于门窗密封',
    image: '/assets/images/rubber.jpg',
    specs: ['材质：EPDM', '规格：10×10mm', '耐温：-40℃~120℃'],
  },
  {
    id: 'p3',
    name: '环保涂料',
    category: 'decor',
    price: '¥280/桶',
    description: '水性环保涂料，零甲醛释放，色彩丰富',
    image: '/assets/images/decor.jpg',
    specs: ['容量：5L', '涂刷面积：30㎡', 'VOC含量：<50g/L'],
  },
  {
    id: 'p4',
    name: '环氧树脂',
    category: 'chemical',
    price: '¥350/桶',
    description: '高品质环氧树脂，粘结力强，耐化学腐蚀',
    image: '/assets/images/chemical.jpg',
    specs: ['容量：5kg', '固化时间：24h', '硬度：邵氏D80'],
  },
  {
    id: 'p5',
    name: '防静电地板',
    category: 'flooring',
    price: '¥150/㎡',
    description: '防静电PVC地板，适用于机房、电子车间等场所',
    image: '/assets/images/flooring.jpg',
    specs: ['表面电阻：10^6-10^9Ω', '厚度：2.5mm', '耐磨转数：≥10000'],
  },
  {
    id: 'p6',
    name: '橡胶垫片',
    category: 'rubber',
    price: '¥5/片',
    description: '耐高温橡胶垫片，密封性能优异',
    image: '/assets/images/rubber.jpg',
    specs: ['材质：硅胶', '规格：50×50×3mm', '耐温：-60℃~200℃'],
  },
];

export const cases: Case[] = [
  {
    id: 'c1',
    name: '深圳宝安某写字楼',
    location: '深圳宝安',
    type: '商业建筑',
    description: '该项目为现代化写字楼，总面积约2万平方米。我们提供的PVC塑胶地板和环保涂料被广泛应用于办公区域，为员工创造了舒适健康的工作环境。',
    image: '/assets/images/case1.jpg',
    materials: ['PVC塑胶地板', '环保涂料', '装饰材料'],
  },
  {
    id: 'c2',
    name: '东莞某电子厂车间',
    location: '东莞',
    type: '工业厂房',
    description: '该电子厂车间对地面材料要求严格，需要防静电和耐磨。我们提供的防静电塑胶地板完美满足了客户需求，有效保护了生产设备和产品。',
    image: '/assets/images/case2.jpg',
    materials: ['防静电地板', '橡胶密封条', '环氧树脂'],
  },
  {
    id: 'c3',
    name: '惠州某医院病房楼',
    location: '惠州',
    type: '医疗建筑',
    description: '医院项目对材料的环保性和抗菌性要求极高。我们提供的PVC地板和环保涂料符合医疗级标准，为患者和医护人员提供了安全的环境。',
    image: '/assets/images/case3.jpg',
    materials: ['PVC塑胶地板', '环保涂料', '橡胶制品'],
  },
  {
    id: 'c4',
    name: '广州某商场改造项目',
    location: '广州',
    type: '商业建筑',
    description: '该商场改造项目采用了我们提供的多种装饰材料，包括环保涂料和橡胶制品，提升了商场的整体形象和购物体验。',
    image: '/assets/images/case4.jpg',
    materials: ['环保涂料', '橡胶制品', '装饰材料'],
  },
];

export const newsList: News[] = [
  {
    id: 'n1',
    title: '2024年绿色建材政策利好，塑胶地板迎来发展机遇',
    category: '政策',
    date: '2024-01-15',
    author: '行业分析师',
    summary: '2024年国家出台绿色建材推广政策，塑胶地板作为环保建材迎来发展新机遇。',
    content: `2024年，国家继续加大对绿色建材行业的政策支持力度，塑胶地板作为环保、耐磨、易维护的地面材料，迎来了新的发展机遇。

政策要点包括：
- 加快绿色建材产品认证体系建设，塑胶地板等环保材料将获得更多政策支持
- 鼓励公共建筑和住宅项目使用绿色建材，对使用环保塑胶地板的项目给予税收优惠
- 推动建材产业向绿色化、智能化方向发展，支持企业技术创新

晶凡硕作为专业的塑胶地板供应商，将积极响应政策导向，加大研发投入，为客户提供更优质的绿色建材解决方案。`,
    image: '/assets/images/news1.jpg',
  },
  {
    id: 'n2',
    title: '塑胶地板市场需求持续增长，环保成为主流趋势',
    category: '市场',
    date: '2024-01-12',
    author: '市场研究员',
    summary: '随着环保意识的增强，塑胶地板市场需求持续增长，成为建材行业新亮点。',
    content: `随着环保意识的增强和消费观念的转变，塑胶地板市场需求持续增长。据行业协会统计，2023年塑胶地板市场规模达到300亿元，同比增长18%。

塑胶地板的优势：
- 环保无污染，零甲醛释放
- 防滑耐磨，使用寿命长
- 安装便捷，维护成本低
- 花色多样，装饰效果好

预计未来五年，塑胶地板市场将保持年均20%以上的增速，成为建材行业新的增长点。`,
    image: '/assets/images/news2.jpg',
  },
  {
    id: 'n3',
    title: '晶凡硕推出新一代防静电塑胶地板',
    category: '公司',
    date: '2024-01-10',
    author: '晶凡硕',
    summary: '晶凡硕成功推出新一代防静电塑胶地板，满足电子厂、机房等特殊场所需求。',
    content: `近日，深圳市晶凡硕新材料科技有限公司成功推出新一代防静电塑胶地板产品。

新产品特点：
- 表面电阻达到10^6-10^9Ω，符合防静电标准
- 采用环保PVC材料，零甲醛释放
- 耐磨转数超过10000转，使用寿命长
- 适用于电子厂车间、数据中心、实验室等场所

该产品已通过国家相关认证，目前已在多个项目中得到应用，受到客户好评。`,
    image: '/assets/images/news3.jpg',
  },
  {
    id: 'n4',
    title: '橡胶制品市场前景广阔，晶凡硕布局高端领域',
    category: '市场',
    date: '2024-01-08',
    author: '行业观察',
    summary: '橡胶制品在建筑、工业等领域应用广泛，晶凡硕积极布局高端橡胶制品市场。',
    content: `橡胶制品作为重要的工业原材料，在建筑密封、减震降噪等领域应用广泛。随着工业自动化水平的提高，高端橡胶制品需求不断增长。

晶凡硕在橡胶制品领域的布局：
- 引进先进生产设备，提高产品精度和质量
- 开发耐高温、耐腐蚀的特种橡胶产品
- 拓展电子、医疗等高端领域市场

公司表示，将继续专注于橡胶制品的研发和创新，为客户提供更优质的产品和服务。`,
    image: '/assets/images/news4.jpg',
  },
];

export const companyStrengths: CompanyStrength[] = [
  {
    id: 's1',
    icon: 'Award',
    title: '品质保证',
    description: '严格的质量控制体系，确保每一批产品都符合国家标准',
  },
  {
    id: 's2',
    icon: 'Truck',
    title: '快速配送',
    description: '完善的物流网络，确保货物准时送达',
  },
  {
    id: 's3',
    icon: 'Headphones',
    title: '专业服务',
    description: '专业的技术团队，提供全方位的技术支持',
  },
  {
    id: 's4',
    icon: 'Shield',
    title: '售后保障',
    description: '完善的售后服务体系，让您无后顾之忧',
  },
];
