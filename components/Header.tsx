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
import { Button } from "./ui/Button";

const Header = () => {
  return (
    <NavigationMenu className="absolute top-0 right-20 mt-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Modal />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
