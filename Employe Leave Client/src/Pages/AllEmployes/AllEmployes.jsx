import React, { useEffect, useState } from 'react';
import useAPI from '../../Hooks/useAPI';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Loader from '../../Components/Loader/Loader'
import useRole from '../../Hooks/useRole';
import useAuth from '../../Hooks/useAuth';

import background from '../../assets/images/bgP.png'

const AllEmployes = () => {
    const API = useAPI()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const { role } = useRole()
    const { user } = useAuth()
    // console.log('////////////////', data)

    console.log(role)

    const fetch = async () => {
        try {
            setLoading(true);
            const res = await API.get("/all-users");
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetch()
    }, [])

    const handelRole = (event, name, _id) => {

        Swal.fire({
            title: `Are you sure? promote ${name} as an ${event.target.value} `,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Promote it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const Role = event.target.value
                console.log(Role, _id)
                API.patch(`/users/admin/${_id}`, { Role })
                    .then(res => {
                        if (res.data.modifiedCount) {
                            toast.success("Promoted")
                            fetch()
                            console.log(event.target.value, name)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    };


    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                API.delete(`/users-delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            fetch()
                            toast.success("Employee Deleted Successful")
                        }

                    })
            }
        });

    }

    // console.log(data)
    return (
        <div  style={{
            backgroundImage: `url(${background})`
        }} 
        className='h-screen overflow-y-hidden'
        >
            <h1 className="my-5 text-4xl font-semibold text-center font-Roboto ">Manage Employes</h1>
            {
                loading ? <Loader />
                    :
                    <div>
                        <div className="overflow-x-scroll md:overflow-x-hidden px-10">
                            <table className="table overflow-x-scroll ">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>

                                        <th>Name&Photo</th>
                                        <th>email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row  */}
                                    {
                                        data.map((userD, i) => <tr key={i}>
                                            <th>
                                                {i + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={userD?.imageURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{userD.name}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {userD.email}
                                                <br />

                                            </td>
                                            {
                                                !userD.role ?
                                                    <td>
                                                        <select
                                                            onChange={() => handelRole(event, userD.name, userD._id)}
                                                            className="select border-[#0059b1] focus:border-[#0059b1] ">
                                                            <option className=" text-base font-bold " disabled selected>Role</option>
                                                            <option className=" text-base font-bold text-[#0059b1]">Admin</option>

                                                        </select>
                                                    </td>

                                                    :
                                                    <td><span className={userD.role === 'Admin' ? "bg-green-light p-1 px-4 rounded-full" : "bg-blue-200 p-1 px-4 rounded-full"}
                                                    >{userD.role}</span></td>
                                            }

                                            <th>
                                                {
                                                    user?.email == userD.email ? ""
                                                        :
                                                        <button
                                                            onClick={() => handelDelete(userD?._id)}
                                                            className="btn btn-outline btn-error btn-circle"><FaTrashAlt className="text-2xl" />
                                                        </button>
                                                }

                                            </th>
                                        </tr>)
                                    }

                                </tbody>


                            </table>
                        </div>
                    </div>
            }

        </div>
    );
};

export default AllEmployes;