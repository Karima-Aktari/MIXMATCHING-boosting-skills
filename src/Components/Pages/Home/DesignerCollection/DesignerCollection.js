import React, { useState } from 'react';

const DesignerCollection = () => {
    const [products, setProducts] = useState([
        {
            name: "Jents",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image3-1.jpg",
            price: 65,
            code: "A1",
        },
        {
            name: "Ladies",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image4.jpg",
            price: 55,
            code: "B1",
        },
        {
            name: "Ladies",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image1-1.jpg",
            price: 53,
            code: "B2",
        },
        {
            name: "Casual",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image9-1.jpg",
            price: 52,
            code: "C1",
        },
        {
            name: "Ladies",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image5-1.jpg",
            price: 56,
            code: "B3",
        },
        {
            name: "Jents",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image6-1.jpg",
            price: 45,
            code: "A2",
        },
    ]);


    return (
        <div>
            <div className="bg-rose-300 w-full min-h-screen py-5">
                <h1 className="font-bold text-4xl">Designer Collections</h1>
                <div className=" container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map((product) => (
                            <div className=" py-5 mx-auto">
                                <div key={product.name} className=" w-64 p-1 bg-fuchsia-600 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl" >
                                    <img className="h-64 w-full object-cover rounded-xl items-center" src={product.url} alt="" />
                                    <div className="p-2">
                                        <h1 className="font-bold text-lg">{product.name}</h1>
                                        <div className='flex justify-evenly'>
                                            <p className="text-md font-bold text-gray-800">Price: ${product.price} </p>
                                            <p className="text-md font-bold text-gray-800">Dress-Code:  {product.code}</p>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <button type="button" className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800">Learn More</button>
                                    </div> */}
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
    );
};

export default DesignerCollection;