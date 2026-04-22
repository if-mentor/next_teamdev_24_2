import Link from "next/link";
import Button from "@/components/Button";
import TextBox from "@/components/TextBox";
import styles from "./styles.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ログイン</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <TextBox label="メールアドレス" type="email" placeholder="メールアドレスを入力" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <TextBox label="パスワード" type="password" placeholder="パスワードを入力" name="password" required />
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="success" size="lg" type="submit">
              ログイン
            </Button>
          </div>
        </form>
        <div className={styles.footerLink}>
          アカウントをお持ちでない方は
          <Link href="/signup" className={styles.link}>
            新規登録
          </Link>
        </div>
      </div>
    </div>
  );
}
