<template>
  <footer class="mx-4 mt-8 mb-2 py-3 border-t-2 border-gray-800 text-gray-600 flex items-center text-sm">
    Copyright &copy; {{ year }} – Rediche
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>