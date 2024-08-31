import Button from "../Button/Button";
import img1 from '../../assets/images/img1.png'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const Banner = () => {
    return (
        <>
            <div className="bg-blue-light">
                <div className="px-4 lg:px-0 lg:w-4/5 mx-auto flex items-center flex-col lg:flex-row ">
                    <div className="pt-14 pb-36 flex-1 lg:pl-24">
                        <h1 className="text-4xl lg:text-6xl tracking-wide leading-[55px] lg:leading-[75px] font-Roboto font-bold">The Leave <br /> Management <br /> System for  a  <br /> Modern <br /> Workplace</h1>
                        <div className="h-[2px] bg-blue-dark w-28 my-10" />
                        <p className="text-lg  mb-8 font-Montserrat">All Hours is a cloud-based leave management system that enables you <br /> to efficiently manage, approve, and track leave requests and absences from <br /> any device.</p>
                        <ul className="list-disc list-inside text-lg mb-10 font-Montserrat">
                            <li> Stop losing paper forms </li>
                            <li> Reduces administration </li>
                            <li>Time-off accruals</li>

                        </ul>
                        <Button title={"START FREE TRIAL"} large={true} />
                    </div>
                    <div className=" flex-1 -mt-20 lg:-mt-0 lg:pr-24">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-0 lg:w-4/5 mx-auto flex gap-10 justify-center flex-col lg:flex-row relative lg:bottom-20  mt-10 lg:mt-0">
                <div className="bg-[white] shadow-2xl lg:w-[34rem] rounded-lg p-4 hover:scale-105 transition-all duration-500">
                    <h1 className="text-xl font-Roboto " >No more manual work or errors</h1>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline /> Stop losing paper forms</p>
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline /> Quickly, easily, and transparently manage absences</p>
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline /> Every request is tracked and includes a comment</p>
                    </div>
                </div>
                <div className="bg-[white] shadow-2xl lg:w-[34rem] rounded-lg p-4 hover:scale-105 transition-all duration-500">
                    <h1 className="text-xl font-Roboto " >Immediately improve your company’s productivity</h1>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline /> Plan absences on a calendar</p>
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline /> Save time and focus on more strategic tasks</p>
                        <p className="flex items-center gap-2 text-lg font-Montserrat"> <IoCheckmarkDoneCircleOutline />Assure compliance with accruals</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;