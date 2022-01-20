'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('@emotion/styled');
var css = require('@styled-system/css');
var react = require('@emotion/react');
var styledSystem = require('styled-system');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var css__default = /*#__PURE__*/_interopDefaultLegacy(css);

const theme = {
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
  spacing: [
    0,
    4,
    8,
    16,
    24,
    32,
    40,
    48
  ],
  typography: {
    "fontSizes": [
      12,
      14,
      16,
      20,
      24,
      32,
      40,
      48,
    ],
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
  breakpoints: ['40em', '52em', '64em', '80em'],
};

const sx = props => css__default["default"](props.sx)(props.theme);
const base = props => css__default["default"](props.__css)(props.theme);
const variant = ({
  theme,
  variant,
  tx = 'variants',
}) =>
  css__default["default"](
    css.get(theme, `${tx}.${variant}`,
      css.get(theme, variant)
    )
  )(theme);

const Base = styled__default["default"]('div')(
  base,
  variant,
  sx,
  props => props.css,
);

const Box = styled__default["default"](Base)({
  boxSizing: 'border-box',
});

const preventProps = [
  "direction",
  "align",
  "justify",
  "wrap"
];

const Flex = styled__default["default"](Box, {
  shouldForwardProp: prop =>
    preventProps.indexOf(prop) === -1
})(
  { display: "flex" },
  styledSystem.variant({
    prop: "direction",
    variants: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      }
    }
  }),
  styledSystem.variant({
    prop: "align",
    variants: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    }
  }),
  styledSystem.variant({
    prop: "justify",
    variants: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    }
  }),
  styledSystem.variant({
    prop: "wrap",
    variants: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    }
  })
);

Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () { return styled__default["default"]; }
});
Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () { return react.ThemeProvider; }
});
exports.Base = Base;
exports.Box = Box;
exports.Flex = Flex;
exports.theme = theme;
