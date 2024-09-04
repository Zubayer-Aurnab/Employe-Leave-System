import { useEffect, useState } from "react";
import useAPI from "../../Hooks/useAPI";
import Loader from '../../Components/Loader/Loader'
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import background from '../../assets/images/bgP.png'

const AllRequest = () => {
    const API = useAPI()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const fetch = async () => {
        setLoading(true)
        const res = await API.get('/all-req')
        setData(res.data)
        setLoading(false)
    }
    useEffect(() => {
        fetch()
    }, [])

    const handelReject = async (_id) => {

        Swal.fire({
            title: `Are you sure you want to reject this request?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const Role = "reject"
                console.log(Role, _id)
                API.patch(`/status-update/${_id}`, { Role })

                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount) {
                            toast.success("Rejected")
                            fetch()
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    };
    const handelApprove = async (_id) => {

        Swal.fire({
            title: `Are you sure you want to Approve this request?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const Role = "approve"
                console.log(Role, _id)
                API.patch(`/status-update/${_id}`, { Role })

                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount) {
                            toast.success("Approved")
                            fetch()
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    };

    return (
        <div
            style={{
                backgroundImage: `url(${background})`
            }}
            className="overflow-y-scroll h-screen">
            {
                loading ? <Loader /> :
                    <>

                        <h1 className="my-5 text-4xl font-semibold text-center font-Roboto ">Leave Request's</h1>
                        <div className="px-4 lg:px-0 lg:w-4/5   mx-auto mt-10 lg:mt-20  grid-cols-1 grid lg:grid-cols-2 gap-10 p-4" >

                            {
                                data.map((data, i) => (
                                    <div key={i} className={`bg-[white] shadow-2xl rounded-lg p-4 ${data.status === 'reject' ? "hidden" : ""}${data.status === 'approve' ? "hidden" : ""}`} >
                                        <div className="flex justify-between ">
                                            <div className="flex gap-2">
                                                <img className="w-16 h-16  rounded-full" src={data.userImage} alt="" />
                                                <div>
                                                    <p className="text-lg font-Roboto">{data.userName}</p>
                                                    <p className="font-Montserrat">{data.userEmail}</p>
                                                </div>
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
                                        <div className="mt-8 flex gap-5">
                                            <button onClick={() => handelReject(data._id)} className="bg-red-light text-red-dark p-1 px-4 rounded-sm">
                                                Reject
                                            </button>
                                            <button onClick={() => handelApprove(data._id)} className="bg-green-light text-green-dark p-1 px-4 rounded-sm">
                                                Approve
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
            }
            <Toaster />
        </div>
    );
};

export default AllRequest;