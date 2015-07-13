'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.init = init;
exports.getMoreInfoResult = getMoreInfoResult;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

var wsdl = null;
var defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendMoreInfoRequest(params) {
  var moreinfo = BaseSoapClient.client(wsdl, defaults, '');
  return moreinfo.request('moreInfo', params, null, true);
}

/**
 * Setting the necessary paramerters for the client to be usable.
 * The endpoint is only set if endpoint is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */

function init(config) {
  if (!wsdl) {
    wsdl = config.wsdl;
  }
  defaults = {
    authentication: {
      authenticationUser: config.user,
      authenticationGroup: config.group,
      authenticationPassword: config.password
    }
  };

  return { getMoreInfoResult: getMoreInfoResult };
}

/**
 * Constructs the objects of parameters for this type of request.
 * As the query is expected to be an array it is possible to make multiple
 * requests at once, each returned as a Promise.
 *
 * @param {Object} query object of parameter-objects each representing a request
 * @return {Promise} A promise is returned
 */

function getMoreInfoResult(identifiers) {
  var params = {};
  params.identifier = identifiers.identifiers.map(function (id) {
    return { faust: id };
  });

  return sendMoreInfoRequest(params);
}