export type SelectBoxProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: string[];
  placeholder?: string;
};
