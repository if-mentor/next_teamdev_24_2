import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import CommentCard from "@/components/CommentCard";
import Link from "next/link";
import styles from "./styles.module.css";

/*
 * [FE] 記事詳細 — UI 先行。以下はバックエンド/API 連携後に削除または置き換え予定（GitHub Projects の [BE] と対応）。
 * - MOCK_* … [BE] 記事詳細取得 などで DB から取得したデータに差し替え
 * - コメント入力 / Button … コメント投稿 API または Server Action 接続時に実装差し替え（複数行が必要なら textarea へ）
 * - 編集リンク … [BE] 認証制御・[BE] 記事更新 と画面 #26 実装時に URL・表示条件を確定
 */
type ArticleDetailPageProps = {
  params: Promise<{ id: string }>;
};

/** UI 確認用モック。[BE] 記事詳細取得 完了後に削除し、取得結果を表示する */
const MOCK_ARTICLE = {
  title: "Blog Title",
  author: "Author",
  category: "Category",
  thumbnailUrl: "/sample1.jpg",
  content: "ここに記事本文が入ります。ダミーテキストです。複数行の内容を想定したプレースホルダとして表示しています。",
  createdAt: new Date(Date.now() - 60 * 1000),
};

/** UI 確認用モック。コメント一覧 API（または記事詳細に含まれる場合はそのフィールド）接続後に削除 */
const MOCK_COMMENTS = [
  {
    id: "1",
    userName: "ユーザー名",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: "2",
    userName: "ユーザー名",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
];

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { id } = await params;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.stack}>
          <div className={styles.blogCardShell}>
            <BlogCard
              title={MOCK_ARTICLE.title}
              author={MOCK_ARTICLE.author}
              category={MOCK_ARTICLE.category}
              thumbnailUrl={MOCK_ARTICLE.thumbnailUrl}
              content={MOCK_ARTICLE.content}
              createdAt={MOCK_ARTICLE.createdAt}
            />
            {/* Issue #16（BlogCard）でカード内に移すまで暫定。移設後はこの Link を削除 */}
            <Link href={`/articles/${id}/edit`} className={styles.cardEditLink}>
              編集
            </Link>
          </div>
          <section className={styles.comments} aria-labelledby="comments-heading">
            <h2 id="comments-heading" className={styles.commentsTitle}>
              {MOCK_COMMENTS.length}件のコメント
            </h2>
            <input
              id="article-comment"
              className={styles.commentField}
              type="text"
              name="comment"
              placeholder="コメントを入力"
              aria-label="コメントを入力"
            />
            <div className={styles.commentSubmitRow}>
              <Button variant="success">コメント</Button>
            </div>
            <ul className={styles.commentList}>
              {MOCK_COMMENTS.map((comment) => (
                <li key={comment.id}>
                  <CommentCard userName={comment.userName} content={comment.content} createdAt={comment.createdAt} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
