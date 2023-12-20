"use client";

import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <NavigationMenu className="m-5 overflow-hidden">
        <NavigationMenuList className="grid grid-cols-2 gap-1 md:flex md:items-center md:justify-center">
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
              href="/resume.pdf"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              Resume
              <div className="ml-2">
                <FileText />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Footer;
