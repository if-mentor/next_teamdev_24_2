"use client";

import { useState } from "react";
import styles from "./styles.module.css";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <>
          <button className={styles.loginButton}>新規作成</button>
          <button className={styles.registerButton}>ログアウト</button>
        </>
      ) : (
        <>
          <button className={styles.loginButton}>ログイン</button>
          <button className={styles.registerButton}>新規登録</button>
        </>
      )}
    </header>
  );
};

export default Header;
