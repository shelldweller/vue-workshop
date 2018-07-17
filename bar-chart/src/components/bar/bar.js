const MIN_PX_WIDTH = 1;

export default {
  props: ['bar'],

  computed: {
    barCss() {
      let width;
      if (this.bar.relativeWeight == 0) {
        width = MIN_PX_WIDTH + 'px';
      } else {
        width = this.bar.relativeWeight * 100 + '%'
      }
      return { width }
    }
  },

  methods: {
    increment() {
      this.$store.commit('increment', this.bar.label);
    },
    decrement() {
      this.$store.commit('decrement', this.bar.label);
    }
  }
}
