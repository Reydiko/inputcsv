// src/components/CSVUpload.js
import React from 'react';

const CSVUpload = ({ onUpload }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        onUpload(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4">
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFileUpload} 
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export default CSVUpload;
