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
