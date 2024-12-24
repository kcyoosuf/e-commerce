import React from "react";

interface BannerProps {
  src: string;
  alt: string;
  height?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  className?: string;
}

const ImageBanner: React.FC<BannerProps> = ({
  src,
  alt,
  height = {
    mobile: "h-48", // default 12rem
    tablet: "h-64", // default 16rem
    desktop: "h-96", // default 24rem
  },
  className = "",
}) => {
  return (
    <div
      className={`
          relative w-full
          ${height.mobile ?? "h-48"} 
          ${height.tablet ? `sm:${height.tablet}` : "sm:h-64"} 
          ${height.desktop ? `md:${height.desktop}` : "md:h-96"}
          ${className}
        `.trim()}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageBanner;
