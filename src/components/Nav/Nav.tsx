import { Box, Drawer, Divider } from "@mui/material";
import useResponsive from "../../hooks/useResponsve";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

import { NAV_WIDTH } from "../../constants";

import LogoDark from "./../../assets/images/LogoDark.svg";
// import UserImg from "./../../assets/images/User.svg";
import ImageImg from "./../../assets/images/Image.svg";
import StatsImg from "./../../assets/images/Stats.svg";
// import CalenImg from "./../../assets/images/Calen.svg";
import FireImg from "./../../assets/images/Fire.svg";
import ChartImg from "./../../assets/images/chart.svg";
import SettingImg from "./../../assets/images/Settings.svg";
import { StyledBox, StyledLogoBox, StyledNav } from "./Nav.styled";
import { useState } from "react";
import { RoutesConstants } from "../../constants/routeConstants";
import { useDarkMode } from "../../context/darkMode";
import { BarChart, Lightbulb, PaymentRounded } from "@mui/icons-material";

export default function Nav() {
  const isDesktop = useResponsive("up", "sm");
  const [openNav, _] = useState(false);

  const { dispatch } = useDarkMode();

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  const renderContent = (
    <StyledNav isOpened={openNav}>
      <Box>
        <StyledLogoBox sx={{ px: 2.5, py: 3 }}>
          <Image src={LogoDark} width={36} height={36} />
        </StyledLogoBox>

        <Divider variant="middle" />

        <Link to={RoutesConstants.PAYMENTS}>
          <StyledBox sx={{ px: 2.5, py: 3 }}>
            <PaymentRounded fontSize="small" />
          </StyledBox>
        </Link>

        <Link to={RoutesConstants.STATS}>
          <StyledBox sx={{ px: 2.5, py: 3 }}>
            <BarChart fontSize="small" />
          </StyledBox>
        </Link>

        <StyledBox sx={{ px: 2.5, py: 3 }}>
          <Image src={StatsImg} width={22} height={22} />
        </StyledBox>

        <StyledBox sx={{ px: 2.5, py: 3 }}>
          <Image src={ImageImg} width={19.5} height={19.5} />
        </StyledBox>

        <StyledBox sx={{ px: 2.5, py: 3 }}>
          <Image src={FireImg} width={21.5} height={21.5} />
        </StyledBox>

        <StyledBox sx={{ px: 2.5, py: 3 }}>
          <Image src={ChartImg} width={21} height={21} />
        </StyledBox>
      </Box>

      <span>
        <StyledBox sx={{ px: 2.5, py: 3 }} onClick={toggleDarkMode}>
          <Lightbulb />
        </StyledBox>

        <StyledBox sx={{ px: 2.5, py: 3 }}>
          <Image src={SettingImg} width={21.5} height={21.5} />
        </StyledBox>
      </span>
    </StyledNav>
  );

  return (
    <Box
      component="nav"
      sx={{
        // flexShrink: { sm: 0 },
        width: { sm: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              borderWidth: 0,
              background: "transparent",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={() => console.log("Nav close")}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
