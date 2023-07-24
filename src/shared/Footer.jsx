import { GitHub } from "@mui/icons-material";
import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="h5" color="primary" align="center">
      {"Copyright © "}
      <IconButton>
        <Avatar
          alt="Tachi GitHub"
          src="https://avatars.githubusercontent.com/u/85906328?v=4"
          sx={{ width: 45, height: 45 }}
        />
      </IconButton>
      <Link
        underline="none"
        color="inherit"
        href="https://github.com/AxMar1221"
      >
        Tachidito <GitHub />
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box sx={{ color: "primary", p: 2 }} component="footer">
      <Copyright />
    </Box>
  );
};
