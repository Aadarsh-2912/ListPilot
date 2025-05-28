import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [csvContent, setCsvContent] = useState<string[][] | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFileName(selectedFile.name);
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        const lines = text.trim().split('\n');
        const data = lines.map(line => line.split(',').map(cell => cell.trim()));
        setCsvContent(data);
      };
      reader.readAsText(selectedFile);
    } else {
      alert('Please select a valid CSV file.');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('No file selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('https://listpilot.onrender.com/api/files/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setUploadStatus(`Upload successful: ${data.message || 'File uploaded.'}`);
    } catch (error: any) {
      setUploadStatus(`Upload failed: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Upload Agent CSV</h2>

      <div className="mb-4">
        <label htmlFor="csv-upload" className="block text-sm font-medium text-gray-700 mb-1">
          Choose a CSV file
        </label>
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {csvContent && (
        <div className="overflow-auto mb-4">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                {csvContent[0].map((header, idx) => (
                  <th key={idx} className="px-4 py-2 border">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvContent.slice(1, 11).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2 border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {csvContent.length > 11 && (
            <p className="text-sm text-gray-500 mt-2">
              Showing first 10 data rows. Total rows: {csvContent.length - 1}.
            </p>
          )}
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Upload CSV
        </button>
      )}

      {uploadStatus && (
        <p className="mt-4 text-sm text-blue-700">{uploadStatus}</p>
      )}
    </section>
  );
};

export default FileUpload;
