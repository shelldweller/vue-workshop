export default {
  data: function() {
    return {
      label: ''
    }
  },
  methods: {
    submit() {
      const label = this.label.trim();
      if (!label) return;
      this.$store.commit('addBar', label);
      this.label = '';
    }
  }
}
