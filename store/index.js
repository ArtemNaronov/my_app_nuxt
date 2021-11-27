export const state = () => ({
  thisLang: 'rus',
  lang: {
    rus: {
      header: 'Игра',
      title: 'Игра с цветами',
      count: 'Счёт',
      selectColor: 'Выберите цвет',
      findColor: 'Найдите цвет',
    },
    eng: {
      header: 'Game',
      title: 'Playing with colors',
      count: 'Count',
      selectColor: 'Select color',
      findColor: 'Find color',
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
