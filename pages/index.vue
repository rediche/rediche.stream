<template>
  <div class="mx-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
    <TwitchPlayer class="rounded overflow-hidden shadow-lg col-span-8 animated fadeInLeft" :channel="channel" />
    <TwitchChat class="hidden lg:block rounded overflow-hidden shadow-lg col-span-4 animated fadeInRight" :channel="channel" />
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
      channel: 'rediche'
    }
  },
  head() {
    return {
      title: 'Rediche – Twitch Streamer'
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
