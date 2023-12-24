"use client"

import MainLayout from "../../layouts/MainLayout"

export default function Product({ params }) {
  const product = 
    {
      id: 1, 
      title: 'Apple iPhone 12 Pro Max 128GB Pacific Blue',
      description: '6.7" Super Retina XDR display, Ceramic Shield, tougher than any smartphone glass, A14 Bionic chip, the fastest chip ever in a smartphone, Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording',
      price: 1000,
      url: 'https://picsum.photos/200',
    }

    return (
        <>
          <MainLayout>
    
            <div className="max-w-[1200px] mx-auto">
              <div className="flex px-4 py-10">
    
                {product?.url 
                  ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} /> 
                  : <div className="w-[40%]"></div> 
                }
    
                <div className="px-4 w-full">
                  <div className="font-bold text-xl">{product?.title}</div>
                  <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
    
                  <div className="border-b py-1" />
    
                  <div className="pt-3 pb-2">
                    <div className="flex items-center">
                      Condition: <span className="font-bold text-[17px] ml-2">New</span>
                    </div>
                  </div>
    
                  <div className="border-b py-1" />
    
                  <div className="pt-3">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center">
                        Price: 
                        {product?.price 
                          ? <div className="font-bold text-[20px] ml-2">
                              GBP £{(product?.price / 100).toFixed(2)}
                            </div> 
                        : null }
                      </div>
                      <button className="bg-[#3498C9] text-white py-2 px-20 rounded-full cursor-pointer "
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
    
                  <div className="border-b py-1" />
    
                  <div className="pt-3">
                    <div className="font-semibold pb-1">Description:</div>
                    <div className="text-sm">{product?.description}</div>
                  </div>
    
                </div>
              </div>
            </div>
    
    
            </MainLayout>
        </>
      )
    }