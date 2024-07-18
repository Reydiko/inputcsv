// src/App.js
import React, { useState } from 'react';
import CSVUpload from './components/CSVUpload';
import DataTable from './components/DataTable';
import Papa from 'papaparse';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const handleCSVUpload = (csvText) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        // Filter data hanya dengan kolom yang dibutuhkan
        const filteredData = results.data.map(row => ({
          NAMA_BAM: row['NAMA_BAM'],
          STANDARD_NAME: row['STANDARD_NAME']
        }));
        setData(filteredData);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 w-full py-4 text-white text-center text-2xl">
        CSV Dashboard
      </header>
      <main className="w-full max-w-4xl p-4">
        <CSVUpload onUpload={handleCSVUpload} />
        <DataTable data={data} />
      </main>
    </div>
  );
};

export default App;
