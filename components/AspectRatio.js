import { Base } from "./Base";
import { styled } from "../styled.config";

const Comp = ({
  className,
  ratio = 1 / 1,
  style,
  innerProps,
  children
}) => {
  return (
    <div
      className={className}
      style={{
        paddingBottom: `${100 / ratio}%`,
        ...style
      }}
    >
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
}

export const AspectRatio = styled(Comp)({
  position: "relative",
  width: "100%"
});