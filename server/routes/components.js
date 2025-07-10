const express = require('express');
const router = express.Router();
const components = require('../data/components.json');

// GET /api/components
router.get('/components', (req, res) => {
  try {
    // Simulate a small delay to show loading state
    setTimeout(() => {
      res.json({
        success: true,
        data: components,
        total: components.length,
        timestamp: new Date().toISOString()
      });
    }, 500);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch components',
      error: error.message
    });
  }
});

module.exports = router;
