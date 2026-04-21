import Image from "next/image";
import styles from "./styles.module.css";
import { CommentCardProps } from "./type";
import { formatRelativeTime } from "@/utils/formatRelativeTime";

export default function CommentCard({ userName, userAvatarUrl, content, createdAt }: CommentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.avatar}>
          <Image
            src={userAvatarUrl || "/default_user_icon.png"}
            alt={`${userName}のアイコン`}
            width={32}
            height={32}
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.userName}>{userName}</span>
            <span className={styles.time}>{formatRelativeTime(createdAt)}</span>
          </div>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
