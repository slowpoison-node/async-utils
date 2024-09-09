function first(iter, predicate) {
  let next = iter.next();
  while (next.done !== true) {
    if (predicate(next.value)) {
      return next.value;
    }
    next = iter.next();
  }
  return null
}

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
  first,
  filter,
  map
}

