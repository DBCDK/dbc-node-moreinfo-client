'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

let wsdl = null;
let defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendMoreInfoRequest(params) {
  let moreinfo = BaseSoapClient.client(wsdl, defaults, '');
  return moreinfo.request('moreInfo', params, null, true);
}

/**
 * Constructs the objects of parameters for this type of request.
 * As the query is expected to be an array it is possible to make multiple
 * requests at once, each returned as a Promise.
 *
 * @param {Object} query object of parameter-objects each representing a request
 * @return {Promise} A promise is returned
 */
export function getMoreInfoResult(identifiers) {
  let params = {};
  params.identifier = identifiers.identifiers.map((id) => {
    return {faust: id};
  });

  return sendMoreInfoRequest(params);
}

/**
 * Setting the necessary paramerters for the client to be usable.
 * The endpoint is only set if endpoint is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export function init(config) {
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

  return {getMoreInfoResult};
}

