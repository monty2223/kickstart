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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\monto\\CURSO UDEMY\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Minimun Contribution'), _react2.default.createElement(_semanticUiReact.Input, { onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                }, value: this.state.value, label: 'ether', labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ops..', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Contribute'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBTyxBQUFTOztBQUM5QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBQ2Y7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUNGO21CQUFRLEFBQ0UsQUFDTjswQkFGSSxBQUVVLEFBQ2Q7cUJBQVEsQSxBQUhKOztBQUFBLEFBQ0osaUIsQUFLSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVBOztBQUhDLDJDQUdVLHdCQUFTLE1BQUEsQUFBSyxNQUh4QixBQUdVLEFBQW9CLEFBRXJDOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUx0QixBQUtQLEFBQWMsQUFBNEI7Z0RBTG5DO2dEQUFBO3VDQU9vQixjQUFBLEFBQUssSUFQekIsQUFPb0IsQUFBUzs7aUNBQTFCO0FBUEgsb0RBQUE7Z0RBQUE7Z0RBUUcsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCOzBDQUMxQixTQUQrQixBQUMvQixBQUFTLEFBQ2Y7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVZwQyxBQVFHLEFBQW1DLEFBRTlCLEFBQW1DO0FBRkwsQUFDckMsaUNBREU7O2lDQUlOOytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVpwQyxBQVlILEFBQTZDOztnREFaMUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBZ0JIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLFlBaEJ6QixBQWdCSCxBQUFjLEFBQWtCOztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU8sT0FsQnZCLEFBa0JQLEFBQWMsQUFBdUI7O2lDQWxCOUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQkg7eUJBQ0o7O21DQUNJLEFBQUMsdUNBQUssVUFBVyxLQUFqQixBQUFzQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFDQTtBQURBO2FBQUEsa0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx3Q0FBTSxVQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBQTdELG1CQUFzRSxPQUFPLEtBQUEsQUFBSyxNQUFsRixBQUF3RixPQUFPLE9BQS9GLEFBQXFHLFNBQVEsZUFBN0csQUFBMkg7OzhCQUEzSDtnQ0FISixBQUNBLEFBRUksQUFHSjtBQUhJO2lDQUdKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBTkEsQUFNQSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBUkosQUFDSSxBQU9BLEFBSVA7Ozs7O0FBeEN3QixBLEFBMkM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tb250by9DVVJTTyBVREVNWS9raWNrc3RhcnQifQ==