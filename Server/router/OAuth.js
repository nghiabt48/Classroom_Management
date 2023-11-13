const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });
const {OAuth2Client} = require('google-auth-library')
const GiangVien = require('../model/GiangVienModel')

// async function getUserData(access_token) {
//   const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)
//   const data = await response.json()
//   return data
// }
async function getUserData(id_token) {
  const client = new OAuth2Client()
  const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: [process.env.CLIENT_ID1, process.env.CLIENT_ID2]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  return {
    email: payload.email,
    name: payload.name,
    picture: payload.picture,
    userid
  }
}
router.get('/', async function(req, res, next) {
  const code = req.query.code
  try{
    const redirectURL = 'http://127.0.0.1:3000/oauth'
    const oAuth2Client = new OAuth2Client(process.env.CLIENT_ID1, process.env.CLIENT_SECRET1, redirectURL)
    const response = await oAuth2Client.getToken(code)
    await oAuth2Client.setCredentials(response.tokens)
    const user = oAuth2Client.credentials
    const userData = await getUserData(user.id_token)
    const user_check = await GiangVien.findOne({email: userData.email})
    if(!user_check) await GiangVien.create(userData)
    res.status(200).json({
      status: 'success',
      token: user.id_token
    })
  } 
  catch(err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
})
module.exports = {router, getUserData}