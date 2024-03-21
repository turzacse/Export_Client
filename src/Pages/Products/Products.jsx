import React, { useEffect, useState } from 'react';
import Feature from '../../Components/Home/Feature';
import proImg from '../../assets/image/ring.jpg'
import ring from '../../assets/image/rin.jpg'


const Products = () => {
    const [product, setProduct] = useState();
    useEffect( () => {
        fetch('../../../public/Product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[])

    // console.log(product);
    return (
        <div>
            <Feature/>

            <div className='mt-28'></div>
            <div className='grid grid-cols-6 gap-2'>
                {
                    product?.map((item) => <div key={item.id}>
                        <div className='w-[200px]'>
                           <img className='rounded-xl h-[200px] w-[200px]' src={ring} alt="" />
                           <h2>{item.name}</h2> 
                           <p>{item.price} TK</p>
                           {/* <p>{item.description}</p> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;