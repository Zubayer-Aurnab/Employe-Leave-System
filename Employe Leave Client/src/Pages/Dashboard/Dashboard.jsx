import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import logo from '../../assets/logo/logo.png'
import useRole from "../../Hooks/useRole";
import { useEffect, useState } from "react";
import Loader from '../../Components/Loader/Loader'


const Dashboard = () => {
    const { role, roleLoader } = useRole()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    console.log(role)

    useEffect(() => {
        if (!roleLoader) {
            if (role === "Admin") {
                navigate('/dashboard/all-req');
            } else if (role === "") {
                navigate('/dashboard/my-req');
            }
        }
    }, [roleLoader, role, navigate]);

    const handleCheckboxChange = () => {
        setOpen(!open);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className={`lg:w-[10%] lg:h-screen bg-blue-1 py-4 lg:py-0 transition-[max-height] duration-[700ms] ease-in-out overflow-hidden ${open ? "max-h-[500px]" : "h-20 "}`} >
                <div className="lg:w-4/5 mx-auto my-2 flex justify-between  w-full px-4">
                    <img className="w-48 object-contain " src={logo} alt="" />
                    <div className='flex lg:hidden'>
                        <label className="hamburger">
                            <input onClick={handleCheckboxChange} type="checkbox" checked={open} readOnly />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"></path>
                                <path className="line" d="M7 16H27"></path>
                            </svg>
                        </label>
                    </div>
                </div>
                <div className="justify-center items-center flex  flex-col lg:flex-col gap-5 mt-10">

                    {
                        roleLoader ? "Loading .." :
                            role === 'Admin' ?
                                <>
                                    <Link to={'/dashboard/all-req'} className="w-full flex justify-center">
                                        <Button title={"Request"} full={true} />
                                    </Link>
                                    <Link to={'/dashboard/all-employes'} className="w-full flex justify-center">
                                        <Button title={"All Employes"} full={true} />
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={'/dashboard/send-req'} className="w-full flex justify-center">
                                        <Button title={"Send Request"} full={true} />
                                    </Link>
                                    <Link to={'/dashboard/my-req'} className="w-full flex justify-center">
                                        <Button title={"My Request"} full={true} />
                                    </Link>
                                </>
                    }

                    <Link to={'/'} className="w-full flex justify-center">
                        <Button title={"Home"} full={true} />
                    </Link>

                </div>
            </div>
            <div className="lg:w-[90%] h-screen"> {roleLoader ? <Loader /> : <Outlet />}</div>
        </div>
    );
};

export default Dashboard;