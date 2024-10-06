// About.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science';
import StarIcon from '@mui/icons-material/Star';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Data for Dynamic Chart (Microgravity Effects)
const microgravityData = {
  labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25'],
  datasets: [
    {
      label: 'Effect on Biological Samples (%)',
      data: [100, 85, 70, 60, 50, 35],
      borderColor: '#42A5F5',
      backgroundColor: 'rgba(66, 165, 245, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Line Chart options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const About = () => {
  return (
    <Container maxWidth="lg" className="mt-12">
      <Box className="bg-white shadow-2xl rounded-lg p-8">
        <Grid container spacing={4} alignItems="center">
          {/* Hero Section with Icon and Animation */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box className="flex justify-center mb-6">
                <Avatar sx={{ bgcolor: '#2196F3', width: 100, height: 100 }}>
                  <ScienceIcon style={{ fontSize: 60, color: 'white' }} />
                </Avatar>
              </Box>
              <Typography variant="h3" className="text-center font-bold text-gray-800">
                NASA's Space Experiments
              </Typography>
              <Typography variant="body1" className="text-gray-600 mt-4 text-center">
                NASA is at the forefront of exploring how the unique environment of space impacts biological systems. These experiments aim to unlock new insights into human health, disease treatment, and the future of space exploration.
              </Typography>
            </motion.div>
          </Grid>

          {/* Image or Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box className="flex justify-center">
                <img
                  src="https://i0.wp.com/newspaceeconomy.ca/wp-content/uploads/2023/12/newspaceeconomy_bioastronautics_2f2c6602-abbe-40dd-846d-a47fe0ef98e7-1.jpg?fit=1024%2C1024&quality=89&ssl=1" // Replace with your image URL
                  alt="NASA Space Experiment"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Section with Chart Visualization */}
        <Box className="mt-10">
          <Typography variant="h4" className="text-center text-gray-700 font-bold mb-4">
            Microgravity Effects on Biological Samples
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-center mx-auto max-w-3xl">
            NASA’s microgravity experiments are revealing how living organisms, including cells and tissues, respond to prolonged weightlessness. The data below tracks biological changes over time in a space environment.
          </Typography>

          {/* Dynamic Chart */}
          <Box className="mt-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-lg"
            >
              <Line data={microgravityData} options={chartOptions} />
            </motion.div>
          </Box>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} className="mt-8">
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="shadow-lg">
                <CardContent>
                  <Box className="flex justify-center mb-4">
                    <Avatar sx={{ bgcolor: '#4CAF50' }}>
                      <StarIcon />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" className="text-center font-semibold text-gray-800">
                    Understanding Microgravity
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-2 text-center">
                    Microgravity research helps us understand how the human body adapts to space, critical for long-duration missions and colonization of other planets.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="shadow-lg">
                <CardContent>
                  <Box className="flex justify-center mb-4">
                    <Avatar sx={{ bgcolor: '#FF5722' }}>
                      <StarIcon />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" className="text-center font-semibold text-gray-800">
                    Cosmic Radiation Studies
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-2 text-center">
                    Research on space radiation focuses on how exposure to cosmic rays impacts biological cells, providing vital information for astronaut safety.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="shadow-lg">
                <CardContent>
                  <Box className="flex justify-center mb-4">
                    <Avatar sx={{ bgcolor: '#FFC107' }}>
                      <StarIcon />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" className="text-center font-semibold text-gray-800">
                    Long-term Space Adaptation
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-2 text-center">
                    Understanding how organisms adapt to space over long periods is key to ensuring human survival on missions beyond Earth.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
