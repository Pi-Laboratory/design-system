import { styled } from "../styled.config";
import { variant } from "styled-system";

const preventProps = [
  "size"
]

export const Text = styled("span", {
  shouldForwardProp: prop =>
    preventProps.indexOf(prop) === -1
})({
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block'
},
  variant({
    prop: "size",
    variants: {
      '1': {
        fontSize: 0,
      },
      '2': {
        fontSize: 1,
      },
      '3': {
        fontSize: 2,
      },
      '4': {
        fontSize: 3,
      },
      '5': {
        fontSize: 4,
      },
      '6': {
        fontSize: 5,
      },
      '7': {
        fontSize: 6,
      },
      '8': {
        fontSize: 7,
      },
    }
  })
)