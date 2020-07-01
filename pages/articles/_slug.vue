<template>
  <div>
    <h1>Article!</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('articles', params.slug).fetch()

    return {
      page
    }
  },
  head() {
    return {
      title: this.page.title || 'Untitled'
    }
  }
}
</script>