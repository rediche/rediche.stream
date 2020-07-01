<template>
  <div class="px-4 mx-auto mt-12 articles">
    <h1 class="text-5xl font-black">Articles & guides</h1>
    <ul class="divide-y-2 divide-gray-800">
      <li class="py-6" v-for="(page, index) in pages" :key="index">
        <h2 class="text-2xl font-black mb-2">{{ page.title }}</h2>
        <div class="font-serif" v-if="page.excerpt">{{ page.excerpt }}</div>
      </li>
    </ul>
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

<style scoped>
.articles {
  max-width: 680px;
}
</style>