import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/system";

type Query = "up" | "down" | "between" | "only";

const useResponsive = (
  query: Query,
  start: Breakpoint,
  end?: Breakpoint
): boolean => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start, end || "xl")
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  switch (query) {
    case "up":
      return mediaUp;
    case "down":
      return mediaDown;
    case "between":
      return mediaBetween;
    default:
      return mediaOnly;
  }
};

export default useResponsive;

export const useWidth = (): Breakpoint | "xs" => {
  const theme = useTheme();

  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce(
      (output: Breakpoint | null, key: Breakpoint): Breakpoint | null => {
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      },
      null
    ) || "xs"
  );
};
