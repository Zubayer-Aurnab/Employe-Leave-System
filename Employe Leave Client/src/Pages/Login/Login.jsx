import { Link } from 'react-router-dom';
import background from '../../assets/images/bgP.png'
import logo from '../../assets/logo/logo.png'
import Button from '../../Components/Button/Button';
import { FcGoogle } from "react-icons/fc";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
const Login = () => {

    const { GoogleAuth, user } = useAuth()
    console.log(user)
    const handel = () => {
        console.log('han')
    }
    const GoogleLogin = () => {
        console.log('asdasdasdasd')
        GoogleAuth()
            .then(res => {
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                    photo: res?.user?.photoURL,
                    role: ""
                }
                console.log('User Info:', userInfo);

                return API.post('/users', userInfo);
            })
            .then(res => {
                console.log('API Response:', res.data);
                toast.success("Log in successful");
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.error('Login Error:', err);
                toast.error(`Error: ${err.message}`);
            });
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
                    <form>
                        <img className="w-44" src={logo} alt="" />
                        <h1 className="text-2xl lg:text-4xl font-Montserrat font-bold mt-8 text-center">Log In</h1>
                        <div className='mt-5'>
                            {/* email */}
                            <div className="w- h-12 relative flex rounded-xl mt-4">
                                <input
                                    required
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
                                    required
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
                            <Button title={"Login"} fullWidth={true} />
                            <p>or</p>
                            <button
                                onClick={GoogleLogin}
                                type='button'
                                className={`text-lg font-medium px-5 py-1 border border-blue-dark font-Roboto flex items-center justify-center gap-2 w-1/2  hover:scale-110 transition-all duration-[0.3s] ease-in-out`}>
                                <div  ><FcGoogle /></div> Google
                            </button>

                        </div>
                    </form>
                    <h1 className='mt-8'> Don't have an account? <Link to={'/register'} className='underline text-blue-dark '>Click here to register.</Link></h1>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Login;