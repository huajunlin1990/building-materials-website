import { Seo } from '../components/common/Seo';
import { Hero } from '../components/home/Hero';
import { ProductCategories } from '../components/home/ProductCategories';
import { CompanyStrength } from '../components/home/CompanyStrength';
import { CaseGallery } from '../components/home/CaseGallery';
import { NewsSection } from '../components/home/NewsSection';

export const Home = () => {
  return (
    <>
      <Seo
        title="深圳市晶凡硕新材料科技有限公司"
        description="晶凡硕新材料专注于新型建筑材料的研发、生产与销售，提供高品质绿色建材解决方案。10年行业经验，500+服务客户，20+专利技术。"
        keywords={['新材料', '建筑材料', '绿色建材', '水泥', '钢材', '砂石', '瓷砖', '深圳建材', '晶凡硕']}
      />
      <Hero />
      <ProductCategories />
      <CompanyStrength />
      <CaseGallery />
      <NewsSection />
    </>
  );
};
