const TestimonialCard = ({ img, name, quote, hidden }) => {
    const hide =
        hidden === "true"
            ? "hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex"
            : "flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3";

    return (
        <>
            <div className={hide}>
                <img
                    src={img}
                    alt="avatar testimonial"
                    className="w-16 -mt-14"
                />
                <h5 className="text-lg font-bold">{name}</h5>
                <p className="text-sm text-darkGrayishBlue">{quote}</p>
            </div>
        </>
    );
};

export default TestimonialCard;
