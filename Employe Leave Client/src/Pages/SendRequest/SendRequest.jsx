import React from 'react';
import background from '../../assets/images/bgP.png'
import useAuth from '../../Hooks/useAuth';
import './SR.css'
import Button from '../../Components/Button/Button';
import toast from 'react-hot-toast';
import useAPI from '../../Hooks/useAPI';
import { useNavigate } from 'react-router-dom';
const SendRequest = () => {
    const { user, loading } = useAuth()
    const API = useAPI()
    const navigate = useNavigate()
    // console.log(user)
    // console.log(loading)

    const handelSend = async (e) => {
        e.preventDefault()
        const from = e.target
        const DateToo = from.date_too.value
        const DateFrom = from.date_from.value
        const description = from.text_area.value

        if (!DateFrom) {
            toast.error("From date  is required")
            return
        }
        if (!DateToo) {
            toast.error("Too date  is required")
            return
        }
        if (!description) {
            toast.error("Description is required")
            return
        }
        if (!loading) {

            const data = {
                userName: user?.displayName,
                userImage: user?.photoURL,
                userEmail: user?.email,
                from: DateFrom,
                too: DateToo,
                status: 'pending',
                description
            }
            const res = await API.post('/leave-req', data)
            if (res?.data?.insertedId) {
                from.reset()
                toast.success("Leave Request Send")
                navigate('/dashboard/my-req')
            }
        }
    }

    return (
        <div style={{
            backgroundImage: `url(${background})`
        }}
            className="h-screen flex items-center ">

            <div className='lg:w-1/2 mx-auto bg-[white] shadow-2xl   rounded-lg'>
                <h1 className="my-5 text-4xl font-semibold text-center font-Roboto ">Send Leave Request</h1>
                <div className='p-4'>
                    <div className='flex items-center gap-2'>
                        <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />
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
                                {/* <Button title={"Send"} fullWidth={true} /> */}
                                <button className={`text-lg font-medium px-5  nav-btn font-Roboto w-1/2 py-1 `}>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendRequest;