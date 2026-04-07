import styles from "./styles.module.css";
import type { SelectBoxProps } from "./type";

const SelectBox = ({ label, value, placeholder, disabled, ...selectProps }: SelectBoxProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} disabled={disabled} defaultValue="" {...selectProps}>
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {value?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
