import Link from "next/link";
import { formatRelativeTime } from "@/utils/formatRelativeTime";
import Image from "next/image";
import styles from "./styles.module.css";
import type { BlogCardProps } from "./type";

const BlogCard = ({ id, title, author, avatarUrl, category, thumbnailUrl, content, createdAt }: BlogCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
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
      <p className={styles.createdAt}>{formatRelativeTime(createdAt)}</p>
      <div className={styles.footer}>
        <Link href={`/articles/${id}/edit`} className={styles.editButton}>
          編集
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
