import { Box } from "./Box";
import { styled } from "../styled.config";
import { variant } from "styled-system";

const preventProps = [
  "direction",
  "align",
  "justify",
  "wrap"
]

export const Flex = styled(Box, {
  shouldForwardProp: prop =>
    preventProps.indexOf(prop) === -1
})(
  { display: "flex" },
  variant({
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
  variant({
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
  variant({
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
  variant({
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