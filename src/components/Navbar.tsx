"use client";
import React, { useState, useEffect } from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const contactDetails = {
  phone: "+1 918-300-0098",
  email: "info@devellixart.com",
};

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration errors

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        position: "relative",
        bgcolor: "white",
        boxShadow: 1,
      }}
    >
      {/* Logo */}
      <Logo>
        <Box
          component="img"
          src="/DEVELLIX-LOGO.png"
          alt="Devellix Art"
          sx={{ height: 80, width: 180 }}
        />
      </Logo>

      {/* Mobile Menu & Search Icon */}
      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className="text-gray-700 hover:text-red-500 transition"
        >
          {isSearchOpen ? <CloseIcon fontSize="large" /> : <SearchIcon fontSize="large" />}
        </button>
        <MobileMenu />
      </div>

      {/* Search Box (Mobile Only) */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-3 shadow-lg flex items-center border-t border-gray-300 md:hidden z-50">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-3 text-red-600 hover:text-red-800 transition"
          >
            <CloseIcon fontSize="large" />
          </button>
        </div>
      )}

      {/* Desktop Menu */}
      <HeaderMenu />

      {/* Contact Info (Desktop Only) */}
      <Box className="hidden md:flex items-center gap-6">
        <Box className="flex items-center gap-1">
          <PhoneIcon sx={{ color: "red", fontSize: "22px" }} />
          <Typography className="text-gray-700 text-sm">
            <span className="text-xs">Have Any Questions?</span>
            <br />
            <span className="text-base font-bold hover:text-red-600">
              {contactDetails.phone}
            </span>
          </Typography>
        </Box>
        <Box className="flex items-center gap-1">
          <EmailIcon sx={{ color: "red", fontSize: "22px" }} />
          <Typography className="text-gray-700 text-sm">
            <span>Mail Us</span>
            <br />
            <span className="font-bold hover:text-red-600">
              {contactDetails.email}
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
