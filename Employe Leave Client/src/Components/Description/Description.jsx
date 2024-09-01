import img2 from '../../assets/images/img2.png'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const Description = () => {
    return (
        <div className="mt-20 lg:mt-48 px-4 lg:w-4/5 mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl lg:text-6xl font-Roboto font-semibold text-center">
                    A leave management system your <br className='hidden lg:flex' /> managers and employees will love to <br className='hidden lg:flex' /> use
                </h1>
                <div className="h-[2px] w-28 bg-blue-dark my-9" />
                <p className="text-center font-Montserrat font-medium">
                    All Hours is a user-friendly employee leave management solution that <br className='hidden lg:flex' /> helps you to reduce the time and costs associated with leave management. <br className='hidden lg:flex' /> It currently has 5,000+ users in organizations of all sizes.
                </p>
            </div>
            <div>
                <div className="px-4 lg:px-0  flex items-center flex-col lg:flex-row lg:mt-24">
                    <div className="pt-14  flex-1 lg:pl-24">
                        <h1 className="text-3xl lg:text-4xl tracking-wide leading-[55px] lg:leading-[75px] font-Roboto font-semibold">Track all types of leave</h1>

                        <div className="h-[2px] bg-blue-dark w-28 my-4 lg:my-4" />

                        <p className="lg:text-lg  mb-8 font-Montserrat font-medium">With All Hours you can easily track all types of leave, including annual leave, sick leave, public holidays, private or unpaid leave, or the usage of surplus hours. </p>

                        <p className="lg:text-lg  mb-8 font-Montserrat font-medium">Absence types can be completely customized and counted in days or hours as paid or unpaid time, that way it’s easy to track work done from home and other types of remote work.</p>

                        <ul className="list-disc list-inside text-lg mb-10 font-Montserrat font-medium ">
                            <li className='flex items-center gap-2'> <div> <IoCheckmarkDoneCircleOutline size={20} /></div> Paid and unpaid leave status </li>
                            <li className='flex items-center gap-2 '> <div> <IoCheckmarkDoneCircleOutline size={20} /></div> Setup different rules for different employees </li>
                            <li className='flex items-center gap-2'> <div> <IoCheckmarkDoneCircleOutline size={20} /></div>Track remote work </li>

                        </ul>

                    </div>
                    <div className=" flex-1 -mt-20 lg:-mt-0 lg:pr-24 pt-20 lg:pt-0">
                        <img src={img2} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Description;