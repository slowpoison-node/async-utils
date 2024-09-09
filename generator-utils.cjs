function *filter(iter, predicate) {
  for (let item of iter) {
    if (predicate(item)) {
      yield item;
    }
  }
}

function *map(iter, fn) {
  for (let item of iter) {
    yield fn(item);
  }
}

module.exports = {
  filter,
  map
}

