import React from "react";

const Feature = ({ id, title, body }) => {
    return (
        <>
            {/* List item 01 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                        <div className="px-6 md:px-5 py-2 text-white rounded-full bg-brightRed md:py-1">
                            {id}
                        </div>
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                            {title}
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:mb-4 md:block">
                        {title}
                    </h3>
                    <p className="text-darkGrayishBlue">{body}</p>
                </div>
            </div>
        </>
    );
};

export default Feature;
