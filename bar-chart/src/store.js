import helpers from './store_helpers';

export default {
  state: {
    bars: []
  },

  mutations: {
    addBar(state, label) {
      if (helpers.findBar(state.bars, label)) return;

      state.bars.push({
        label: label,
        count: 1,
        relativeWeight: 1 / helpers.maxCount(state.bars)
      })
    },

    increment(state, label) {
      helpers.changeCount(state.bars, label, 1);
    },

    decrement(state, label) {
      helpers.changeCount(state.bars, label, -1);
    }
  }
}
