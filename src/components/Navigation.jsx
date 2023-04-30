import * as React from "react";
import { Link as RouterNavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#000", borderRadius: "0 0 10px 10px" }}
        position="sticky"
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <RouterNavLink to="/">
              <Typography variant="h6">Home</Typography>
            </RouterNavLink>
            <RouterNavLink to="/table">
              <Typography variant="h6">Hero</Typography>
            </RouterNavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
