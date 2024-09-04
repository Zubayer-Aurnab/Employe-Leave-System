import axios from 'axios';



const axiosURL = axios.create({
    baseURL: "https://employe-leave-server.vercel.app"
})

const useAPI = () => {
    return (axiosURL);
};

export default useAPI;