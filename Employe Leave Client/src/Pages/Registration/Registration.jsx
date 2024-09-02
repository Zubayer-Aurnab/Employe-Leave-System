import { Link } from 'react-router-dom';
import background from '../../assets/images/bgP.png'
import logo from '../../assets/logo/logo.png'
import Button from '../../Components/Button/Button';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Registration = () => {
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
                        <h1 className="text-2xl lg:text-4xl font-Montserrat font-bold mt-8 text-center">Registration</h1>
                        <div className='mt-5'>
                            {/* photo */}
                            <div class="grid w-full  items-center gap-1.5">
                                <label
                                    class="text-lg   leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >Picture</label
                                >
                                <input
                                    class="flex w-full h-12 rounded-xl border border-blue-dark border-input bg-[white] text-sm  file:border-0 file:bg-blue-dark file:text-[white] file:text-lg file:h-full file:font-medium"
                                    type="file"
                                    id="picture"
                                />
                            </div>
                            {/* name */}
                            <div className="w- h-12 relative flex rounded-xl mt-4">
                                <input
                                    required
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
                            <Button title={"Register"} fullWidth={true} />
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