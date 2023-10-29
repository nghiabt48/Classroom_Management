const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });

const {OAuth2Client} = require('google-auth-library')
router.post('/', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header('Referrer-Policy', 'no-referrer-when-downgrade')

  const redirectURL = 'http://127.0.0.1:3000/oauth'
  const oAuth2Client = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, redirectURL)
  const authorizeURL = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile email',
    prompt: 'consent'
  })
  res.json({url: authorizeURL})
})
module.exports = router