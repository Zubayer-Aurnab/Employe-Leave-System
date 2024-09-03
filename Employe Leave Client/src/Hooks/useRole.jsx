import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAPI from "./useAPI";


const useRole = () => {
    const [role, setRole] = useState("")
    const API = useAPI()
    const { user } = useAuth()
    // console.log(user?.email)
    const fetch = async () => {
        if (user?.email) {
            try {
                const res = await API.get(`/user-data/${user?.email}`);
                console.log(res);
                setRole(res.data.role);
            } catch (error) {
                console.error("Error fetching user role:", error);

            }
        }
    };

    useEffect(() => {
        fetch()
    }, [user])
    return (
        { role }
    );
};

export default useRole;