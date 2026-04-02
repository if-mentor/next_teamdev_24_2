import styles from "./styles.module.css";
import { TextBoxProps } from "./type";

const TextBox = ({ value, onChange, label, placeholder, type = "text", disabled, error }: TextBoxProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default TextBox;
