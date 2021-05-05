'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var natdsWeb = require('@naturacosmeticos/natds-web');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = ({
  label,
  ...rest
}) => {
  return /*#__PURE__*/React__default['default'].createElement(natdsWeb.Button, rest, label, " test");
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
