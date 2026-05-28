import { Seo } from '../components/common/Seo';
import { Hero } from '../components/home/Hero';
import { ProductCategories } from '../components/home/ProductCategories';
import { CompanyStrength } from '../components/home/CompanyStrength';
import { CaseGallery } from '../components/home/CaseGallery';

export const Home = () => {
  return (
    <>
      <Seo
        title="深圳市晶凡硕新材料科技有限公司"
        description="晶凡硕新材料专注于新型建筑材料的研发、销售与服务，提供高品质绿色建材解决方案。主营塑胶地板、橡胶制品、建筑装饰材料等，8年行业经验，200+服务客户。"
        keywords={['新材料', '建筑材料', '绿色建材', '塑胶地板', '橡胶制品', '建筑装饰材料', '深圳建材', '晶凡硕']}
      />
      <Hero />
      <CompanyStrength />
      <ProductCategories />
      <CaseGallery />
    </>
  );
};
