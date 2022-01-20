import { Base } from "./Base";
import { styled } from "../styled.config";

const AspectRatioRoot = ({
  className,
  ratio = 1 / 1,
  style,
  innerProps,
  children
}) => (
  <div className={className} style={{ paddingBottom: `${100 / ratio}%`, ...style }} >
    <Base
      {...innerProps}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      {children}
    </Base>
  </div >
)

export const AspectRatio = styled(AspectRatioRoot)({
  position: "relative",
  width: "100%"
});