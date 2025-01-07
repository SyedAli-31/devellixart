"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Home", "About Us", "Services", "Portfolio", "Packages", "Contact Us"];
const contactDetails = {
  phone: "+1 918-300-0098",
  email: "info@devellixart.com",
};

const servicesDropdown = [
  "Graphic Design",
  "2D & 3D Modeling & Animations",
  "Web Development",
  "Mobile Application Development",
  "Software Development",
  "SEO",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElServices, setAnchorElServices] = React.useState<null | HTMLElement>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMounted, setIsMounted] = React.useState(false); // Track component mounting

  React.useEffect(() => {
    setIsMounted(true); // Ensure dynamic rendering happens after the component is mounted
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenServicesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const toggleSearchBox = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchSubmit = () => {
    alert("Search Query: " + searchQuery); // Replace with actual search logic
    setSearchQuery(""); // Reset search query after search
    setIsSearchOpen(false); // Close the search box after search
  };

  if (!isMounted) {
    // Prevent rendering on the server
    return null;
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        fontFamily: "'Nunito Sans', sans-serif",
        padding: "4px 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: "center", gap: 4, fontSize: "16px" }}>
          {/* Logo */}
          <Box
            component="img"
            src="/DEVELLIX-LOGO.PNG"
            alt="Devellix Art"
            sx={{
              height: 113,
              width: 200,
              display: { xs: "flex", md: "flex" },
            }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              gap: "15px",
              ml: "20px",
            }}
          >
            {pages.map((page) =>
              page === "Services" ? (
                <Box key={page} sx={{ position: "relative" }}>
                  <Button
                    onMouseEnter={handleOpenServicesMenu}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "16px",
                      position: "relative",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "red",
                      },
                      "&:hover::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "red",
                      },
                    }}
                  >
                    {page}
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    anchorEl={anchorElServices}
                    open={Boolean(anchorElServices)}
                    onClose={handleCloseServicesMenu}
                    onMouseLeave={handleCloseServicesMenu}
                    sx={{
                      mt: "30px",
                      "& .MuiMenu-paper": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    {servicesDropdown.map((service) => (
                      <MenuItem
                        key={service}
                        onClick={handleCloseServicesMenu}
                        sx={{
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        {service}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "16px",
                    position: "relative",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "red",
                    },
                    "&:hover::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "red",
                    },
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 6,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginRight: "20px" }}>
              <PhoneIcon sx={{ color: "red", fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                }}
              >
                <span className="text-[14px]">Have Any Questions?</span>
                <br />
                <span className="text-[17px] hover:text-red-600 font-bold">
                  {contactDetails.phone}
                </span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "red", fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                <span>Mail Us </span>
                <br />
                <span className="hover:text-red-600 font-bold">
                  {contactDetails.email}
                </span>
              </Typography>
            </Box>
          </Box>

          {/* Mobile Search and Hamburger Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0,
            }}
          >
            {/* Search Icon */}
            <IconButton
              size="large"
              aria-label="search"
              onClick={toggleSearchBox}
              sx={{ color: "black" }}
            >
              <SearchIcon />
            </IconButton>
            {isSearchOpen && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "250px",
                  padding: "8px",
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  zIndex: 10,
                }}
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    padding: "8px",
                    fontSize: "16px",
                    color: "black",
                  }}
                />
                <Button
                  onClick={handleSearchSubmit}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "8px 16px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  Search
                </Button>
              </Box>
            )}

            {/* Hamburger Menu */}
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
