

const Footer = () => {
    return (
        <div className="bg-[#141c32] text-[white]">
            <div className="px-4 py-10 lg:px-0 lg:w-4/5 mx-auto grid grid-cols-2 gap-10   lg:grid-cols-5">
                <div >
                    <h1 className="font-Roboto text-lg font-semibold" >Features</h1>
                    <div className="w-10 h-[1px] bg-blue-light my-4" />
                    <div className="font-Montserrat font-extralight space-y-2 text-sm">
                        <p>Clocking in & out</p>
                        <p>Absence tracking</p>
                        <p>Overtime tracking</p>
                        <p>Staff scheduling</p>
                        <p>Analytics & reporting</p>
                        <p>Geolocations & geofencing</p>
                        <p>Timesheets</p>
                        <p>Payroll integrations</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-Roboto text-lg font-semibold" >Resources</h1>
                    <div className="w-10 h-[1px] bg-blue-light my-4" />
                    <div className="font-Montserrat font-extralight space-y-2 text-sm">
                        <p>Blog</p>
                        <p>Case Studies</p>
                        <p>Videos</p>
                        <p>Brochures</p>
                        <p>Time management guide</p>
                        <p>Time and attendance guide</p>
                        <p>Help center</p>

                    </div>
                </div>
                <div>
                    <h1 className="font-Roboto text-lg font-semibold" >Use cases </h1>
                    <div className="w-10 h-[1px] bg-blue-light my-4" />
                    <div className="font-Montserrat font-extralight space-y-2 text-sm">
                        <p>App for clocking in and out</p>
                        <p>Absence tracking</p>
                        <p>Online Time Clockg</p>
                        <p>Leave Management System</p>
                        <p>Clock In Online</p>
                        <p>Clocking App</p>
                        <p>Overtime Tracking</p>
                        <p>Clock for work</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-Roboto text-lg font-semibold" >ABOUT US
                    </h1>
                    <div className="w-10 h-[1px] bg-blue-light my-4" />
                    <div className="font-Montserrat font-extralight space-y-2 text-sm">
                        <p>About Spica</p>
                        <p>News</p>
                        <p>Overtime tracking</p>
                        <p>Blog</p>
                        <p>Partners</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-Roboto text-lg font-semibold" >Contact</h1>
                    <div className="w-10 h-[1px] bg-blue-light my-4" />
                    <div className="font-Montserrat font-extralight space-y-2 text-sm">
                        <p>Spica International d.o.o.</p>
                        <p>Pot k sejmiscu 33</p>
                        <p>1231 Ljubljana, Slovenia</p>
                        <p>Staff scheduling</p>
                        <p>T: +386 1 568 08 00</p>
                        <p>E: info@spica.com</p>
                    </div>
                </div>

            </div>
            <div className="h-[1px] bg-[gray] " />
            <div className="px-4 lg:px-0 lg:w-4/5 mx-auto flex flex-col lg:flex-row justify-between py-2">
                <div className="flex gap-4 justify-around lg:gap-10 ">
                    <p>Privacy Policy  </p>
                    <p>Cookies</p>
                    <p>Consent settings</p>
                </div>
                <div className="text-center mt-2 lg:mt-0">
                    © 2024 -  | All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;