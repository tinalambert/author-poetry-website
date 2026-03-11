import * as React from "react";
import { useCart } from "../contexts/CartContext";
import { NavLink, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["Books", "Custom Poetry", "Blog", "About Me", "Admin"];

// const pages = [
//   { name: "Books", path: "/books" },
//   { name: "Custom Poetry", path: "/poetry" },
//   { name: "Blog", path: "/blog" },
//   { name: "About Me", path: "/about" },
//   { name: "Admin", path: "/admin" },
// ];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  // const handlePageNav = (path) => () => {
  //   setAnchorElNav(null);
  //   // Navigate to the page
  //   window.location.href = path.currentTarget.value;
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page.name} onClick={handlePageNav(page.path)}>
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))} */}
              <MenuItem component={RouterLink} to="/books">
                <Typography sx={{ textAlign: "center" }}>Books</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to="/poetry">
                <Typography sx={{ textAlign: "center" }}>
                  Custom Poetry
                </Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to="/blog">
                <Typography sx={{ textAlign: "center" }}>Blog</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to="/about">
                <Typography sx={{ textAlign: "center" }}>About Me</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to="/admin">
                <Typography sx={{ textAlign: "center" }}>Admin</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <Button
              component={RouterLink}
              to="/books"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Books
            </Button>
            <Button
              component={RouterLink}
              to="/poetry"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Custom Poetry
            </Button>
            <Button
              component={RouterLink}
              to="/blog"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blog
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>
            <Button
              component={RouterLink}
              to="/admin"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Admin
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
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
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
