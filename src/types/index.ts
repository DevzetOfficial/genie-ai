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

export type FeatureBoxProp = {
  title: string;
  titleClass?: string;
  imageClass?: string;
  description: string;
  image: string;
  highlight?: string;
  shortDesc?: string;
  button?: {
    label: string;
    url: string;
  };
  capabilities?: string[];
};

export type TestimonialCardProp = {
  logo: boolean;
  testimonialLogo?: string;
  reviewTitle?: string;
  review?: string;
  profileImg?: string;
  reviewerName?: string;
  designation?: string;
  bgColor: string;
  className?: string;
  index?: number;
  id: number;
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
