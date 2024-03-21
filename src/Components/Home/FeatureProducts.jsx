import React from 'react';
import img1 from '../../assets/image/watch.jpg';
import img2 from '../../assets/image/Jwellary.jpg'
import img3 from '../../assets/image/bags.jpg';
import img4 from '../../assets/image/baby.jpg';
import img5 from '../../assets/image/sports.jpeg';
  

const FeatureProducts = () => {
    return (
        <div className='mt-[200px]'>
            <h2 className='text-4xl font-bold text-center'>Our Feature Item</h2>
            <button className='ml-[820px] bg-gray-300 p-2 rounded-lg font-medium'>See All</button>
            
            <div className='flex justify-between items-center h-[130px] w-1/2 mx-auto mt-5 bg-yellow-500 p-5 rounded-lg'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full hover:w-[100px] hover:h-[100px]' src={img1} title='watch' alt="" />
                </div>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full hover:w-[100px] hover:h-[100px]' src={img2} title='Jwellary' alt="" />
                </div>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full hover:w-[100px] hover:h-[100px]' src={img3} title='Bags' alt="" />
                </div>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full hover:w-[100px] hover:h-[100px]' src={img4} title='Baby Corner' alt="" />
                </div>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full hover:w-[100px] hover:h-[100px]' src={img5} title='Sports' alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;