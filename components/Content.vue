<template>
  <div>
    <h1>{{ lang.title }}</h1>

    <div class="Game">
      <div class="Game_count">
        <span>{{lang.count}}: {{ count }}</span>
        <div :class="'selectColor color_' + selectColor">
          <span>{{ selectColor ? '' : 'None'}}</span>
        </div>
        <span>{{ selectColor ? lang.findColor : lang.selectColor }}</span>
      </div>
      <div class="Game_conteiner">
        <div class="Game_conteiner_row" v-for="(row, index) in 4" :key="index">
          <div
            :class="'Game_conteiner_row_col item_' + row + '_' + col + ' color_'+ arrayRandElement(colors)"
            @click="clickItem('item_' + row + '_' + col)"
            v-for="(col, index) in 4"
            :key="index">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      colors: [
        'ForceBlue',
        'AliceBlue',
        'Arsenic',
        'ArmyGreen',
        'BurntOrange',
        'Cerulean',
        'Gamboge',
        'Gray',
        'Heliotrope',
        'Jade',
        'LemonCream',
        'Yellow',
        'Violet',
        'Wine',
        'Wisteria',
      ],
      count: 0,
      selectColor: '',
    }
  },
  computed: {
    lang() {
      return this.$store.getters.get_lang;
    },
    gallery() {
      return this.$store.getters['gallery/gallery']
    },
  },
  methods: {
    clickItem(item) {
      let itemCheck = document.querySelector('.' + item);
      itemCheck.classList.add('none')
      let index = itemCheck.classList.value.indexOf('color_');
      let color = itemCheck.classList.value.slice(index).split(' ')[0].split('_')[1];
      if(this.selectColor == color){
        this.count += 100;
        this.selectColor = ''
        if(this.count > 1200) {
          this.count = 0
        }
      } else {
        this.selectColor = color;
      }
      console.log(itemCheck.classList)
    },
    hasClass(element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    },
    arrayRandElement(arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }
  }
})
</script>
