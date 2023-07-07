import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="head_text m-5 pt-4 md:px-2 dark:text-white">Projects</h1>
      <div className="flex justify-center items-center">
        <Projects />
      </div>
    </section>
  );
};

export default page;
