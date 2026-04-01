import styles from "./styles.module.css";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
};

const TextBox = ({ value, onChange, label, placeholder, type = "text", disabled, error }: Props) => {
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
