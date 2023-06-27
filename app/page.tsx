import { ModeToggle } from "@/components/DarkModeToggle";
import Header from "@/components/Header";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Header />
      <h1 className="head_text text-center py-10">
        <span className="text-white">Discover the New</span>
        <br className="max-md:hidden" />
        <span className="orange_gradient">The bread store </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for the modern world to
        discover, create and share creative prompts
      </p>

      <div className="fixed top-10 right-10">
        <ModeToggle />
      </div>
    </section>
  );
}
