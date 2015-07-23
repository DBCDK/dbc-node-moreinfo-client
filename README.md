# dbc-node-moreinfo-client

Node client for the DBC MoreInfo webservice https://opensource.dbc.dk/services/moreinfo.
Implements the moreInfo operation for retrieving for example cover images.

## MoreInfo.getMoreInfoResult(identifiers):Promise
Method for creating a search request with one or more identifiers (Faust numbers)

Example
```
identifiers = [
  '12345678',
  '87654321'
];

MoreInfo.getMoreInfoResult(identifiers);

```

## MoreInfo.init(config):Promise
Init method for setting service wsdl (that has the service endpoint) and defaults through a config
object.
The method returns the result from the MoreInfo webservice as a promise.

Example
```
config = {
  wsdl: 'http://moreinfo.addi.dk/2.1/moreinfo.wsdl',
  user: 'user',
  group: 'group',
  password: 'password'
};

MoreInfo.init(config);

```