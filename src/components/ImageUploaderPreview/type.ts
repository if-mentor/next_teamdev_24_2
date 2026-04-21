export type ImageUploaderPreviewProps = {
  imageFile?: File | null;
  value?: File | null;
  previewUrl?: string;
  accept?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (file: File | null) => void;
};
