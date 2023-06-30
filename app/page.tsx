import ThreejsSection from "@/components/ThreejsSection";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center py-10">
        <span className="text-white">Hello 👋 my name</span>
        <br className="max-md:hidden" />
        <span className="orange_gradient">is Jordan Bonnaire </span>
      </h1>
      <hr className="w-[75%] h-px my-6" />
      <ThreejsSection />
      <hr className="w-[75%] h-px my-6" />
      <p className="desc text-center text-white">
        My name is jordan bonnaire, as a front-end web developer, I am dedicated
        to creating visually stunning and user-friendly websites that engage and
        captivate users. My expertise includes proficiency in HTML, CSS,
        JavaScript, and various front-end libraries and frameworks such as
        Three.js, React, and Gsap. I am committed to understanding user needs
        and designing intuitive user interfaces that provide a seamless
        experience across all devices. My attention to detail and ability to
        think creatively allows me to create beautiful and functional designs
        that enhance the overall user experience. I am passionate about staying
        up-to-date with the latest front-end development trends and techniques
        to ensure that my clients receive the most innovative and effective
        solutions.
      </p>
    </section>
  );
}
