'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = MoreInfoClient;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

/**
 * Constructs the objects of parameters for this type of request.
 *
 * @param {Array} an array of one or more identifiers (faust)
 * @return {Promise} A promise is returned
 */
function getMoreInfoResult(client, identifiers) {
  var params = {};
  params.identifier = identifiers.identifiers.map(function (id) {
    return { faust: id };
  });

  return client.request('moreInfo', params, null, true);
}

/**
 * Setting the necessary parameters for the client to be usable.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */

function MoreInfoClient(config) {
  if (typeof config !== 'object') {
    throw new Error('A config object should be provided');
  }

  if (!config.wsdl) {
    throw new Error('A wsdl should be provided with the given config object');
  }

  if (!config.user || !config.group || !config.password) {
    throw new Error('Authentication user, group and password should be provided with the given config object');
  }

  var defaults = {
    authentication: {
      authenticationUser: config.user,
      authenticationGroup: config.group,
      authenticationPassword: config.password
    }
  };
  var client = BaseSoapClient.client(config.wsdl, defaults, '');

  return {
    getMoreInfoResult: getMoreInfoResult.bind(null, client)
  };
}

module.exports = exports['default'];