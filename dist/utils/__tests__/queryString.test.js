'use strict';

var _chai = require('chai');

var _QueryStringUtilJs = require('../QueryString.util.js');

describe('Test the Querystring Utility class', function () {
  it('only matches exact words, and removed unmatched elements', function () {
    var query = [{
      value: 'æble'
    }, {
      value: 'hest'
    }];
    var string = 'æbler er gode';
    var result = (0, _QueryStringUtilJs.updateQueryFromString)(string, query);
    var exptectedResult = [{ value: 'æbler', type: 'text' }, { value: 'er', type: 'text' }, { value: 'gode', type: 'text' }];
    (0, _chai.expect)(result).to.deep.equal(exptectedResult);
  });
  it('adds words that is inserted in the middle and beginning of the string', function () {
    var query = [{
      value: 'æble',
      type: 'test'
    }, {
      value: 'hest',
      type: 'animal'
    }, {
      value: 'tå',
      type: 'foot'
    }];
    var string = 'et æble er hest tå';
    var result = (0, _QueryStringUtilJs.updateQueryFromString)(string, query);
    var exptectedResult = [{ value: 'et', type: 'text' }, { value: 'æble', type: 'test' }, { value: 'er', type: 'text' }, { value: 'hest', type: 'animal' }, { value: 'tå', type: 'foot' }];
    (0, _chai.expect)(result).to.deep.equal(exptectedResult);
  });
});