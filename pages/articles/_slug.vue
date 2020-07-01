<template>
  <PageContent>
    <nuxt-content :document="page" />
  </PageContent>
</template>

<script>
import PageContent from '~/components/PageContent'

export default {
  components: {
    PageContent
  },
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