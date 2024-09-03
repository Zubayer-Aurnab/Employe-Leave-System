import React from 'react';
import background from '../../assets/images/bgP.png'
import useAuth from '../../Hooks/useAuth';
import './SR.css'
import Button from '../../Components/Button/Button';
const SendRequest = () => {
    const { user } = useAuth()
    // console.log(user?.displayName, user?.photoURL)

    const handelSend = (e) => {
        e.preventDefault()
        const from = e.target
        const description = from.text_area.value
        const DateFrom = from.date_from.value
        const DateToo = from.date_too.value



        console.log(description, DateFrom, DateToo)

    }

    return (
        <div style={{
            backgroundImage: `url(${background})`
        }}
            className="h-screen flex items-center ">

            <div className='w-1/2 mx-auto bg-[white] shadow-2xl   rounded-lg'>
                <h1 className="my-5 text-4xl font-semibold text-center font-Roboto ">Send Leave Request</h1>
                <div className='p-4'>
                    <div className='flex items-center gap-2'>
                        <img className='w-16 rounded-full' src={user?.photoURL} alt="" />
                        <h1 className='font-Montserrat font-semibold'>{user?.displayName}</h1>
                    </div>
                    <div className='mt-5'>
                        <form onSubmit={handelSend} >
                            <h1 className='font-Montserrat font-semibold text-xl mb-'>Period</h1>
                            <div className='flex gap-10 mt-2'>
                                <div className=''>
                                    <p className='font-Montserrat'>From</p>
                                    <input name='date_from' type="date" className='border p-1' />
                                </div>
                                <div className=''>
                                    <p className='font-Montserrat'>To</p>
                                    <input name='date_too' type="date" className='border p-1' />
                                </div>
                            </div>
                            <div className=' mt-10'>
                                <p className='font-Montserrat font-semibold text-xl mb-2'>Description :</p>
                                <textarea

                                    placeholder="Write here..."
                                    id="text"
                                    name="text_area"
                                    rows="4"
                                    class="overflow-hidden break-words resize-none h-48 w-full !overflow-y-scroll shadow-lg "
                                ></textarea>
                            </div>
                            <div className='mt-5 flex justify-center'>
                                <Button title={"Send"} fullWidth={true} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendRequest;