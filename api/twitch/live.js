import auth from '../../twitch/auth'
import getStreams from '../../twitch/helix/streams'

const twitchUsername = process.env.TWITCH_USERNAME

module.exports = (req, res) => {
  auth()
    .then(creds => getStreams(creds.access_token, { user_login: twitchUsername }))
    .then(streams => streams.data.length 
      ? streams.data.find(stream => 
          stream.user_name.toLowerCase() === twitchUsername.toLowerCase()) 
      : false
    )
    .then(channel => res.send({
      live: !!channel,
      data: channel ? channel : {}
    }))
    .catch(error => res.send(error))
}