import auth from '../../twitch/auth'
import getStreams from '../../twitch/helix/streams'

const twitchUsername = process.env.TWITCH_USERNAME

module.exports = async (req, res) => {
  const twitchAuth = await auth()
  const streams = await getStreams(twitchAuth.access_token, { user_login: twitchUsername})

  const channel = streams.data ? streams.data.find(stream => stream.user_name.toLowerCase() === twitchUsername.toLowerCase()) : false

  res.send({ 
    live: !!streams.data.length && !!channel,
    data: channel ? channel : {}
  })
}