import { IconButton, Box, Stack, InputBase, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { HeaderProps } from "./Header.interface";
import { StyledRoot, StyledToolbar } from "./Header.styled";
import { avatars } from "../../constants";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          sx={{
            color: "text.primary",
          }}
        >
          <SearchIcon fontSize="small" />
        </IconButton>

        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ color: "text.primary", ml: 2, flex: 1 }}
        />

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {avatars.map((avatar, index) => (
            <Avatar
              alt={`User ${index}`}
              src={avatar}
              sx={{ width: 36, height: 36 }}
              key={index}
            />
          ))}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};
