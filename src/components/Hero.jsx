import React from "react";
import illustratonIntro from "../assets/images/illustration-intro.svg";

const Hero = () => {
    return (
        <>
            {/* Hero section */}
            <section id="hero">
                <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                    {/* Left item */}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center text-darkBlue md:text-left md:text-5xl">
                            Bring everyone together to build better products.
                        </h1>
                        <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals
                            in view.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="#"
                                className="shadow-lg shadow-brightRed hover:shadow-brightRedLight active:translate-y-1 transition p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                    {/* image */}
                    <div className="md:w-1/2">
                        <img src={illustratonIntro} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
