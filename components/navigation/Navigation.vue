<template>
  <nav class="m-4 mt-0 py-2 border-b-2 border-gray-800 flex items-center">
    <Logo />
    <Menu class="ml-auto">
      <MenuItem>Discord</MenuItem>
    </Menu>
  </nav>
</template>

<script>
import Logo from '~/components/navigation/Logo'
import Menu from '~/components/navigation/Menu'
import MenuItem from '~/components/navigation/MenuItem'

export default {
  components: {
    Logo,
    Menu,
    MenuItem
  }
}
</script>