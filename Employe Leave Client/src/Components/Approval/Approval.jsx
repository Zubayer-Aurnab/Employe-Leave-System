import React from 'react';
import img3 from '../../assets/images/img3.png'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
const Approval = () => {
    return (
        <div className=' bg-[#f5f5f5]'>
            <div className=' lg:px-0 lg:w-4/5 mx-auto pt-8'>
                <div className="px-4 lg:px-0  flex items-center flex-col lg:flex-row-reverse lg:mt-24">
                    <div className="pt-14  flex-1 lg:pl-24 ">
                        <h1 className="text-3xl lg:text-4xl tracking-wide leading-[55px] lg:leading-[75px] font-Roboto font-semibold">Leave approvals with notifications</h1>

                        <div className="h-[2px] bg-blue-dark w-28 my-4 lg:my-4" />

                        <p className="lg:text-lg  mb-8 font-Montserrat font-medium">The approval process is fast, and the result is clear and visible to everyone involved. </p>

                        <p className="lg:text-lg  mb-8 font-Montserrat font-medium">Administrators get an email notification when a new request is made, and the employees are notified when their request is approved or rejected. </p>

                        <ul className="list-disc list-inside text-lg mb-10 font-Montserrat font-medium ">
                            <li className='flex items-center gap-2'> <IoCheckmarkDoneCircleOutline /> No more endless email chains </li>
                            <li className='flex items-center gap-2 '> <IoCheckmarkDoneCircleOutline /> Fast approvals</li>
                            <li className='flex items-center gap-2'> <IoCheckmarkDoneCircleOutline />Transparent history of approvals </li>

                        </ul>

                    </div>
                    <div className=" flex-1 -mt-20 lg:-mt-0 lg:pr-24  pt-20 lg:pt-0 flex justify-end ">
                        <img src={img3} alt="" className='w-[90%]' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Approval;