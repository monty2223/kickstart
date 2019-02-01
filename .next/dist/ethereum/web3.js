'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const web3 = new Web3(window.web3.currentProvider);


var web3 = void 0;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //we are in the browser and metamask is runing 
    web3 = new _web2.default(window.web3.currentProvider);
    web3.currentProvider.enable();
} else {
    //we are on the server or the user is not runing metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/e1187cd614a9410cb15eb85bee1bede4');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiZW5hYmxlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7OztBQUdBLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBcEQsYUFBZ0UsQUFDNUQ7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7U0FBSyxBQUFMLGdCQUFxQixBQUFyQixBQUNIO0FBSkQsT0FJSyxBQUNEO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBSUE7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFDRDtrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9udG8vQ1VSU08gVURFTVkva2lja3N0YXJ0In0=