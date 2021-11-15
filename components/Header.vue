<template>
  <div class="header">
    <div class="header__avatar">
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
    }
  },
  methods: {
    changeLang(lang) {
     this.$store.commit("setThisLang", lang);
    }
  }
})
</script>
