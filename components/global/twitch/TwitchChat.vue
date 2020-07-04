<template>
  <iframe frameborder="0"
    loading="lazy"
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
      const url = new URL(window.location);
      const host = url.hostname;
      return `https://www.twitch.tv/embed/${this.channel}/chat?darkpopout&parent=${host}`
    }
  }
}
</script>
