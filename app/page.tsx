import ThreejsSection from "@/components/ThreejsSection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center py-10">
        <span className="text-gray-900 dark:text-white">Hello 👋 my name </span>
        <br className="max-md:hidden" />
        <span className="dark:text-green-500 blue_gradient">
          is Jordan Bonnaire{" "}
        </span>
      </h1>
      <hr className="w-[75%] h-px my-6" />
      <Suspense fallback={<Loading />}>
        <ThreejsSection />
      </Suspense>
      <hr className="w-[75%] h-px my-6" />
      <p className="desc sm:p-0 p-10 max-w-2xl text-center dark:text-white">
        As a software engineer, I have gained extensive experience in frontend
        development, particularly in JavaScript, TypeScript, React, and Tailwind
        CSS. I am proficient in utilizing frameworks such as React and Next.js
        to build dynamic and responsive web applications. Additionally, my
        knowledge of Node.js and MongoDB allows me to seamlessly integrate
        frontend and backend functionalities. Looking to grow and learn, I love
        to code and want to become a better software developer. I am a striving
        self-taught software engineer looking for an opportunity to work and
        succeed as a developer. I am a quick learner, detail-oriented, and
        thrive in collaborative environments.
      </p>
      <hr className="w-[75%] h-px my-6" />
    </section>
  );
}
