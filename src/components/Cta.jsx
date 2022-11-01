import React from "react";

const Cta = () => {
    return (
        <>
            <section id="cta">
                <div className="flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 bg-brightRed md:flex-row md:space-y-0  md:px-32">
                    {/* Heading */}
                    <h2 className="font-bold leading-tight text-center text-white md:text-4xl md:max-w-md md:text-left">
                        Simplify how your team works today.
                    </h2>
                    {/* Button */}
                    <a
                        href="#"
                        className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline shadow-2xl hover:bg-brightRedLight font-bold"
                    >
                        Get Started
                    </a>
                </div>
            </section>
        </>
    );
};

export default Cta;
