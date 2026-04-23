import styles from "./styles.module.css";
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import PostCard from "@/components/PostCard";

export default function Home() {
  // task24 ホーム画面作成時のダミーデータ sampleCardはバックエンド作成後に削除予定
  const sampleCard = {
    title: "title",
    author: "author",
    category: "category",
    content: "content",
    createdAt: "2026-04-18T09:00:00+09:00",
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <TextBox placeholder="検索したい記事を入力してください" />
        <Button variant="secondary">検索</Button>
      </div>
      <div className={styles.cardWrapper}>
        {/*task24 ホーム画面作成時のダミーデータ　バックエンド作成時に修正予定*/}
        {Array.from({ length: 7 }).map((_, i) => (
          <PostCard
            key={i}
            title={sampleCard.title}
            author={sampleCard.author}
            category={sampleCard.category}
            thumbnailUrl=""
            content={sampleCard.content}
            createdAt={sampleCard.createdAt}
          />
        ))}
        {/*ダミーデータ終了*/}
      </div>
    </div>
  );
}
