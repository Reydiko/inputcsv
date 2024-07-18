// src/components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-4">No data available</div>;
  }

  // Agregasi data berdasarkan Nama Account Manager
  const aggregatedData = data.reduce((acc, row) => {
    const { NAMA_BAM, STANDARD_NAME } = row;
    if (!NAMA_BAM) return acc; // Skip rows without NAMA_BAM

    if (!acc[NAMA_BAM]) {
      acc[NAMA_BAM] = { NAMA_BAM, Jumlah_Pelanggan: 0 };
    }
    if (STANDARD_NAME) {
      acc[NAMA_BAM].Jumlah_Pelanggan += 1; // Hitung jumlah pelanggan
    }
    return acc;
  }, {});

  const aggregatedArray = Object.values(aggregatedData);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th 
              className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
            >
              Nama Account Manager
            </th>
            <th 
              className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
            >
              Jumlah Pelanggan yang diassign
            </th>
          </tr>
        </thead>
        <tbody>
          {aggregatedArray.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              <td 
                className="py-2 px-4 border-b border-gray-200 text-sm"
              >
                {row.NAMA_BAM}
              </td>
              <td 
                className="py-2 px-4 border-b border-gray-200 text-sm"
              >
                {row.Jumlah_Pelanggan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
