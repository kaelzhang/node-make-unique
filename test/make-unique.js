'use strict';

var expect = require('chai').expect
var unique = require('../')


describe('unique(array, filter)', function () {
  it('should filter objects', function () {
    var array = [
      {name: 1},
      {name: 2},
      {name: 1}
    ]

    var result = unique(array, function (a, b) {
      return a.name === b.name
    })

    expect(result).to.deep.equal([
      {name: 1},
      {name: 2}
    ])
  })
})


describe('unique(array)', function () {
  it('is implemented by array-uniq', function () {
    expect(unique([1, 2, 3, 1])).to.deep.equal([1, 2, 3])
  })
})
