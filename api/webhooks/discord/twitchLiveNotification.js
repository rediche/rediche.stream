import { parseISO, format } from 'date-fns'
const axios = require('axios').default;
const url = require('url')

import auth from '../../../twitch/auth'
import getStreams from '../../../twitch/helix/streams'
import getGames from '../../../twitch/helix/games'

const twitchUsername = process.env.TWITCH_USERNAME
const discordWebhook = process.env.DISCORD_TWITCH_LIVE_WEBHOOK
const discordRoleId = process.env.DISCORD_TWITCH_LIVE_ROLE_ID
const webhookAccessToken = process.env.WEBHOOK_ACCESS_TOKEN

const createEmbed = ({ user_name, thumbnail_url, title, started_at } = {}, { name, box_art_url } = {}) => {
  const date = parseISO(started_at)
  return {
    "content": `<@&${discordRoleId}>`,
    "embeds": [
      {
        "title": `${user_name} started streaming!`,
        "url": `https://twitch.tv/${user_name}`,
        "description": title,
        "color": 12066591,
        "fields": [
          {
            "name": "Playing",
            "value": name,
            "inline": true
          }
        ],
        "footer": {
          "text": format(date, 'HH:mm – do LLL RRRR')
        },
        "image": {
          "url": thumbnail_url.replace('{width}', 500).replace('{height}', 281)
        },
        "thumbnail": {
          "url": box_art_url.replace('{width}', 138).replace('{height}', 190)
        }
      }
    ]
  }
}

const notifyDiscord = (stream, game) => {
  return axios.post(discordWebhook, createEmbed(stream, game))
}

module.exports = (req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (!queryObject.access_token || queryObject.access_token !== webhookAccessToken) {
    res.status(401).end()
    return
  }

  auth()
    .then(async creds => {
      const streams = await getStreams(creds.access_token, { user_login: twitchUsername })

      if (!streams.data.length) {
        res.status(404).end()
        return Promise.reject()
      }

      const stream = streams.data.find(stream => stream.user_name.toLowerCase() === twitchUsername.toLowerCase()) 

      const games = await getGames(creds.access_token, { id: stream.game_id }) 

      if (!games.data.length) {
        res.status(404).end()
        return Promise.reject()
      }

      const game = games.data.find(game => game.id === stream.game_id)

      return { stream, game }
    })
    .then(({ stream, game }) => notifyDiscord(stream, game))
    .then(() => res.status(200).end())
    .catch(error => res.status(500).send(error))
}