const express = require('express');
const router = express.Router();
const { sendEmail, verifySmtp } = require('../controllers/emailController');

router.post('/send', sendEmail);

router.post('/verify', verifySmtp);

router.get('/verify', (req, res, next) => {
  req.body = req.body || {};
  return verifySmtp(req, res, next);
});

router.get('/status', (req, res) => {
  const configured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

  res.json({
    configured,
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    user: configured ? process.env.SMTP_USER : null,
    message: configured
      ? 'SMTP configured - ready to send'
      : 'SMTP not configured - set SMTP_USER and SMTP_PASS in .env'
  });
});

module.exports = router;
