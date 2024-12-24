import { FC } from "react";
import { Helmet } from "react-helmet-async";

export interface SEOMetadataProps {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonicalUrl: string;
  // Optional props for additional flexibility
  twitterHandle?: string;
  ogType?: "website" | "article" | "product";
  locale?: string;
  noindex?: boolean;
  structured?: Record<string, unknown>;
}

const SEOMetadata: FC<SEOMetadataProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  twitterHandle = "@yourhandle",
  ogType = "website",
  locale = "en_US",
  noindex = false,
  structured,
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Character Set and Language */}
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content={locale.split("_")[0]} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Meta Tag */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Structured Data */}
      {structured && (
        <script type="application/ld+json">{JSON.stringify(structured)}</script>
      )}
    </Helmet>
  );
};

export default SEOMetadata;
