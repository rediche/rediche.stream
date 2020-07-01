<template>
  <div>
    <Navigation />
    <nuxt />
    <PageFooter />
  </div>
</template>

<script>
import Navigation from '~/components/navigation/Navigation'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    Navigation,
    PageFooter
  }
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-gray-900 text-gray-100;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
