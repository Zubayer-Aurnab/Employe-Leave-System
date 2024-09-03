import { Link, Outlet } from "react-router-dom";
import Button from "../../Components/Button/Button";
import logo from '../../assets/logo/logo.png'
import useRole from "../../Hooks/useRole";


const Dashboard = () => {
    const { role } = useRole()
    return (
        <div className="flex">
            <div className="w-[10%] h-screen bg-blue-1  ">
                <div className="w-4/5 mx-auto my-2">
                    <img src={logo} alt="" />
                </div>
                <div className="justify-center items-center flex flex-col gap-5 mt-10">

                    {
                        role === 'Admin' ?
                            <>
                                <Link to={'/'} className="w-full flex justify-center">
                                    <Button title={"Request"} full={true} />
                                </Link>
                                <Link to={'/dashboard/all-employes'} className="w-full flex justify-center">
                                    <Button title={"All Employes"} full={true} />
                                </Link>
                            </>
                            :
                            <Link to={'/dashboard/send-req'} className="w-full flex justify-center">
                                <Button title={"Send Request"} full={true} />
                            </Link>
                    }

                    <Link to={'/'} className="w-full flex justify-center">
                        <Button title={"Home"} full={true} />
                    </Link>

                </div>
            </div>
            <div className="w-[90%] h-screen"> <Outlet /></div>
        </div>
    );
};

export default Dashboard;