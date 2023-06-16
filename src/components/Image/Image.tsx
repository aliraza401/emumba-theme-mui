import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { ImageProps } from "./Image.interface";
import { StyledImage } from "./Image.styled";

const Image: FC<ImageProps> = ({ src, alt = "", width, height, className }) => {
  const theme = useTheme();
  const isSvg = src.endsWith(".svg");
  const invertColors =
    theme.palette.mode === "dark" ? { filter: "invert(1)" } : {};

  if (isSvg) {
    return (
      <object
        className={className}
        type="image/svg+xml"
        data={src}
        width={width}
        height={height}
        style={invertColors}
      >
        {alt}
      </object>
    );
  }

  return (
    <StyledImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
