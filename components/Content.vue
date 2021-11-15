<template>
  <div>
    <h1>{{ lang.title }}</h1>
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
    }
  }
})
</script>
