import * as React from "react";
import { useCart } from "../contexts/CartContext";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown";
import Sitemark from "../pages/homeComponents/SitemarkIcon";
import myLogo from "../images/TL_Amber_Logo_sm.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            {/* <Sitemark /> */}
            {/* <img
              src={myLogo}
              alt="TL Amber Logo"
              style={{ height: 40, width: "auto" }}
              to="/"
            /> */}
            {/* <Tooltip title="Go to cart">
              <IconButton
                component={RouterLink}
                to="/"
                size="small"
                aria-label="Home"
                color="inherit"
              >
                <img
                  src={myLogo}
                  alt="TL Amber Logo"
                  style={{ height: 40, width: "auto" }}
                  to="/"
                />
              </IconButton>
            </Tooltip> */}
            <Tooltip title="Go Home">
              <a href="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={myLogo}
                  alt="TL Amber Logo"
                  style={{ height: 40, width: "auto" }}
                />
              </a>
            </Tooltip>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                component={RouterLink}
                to="/books"
              >
                Books
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component={RouterLink}
                to="/poetry"
              >
                Poetry
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component={RouterLink}
                to="/blog"
              >
                Blog
              </Button>
              <Button variant="text" color="info" size="small">
                Examples
              </Button>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component={RouterLink}
                to="/admin"
              >
                Admin
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button> */}
            <Tooltip title="Go to cart">
              <IconButton
                component={RouterLink}
                to="/cart"
                size="large"
                aria-label="shopping cart"
                color="inherit"
              >
                <ShoppingCartIcon />
                {count > 0 && (
                  <Typography variant="caption" sx={{ ml: 0.5 }}>
                    ({count})
                  </Typography>
                )}
              </IconButton>
            </Tooltip>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Examples</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Admin</MenuItem>
                <Divider sx={{ my: 3 }} />
                {/* <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem> */}
                <MenuItem>
                  <Tooltip title="Go to cart">
                    <IconButton
                      component={RouterLink}
                      to="/cart"
                      size="large"
                      aria-label="shopping cart"
                      color="inherit"
                    >
                      <ShoppingCartIcon />
                      {count > 0 && (
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                          ({count})
                        </Typography>
                      )}
                    </IconButton>
                  </Tooltip>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
