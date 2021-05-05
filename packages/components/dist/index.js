'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var natdsWeb = require('@naturacosmeticos/natds-web');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const useStyles = natdsWeb.makeStyles(() => ({
  card: {
    margin: 'auto',
    marginTop: '20px',
    width: '220px',
    height: 'auto',
    position: 'relative',
    padding: '30px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 !important'
  },
  button: {
    width: '100%'
  },
  tag: {
    borderRadius: '0',
    position: 'absolute',
    top: 10,
    left: 0
  },
  image: {
    width: '218px',
    height: '218px'
  },
  details: {
    margin: '.5625rem 0',
    lineHeight: '1.875rem'
  },
  price: {
    fontSize: '24px',
    color: '#f93'
  }
}));

const ProductCard = ({
  stamp,
  brand,
  productName,
  price
}) => {
  const styles = useStyles();
  return /*#__PURE__*/React__default['default'].createElement(natdsWeb.Card, {
    className: styles.card
  }, /*#__PURE__*/React__default['default'].createElement(natdsWeb.CardContent, {
    className: styles.content
  }, /*#__PURE__*/React__default['default'].createElement(natdsWeb.Tag, {
    size: "standard",
    className: styles.tag
  }, stamp), /*#__PURE__*/React__default['default'].createElement("img", {
    className: styles.image,
    src: "https://static.natura.com/sites/default/files/styles/medium/public/products/22560_1_33.jpg?itok=Er2fposX"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles.details
  }, /*#__PURE__*/React__default['default'].createElement(natdsWeb.Typography, {
    align: "center",
    variant: "subtitle1"
  }, brand), /*#__PURE__*/React__default['default'].createElement(natdsWeb.Typography, {
    align: "center",
    variant: "subtitle1"
  }, productName), /*#__PURE__*/React__default['default'].createElement(natdsWeb.Typography, {
    align: "center",
    className: styles.price
  }, "R$ ", price), /*#__PURE__*/React__default['default'].createElement(natdsWeb.Button, {
    color: "primary",
    variant: "contained",
    className: styles.button
  }, "COMPRAR"))));
};

Object.defineProperty(exports, 'Provider', {
  enumerable: true,
  get: function () {
    return natdsWeb.Provider;
  }
});
Object.defineProperty(exports, 'themes', {
  enumerable: true,
  get: function () {
    return natdsWeb.themes;
  }
});
exports.ProductCard = ProductCard;
//# sourceMappingURL=index.js.map
