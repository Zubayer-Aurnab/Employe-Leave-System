import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";

const Dropdown = () => {
    const { user, logOutUser } = useAuth()
    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end z-50">

            <img
                tabIndex={0}
                src={user?.photoURL}
                className="w-14 h-14 rounded-full object-cover"
                alt="" />
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2 ">
                <li className="btn bg-[#ecf5ff] font-bold">
                    {user?.displayName}
                </li>

                <li className="   ">
                    <Link to={'/dashboard'} className=" font-bold flex justify-between"> Dashboard <FcMenu className="text-2xl mb-1" /></Link>
                </li>
                <li onClick={logOutUser} className="  hover:bg-red-400 rounded-lg  ">
                    <button className="font-bold flex justify-between"> LogOut <IoIosLogOut className="text-2xl mb-" /></button>
                </li>

            </ul>
        </div>
    );
};

export default Dropdown;