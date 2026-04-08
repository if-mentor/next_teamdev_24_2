import styles from "./styles.module.css";
import type { SelectBoxProps } from "./type";

const SelectBox = ({ label, options, placeholder, ...selectProps }: SelectBoxProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} defaultValue="" {...selectProps}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
