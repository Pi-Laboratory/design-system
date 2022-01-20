import { styled, css } from "../styled.config";
import { Base } from "./Base";

export const Table = styled(Base)(
  {
    width: "100%",
    marginBottom: "1rem",
    verticalAlign: "top"
  },
  props => css({
    color: "black",
    borderColor: "gray.1"
  })(props.theme)
);

Table.defaultProps = {
  as: "table"
}

export const THead = styled("thead")();
Table.Head = THead;

export const TH = styled("th")();
Table.TH = TH;

export const TR = styled("tr")();
Table.TR = TR;