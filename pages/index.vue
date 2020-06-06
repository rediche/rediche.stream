<template>
  <div class="mx-4">
    <TwitchPlayer class="rounded overflow-hidden shadow-md" channel="rediche" />
  </div>
</template>

<script>
import TwitchPlayer from '~/components/TwitchPlayer'

export default {
  components: {
    TwitchPlayer
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
