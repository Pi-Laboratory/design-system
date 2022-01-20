import { styled } from "../styled.config";
import css, { get } from '@styled-system/css';

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);
const variant = ({
  theme,
  variant,
  tx = 'variants',
}) =>
  css(
    get(theme, `${tx}.${variant}`,
      get(theme, variant)
    )
  )(theme);

export const Base = styled('div')(
  base,
  variant,
  sx,
  props => props.css,
);