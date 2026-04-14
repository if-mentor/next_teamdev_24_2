import Link from "next/link";
import Button from "@/components/Button";
import TextBox from "@/components/TextBox";
import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.card}>
        <h1 className={styles.title}>新規登録</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <TextBox label="名前" placeholder="名前を入力" name="name" required />
          </div>

          <div className={styles.inputGroup}>
            <TextBox label="メールアドレス" type="email" placeholder="メールアドレスを入力" name="email" required />
          </div>

          <div className={styles.inputGroup}>
            <TextBox label="パスワード" type="password" placeholder="パスワードを入力" name="password" required />
          </div>

          <div className={styles.buttonContainer}>
            <Button variant="success" size="lg" type="submit">
              登録する
            </Button>
          </div>
        </form>
        <div className={styles.footerLink}>
          すでにアカウントをお持ちの方は
          <Link href="/login" className={styles.link}>
            ログイン
          </Link>
        </div>
      </div>
    </div>
  );
}
