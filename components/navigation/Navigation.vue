<template>
  <nav class="m-4 mt-0 py-2 border-b-2 border-gray-800 flex items-center">
    <nuxt-link :to="{ name: 'index' }">
      <Logo />
    </nuxt-link>
    <Menu class="ml-auto">
      <MenuItem><nuxt-link :to="{ name: 'articles' }">Articles & guides</nuxt-link></MenuItem>
      <MenuItem><nuxt-link :to="{ name: 'commands-and-sfx' }">Commands & SFXs</nuxt-link></MenuItem>
      <MenuItem><a href="http://gw2.ninja" target="_blank">GW2 Ninja</a></MenuItem>
      <MenuItem><a href="https://gw2.link/discord" target="_blank" rel="noopener noreferer">Discord</a></MenuItem>
      <MenuItem><a href="https://www.patreon.com/rediche" target="_blank" rel="noopener noreferer">Patreon</a></MenuItem>
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