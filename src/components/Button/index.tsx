import styles from "./styles.module.css";
import { useTransition } from "react";

type ButtonProps = {
  label: string;
  type?: "button" | "submit";
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: string;
};

const Button = ({ label, type = "button", onClick, disabled, variant = "primary", size = "medium" }: ButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(onClick);
  };
  return (
    <>
      <button
        type={type}
        className={`${styles[variant]} ${styles[size]}`}
        onClick={handleClick}
        disabled={isPending || disabled}
      >
        {isPending ? "Loading..." : label}
      </button>
    </>
  );
};

export default Button;
