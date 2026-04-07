"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <>
          <button onClick={() => router.push("/articles/new")} className={styles.loginButton}>
            新規作成
          </button>
          <button className={styles.registerButton}>ログアウト</button>
        </>
      ) : (
        <>
          <button onClick={() => router.push("/login")} className={styles.loginButton}>
            ログイン
          </button>
          <button onClick={() => router.push("/signup")} className={styles.registerButton}>
            新規登録
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
