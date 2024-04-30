import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const ImageUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div className="container">
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            <p>Click here to upload, or drag and drop files</p>
        </div>
        {uploadedFiles.length > 0 && (
            <div>
            <h4>Uploaded Files:</h4>
            <ul>
                {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    )}