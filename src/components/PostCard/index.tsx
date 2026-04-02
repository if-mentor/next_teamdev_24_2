import Image from "next/image";
import styles from "./styles.module.css";

// ============================================================================
// Types
// ============================================================================

export interface PostCardProps {
  /** 記事のタイトル（最大2行で省略表示されます） */
  title: string;
  /** 記事の作成者名 */
  author: string;
  /** 記事のカテゴリ（例: テック、デザインなど） */
  category: string;
  /** サムネイル画像URL（画像が存在しない場合のフォールバックはコンポーネント内で処理） */
  thumbnailUrl: string;
  /** 記事の本文プレビュー（最大2行で省略表示されます） */
  content: string;
  /** 投稿日時（コンポーネント内部で自動的に「◯分前」などに相対時間へフォーマットされます） */
  createdAt: string | Date;
  /** ローディング状態の切り替えフラグ（trueの場合はスケルトンUIを表示） */
  isLoading?: boolean;
}

// ============================================================================
// Utils (Helper Functions)
// ============================================================================

/**
 * 日付を受け取り、「just now」や「◯ days ago」といった相対時間文字列に変換するユーティリティ関数
 */
const formatRelativeTime = (date: string | Date | undefined): string => {
  if (!date) return "";

  const targetDate = new Date(date);
  const now = new Date();

  const diffInMs = now.getTime() - targetDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInMinutes < 1) {
    return "たった今";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}分前`;
  } else if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  } else if (diffInDays < 30) {
    return `${diffInDays}日前`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`;
  } else {
    return `${diffInYears}年前`;
  }
};

// ============================================================================
// Sub Components
// ============================================================================

/**
 * 読み込み中に表示されるスケルトンスクリーンコンポーネントです。
 * 本体のPostCardと全く同じレイアウト構成で枠線のみの仮UIを表示し、UXを向上させます。
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
const PostCard = ({ title, author, category, thumbnailUrl, content, createdAt, isLoading = false }: PostCardProps) => {
  // ローディング時はスケルトン表示を優先
  if (isLoading) {
    return <PostCardSkeleton />;
  }

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
