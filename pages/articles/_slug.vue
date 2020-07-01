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
    let meta = [];

    if (this.page.description) {
      meta.push({ 
        hid: 'description', 
        name: 'description', 
        content: this.page.description
      });
    }
    return {
      title: this.page.title || 'Untitled',
      meta
    }
  }
}
</script>