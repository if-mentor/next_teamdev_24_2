export type BlogCardProps = {
  id: number;
  title: string;
  author: string;
  avatarUrl?: string;
  category: string;
  thumbnailUrl: string;
  content: string;
  createdAt: string | Date;
};
