require('dotenv').config()
const fetch = require('node-fetch')
const url = require('url')

export default (token, { id } = {}) =>  {
  const url = new URL('https://api.twitch.tv/helix/games');
  
  if ( id ) {
    url.searchParams.append('id', id)
  }

  return fetch(url.toString(), {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Client-ID': process.env.TWITCH_CLIENT
    }
  })
    .then(res => res.json())
} 