import img9 from '../../assets/images/img9.png'
import { FaArrowRight } from "react-icons/fa6";
const MuchMoreSection = () => {
    return (
        <div className="bg-blue-1">
            <div className="px-4 lg:px-0 lg:w-4/5 mx-auto text-center py-16 lg:py-28">
                <h1 className="font-Roboto text-3xl lg:text-6xl font-bold text-light-black">Much more than a leave <br className="hidden lg:flex" /> management system</h1>
                <div className="flex justify-center">
                    <div className="h-[2px] bg-blue-dark w-28 my-4 lg:my-10  " />
                </div>
                <p className="lg:text-lg font-Montserrat  text-light-black text-justify lg:text-center ">
                    All Hours is much more than just a leave management system; it’s a full time-and-attendance <br className="hidden lg:flex" /> solution that simplifies clocking in and out, helps to automate the payroll process, minimizes <br className="hidden lg:flex" /> compliance risk, raises productivity, and lowers labor costs.</p>
                <div className="lg:text-lg font-Montserrat  text-light-black items mt-10 flex justify-center ">
                    <div >
                        <p className="flex gap-4 items-center text-left"><FaArrowRight className="text-red-dark" /> Complete time & attendance cloud-based solution</p>
                        <p className="flex gap-4 md:items-center text-left"><FaArrowRight className="text-red-dark" /> Clocking-in and out system </p>
                        <p className="flex gap-4 md:items-center text-left"><FaArrowRight className="text-red-dark" /> Appropriate for all company sizes</p>
                    </div>
                </div>

                <img src={img9} alt="" className='mt-10 lg:mt-0' />


            </div>

        </div>
    );
};

export default MuchMoreSection;