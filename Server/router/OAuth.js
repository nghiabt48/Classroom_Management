const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });
const {OAuth2Client} = require('google-auth-library')
const GiangVien = require('../model/GiangVienModel')

async function getUserData(access_token) {
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)
  const data = await response.json()
  return data
}
router.get('/', async function(req, res, next) {
  const code = req.query.code
  try{
    const redirectURL = 'http://127.0.0.1:3000/oauth'
    const oAuth2Client = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, redirectURL)
    const response = await oAuth2Client.getToken(code)
    await oAuth2Client.setCredentials(response.tokens)
    const user = oAuth2Client.credentials
    const userData = await getUserData(user.access_token)
    const user_check = await GiangVien.findOne({email: userData.email})
    if(!user_check) await GiangVien.create(userData)
    res.status(200).json({
      status: 'success',
      token: user.access_token
    })
  }
  catch(err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
})
module.exports = router