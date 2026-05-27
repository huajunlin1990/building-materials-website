import { ProductCategory, Product, Case, News, CompanyStrength, NavItem } from '../types';

export const navItems: NavItem[] = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '工程案例', path: '/cases' },
  { name: '行业动态', path: '/news' },
  { name: '关于我们', path: '/about' },
  { name: '联系我们', path: '/contact' },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'cement',
    name: '水泥',
    description: '优质水泥，适用于各类建筑工程',
    image: '/assets/images/cement.jpg',
  },
  {
    id: 'steel',
    name: '钢材',
    description: '高强度钢材，质量可靠',
    image: '/assets/images/steel.jpg',
  },
  {
    id: 'sand',
    name: '砂石',
    description: '精选砂石，符合国家标准',
    image: '/assets/images/sand.jpg',
  },
  {
    id: 'tile',
    name: '瓷砖',
    description: '精美瓷砖，多样款式可选',
    image: '/assets/images/tile.jpg',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: '普通硅酸盐水泥',
    category: '水泥',
    price: '¥320/吨',
    description: '符合GB175-2007标准，适用于一般建筑工程',
    image: '/assets/images/cement.jpg',
    specs: ['强度等级：42.5', '初凝时间：≥45min', '终凝时间：≤600min'],
  },
  {
    id: '2',
    name: '螺纹钢',
    category: '钢材',
    price: '¥4800/吨',
    description: 'HRB400E级螺纹钢，抗震性能优异',
    image: '/assets/images/steel.jpg',
    specs: ['直径：Φ12-Φ32', '屈服强度：≥400MPa', '抗拉强度：≥540MPa'],
  },
  {
    id: '3',
    name: '河砂',
    category: '砂石',
    price: '¥80/立方米',
    description: '优质河砂，颗粒均匀，含泥量低',
    image: '/assets/images/sand.jpg',
    specs: ['细度模数：2.6-2.9', '含泥量：≤3%', '含水率：≤5%'],
  },
  {
    id: '4',
    name: '抛光瓷砖',
    category: '瓷砖',
    price: '¥68/片',
    description: '600x600mm抛光砖，表面光亮，耐磨耐用',
    image: '/assets/images/tile.jpg',
    specs: ['规格：600x600mm', '厚度：10mm', '吸水率：≤0.5%'],
  },
  {
    id: '5',
    name: '白水泥',
    category: '水泥',
    price: '¥450/吨',
    description: '白色硅酸盐水泥，适用于装饰工程',
    image: '/assets/images/cement.jpg',
    specs: ['强度等级：32.5', '白度：≥85%', '细度：≥320m²/kg'],
  },
  {
    id: '6',
    name: '槽钢',
    category: '钢材',
    price: '¥5200/吨',
    description: 'Q235B槽钢，结构稳定，用途广泛',
    image: '/assets/images/steel.jpg',
    specs: ['型号：8#-40#', '材质：Q235B', '执行标准：GB/T 707-2008'],
  },
];

export const cases: Case[] = [
  {
    id: '1',
    name: '北京国贸中心',
    location: '北京市朝阳区',
    type: '商业综合体',
    description: '总建筑面积50万平方米，集办公、商业、酒店于一体的大型综合体项目。',
    image: '/assets/images/case1.jpg',
    materials: ['水泥', '钢材', '玻璃幕墙'],
  },
  {
    id: '2',
    name: '上海浦东国际机场',
    location: '上海市浦东新区',
    type: '交通枢纽',
    description: '全球最繁忙的航空枢纽之一，年旅客吞吐量超过8000万人次。',
    image: '/assets/images/case2.jpg',
    materials: ['钢材', '混凝土', '铝型材'],
  },
  {
    id: '3',
    name: '深圳湾体育中心',
    location: '广东省深圳市',
    type: '体育场馆',
    description: '可容纳2.5万名观众的大型体育场馆，承办多项国际赛事。',
    image: '/assets/images/case3.jpg',
    materials: ['钢结构', '膜结构', '瓷砖'],
  },
  {
    id: '4',
    name: '杭州西湖文化广场',
    location: '浙江省杭州市',
    type: '文化建筑',
    description: '集文化、娱乐、商业于一体的城市公共空间。',
    image: '/assets/images/case4.jpg',
    materials: ['石材', '玻璃', '金属装饰'],
  },
];

export const newsList: News[] = [
  {
    id: '1',
    title: '2024年建材行业新政策解读',
    date: '2024-01-15',
    category: '政策法规',
    author: '行业分析师',
    content: `近日，国家发改委发布了《关于促进建材行业高质量发展的指导意见》，明确了未来五年建材行业的发展方向。政策提出，要推动建材行业向绿色化、智能化、高端化转型，加快淘汰落后产能，推广应用新型环保材料。

政策要点包括：
- 鼓励发展绿色建材，推广使用节能、环保型建筑材料
- 支持企业技术创新，提高生产自动化水平
- 加强质量监管，完善产品标准体系
- 推动产业集聚发展，优化产业布局

业内专家表示，这一政策将对建材行业产生深远影响，加速行业洗牌，促使企业加大研发投入，提升产品竞争力。`,
    image: '/assets/images/cement.jpg',
  },
  {
    id: '2',
    title: '绿色建材成为行业新热点',
    date: '2024-01-10',
    category: '市场动态',
    author: '市场研究员',
    content: `随着环保意识的增强和政策的引导，绿色建材市场需求持续增长。据行业协会统计，2023年绿色建材市场规模达到5000亿元，同比增长15%。

绿色建材主要包括：
- 节能门窗、保温材料
- 水性涂料、环保胶粘剂
- 再生骨料、循环利用材料
- 低辐射玻璃、太阳能建筑材料

预计未来五年，绿色建材市场将保持年均20%以上的增速，成为建材行业新的增长点。`,
    image: '/assets/images/news2.jpg',
  },
  {
    id: '3',
    title: '2024年建材价格行情分析',
    date: '2024-01-05',
    category: '价格行情',
    author: '价格分析师',
    content: `进入2024年，建材市场价格总体保持稳定，但部分品种出现波动：

水泥价格：受冬季错峰生产影响，水泥价格有所上涨，预计春季后将逐渐回落。

钢材价格：受铁矿石价格波动影响，钢材价格震荡调整，整体呈下行趋势。

砂石价格：由于环保整治力度加大，砂石供应偏紧，价格持续高位运行。

瓷砖价格：市场竞争激烈，部分品牌推出促销活动，价格稳中有降。

综合来看，2024年建材市场价格将保持平稳运行，建议采购方合理安排采购计划。`,
    image: '/assets/images/steel.jpg',
  },
];

export const companyStrengths: CompanyStrength[] = [
  {
    id: '1',
    title: '品质保证',
    description: '严格的质量控制体系，确保每一批产品都符合国家标准',
    icon: 'Shield',
  },
  {
    id: '2',
    title: '专业团队',
    description: '经验丰富的技术团队，提供专业的技术支持和解决方案',
    icon: 'Users',
  },
  {
    id: '3',
    title: '快速配送',
    description: '完善的物流配送网络，确保产品及时送达',
    icon: 'Truck',
  },
  {
    id: '4',
    title: '优质服务',
    description: '7x24小时客服支持，随时解答客户疑问',
    icon: 'Headphones',
  },
];