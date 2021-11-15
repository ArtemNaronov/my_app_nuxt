<template>
  <div>
    <h1>{{ lang.title }}</h1>
    <nuxt-link to="users">Test</nuxt-link>
    <nuxt-link to="gallery">Test</nuxt-link>
  </div>
</template>

<script>

export default ({
  data() {
    return {}
  },
  computed: {
    lang() {
      return this.$store.getters.get_lang;
    },
    gallery() {
      return this.$store.getters['gallery/gallery']
    }
  }
})
</script>
