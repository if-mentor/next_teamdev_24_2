import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Hello Teamdev!!</h1>
    </div>
  );
}
