'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\monto\\CURSO UDEMY\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimunContribution = _props.minimunContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                description: 'The manager created this campaign and can create request to withdraw money',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimunContribution,
                description: 'You must contribute at least this much wei to become an approver',
                meta: 'Minimum Contribution (wei)'
            }, {
                header: requestsCount,
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers ',
                meta: 'Number of Requests'
            }, {
                header: approversCount,
                description: 'Number of people who have already donated to this campaign ',
                meta: 'Number of Approvers'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                description: 'The balance is how much money this campaign has left to spend.',
                meta: 'CAampaign balance (ether)'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, ' show! '), this.renderCards(), _react2.default.createElement(_ContributeForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // console.log(props.query.address);
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log(summary);

                                return _context.abrupt('return', {
                                    minimunContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bkNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFDckIsQTs7Ozs7Ozs7Ozs7c0NBaUJZO3lCQU9OLEtBUE0sQUFPRDtnQkFQQyxBQUVOLGlCQUZNLEFBRU47Z0JBRk0sQUFHTixpQkFITSxBQUdOO2dCQUhNLEFBSU4sNkJBSk0sQUFJTjtnQkFKTSxBQUtOLHVCQUxNLEFBS047Z0JBTE0sQUFNTix3QkFOTSxBQU1OLEFBRUo7O2dCQUFNO3dCQUNGLEFBQ1ksQUFDUjs2QkFGSixBQUVpQixBQUNiO3NCQUhKLEFBR1UsQUFDTjt1QkFBTyxFQUFDLGNBTEYsQUFDVixBQUlXLEFBQWU7QUFKMUIsQUFDSSxhQUZNO3dCQU9WLEFBQ1ksQUFDUjs2QkFGSixBQUVpQixBQUNiO3NCQVZNLEFBT1YsQUFHVTtBQUhWLEFBQ0k7d0JBSUosQUFDWSxBQUNSOzZCQUZKLEFBR1EsQUFDSjtzQkFoQk0sQUFZVixBQUlVO0FBSlYsQUFDSTt3QkFLSixBQUNZLEFBQ1I7NkJBRkosQUFHUSxBQUNKO3NCQXRCTSxBQWtCVixBQUlVO0FBSlYsQUFDSTt3QkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQzs2QkFGSixBQUdRLEFBQ0o7c0JBNUJSLEFBQWMsQUF3QlYsQUFJVSxBQUlkO0FBUkksQUFDSTs7aURBT0YsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQU4sQUFBTSxBQUdUO0FBSFM7YUFBQTs7OztpQ0FLRCxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNDLGlCQUZMLEFBRUssQUFBSyxBQUNOLCtCQUFBLEFBQUM7OzhCQUFEO2dDQUpSLEFBQ0ksQUFHSSxBQUdYO0FBSFc7QUFBQTs7Ozs7aUhBbEVpQixBOzs7OztpQ0FDekI7QUFDTTtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixBOztpQ0FBOUM7QSxtREFFTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7Ozt5REFHYSxRQURsQixBQUNrQixBQUFRLEFBQzdCOzZDQUFTLFFBRk4sQUFFTSxBQUFRLEFBQ2pCO21EQUFlLFFBSFosQUFHWSxBQUFRLEFBQ3ZCO29EQUFnQixRQUpiLEFBSWEsQUFBUSxBQUN4Qjs2Q0FBUyxRQUxOLEFBS00sQUFBUSxBO0FBTGQsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRlLEEsQUEwRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9udG8vQ1VSU08gVURFTVkva2lja3N0YXJ0In0=