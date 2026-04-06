import Image from "next/image";
import styles from "./styles.module.css";
import { PostCardProps } from "./types";
import { formatRelativeTime } from "@/utils/formatRelativeTime";

// ============================================================================
// Sub Components
// ============================================================================

/**
 * 読み込み中に表示されるスケルトンスクリーンコンポーネントです。
 * 本体のPostCardと全く同じレイアウト構成で枠線のみの仮UIを表示し、UXを向上させます。
 * （React Suspense の fallback として利用することを想定しています）
 */
export const PostCardSkeleton = () => {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={`${styles.skeleton} ${styles.skeletonThumbnail}`} />
      <div className={styles.contentContainer}>
        <div className={styles.headerRow}>
          <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
          <div className={`${styles.skeleton} ${styles.skeletonCategory}`} />
        </div>
        <div className={`${styles.skeleton} ${styles.skeletonAuthor}`} />
        <div className={styles.contentWrapper}>
          <div className={`${styles.skeleton} ${styles.skeletonContent}`} />
          <div className={`${styles.skeleton} ${styles.skeletonContentShort}`} />
        </div>
        <div className={styles.footerRow}>
          <div className={`${styles.skeleton} ${styles.skeletonDate}`} />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

/**
 * 記事一覧等の画面で利用する、単体のカードコンポーネント。
 * ワイヤーフレーム仕様に基づき、280x324の固定サイズ（box-sizing含む）で描画されます。
 */
const PostCard = ({ title, author, category, thumbnailUrl, content, createdAt }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <Image
          src={thumbnailUrl || "/sample1.jpg"} /* 画像URLが渡されなかった場合のフォールバック */
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.headerRow}>
          <h2 className={styles.title} title={title}>
            {title}
          </h2>
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.author}>{author}</div>
        <div className={styles.contentWrapper}>
          <p className={styles.content}>{content}</p>
        </div>
        <div className={styles.footerRow}>
          <time dateTime={new Date(createdAt).toISOString()} className={styles.createdAt}>
            {formatRelativeTime(createdAt)}
          </time>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
