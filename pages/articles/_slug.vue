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
    const title = this.page.seo.title || 'Untitled';

    let meta = [
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:site_name",
        content: "rediche.stream"
      },
      {
        property: "og:author",
        content: "Rediche"
      },
    ];

    if (this.page.seo.description) {
      meta.push({ 
        hid: 'description', 
        name: 'description', 
        content: this.page.seo.description
      });
      meta.push({
        name: 'og:description', 
        content: this.page.seo.description
      });
    }

    if (this.page.publishedAt) {
      meta.push({
        hid: 'published',
        property: 'article:published_time',
        content: this.page.publishedAt
      });
      meta.push({
        hid: 'published',
        property: 'article:modified_time',
        content: this.page.publishedAt
      });
    }

    return {
      title,
      meta
    }
  }
}
</script>