import metadataJson from "../assets/seo-meta-data.json";
import { SEOMetadataProps } from "../components/seo/SEOMetadata";

type MetadataKeys = keyof typeof metadataJson;
const metadata: Record<MetadataKeys, SEOMetadataProps> = metadataJson as Record<
  MetadataKeys,
  SEOMetadataProps
>;
export const getMetadata = (page: MetadataKeys): SEOMetadataProps => {
  return metadata[page];
};
