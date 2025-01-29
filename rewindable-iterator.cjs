/**
 * Rewindable iterator.
 * An iterator that saves previous values and allows rewind once.
 */

class RewindableIterator {
  constructor(iterator) {
    if (typeof iterator == 'object' && typeof iterator[Symbol.iterator] == 'function') {
      iterator = iterator[Symbol.iterator]();
    }
    this.iterator = iterator;
    this.saved = null;
    this.rewound = false;
  }

  next() {
    if (this.rewound) {
      this.rewound = false;
      return this.saved;
    } else {
      return this.saved = this.iterator.next();
    }
  }

  rewind() {
    if (this.rewound) {
      throw new Error('RewindableIterator can only be rewound once');
    }
    this.rewound = true;
  }
}

module.exports = RewindableIterator;
