export type BlogProp = {
  id: number;
  title: string;
  category: string[];
  description: string;
  longDesc: string;
  author: string;
  authorImg: string;
  publishDate: string;
  time: string;
  readingTime: string;
  coverImage: string;
  type: "featured" | "top-story";
};

interface FeatureData {
  id: number;
  featureData: string;
}

export type WhyChooseProp = {
  title: string;
  details: string;
  image: string;
  features?: FeatureData[];
};

export type SalesDriveProp = {
  title: string;
  items: {
    id: number;
    title: string;
    details: string;
    image: string;
  }[];
};

export type AiDrivenProp = {
  id: number;
  title: string;
  details: string;
  features: string[];
};

export type CompareToCallProp = {
  id: number;
  withGenie: boolean;
  items: string[];
};

export type WorkforceRevulationProp = {
  id: number;
  title: string;
  description: string;
};

export type ComparisonDataProp = {
  title: string;
  items: {
    id: number;
    category?: string;
    genieFeature: string;
    otherAIFeature: string;
  }[];
};
