import { styled, theme } from "../styled.config";
import { Base } from "./Base";
import css from "@styled-system/css";
import { variant } from "styled-system";
import cx from "classnames";
import { rgba } from "polished";

const ButtonRoot = ({ className, outlined, ...props }) => (<Base className={cx(className, !!outlined && "outlined")} {...props} />)

export const Button = styled(ButtonRoot)(
  css({
    // Reset
    all: "unset",
    alignItems: "center",
    boxSizing: "border-box",
    userSelect: "none",
    "&::before": {
      boxSizing: "border-box",
    },
    "&::after": {
      boxSizing: "border-box",
    },

    display: "inline-block",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "black",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",

    py: 1,
    px: 2,
    fontSize: 1,
    borderRadius: 4,
    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    "&.outlined": {
      backgroundColor: "transparent"
    },
    "&:hover.outlined": {
      color: "white"
    },
  }),
  variant({
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
          backgroundColor: "blue.6",
        },
        "&:active": {
          backgroundColor: "blue.7",
        },
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["blue"][4], 0.75)}`,
        },
      },
      secondary: {
        color: "white",
        backgroundColor: "gray.4",
        borderColor: "gray.4",
        "&.outlined": {
          color: "gray.5"
        },
        "&:hover": {
          backgroundColor: "gray.5",
        },
        "&:active": {
          backgroundColor: "gray.6",
        },
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["gray"][3], 0.75)}`,
        },
      },
      success: {
        color: "white",
        backgroundColor: "green.5",
        borderColor: "green.5",
        "&.outlined": {
          color: "green.5"
        },
        "&:hover": {
          backgroundColor: "green.6",
        },
        "&:active": {
          backgroundColor: "green.7",
        },
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["green"][4], 0.75)}`,
        },
      },
      danger: {
        color: "white",
        backgroundColor: "red.5",
        borderColor: "red.5",
        "&.outlined": {
          color: "red.5"
        },
        "&:hover": {
          backgroundColor: "red.6",
        },
        "&:active": {
          backgroundColor: "red.7",
        },
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["red"][4], 0.75)}`,
        },
      },
      warning: {
        color: "white",
        backgroundColor: "yellow.6",
        borderColor: "yellow.6",
        "&.outlined": {
          color: "yellow.6"
        },
        "&:hover": {
          backgroundColor: "yellow.7",
        },
        "&:active": {
          backgroundColor: "yellow.8",
        },
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["yellow"][4], 0.75)}`,
        },
      },
      link: {
        textDecoration: "underline",
        color: "blue.4",
        "&:focus": {
          boxShadow: `0 0 0 ${theme.spacing[1]}px ${rgba(theme.colors["blue"][2], 0.75)}`,
        }
      },
    }
  })
);

Button.defaultProps = {
  as: "button",
  intent: "primary",
  outlined: false
}