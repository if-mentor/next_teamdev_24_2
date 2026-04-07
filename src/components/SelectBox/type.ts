export type SelectBoxProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value"> & {
  label?: string;
  value: string[];
  placeholder?: string;
  disabled?: boolean;
};
