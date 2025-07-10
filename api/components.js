const express = require('express');
const cors = require('cors');
const componentsData = require('../server/data/components.json');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for components
app.get('/api/components', (req, res) => {
  try {
    res.json(componentsData);
  } catch (error) {
    console.error('Error fetching components:', error);
    res.status(500).json({ error: 'Failed to fetch components' });
  }
});

// Export for Vercel
module.exports = app;
