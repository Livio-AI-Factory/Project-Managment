// ── Email API Routes ──────────────────────────────────────────
// Base: /api/email

const express    = require('express');
const router     = express.Router();
const { sendEmail, verifySmtp } = require('../controllers/emailController');

// POST /api/email/send — send an email
// Body: { to, cc?, subject, message, fromName?, replyTo?, smtpOverride? }
router.post('/send', sendEmail);

// POST /api/email/verify — verify SMTP connection
// Body: { smtpOverride? }
router.post('/verify', verifySmtp);

// GET /api/email/status — check if SMTP is configured
router.get('/status', (req, res) => {
  const configured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);
  res.json({
    configured,
    host:    process.env.SMTP_HOST || 'smtp.gmail.com',
    port:    process.env.SMTP_PORT || 587,
    user:    configured ? process.env.SMTP_USER : null,
    message: configured ? 'SMTP configured — ready to send' : 'SMTP not configured — set SMTP_USER and SMTP_PASS in .env'
  });
});

module.exports = router;
