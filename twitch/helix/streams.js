require('dotenv').config()
const fetch = require('node-fetch')
const url = require('url')

export default (token, { user_login } = {}) =>  {
  const url = new URL('https://api.twitch.tv/helix/streams');
  
  if ( user_login ) {
    url.searchParams.append('user_login', user_login)
  }

  return fetch(url.toString(), {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Client-ID': process.env.TWITCH_CLIENT
    }
  })
    .then(res => res.json())
} 