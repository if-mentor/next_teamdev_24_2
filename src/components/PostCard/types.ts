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
}
