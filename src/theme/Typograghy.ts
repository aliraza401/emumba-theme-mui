import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

export function remToPx(value: number): number {
  return Math.round(parseFloat(String(value)) * 16);
}

interface ResponsiveFontSizes {
  sm: number;
  md: number;
  lg: number;
}

export const pxToRem = (value: number): string => `${value / 16}rem`;

export function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSizes) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "DM Sans";

interface Typography {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: TypographyStyleOptions;
  h2: TypographyStyleOptions;
  h3: TypographyStyleOptions;
  h4: TypographyStyleOptions;
  h5: TypographyStyleOptions;
  h6: TypographyStyleOptions;
  subtitle1: TypographyStyleOptions;
  // subtitle2: FontStyle;
  // body1: FontStyle;
  // body2: FontStyle;
  // caption: FontStyle;
  // overline: FontStyle;
  // button: FontStyle;
}

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(28),
    textTransform: "none",
    ...responsiveFontSizes({ sm: 28, md: 38, lg: 44 }),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 64 / 48,
    fontSize: pxToRem(18),
    textTransform: "none",
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    textTransform: "none",
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    textTransform: "none",
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    textTransform: "none",
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 300,
    lineHeight: 1,
    fontSize: pxToRem(14),
  },
  // subtitle2: {
  //   fontWeight: 600,
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14),
  // },
  // body1: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(16),
  // },
  // body2: {
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14),
  // },
  // caption: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  // },
  // overline: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   textTransform: "uppercase",
  // },
  // button: {
  //   fontWeight: 700,
  //   lineHeight: 24 / 14,
  //   fontSize: pxToRem(14),
  //   textTransform: "capitalize",
  // },
};

export default typography;
