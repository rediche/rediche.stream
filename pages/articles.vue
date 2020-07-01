<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const pages = await $content('articles').fetch()

    return {
      pages
    }
  },
}
</script>