<template>
  <div class="header">
    <div class="header__avatar">
    <div class="header__menu" @click="showSidebar()"></div>

      <img src="/img/467f277192ca6c22b388b1c60cacb0dc.jpg" alt="" srcset="">
    </div>
    <div class="header__title">
      <span>
        {{ lang.header }}
      </span>
    </div>
    <div class="header__icons">
      <div class="header__lang">
        <span :class="thisLang == 'eng' ? 'active' : ''" @click="changeLang('eng')">ENG</span>
        <span :class="thisLang == 'rus' ? 'active' : ''" @click="changeLang('rus')">RUS</span>
      </div>
    </div>
  </div>
</template>

<script>

export default({
  data() {
    return {}
  },
  computed: {
    thisLang(){
      return this.$store.state.thisLang;
    },
    lang() {
      return this.$store.getters.get_lang;
    },
    sidebar() {
      return this.$store.getters.get_sidebar
    }
  },
  methods: {
    changeLang(lang) {
     this.$store.commit("setThisLang", lang);
    },
    showSidebar(){
      this.$store.commit("setSidebar", !this.sidebar)
    }
  }
})
</script>
