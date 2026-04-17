/**
 * 日付を受け取り、「たった今」や「〇分前」といった相対時間文字列に変換するユーティリティ関数
 *
 * @param date - 対象日時。`Date` オブジェクト、ISO文字列、または `undefined` を指定可能。
 *               `undefined` の場合は空文字列を返す。
 * @param locale - 出力言語。`"ja"`（日本語）または `"en"`（英語）。デフォルトは `"ja"`。
 * @returns 現在時刻からの経過時間を表す相対文字列。
 */
export const formatRelativeTime = (date: string | Date | undefined, locale: "ja" | "en" = "ja"): string => {
  if (!date) return "";

  const targetDate = new Date(date);
  const now = new Date();

  const diffInMs = now.getTime() - targetDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (locale === "en") {
    if (diffInMinutes < 1) return "just now";
    if (diffInMinutes < 2) return "a min ago";
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    if (diffInHours < 2) return "an hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays < 2) return "a day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInMonths < 2) return "a month ago";
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    if (diffInYears < 2) return "a year ago";
    return `${diffInYears} years ago`;
  }

  if (diffInMinutes < 1) {
    return "たった今";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}分前`;
  } else if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  } else if (diffInDays < 30) {
    return `${diffInDays}日前`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`;
  } else {
    return `${diffInYears}年前`;
  }
};
