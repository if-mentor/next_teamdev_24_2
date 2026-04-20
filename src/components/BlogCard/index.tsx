import { formatRelativeTime } from "@/utils/formatRelativeTime";
import Image from "next/image";
import styles from "./styles.module.css";
import type { BlogCardProps } from "./type";

const BlogCard = ({ title, author, avatarUrl, category, thumbnailUrl, content, createdAt }: BlogCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.author}>
          <span>{author}</span>
          <Image
            src={avatarUrl ?? "/default_user_icon.png"}
            alt={author}
            width={32}
            height={32}
            className={styles.avatar}
          />
        </div>
      </div>
      <Image src={thumbnailUrl} alt={title} width={640} height={320} className={styles.thumbnail} />
      <p className={styles.category}>{category}</p>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <time dateTime={new Date(createdAt).toISOString()} className={styles.createdAt}>
          {formatRelativeTime(createdAt, "en")}
        </time>
      </div>
    </article>
  );
};

export default BlogCard;
