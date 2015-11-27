'use strict';
/**
 * @file
 * Tests of the more info client
 */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _clientJs = require('../client.js');

var _clientJs2 = _interopRequireDefault(_clientJs);

describe('Test moreinfo service client', function () {
  it('factory should throw error', function () {
    _chai.assert['throw'](_clientJs2['default'], Error, 'A config object should be provided');
    _chai.assert['throw'](function () {
      return (0, _clientJs2['default'])({});
    }, 'A wsdl should be provided with the given config object');
    _chai.assert['throw'](function () {
      return (0, _clientJs2['default'])({ wsdl: 'test' });
    }, 'Authentication user, group and password should be provided with the given config object');
  });

  it('should expose methods', function () {
    var method = (0, _clientJs2['default'])({ wsdl: 'test', user: 'test', group: 'test', password: 'test' });
    _chai.assert.isFunction(method.getMoreInfoResult);
  });
});