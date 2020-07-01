<template>
  <div class="container px-4 mx-auto page__content">
    <slot />
  </div>
</template>

<style type="scss" scoped>
.page__content::v-deep {
  & h1 {
    @apply text-5xl font-black leading-tight mb-4;
  }

  & h2 {
    @apply text-4xl font-black leading-tight mt-8 mb-4;
  }

  & h3 {
    @apply text-3xl font-black leading-tight mt-8 mb-4;
  }

  & h4 {
    @apply text-2xl font-black leading-tight mt-8 mb-4;
  }

  & h5 {
    @apply text-xl font-black leading-tight mt-8 mb-4;
  }

  & h6 {
    @apply text-lg font-black leading-tight mt-8 mb-4;
  }

  & p {
    @apply mb-1;
  }

  & ol {
    @apply list-decimal pl-8 my-4;
  }

  & li {
    @apply mb-4;
  }
}
</style>