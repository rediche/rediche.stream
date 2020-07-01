<template>
  <div class="container px-4 mx-auto page__content">
    <slot />
  </div>
</template>

<style scoped>
.page__content >>> h1 {
  @apply text-5xl font-black;
}

.page__content >>> h2 {
  @apply text-4xl font-black;
}

.page__content >>> h3 {
  @apply text-3xl font-black;
}

.page__content >>> h4 {
  @apply text-2xl font-black;
}

.page__content >>> h5 {
  @apply text-xl font-black;
}

.page__content >>> h6 {
  @apply text-lg font-black;
}
</style>