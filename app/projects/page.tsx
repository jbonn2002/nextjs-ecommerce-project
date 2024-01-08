import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="head_text m-5 md:pt-4 md:px-2 pt-10 dark:text-white">
        Projects
      </h1>
      <div className="flex justify-center items-center">
        <Projects />
      </div>
    </section>
  );
};

export default page;
