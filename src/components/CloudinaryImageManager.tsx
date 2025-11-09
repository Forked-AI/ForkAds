'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface CloudinaryImageManagerProps {
  onImagesChange: (urls: string[]) => void;
  currentImageUrls?: string[];
  maxFiles?: number;
  required?: boolean;
  autoUpload?: boolean; // If true, uploads immediately. If false, shows "Upload All" button
}

export default function CloudinaryImageManager({
  onImagesChange,
  currentImageUrls = [],
  maxFiles = 5,
  required = false,
  autoUpload = true, // Default to auto-upload for forms
}: CloudinaryImageManagerProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>(currentImageUrls);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    try {
      // Get signature from our API
      const timestamp = Math.round(new Date().getTime() / 1000);
      const signatureResponse = await fetch('/api/sign-cloudinary-params', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paramsToSign: {
            timestamp,
            folder: 'fork-ads',
          },
        }),
      });

      const { signature } = await signatureResponse.json();

      // Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('timestamp', timestamp.toString());
      formData.append('signature', signature);
      formData.append('folder', 'fork-ads');
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await cloudinaryResponse.json();
      return data.secure_url || null;
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const totalFiles = selectedFiles.length + fileArray.length;

    if (totalFiles > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed. You can select ${maxFiles - selectedFiles.length} more.`);
      return;
    }

    // Validate files
    const validFiles = fileArray.filter((file) => {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not an image`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    if (autoUpload) {
      // Auto-upload mode: upload immediately
      setUploading(true);
      setUploadProgress(0);

      const newUrls: string[] = [];
      for (let i = 0; i < validFiles.length; i++) {
        const url = await uploadToCloudinary(validFiles[i]);
        if (url) {
          newUrls.push(url);
        }
        setUploadProgress(((i + 1) / validFiles.length) * 100);
      }

      const allUrls = [...uploadedUrls, ...newUrls];
      setUploadedUrls(allUrls);
      onImagesChange(allUrls);
      setUploading(false);
      setUploadProgress(0);
    } else {
      // Manual upload mode: stage files for later upload
      setSelectedFiles(prev => [...prev, ...validFiles]);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeUploadedImage = (index: number) => {
    const newUrls = uploadedUrls.filter((_, i) => i !== index);
    setUploadedUrls(newUrls);
    onImagesChange(newUrls);
  };

  const uploadAllImages = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    const newUrls: string[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const url = await uploadToCloudinary(selectedFiles[i]);
      if (url) {
        newUrls.push(url);
      }
      setUploadProgress(((i + 1) / selectedFiles.length) * 100);
    }

    const allUrls = [...uploadedUrls, ...newUrls];
    setUploadedUrls(allUrls);
    setSelectedFiles([]);
    onImagesChange(allUrls);
    setUploading(false);
    setUploadProgress(0);
  };

  const clearAll = () => {
    setSelectedFiles([]);
    setUploadedUrls([]);
    onImagesChange([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const totalImages = selectedFiles.length + uploadedUrls.length;
  const hasImages = totalImages > 0;

  return (
    <div className="space-y-4">
      {/* File Selection */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          disabled={uploading || totalImages >= maxFiles}
          className="hidden"
        />

        <div className="space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Images {autoUpload ? 'to Upload' : 'to Stage'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {totalImages}/{maxFiles} selected • PNG, JPG, GIF, WebP • Max 5MB each
              {autoUpload && ' • Uploads automatically'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || totalImages >= maxFiles}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Choose Files
          </button>
        </div>
      </div>

      {/* Selected Files Preview - Only show in manual upload mode */}
      {!autoUpload && selectedFiles.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ready to Upload ({selectedFiles.length})
            </h4>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={uploadAllImages}
                disabled={uploading}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded font-medium disabled:opacity-50"
              >
                {uploading ? 'Uploading...' : 'Upload All'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedFiles([])}
                disabled={uploading}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded disabled:opacity-50"
              >
                Clear
              </button>
            </div>
          </div>

          {uploading && (
            <div className="space-y-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Uploading to Cloudinary... {Math.round(uploadProgress)}%
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="relative group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden aspect-square"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => removeSelectedFile(index)}
                    disabled={uploading}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-500 hover:bg-red-600 text-white rounded-full disabled:opacity-50"
                    title="Remove image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-1 left-1 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                  Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Progress - Show in both modes when uploading */}
      {autoUpload && uploading && (
        <div className="space-y-2">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Uploading to Cloudinary... {Math.round(uploadProgress)}%
          </p>
        </div>
      )}

      {/* Uploaded Images */}
      {uploadedUrls.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Uploaded to Cloudinary ({uploadedUrls.length})
            </h4>
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-red-600 hover:text-red-700 dark:text-red-400 font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uploadedUrls.map((url, index) => (
              <div
                key={index}
                className="relative group border-2 border-green-200 dark:border-green-700 rounded-lg overflow-hidden aspect-square"
              >
                <Image
                  src={url}
                  alt={`Uploaded ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => removeUploadedImage(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
                    title="Remove image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-1 left-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                  #{index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              All images uploaded and ready for publishing
            </p>
          </div>
        </div>
      )}

      {/* Validation Message */}
      {required && !hasImages && (
        <p className="text-sm text-red-600 dark:text-red-400">
          At least one image is required
        </p>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        required={required}
        value={uploadedUrls.length > 0 ? uploadedUrls[0] : ''}
      />
    </div>
  );
}
