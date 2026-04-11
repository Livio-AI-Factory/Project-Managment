const express = require('express');
const router = express.Router();
const {
  getEmailStatusData,
  sendEmail,
  verifyEmailService
} = require('../controllers/emailController');

router.post('/send', sendEmail);

router.post('/verify', verifyEmailService);

router.get('/verify', (req, res, next) => {
  req.body = req.body || {};
  return verifyEmailService(req, res, next);
});

router.get('/status', (req, res) => {
  res.json(getEmailStatusData());
});

module.exports = router;
