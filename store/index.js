export const state = () => ({
  thisLang: 'rus',
  lang: {
    rus: {
      header: 'Какое-то название',
      title: 'Заголовок на русском',
    },
    eng: {
      header: 'Some title',
      title: 'Title in English',
    }
  }
});
export const mutations = {
  setThisLang(state, thisLang) {
    state.thisLang = thisLang;
  },
};
export const getters = {
  get_thisLang(state){
    return state.thisLang;
  },
  get_lang(state){
    return state.lang[state.thisLang];
  },
};
export const strict = false;
