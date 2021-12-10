<template>
  <div class="breadcrumb">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link v-for="(link, index) in path" :key="index" :to="link">
        {{ link }}
      </nuxt-link>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      path: this.$route.path.split(),
    }
  }
})
</script>
