import maxBy from 'lodash/maxBy';
import find from 'lodash/find';

function maxCount(bars) {
  const item = maxBy(bars, x => x.count);
  if (item) return item.count;
  return 1;
}

function findBar(bars, label) {
  return find(bars, x => x.label === label);
}

function updateWeights(bars) {
  const count = maxCount(bars);
  bars.forEach((x) => {
    x.relativeWeight = x.count / count;
  });
}


function changeCount(bars, label, count) {
  let bar = findBar(bars, label);
  let newCount;
  if (!bar) return;
  newCount = bar.count + count;
  if (newCount < 0) return;
  bar.count = newCount;
  updateWeights(bars);
}


export default {
  maxCount,
  findBar,
  changeCount
}
