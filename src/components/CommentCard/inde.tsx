import Image from "next/image";
import styles from "./styles.module.css";
import { CommentCardProps } from "./type";
import { formatRelativeTime } from "@/utils/formatRelativeTime";

export default function CommentCard({ userName, userAvatarUrl, content, createdAt }: CommentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image
            src={userAvatarUrl || "/user-avatar.svg"}
            alt={`${userName}のアイコン`}
            width={32}
            height={32}
            className={styles.avatarImage}
          />
        </div>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.time}>{formatRelativeTime(createdAt)}</span>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
