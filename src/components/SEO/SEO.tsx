import React, { ReactNode } from 'react';
import { useSiteMetadata } from '@hooks/useSiteMetadata';

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

const SEO = ({ title, description, pathname, children }: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}/${pathname || ``}`
  };

  return (
    <>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content="나나라이크, 나나, 웹 퍼블리셔, 경력 웹 퍼블리셔, 포트폴리오, 웹 퍼블리셔 포트폴리오, nanalike, nana, 웹 디자인, UI 디자이너, UX 디자이너, UI, UX, nykim, 김나영"
      />
      <meta name="Reply-To" content="nykim@nykim.net" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </>
  );
};

export default SEO;
