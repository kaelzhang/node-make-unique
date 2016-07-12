'use strict';

var _arguments = arguments;
var unique = require('array-uniq');

function unique_with_filter(array, filter) {
  var ret = [];
  var i = 0;
  var length = array.length;

  for (; i < length; i++) {
    if (!contains(ret, array[i], filter)) {
      ret.push(array[i]);
    }
  }

  return ret;
}

function contains(array, given, filter) {
  var i = 0;
  var length = array.length;

  for (; i < length; i++) {
    if (filter(array[i], given)) {
      return true;
    }
  }
}

module.exports = function (array, filter) {
  if (_arguments.length === 1) {
    return unique(array);
  }

  return unique_with_filter(array, filter);
};