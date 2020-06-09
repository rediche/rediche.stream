<template>
  <div v-if="live" class="mx-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
    <TwitchPlayer class="rounded overflow-hidden shadow-lg col-span-8" :channel="channel" />
    <TwitchChat class="hidden lg:block rounded overflow-hidden shadow-lg col-span-4" :channel="channel" />
  </div>
  <div v-else class="grid grid-cols-1 lg:grid-cols-12">
  <div class="relative aspect-ratio-16/9 mx-4 lg:col-start-2 lg:col-end-12">
    <div v-if="loading" class="flex items-center justify-center inset-0 absolute text-gray-600">
      Checking live status...
    </div>
    <div v-else class="flex flex-col items-center justify-center inset-0 absolute rounded bg-gray-800 shadow-xl text-gray-600">
      <div class="text-5xl font-black leading-tight">Offline</div>
      <div class="text-sm">Check back later</div>
    </div>
  </div>

  </div>
</template>

<script>
import TwitchPlayer from '~/components/twitch/Player'
import TwitchChat from '~/components/twitch/Chat'

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
    this.getLiveStatus()
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
