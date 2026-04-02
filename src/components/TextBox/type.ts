export type TextBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
};
