import { Link } from 'react-router-dom';
import background from '../../assets/images/bgP.png'
import logo from '../../assets/logo/logo.png'
import Button from '../../Components/Button/Button';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import toast from 'react-hot-toast';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAPI from '../../Hooks/useAPI';

const Registration = () => {

    const [loading, setLoading] = useState(false)
    const { createUser, UpdateUser } = useAuth()
    const API = useAPI()

    const handelSubmite = async (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const imageFile = { image: from.photo?.files[0] };

        // Regex patterns
        const nameRegex = /^[a-zA-Z\s]{3,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        // Validation checks
        if (!imageFile.image) {
            toast.error("Image file is missing. Please upload an image.");
            return;
        }

        if (!nameRegex.test(name)) {
            toast.error("Invalid name. Name should be 3-30 characters and contain letters and spaces.");
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Invalid email address.");
            return;
        }

        if (!passwordRegex.test(password)) {
            toast.error("Invalid password. Password should be at least 6 characters long, and contain at least one letter and one number.");
            return;
        }
        setLoading(true)


        const dbResponse = await axios.post(
            "https://api.imgbb.com/1/upload?key=923f0184538507a09392ab7139deafe6",
            imageFile,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        const imageURL = dbResponse?.data?.data?.url
        createUser(email, password).then(res => {
            UpdateUser(name, imageURL)
                .then(res => {
                    const user = { email, name, imageURL, role: "" }
                    console.log(user)
                    API.post('/users', user)
                        .then(res => {
                            console.log(res.data)
                            toast.success("Registration in successful")
                            from.reset()
                            setLoading(false)
                            // navigate(location?.state ? location.state : '/')
                        })
                })
        })
            .catch(err => {
                toast.error(`error: ${err.message}`)
                setLoading(true)
            })



        const data = {
            name, email, password, imageURL

        }

        console.log(data)

    }
    return (
        <>
            <NavBar />
            <div
                style={{
                    backgroundImage: `url(${background})`
                }}
                className="h-screen flex items-center " >

                <div className="lg:w-1/3 mx-auto bg-[white] shadow-lg p-5">
                    <form onSubmit={handelSubmite}>
                        <img className="w-44" src={logo} alt="" />
                        <h1 className="text-2xl lg:text-4xl font-Montserrat font-bold mt-8 text-center">Registration</h1>
                        <div className='mt-5'>
                            {/* photo */}
                            <div class="grid w-full  items-center gap-1.5">
                                <label
                                    className="text-lg   leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >Picture</label
                                >
                                <input
                                    className="flex w-full h-12 rounded-xl border border-blue-dark border-input bg-[white] text-sm  file:border-0 file:bg-blue-dark file:text-[white] file:text-lg file:h-full file:font-medium"
                                    type="file"
                                    id="picture"
                                    name='photo'
                                />
                            </div>
                            {/* name */}
                            <div className="w- h-12 relative flex rounded-xl mt-4">
                                <input

                                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-blue-dark focus:shadow-md"
                                    id="address"
                                    type="text"
                                    name='name'
                                />
                                <label
                                    className="absolute top-1/2 translate-y-[-50%] bg-[white] left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-blue-dark peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-blue-dark duration-150 font-Roboto "
                                    htmlFor="address"
                                >
                                    Name
                                </label>
                            </div>

                            {/* email */}
                            <div className="w- h-12 relative flex rounded-xl mt-4">
                                <input

                                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-blue-dark focus:shadow-md"
                                    id="address"
                                    type="text"
                                    name='email'
                                />
                                <label
                                    className="absolute top-1/2 translate-y-[-50%] bg-[white] left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-blue-dark peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-blue-dark duration-150 font-Roboto"
                                    htmlFor="address"
                                >
                                    Email
                                </label>
                            </div>
                            {/* Password */}
                            <div className="w- h-12 relative flex rounded-xl mt-4">
                                <input

                                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-blue-dark focus:shadow-md"
                                    id="address"
                                    type="password"
                                    name='password'
                                />
                                <label
                                    className="absolute top-1/2 translate-y-[-50%] bg-[white] left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-blue-dark peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-blue-dark duration-150 font-Roboto"
                                    htmlFor="address"
                                >
                                    Password
                                </label>
                            </div>
                        </div>
                        <div className='mt-8 flex gap-5 justify-center items-center'>
                            <Button title={loading ? 'Loading ...' : "Register"} fullWidth={true} />
                        </div>
                    </form>
                    <h1 className='mt-8'> Already have an account? <Link to={'/login'} className='underline text-blue-dark '>Click here to Login.</Link></h1>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Registration;