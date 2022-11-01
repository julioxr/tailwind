import TestimonialCard from "./TestimonialCard";
import avatarAli from "../assets/images/avatar-ali.png";
import avatarAnisha from "../assets/images/avatar-anisha.png";
import avatarRichard from "../assets/images/avatar-richard.png";
import { VscCircleOutline, VscCircleFilled } from "react-icons/vsc";

const Testimonials = () => {
    return (
        <>
            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-20 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center  ">
                        What they’ve said
                    </h2>
                    {/* Testimonials container*/}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                        <TestimonialCard
                            img={avatarAnisha}
                            name="Anisha Li"
                            quote="“Manage has supercharged our team’s workflow. The ability to maintain 
                                        visibility on larger milestones at all times keeps everyone motivated.”"
                            hidden="false"
                        />
                        <TestimonialCard
                            img={avatarAli}
                            name="Ali Bravo"
                            quote="“We have been able to cancel so many other subscriptions since using 
                                        Manage. There is no more cross-channel confusion and everyone is much 
                                        more focused.”"
                            hidden="true"
                        />
                        <TestimonialCard
                            img={avatarRichard}
                            name="Richard Watts"
                            quote="“Manage allows us to provide structure and process. It keeps us organized 
                                        and focused. I can’t stop recommending them to everyone I talk to!”"
                            hidden="true"
                        />
                    </div>
                    <div className="flex justify-center md:hidden mt-10">
                        <a href="#" className="text-brightRed ">
                            <VscCircleOutline />
                        </a>
                        <a href="#" className="text-brightRed fill-blue-500">
                            <VscCircleFilled />
                        </a>
                        <a href="#" className="text-brightRed ">
                            <VscCircleOutline />
                        </a>
                    </div>
                    {/* button */}
                    <div className="my-12">
                        <a
                            href="#"
                            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline shadow-2x hover:bg-brightRedLight"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
