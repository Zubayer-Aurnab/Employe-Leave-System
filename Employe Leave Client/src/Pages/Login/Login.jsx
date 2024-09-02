import background from '../../assets/images/bgP.png'
import logo from '../../assets/logo/logo.png'
import Button from '../../Components/Button/Button';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`
            }}
            className="h-screen flex items-center " >

            <div className="w-1/3 mx-auto bg-[white] shadow-lg p-5">
                <form>
                    <img className="w-44" src={logo} alt="" />
                    <h1 className="text-4xl font-Montserrat font-bold mt-8 text-center">Log In</h1>
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
                            type='button'
                            className={`text-lg font-medium px-5 py-1 border border-blue-dark font-Roboto flex items-center justify-center gap-2 w-1/2 `}> <div><FcGoogle /></div> Google</button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;