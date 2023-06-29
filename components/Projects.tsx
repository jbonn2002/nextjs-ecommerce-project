import React from "react";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Prompt Project</CardTitle>
          <CardDescription>
            Nextjs, Next-Auth, MongoDB, TailwindCSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/prompt-project-screenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            GitHub
            <div className="ml-2">
              <Github />
            </div>
          </Button>
          <Button>Live Site</Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Prompt Project</CardTitle>
          <CardDescription>
            Nextjs, Next-Auth, MongoDB, TailwindCSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/prompt-project-screenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            GitHub
            <div className="ml-2">
              <Github />
            </div>
          </Button>
          <Button>Live Site</Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Prompt Project</CardTitle>
          <CardDescription>
            Nextjs, Next-Auth, MongoDB, TailwindCSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/prompt-project-screenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            GitHub
            <div className="ml-2">
              <Github />
            </div>
          </Button>
          <Button>Live Site</Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Prompt Project</CardTitle>
          <CardDescription>
            Nextjs, Next-Auth, MongoDB, TailwindCSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/prompt-project-screenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            GitHub
            <div className="ml-2">
              <Github />
            </div>
          </Button>
          <Button>Live Site</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
