const fetch = require('node-fetch')
require('dotenv').config()
const url = require('url')

export default () => {
  return requestToken()
  /* https://id.twitch.tv/oauth2/token
    ?client_id=<your client ID>
    &client_secret=<your client secret>
    &grant_type=client_credentials
    &scope=<space-separated list of scopes></space-separated> */
}

function requestToken() {
  const url = new URL('https://id.twitch.tv/oauth2/token')
  url.searchParams.append('client_id', process.env.TWITCH_CLIENT)
  url.searchParams.append('client_secret', process.env.TWITCH_SECRET)
  url.searchParams.append('grant_type', 'client_credentials')
  return fetch(url.toString(), {
    method: 'post'
  })
    .then(res => res.json())
}