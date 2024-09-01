import Button from "../Button/Button";


const TrySection = () => {
    return (
        <div className=" bg-[#141c32]">
            <div className="px-4 lg:px-0 lg:w-4/5 mx-auto text-[white] text-center py-10 lg:py-20 space-y-5 ">
                <h1 className="text-2xl lg:text-4xl font-Roboto font-bold">Don't hesitate, try before you buy.</h1>
                <p className="font-Montserrat lg:text-lg  ">You can also book a demo. We'll happily go through the solution with you and answer any/all <br className="hidden lg:flex" />
                    additional questions you may have.
                </p>

                <Button title={"START FREE TRIAL"} large={true} />
            </div>
        </div>
    );
};

export default TrySection;