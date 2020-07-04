<template>
  <div class="relative w-100 aspect-ratio-16/9">
    <iframe
      loading="lazy"
      class="absolute"
      width="100%"
      height="100%"
      :src="embedUrl"
      frameborder="0"
      scrolling="false"
      allowfullscreen="true">
    </iframe>
  </div>
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
      return `https://player.twitch.tv/?channel=${this.channel}&parent=${host}`
    }
  }
}
</script>

<style scoped>
.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
