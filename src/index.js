'use strict'

const unique = require('array-uniq')


function unique_with_filter (array, filter) {
  let ret = []
  let i = 0
  let length = array.length

  for (; i < length; i ++) {
    if (!contains(ret, array[i], filter)) {
      ret.push(array[i])
    }
  }

  return ret
}


function contains (array, given, filter) {
  let i = 0
  let length = array.length

  for (; i < length; i ++) {
    if (filter(array[i], given)) {
      return true
    }
  }
}


module.exports = (array, filter) => {
  if (!filter) {
    return unique(array)
  }

  return unique_with_filter(array, filter)
}
