import React, { useState } from 'react';
import { Grid, Paper, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell,
  LineChart, Line, ScatterChart, Scatter, ResponsiveContainer
} from 'recharts';

// Sample data
const rodentResearchData = [
  { sampleName: "RR23_R-EDL_FLT_F1", bodyWeight: 35.9, spaceflight: "Space Flight", sampleStorageTemp: -80, ageAtEuthanasia: 22 },
  { sampleName: "RR23_R-EDL_FLT_F2", bodyWeight: 33.5, spaceflight: "Ground Control", sampleStorageTemp: -80, ageAtEuthanasia: 23 },
  { sampleName: "RR23_R-EDL_FLT_F3", bodyWeight: 27.3, spaceflight: "Space Flight", sampleStorageTemp: -80, ageAtEuthanasia: 22 },
  { sampleName: "RR23_R-EDL_FLT_F4", bodyWeight: 30.1, spaceflight: "Ground Control", sampleStorageTemp: -80, ageAtEuthanasia: 25 },
  { sampleName: "RR23_R-EDL_FLT_F5", bodyWeight: 28.7, spaceflight: "Space Flight", sampleStorageTemp: -80, ageAtEuthanasia: 24 },
];

// Grouping data for the pie charts
const flightStatusCounts = rodentResearchData.reduce((acc, { spaceflight }) => {
  acc[spaceflight] = (acc[spaceflight] || 0) + 1;
  return acc;
}, {});

const pieData = Object.keys(flightStatusCounts).map((key) => ({
  name: key,
  value: flightStatusCounts[key],
}));

// Grouping data by storage temperature for Bar Chart
const storageTempCounts = rodentResearchData.reduce((acc, { sampleStorageTemp }) => {
  acc[sampleStorageTemp] = (acc[sampleStorageTemp] || 0) + 1;
  return acc;
}, {});

const tempData = Object.keys(storageTempCounts).map((key) => ({
  name: `Temp ${key}°C`,
  value: storageTempCounts[key],
}));

// Calculate average body weight by age
const averageWeightByAge = rodentResearchData.reduce((acc, { ageAtEuthanasia, bodyWeight }) => {
  acc[ageAtEuthanasia] = acc[ageAtEuthanasia] || { totalWeight: 0, count: 0 };
  acc[ageAtEuthanasia].totalWeight += bodyWeight;
  acc[ageAtEuthanasia].count += 1;
  return acc;
}, {});

const averageWeightData = Object.keys(averageWeightByAge).map((key) => ({
  age: key,
  averageWeight: (averageWeightByAge[key].totalWeight / averageWeightByAge[key].count).toFixed(2),
}));

const ChartComponent = ({data}) => {
  const [open, setOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const handleOpen = (chartType) => {
    setSelectedChart(chartType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedChart(null);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'bodyWeight':
        return (
          <BarChart data={rodentResearchData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sampleName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bodyWeight" fill="#82ca9d" />
          </BarChart>
        );
      case 'spaceflightDistribution':
        return (
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#FF8042'][index % 2]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      case 'averageWeight':
        return (
          <LineChart data={averageWeightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="averageWeight" stroke="#ff7300" />
          </LineChart>
        );
      case 'samplesByTemperature':
        return (
          <BarChart data={tempData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* Bar Chart for Body Weight */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: '16px', cursor: 'pointer' }} onClick={() => handleOpen('bodyWeight')}>
            <h3>Body Weight of Samples</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={rodentResearchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sampleName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bodyWeight" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Pie Chart for Spaceflight Status */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: '16px', cursor: 'pointer' }} onClick={() => handleOpen('spaceflightDistribution')}>
            <h3>Distribution of Samples by Spaceflight Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#FF8042'][index % 2]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Line Chart for Average Body Weight by Age */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: '16px', cursor: 'pointer' }} onClick={() => handleOpen('averageWeight')}>
            <h3>Average Body Weight by Age at Euthanasia</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={averageWeightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="averageWeight" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Bar Chart for Number of Samples by Storage Temperature */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: '16px', cursor: 'pointer' }} onClick={() => handleOpen('samplesByTemperature')}>
            <h3>Number of Samples by Storage Temperature</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tempData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Dialog for larger view of selected chart */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Chart Details
          <IconButton edge="end" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ResponsiveContainer width="100%" height={400}>
            {renderChart()}
          </ResponsiveContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChartComponent;
