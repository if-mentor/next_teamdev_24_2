"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <>
          <Link href="/articles/new" className={styles.loginButton}>
            新規作成
          </Link>
          <button className={styles.registerButton}>ログアウト</button>
        </>
      ) : (
        <>
          <Link href="/login" className={styles.loginButton}>
            ログイン
          </Link>
          <Link href="/signup" className={styles.registerButton}>
            新規登録
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
