<template>
  <div class="aspect-ratio-16/9 relative w-full my-8 rounded overflow-hidden shadow-lg">
    <iframe loading="lazy" class="absolute inset-0 w-full h-full" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      return `https://www.youtube.com/embed/${this.id}?modestbranding=1&rel=0`
    }
  }
}
</script>