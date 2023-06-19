import { Box, Drawer, Divider, useTheme } from "@mui/material";
import useResponsive from "../../hooks/useResponsve";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

import { NAV_WIDTH } from "../../constants";

import LogoDark from "./../../assets/images/LogoDark.svg";
import UserImg from "./../../assets/images/User.svg";
import ImageImg from "./../../assets/images/Image.svg";
import StatsImg from "./../../assets/images/Stats.svg";
import CalenImg from "./../../assets/images/Calen.svg";
import FireImg from "./../../assets/images/Fire.svg";
import ChartImg from "./../../assets/images/chart.svg";
import SettingImg from "./../../assets/images/Settings.svg";
import { StyledNav } from "./Nav.styled";
import { useState } from "react";
import { RoutesConstants } from "../../constants/routeConstants";

export default function Nav() {
  const isDesktop = useResponsive("up", "sm");
  const [openNav, setopenNav] = useState(false);

  const theme = useTheme();

  console.log(theme.palette.mode);

  const renderContent = (
    <StyledNav isOpened={openNav}>
      <Box>
        <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
          <Image src={LogoDark} width={36} height={36} />
        </Box>

        <Divider variant="middle" />

        <Link to={RoutesConstants.PAYMENTS}>
          <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
            <Image src={UserImg} width={18} height={19} />
          </Box>
        </Link>

        <Link to={RoutesConstants.STATS}>
          <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
            <Image src={CalenImg} width={21} height={21} />
          </Box>
        </Link>

        <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
          <Image src={StatsImg} width={22} height={22} />
        </Box>

        <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
          <Image src={ImageImg} width={19.5} height={19.5} />
        </Box>

        <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
          <Image src={FireImg} width={21.5} height={21.5} />
        </Box>

        <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
          <Image src={ChartImg} width={21} height={21} />
        </Box>
      </Box>

      <Box sx={{ px: 2.5, py: 3 }} className={"text-center"}>
        <Image src={SettingImg} width={21.5} height={21.5} />
      </Box>
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
