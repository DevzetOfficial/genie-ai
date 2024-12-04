// src/data/blogData.d.ts
declare module '@/data/blogData' {
    export const blogs: {
      title: string;
      category: string[];
      description: string;
      author: string;
      time: string;
      readingTime: string;
      coverImage: string;
      type: 'featured' | 'top-story';
    }[];
  }
  