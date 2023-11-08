import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';

function UploadCSV() {
  const [csvData, setCsvData] = useState(null);

  const handleFileUpload = (data) => {
    setCsvData(data);
  };

  return (
    <form action="/upload" method="post" className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg" encType="multipart/form-data">
      <h1 className="text-2xl font-semibold mb-4">Upload CSV to MongoDB</h1>
      <input type="file" name="csvFile" />

      <button
        type="submit" // Added type attribute for the submit button
        className="mt-4 bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload to MongoDB
      </button>
    </form>
  );
}

export default UploadCSV;
