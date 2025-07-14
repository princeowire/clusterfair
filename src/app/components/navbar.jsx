"use client"

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Blog", "Contact"];

  return (
    <nav className="w-full flex p-2 absolute top-0 left-0">
      <div className="flex gap-2 items-center"><Image src={logo} /> <p className="">ApplyWise</p></div>
    </nav>
  );
};

export default Navbar;
