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
import Link from "next/link";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Prompt Project</CardTitle>
          <CardDescription>
            Next-Auth, MongoDB, Mongoose, TailwindCSS
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
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/Nextjs-prompt-project/"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-prompt-project.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Spotify Project</CardTitle>
          <CardDescription>
            Typescript, TailwindCSS, Supabase, Stripe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/spotifyclonescreenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/Nextjs-Spotify-Project"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-spotify-project.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Reddit Project</CardTitle>
          <CardDescription>
            Typescript, React-Query, Prisma, Zod
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/redditcloness.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/nextjs-reddit-clone"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link href="">Live Site</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>React Hoobank Clone</CardTitle>
          <CardDescription>React, Tailwind</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/HoobankSs.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/first-react-project"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://reacthoobankclone.netlify.app/" target="_blank">
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
