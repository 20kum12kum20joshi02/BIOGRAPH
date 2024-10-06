import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import Charts from './Charts';

const Experiment = () => {
  const [data, setData] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);  // Additional state for 70% content
  const [searchParams] = useSearchParams();

  // Get the experiment ID from the query parameters
  const experimentId = searchParams.get('id') || 0;

  useEffect(() => {
    // Fetch the data from the backend for the 30% section
    axios.get(`http://localhost:8000/meta/${experimentId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      // Fetch additional data for the 70% section (for dynamic table)
      axios.get(`http://localhost:8000/meta/table/${experimentId}`)
      .then((response) => {
        const jsonData = JSON.parse(response.data);
        console.log(jsonData)
        setAdditionalData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching additional data:', error);
      });

  }, [experimentId]);

  if (!data || !additionalData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Experiment Details</h1>

      {/* Flex container for the 2-column layout */}
      <div className="flex">
        {/* 30% column for the main data table */}
        <div className="w-1/3 p-4">
          <TableContainer component={Paper} className="shadow-lg">
            <Table>
              <TableHead>
                <TableRow className="bg-gray-100">
                  <TableCell className="font-bold">Field</TableCell>
                  <TableCell className="font-bold">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(data).map(([key, value]) => (
                  <TableRow key={key} className="hover:bg-gray-50">
                    <TableCell className="capitalize">{key.replace('_', ' ')}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* 70% column for dynamic additional table */}
        <div className="w-2/3 p-4">
          <Charts rodentResearchData={additionalData} />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Experiment Data Set</h1>
      <TableContainer component={Paper} className="shadow-lg">
            <Table>
              <TableHead>
                <TableRow className="bg-gray-100">
                  {Object.keys(additionalData[0]).map((key) => (
                    <TableCell key={key} className="font-bold">{key.replace('_', ' ')}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {additionalData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    {Object.values(row).map((value, idx) => (
                      <TableCell key={idx}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  );
};

export default Experiment;
