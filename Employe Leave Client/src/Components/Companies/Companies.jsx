import brand1 from '../../assets/logo/companies/also.png'
import brand2 from '../../assets/logo/companies/festo.png'
import brand3 from '../../assets/logo/companies/fresenius.png'
import brand4 from '../../assets/logo/companies/makita.png'
import brand5 from '../../assets/logo/companies/platinum-systems.png'
import brand6 from '../../assets/logo/companies/renault.png'

const Companies = () => {
    return (
        <div className='w-4/5 mx-auto my-10'>
            <h1 className="text-xl lg:text-2xl text-[#a1aeb7] text-center">TRUSTED BY OTHER SUCCESSFUL COMPANIES</h1>
            <div className="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-6   mt-14">
                <div className='border-r-[1px] border-[#a1aeb7]'>
                    <img src={brand1} alt="" />
                </div>
                <div className='border-r-[1px] border-[#a1aeb7]'>
                    <img src={brand2} alt="" />
                </div>
                <div className='border-r-[1px] border-[#a1aeb7]'>
                    <img src={brand3} alt="" />
                </div>
                <div className='border-r-[1px] border-[#a1aeb7]'>
                    <img src={brand4} alt="" />
                </div>
                <div className='border-r-[1px] border-[#a1aeb7]'>
                    <img src={brand5} alt="" />
                </div>
                <div className='border-r-[1px] border-[#a1aeb7] lg:border-none'>
                    <img src={brand6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Companies;