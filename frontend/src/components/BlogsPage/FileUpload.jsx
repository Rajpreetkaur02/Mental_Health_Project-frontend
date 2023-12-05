import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from "../../pages/BlogsPage/BlogsPage.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    // Handle the dropped files
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const handleFileInputChange = (e) => {
    // Handle the selected file from the file input
    const selectedFile = e.target.files[0];
    setUploadedFile(selectedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*', // Specify the accepted file types
  });

  return (
    <div>
      <div {...getRootProps()} className={classes.FileUpload}>
        <input {...getInputProps()} />
        {uploadedFile ? (
          <div>
            <p>File uploaded successfully!</p>
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="Uploaded"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <p>File name: {uploadedFile.name}</p>
          </div>
        ) : isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
            <>
            <div><IoCloudUploadOutline size={60}/></div>
            <p>Drag & drop to upload,<br/> <span>or browse</span></p>

            </>
        )}
      </div>
    </div>
  );
};





export default FileUpload;
