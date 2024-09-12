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

async function *filter(iter, predicate) {
  if (typeof iter[Symbol.asyncIterator] == 'function') {
    for await (let item of iter) {
      if (predicate(item)) {
        yield item;
      }
    }
    /*
    let l = await iter.next();
    while (l.done !== true) {
      if (predicate(l.value)) {
        yield l.value;
      }
      l = await iter.next();
    }
      */
  } else {
    for (let item of iter) {
      if (predicate(item)) {
        yield item;
      }
    }
  }
}

function *map(gen, fn) {
  for (let item of gen) {
    yield fn(item);
  }
}

module.exports = {
  first,
  filter,
  map
}

