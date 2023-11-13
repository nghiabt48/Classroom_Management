const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });
const {OAuth2Client} = require('google-auth-library')

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

module.exports = {router, getUserData}