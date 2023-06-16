import { css } from "styled-components";

export const isMobile = (userAgent: string): boolean => {
  const mobileDevices =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileDevices.test(userAgent);
};

export const headingStyles = (sm: number, md: number, lg: number) => css`
  @media (min-width: 600px) {
    font-size: ${sm / 16}rem;
  }
  @media (min-width: 900px) {
    font-size: ${md / 16}rem;
  }
  @media (min-width: 1200px) {
    font-size: ${lg / 16}rem;
  }
`;
