<template>
  <article class="px-4 mx-auto font-serif page__content">
    <slot />
  </article>
</template>

<style type="scss" scoped>
.page__content::v-deep {
  max-width: 680px;

  & h1 {
    @apply text-4xl font-sans font-black leading-tight mb-4 mt-12;
  }

  & h2 {
    @apply text-2xl font-sans font-black leading-tight mt-8 mb-4;
  }

  & h3 {
    @apply text-xl font-sans font-black leading-tight mt-8 mb-4;
  }

  & h4 {
    @apply text-lg font-sans font-black leading-tight mt-8 mb-4;
  }

  & h5 {
    @apply text-lg font-sans font-black leading-tight mt-8 mb-4;
  }

  & h6 {
    @apply font-sans font-black leading-tight mt-8 mb-4;
  }

  & p {
    @apply mb-2;
  }

  & a {
    @apply underline;
  }

  & ol {
    @apply list-decimal pl-8 my-4;
  }

  & ul {
    @apply list-disc pl-8 my-4;
  }

  & li {
    @apply mb-4;
  }

  & textarea {
    @apply text-gray-900;
  }

  @screen md {
    & h1 {
      @apply text-5xl;
    }

    & h2 {
      @apply text-3xl;
    }

    & h3 {
      @apply text-2xl;
    }

    & h4 {
      @apply text-xl;
    }
  }
}
</style>