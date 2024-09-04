import { useEffect, useState } from "react";
import useAPI from "../../Hooks/useAPI";
import useAuth from "../../Hooks/useAuth";
import Loader from '../../Components/Loader/Loader'
import background from '../../assets/images/bgP.png'
import { Link } from "react-router-dom";
const MyRequest = () => {
    const API = useAPI()
    const { user } = useAuth()
    const [loading, setloading] = useState(false)
    const [data, setData] = useState([])
    const fetch = async () => {
        try {
            setloading(true)
            const res = await API.get(`/my-leave-data/${user?.email}`)
            setData(res.data.reverse())
        } catch (err) {
            console.log(err)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        fetch()
    }, [user])
    console.log(data)
    return (
        <div
            style={{
                backgroundImage: `url(${background})`
            }}
            className="overflow-y-scroll h-screen">
            {
                loading ? <Loader /> :
                    <>

                        <h1 className="my-5 text-4xl font-semibold text-center font-Roboto ">My Leave Request</h1>
                        {
                            data.length == 0 ?
                                <h1 className="text-2xl text-center mt-20">You haven't requested any leave yet. <Link to={'/dashboard/send-req'} className="underline text-blue-dark">Click here</Link> to submit a leave request.</h1>

                                :
                                <>
                                    <div className="lg:w-4/5 h-96  mx-auto mt-20  grid lg:grid-cols-2 gap-10 p-4 " >


                                        {
                                            data.map((data, i) => (
                                                <div key={i} className="bg-[white] shadow-2xl rounded-lg p-4" >
                                                    <div className="flex  justify-between ">
                                                        <div className="flex gap-2">
                                                            <img className="w-16 h-16  rounded-full" src={data.userImage} alt="" />
                                                            <div>
                                                                <p className="text-lg font-Roboto">{data.userName}</p>
                                                                <p className="font-Montserrat">{data.userEmail}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className={`p-1 px-4 rounded-full  ${data.status === 'reject' ? "bg-red-light text-red-dark" : ""} ${data.status === 'approve' ? "bg-green-light text-green-dark" : ""}  ${data.status === 'pending' ? "bg-[yellow] text-[black]" : ""} `}> {data.status}</p>
                                                        </div>
                                                    </div>
                                                    <div className="h-[1px] bg-[lightgray] mt-2" />
                                                    <div className="mt-2">
                                                        <h1 className="text-base font-Roboto">Period</h1>
                                                        <div className="flex gap-10 mt-2">
                                                            <p className="border p-1 px-4">From : {data.from}</p>
                                                            <p className="border p-1 px-4">Too : {data.too}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5">
                                                        <h1 className="text-base font-Roboto">Description</h1>
                                                        <p className="border p-1 px-4 overflow-y-scroll h-24 font-Montserrat mt-2 rounded-lg">{data.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                        }

                    </>
            }
        </div>
    );
};

export default MyRequest;