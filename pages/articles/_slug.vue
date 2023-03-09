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
        hid: "og:type",
        name: "og:type",
        property: "og:type",
        content: "article"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: title
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "rediche.stream"
      },
      {
        hid: "og:author",
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
        hid: 'og:description', 
        property: 'og:description', 
        content: this.page.seo.description
      });
    }

    if (this.page.publishedAt) {
      meta.push({
        hid: 'article:published_time',
        property: 'article:published_time',
        content: this.page.publishedAt
      });
      meta.push({
        hid: 'article:modified_time',
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