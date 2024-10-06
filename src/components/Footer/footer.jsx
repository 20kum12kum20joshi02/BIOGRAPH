// Footer.js
import React from 'react';
import { Container, Typography, Box, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-8"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* NASA Info Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold">
              About NASA
            </Typography>
            <Typography variant="body2" className="mt-4 text-gray-400">
              NASA conducts space experiments and research that shape our understanding of the universe, biological systems in space, and the future of human space travel. Learn more about our missions and how we explore space to improve life on Earth.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold">
              Quick Links
            </Typography>
            <Box className="mt-4 space-y-2">
              <Link href="https://www.nasa.gov/missions" color="inherit" underline="hover">
                NASA Missions
              </Link>
              <Link href="https://www.nasa.gov/research" color="inherit" underline="hover">
                Research & Innovation
              </Link>
              <Link href="https://www.nasa.gov/spaceflight" color="inherit" underline="hover">
                Spaceflight
              </Link>
              <Link href="https://www.nasa.gov/stem" color="inherit" underline="hover">
                STEM Education
              </Link>
            </Box>
          </Grid>

          {/* Social Media & Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold">
              Follow NASA
            </Typography>
            <Box className="mt-4 flex space-x-4">
              <Link href="https://twitter.com/NASA" target="_blank" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="https://www.facebook.com/NASA" target="_blank" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="https://www.linkedin.com/company/nasa" target="_blank" color="inherit">
                <LinkedInIcon />
              </Link>
              <Link href="https://www.youtube.com/NASA" target="_blank" color="inherit">
                <YouTubeIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box className="mt-8 text-center">
          <Typography variant="body2" className="text-gray-400">
            © {new Date().getFullYear()} NASA. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </motion.footer>
  );
};

export default Footer;
