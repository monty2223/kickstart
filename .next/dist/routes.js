'use strict';

//const routes = (module.exports = require('next-routes')());
var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', 'campaigns/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzRCLEFBRDVCLGlCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQzs7QUFJQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vbnRvL0NVUlNPIFVERU1ZL2tpY2tzdGFydCJ9