import styles from "./styles.module.css";
import type { TextBoxProps } from "./type";

const TextBox = ({ label, type = "text", error, ...inputProps }: TextBoxProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={`${styles.input} ${error ? styles.inputError : ""}`} type={type} {...inputProps} />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default TextBox;
