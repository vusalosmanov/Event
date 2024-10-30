"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://your-backend-url.com/api/upload-excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Məlumatlar uğurla yükləndi!');
    } catch (error) {
      console.error('Yükləmə uğursuz oldu:', error);
    }
  };

  return (
    <>
      <div>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUpload}>Yüklə</button>
      </div>
    </>
  )
}

export default Page