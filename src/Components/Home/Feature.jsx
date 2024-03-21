import { IoHome } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { PiGlobeLight } from "react-icons/pi";

const Feature = () => {
    return (
        <div>
            This is feature sections
            <div className='relative'>
            <div className='w-2/3 mx-auto h-[200px] bg-yellow-500 flex items-center justify-center rounded-lg'>
                <h2 className='text-5xl font-semibold'>Love in faith</h2>
            </div>
            <div className='w-1/2 mx-auto h-[100px] bg-green-500 absolute -bottom-16 left-[325px] shadow-2xl rounded-lg flex justify-evenly text-5xl items-center'>
            <IoHome /> <TbTruckDelivery /> <PiGlobeLight />
            </div>
            </div>
        </div>
    );
};

export default Feature;