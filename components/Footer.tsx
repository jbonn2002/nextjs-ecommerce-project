"use client";

import React from "react";
import Link from "next/link";
import Modal from "./Modal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";
import { Box, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <NavigationMenu className="m-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://www.linkedin.com/in/jordan-bonnaire/"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              LinkedIn
              <div className="ml-2">
                <Linkedin />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://github.com/jbonn2002"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://twitter.com/JordybDev"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              Twitter
              <div className="ml-2">
                <Twitter />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              3D Model
              <div className="ml-2">
                <Box />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Footer;
