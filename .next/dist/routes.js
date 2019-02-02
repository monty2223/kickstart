'use strict';

//const routes = (module.exports = require('next-routes')());
var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzRCLEFBRDVCLGlCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxrQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekMsNEJBSUssQUFKTCxJQUlTLEFBSlQsb0NBSTZDLEFBSjdDOztBQU9BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9udG8vQ1VSU08gVURFTVkva2lja3N0YXJ0In0=