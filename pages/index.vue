<template>
  <div class="mx-4 aspect-ratio-16/9 relative">
    <iframe
      src="https://player.twitch.tv/?channel=rediche&parent=rediche.stream"
      class="absolute w-full h-full rounded overflow-hidden shadow-lg"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
import TwitchPlayer from '~/components/global/twitch/TwitchPlayer'
import TwitchChat from '~/components/global/twitch/TwitchChat'

export default {
  components: {
    TwitchPlayer,
    TwitchChat
  },
  data() {
    return {
      channel: 'rediche',
      loading: true,
      live: false
    }
  },
  created() {
    // this.getLiveStatus()
  },
  head() {
    return {
      title: 'Rediche – Twitch Streamer'
    }
  },
  methods: {
    async getLiveStatus() {
      const liveStatus = await this.$axios.$get('/twitch/live')
      this.live = liveStatus.live
      this.loading = false
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
