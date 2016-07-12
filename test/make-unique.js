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
