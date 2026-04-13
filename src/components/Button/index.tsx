import styles from "./styles.module.css";
import { ButtonProps } from "./type";

const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <>
      <button type={type} className={`${styles[variant]} ${styles[size]}`} {...buttonProps}>
        {isLoading ? "Loading..." : children}
      </button>
    </>
  );
};

export default Button;
