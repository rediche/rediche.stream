<template>
  <iframe frameborder="0"
    scrolling="false"
    :id="channel"
    :src="embedUrl"
    height="100%"
    width="100%">
  </iframe>
</template>

<script>
export default {
  props: {
    channel: {
      type: String,
      required: true
    }
  },
  computed: {
    embedUrl() {
      return `https://www.twitch.tv/embed/${this.channel}/chat?darkpopout&parent=rediche.stream`
    }
  }
}
</script>
