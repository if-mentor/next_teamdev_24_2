import styles from "./styles.module.css";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
};

const TextBox = ({ value, onChange, label, placeholder, type = "text" }: Props) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type={type} />
    </div>
  );
};

export default TextBox;
