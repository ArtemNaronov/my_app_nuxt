<template>
  <div class="Sidebar" :style="sidebar ? 'transform: translateX(-10vw)' : 'transform: translateX(0)'">
    <ul>
      <li> <nuxt-link to="/users">Users</nuxt-link> </li>
      <li> <nuxt-link to="/gallery">Gallery</nuxt-link> </li>
    </ul>
  </div>
</template>
<script>

export default ({
  data() {
    return {}
  },
  computed: {
    sidebar() {
      return this.$store.getters.get_sidebar
    }
  }
})
</script>
