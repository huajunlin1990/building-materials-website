import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
}

export const Seo = ({
  title = '深圳市晶凡硕新材料科技有限公司',
  description = '晶凡硕新材料专注于新型建筑材料的研发、生产与销售，为客户提供高品质的绿色建材解决方案。',
  keywords = ['新材料', '建筑材料', '绿色建材', '深圳建材', '晶凡硕'],
  author = '深圳市晶凡硕新材料科技有限公司',
  url = 'https://www.jingfanshuo.com',
  image = '/assets/images/hero.jpg',
}: SeoProps) => {
  const defaultTitle = '深圳市晶凡硕新材料科技有限公司';
  const pageTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Language */}
      <html lang="zh-CN" />
    </Helmet>
  );
};
