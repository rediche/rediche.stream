<template>
    <PageContent>
        <h1 class="text-4xl font-bold">Commands & SFXs</h1>
        <p>Below you will find a list of all the different commands and SFXs you can use in the stream.</p>

        <h2 id="commands">Commands</h2>
        <p>Commands can do plenty of things, from showing you how much of the stream currency <em>Lootbags</em> that you have all the way to inspecting various currencies and information about my <a href="https://guildwars2.com" target="_blank" rel="noopener noreferer">Guild Wars 2</a> account.</p>

        <h3>General</h3>
        <ul>
          <li>!lootbags (Stream currency)</li>
          <li>!build / !builds (Link to my necro build + popular build websites)</li>
          <li>!twitter (Link to my twitter)</li>
          <li>!discord (Invite to discord)</li>
          <li>!arcdps (Link to ARCDPS)</li>
          <li>!gw2commands (Link to GW2 Chatbot commands)</li>
          <li>!fanart (Oh boi, I be famous, I got fanart LUL)</li>
          <li>!lurk</li>
          <li>!followage</li>
          <li>!populations (Link to World Populations on Wiki)</li>
        </ul>
        
        <h3>My Guild Wars 2 Account</h3>
        <ul>
          <li>!server (Shows my current server)</li>
          <li>!kills (Shows my WvW kill count)</li>
          <li>!wvw (Shows my current WvW Rank)</li>
          <li>!ign (Shows my IGN)</li>
          <li>!karma (Shows my karma)</li>
          <li>!gold (Shows my gold)</li>
          <li>!matchup (Shows my current WvW Matchup and KDRs)</li>
        </ul>

        <h2 id="sfx">SFXs</h2>
        <p>SFXs are sounds that will play on stream when you use them.</p>
        <p><em>All SFXs costs 50 lootbags to use. You can only use an SFX every 2 minutes.</em></p>

        <ul>
          <li>!cheese</li>
          <li>!veil</li>
          <li>!catchthemall</li>
          <li>!crashmynut</li>
          <li>!rallybots</li>
          <li>!dmg</li>
          <li>!chase</li>
          <li>!pettingzoo</li>
          <li>!sorry</li>
          <li>!airhorn</li>
          <li>!goodgameplay</li>
          <li>!twofingers</li>
          <li>!mean</li>
          <li>!fab</li>
          <li>!herewego</li>
          <li>!foodreminder</li>
          <li>!balls</li>
          <li>!shakeitoff</li>
          <li>!youshit</li>
          <li>!bigiq</li>
          <li>!wakeup</li>
          <li>!tool</li>
          <li>!entitled</li>
          <li>!redfab</li>
          <li>!enough</li>
          <li>!numbers</li>
        </ul>
    </PageContent>
</template>

<script>
import PageContent from '@/components/PageContent'

export default {
  components: {
    PageContent
  },
  head() {
    return {
      title: 'Commands & SFX'
    }
  },
}
</script>