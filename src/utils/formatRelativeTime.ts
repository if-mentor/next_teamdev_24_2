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
    if (diffInMinutes < 1) return "just now"; // ← 追加
    if (diffInMinutes < 2) return "a min ago"; // ← 変更
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    if (diffInHours < 2) return "an hour ago"; // ← 変更
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays < 2) return "a day ago"; // ← 変更
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInMonths < 2) return "a month ago"; // ← 変更
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    if (diffInYears < 2) return "a year ago"; // ← 変更
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
