"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import type { ImageUploaderPreviewProps } from "./type";

const ImageUploaderPreview = ({
  imageFile,
  value,
  previewUrl,
  accept = "image/png, image/jpeg, image/jpg",
  disabled = false,
  error,
  onChange,
}: ImageUploaderPreviewProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [localImageError, setLocalImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const file = value !== undefined ? value : imageFile;

  // File → blob URL に変換（useMemo で同期的に計算）
  const localUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  // blob URL のメモリ解放（localUrl が変わった時 or アンマウント時）
  useEffect(() => {
    if (!localUrl) return;
    return () => URL.revokeObjectURL(localUrl);
  }, [localUrl]);

  const displayUrl = localUrl || (!file && previewUrl ? previewUrl : null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (selectedFile: File) => {
    setLocalImageError(null);
    if (accept) {
      const acceptedTypes = accept.split(",").map((t) => t.trim());
      const isValid = acceptedTypes.some((type) => {
        if (type.endsWith("/*")) {
          return selectedFile.type.startsWith(type.replace("/*", ""));
        }
        return selectedFile.type === type;
      });

      if (!isValid && acceptedTypes.length > 0) {
        return;
      }
    }
    onChange?.(selectedFile);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileChange(e.target.files[0]);
    }
    e.target.value = "";
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  return (
    <>
      <div
        className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ""} ${
          error ? styles.dropzoneError : ""
        } ${disabled ? styles.disabled : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className={styles.input}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {displayUrl && !localImageError ? (
          <Image
            src={displayUrl}
            alt="Preview"
            fill
            unoptimized
            className={styles.previewImage}
            onError={() => {
              setLocalImageError("画像ファイルとして読み込めませんでした。");
              onChange?.(null);
            }}
          />
        ) : (
          <div className={styles.placeholder}>
            <button type="button" className={styles.uploadButton} disabled={disabled}>
              画像アップロード
            </button>
          </div>
        )}
      </div>
      {(error || localImageError) && <p className={styles.errorMessage}>{error || localImageError}</p>}
    </>
  );
};

export default ImageUploaderPreview;
