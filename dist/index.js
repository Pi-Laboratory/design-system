'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('@emotion/styled');
var css = require('@styled-system/css');
var react = require('@emotion/react');
var styledSystem = require('styled-system');
var cx = require('classnames');
var polished = require('polished');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var css__default = /*#__PURE__*/_interopDefaultLegacy(css);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var theme = {
  colors: {
    "black": "#1b1f23",
    "white": "#fff",
    "gray": ["#fafbfc", "#f6f8fa", "#e1e4e8", "#d1d5da", "#959da5", "#6a737d", "#586069", "#444d56", "#2f363d", "#24292e"],
    "blue": ["#f1f8ff", "#dbedff", "#c8e1ff", "#79b8ff", "#2188ff", "#0366d6", "#005cc5", "#044289", "#032f62", "#05264c"],
    "green": ["#f0fff4", "#dcffe4", "#bef5cb", "#85e89d", "#34d058", "#28a745", "#22863a", "#176f2c", "#165c26", "#144620"],
    "yellow": ["#fffdef", "#fffbdd", "#fff5b1", "#ffea7f", "#ffdf5d", "#ffd33d", "#f9c513", "#dbab09", "#b08800", "#735c0f"],
    "orange": ["#fff8f2", "#ffebda", "#ffd1ac", "#ffab70", "#fb8532", "#f66a0a", "#e36209", "#d15704", "#c24e00", "#a04100"],
    "red": ["#ffeef0", "#ffdce0", "#fdaeb7", "#f97583", "#ea4a5a", "#d73a49", "#cb2431", "#b31d28", "#9e1c23", "#86181d"],
    "purple": ["#f5f0ff", "#e6dcfd", "#d1bcf9", "#b392f0", "#8a63d2", "#6f42c1", "#5a32a3", "#4c2889", "#3a1d6e", "#29134e"],
    "pink": ["#ffeef8", "#fedbf0", "#f9b3dd", "#f692ce", "#ec6cb9", "#ea4aaa", "#d03592", "#b93a86", "#99306f", "#6d224f"]
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48],
  typography: {
    "fontSizes": [12, 14, 16, 20, 24, 32, 40, 48],
    "lineHeights": {
      "condensedUltra": 1,
      "condensed": 1.25,
      "default": 1.5
    }
  },
  fonts: {
    "body": '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif',
    "monospace": 'Menlo, monospace'
  },
  breakpoints: ['40em', '52em', '64em', '80em']
};

var sx = function sx(props) {
  return css__default["default"](props.sx)(props.theme);
};

var base = function base(props) {
  return css__default["default"](props.__css)(props.theme);
};

var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      _ref$tx = _ref.tx,
      tx = _ref$tx === void 0 ? 'variants' : _ref$tx;
  return css__default["default"](css.get(theme, "".concat(tx, ".").concat(variant), css.get(theme, variant)))(theme);
};

var Base = styled__default["default"]('div')(base, variant, sx, function (props) {
  return props.css;
});

var AspectRatioRoot = function AspectRatioRoot(_ref) {
  var className = _ref.className,
      _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 1 / 1 : _ref$ratio,
      style = _ref.style,
      innerProps = _ref.innerProps,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread2({
      paddingBottom: "".concat(100 / ratio, "%")
    }, style)
  }, /*#__PURE__*/React.createElement(Base, _extends({}, innerProps, {
    style: {
      position: "absolute",
      inset: 0
    }
  }), children));
};

var AspectRatio = styled__default["default"](AspectRatioRoot)({
  position: "relative",
  width: "100%"
});

var _css;

var _excluded = ["className", "outlined"];

var ButtonRoot = function ButtonRoot(_ref) {
  var className = _ref.className,
      outlined = _ref.outlined,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Base, _extends({
    className: cx__default["default"](className, !!outlined && "outlined")
  }, props));
};

var Button = styled__default["default"](ButtonRoot)(css__default["default"]((_css = {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box"
  },
  "&::after": {
    boxSizing: "border-box"
  },
  display: "inline-block",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "black",
  textAlign: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  cursor: "pointer"
}, _defineProperty(_css, "userSelect", "none"), _defineProperty(_css, "backgroundColor", "transparent"), _defineProperty(_css, "border", "1px solid transparent"), _defineProperty(_css, "fontFamily", "body"), _defineProperty(_css, "py", 1), _defineProperty(_css, "px", 2), _defineProperty(_css, "fontSize", 1), _defineProperty(_css, "borderRadius", 4), _defineProperty(_css, "transition", "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"), _defineProperty(_css, "&.outlined", {
  backgroundColor: "transparent"
}), _defineProperty(_css, "&:hover.outlined", {
  color: "white"
}), _css)), styledSystem.variant({
  prop: "intent",
  variants: {
    primary: {
      color: "white",
      backgroundColor: "blue.5",
      borderColor: "blue.5",
      "&.outlined": {
        color: "blue.5"
      },
      "&:hover": {
        backgroundColor: "blue.6"
      },
      "&:active": {
        backgroundColor: "blue.7"
      },
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["blue"][4], 0.75))
      }
    },
    secondary: {
      color: "white",
      backgroundColor: "gray.4",
      borderColor: "gray.4",
      "&.outlined": {
        color: "gray.5"
      },
      "&:hover": {
        backgroundColor: "gray.5"
      },
      "&:active": {
        backgroundColor: "gray.6"
      },
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["gray"][3], 0.75))
      }
    },
    success: {
      color: "white",
      backgroundColor: "green.5",
      borderColor: "green.5",
      "&.outlined": {
        color: "green.5"
      },
      "&:hover": {
        backgroundColor: "green.6"
      },
      "&:active": {
        backgroundColor: "green.7"
      },
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["green"][4], 0.75))
      }
    },
    danger: {
      color: "white",
      backgroundColor: "red.5",
      borderColor: "red.5",
      "&.outlined": {
        color: "red.5"
      },
      "&:hover": {
        backgroundColor: "red.6"
      },
      "&:active": {
        backgroundColor: "red.7"
      },
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["red"][4], 0.75))
      }
    },
    warning: {
      color: "white",
      backgroundColor: "yellow.6",
      borderColor: "yellow.6",
      "&.outlined": {
        color: "yellow.6"
      },
      "&:hover": {
        backgroundColor: "yellow.7"
      },
      "&:active": {
        backgroundColor: "yellow.8"
      },
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["yellow"][4], 0.75))
      }
    },
    link: {
      textDecoration: "underline",
      color: "blue.4",
      "&:focus": {
        boxShadow: "0 0 0 ".concat(theme.spacing[1], "px ").concat(polished.rgba(theme.colors["blue"][2], 0.75))
      }
    }
  }
}));
Button.defaultProps = {
  as: "button",
  intent: "primary",
  outlined: false
};

var Box = styled__default["default"](Base)({
  boxSizing: 'border-box'
});

var preventProps$1 = ["direction", "align", "justify", "wrap"];
var Flex = styled__default["default"](Box, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return preventProps$1.indexOf(prop) === -1;
  }
})({
  display: "flex"
}, styledSystem.variant({
  prop: "direction",
  variants: {
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    },
    rowReverse: {
      flexDirection: 'row-reverse'
    },
    columnReverse: {
      flexDirection: 'column-reverse'
    }
  }
}), styledSystem.variant({
  prop: "align",
  variants: {
    start: {
      alignItems: 'flex-start'
    },
    center: {
      alignItems: 'center'
    },
    end: {
      alignItems: 'flex-end'
    },
    stretch: {
      alignItems: 'stretch'
    },
    baseline: {
      alignItems: 'baseline'
    }
  }
}), styledSystem.variant({
  prop: "justify",
  variants: {
    start: {
      justifyContent: 'flex-start'
    },
    center: {
      justifyContent: 'center'
    },
    end: {
      justifyContent: 'flex-end'
    },
    between: {
      justifyContent: 'space-between'
    }
  }
}), styledSystem.variant({
  prop: "wrap",
  variants: {
    noWrap: {
      flexWrap: 'nowrap'
    },
    wrap: {
      flexWrap: 'wrap'
    },
    wrapReverse: {
      flexWrap: 'wrap-reverse'
    }
  }
}));

var InputGroup = styled__default["default"](Base)();
styled__default["default"](Base)();

var preventProps = ["size"];
var Text = styled__default["default"]("span", {
  shouldForwardProp: function shouldForwardProp(prop) {
    return preventProps.indexOf(prop) === -1;
  }
})(css__default["default"]({
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  fontFamily: "body"
}), styledSystem.variant({
  prop: "size",
  variants: {
    '1': {
      fontSize: 0
    },
    '2': {
      fontSize: 1
    },
    '3': {
      fontSize: 2
    },
    '4': {
      fontSize: 3
    },
    '5': {
      fontSize: 4
    },
    '6': {
      fontSize: 5
    },
    '7': {
      fontSize: 6
    },
    '8': {
      fontSize: 7
    }
  }
}));

Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () { return styled__default["default"]; }
});
Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () { return react.ThemeProvider; }
});
exports.AspectRatio = AspectRatio;
exports.Base = Base;
exports.Box = Box;
exports.Button = Button;
exports.Flex = Flex;
exports.InputGroup = InputGroup;
exports.Text = Text;
exports.theme = theme;
