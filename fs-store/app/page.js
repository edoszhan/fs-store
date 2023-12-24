"use client"

import MainLayout from './layouts/MainLayout'
import CarouselComp from './components/CarouselComp'
import Product from './components/Product'

export default function Home() {

  const products = [
    {
      id: 1, 
      title: 'Apple iPhone 12 Pro Max 128GB Pacific Blue',
      description: '6.7" Super Retina XDR display, Ceramic Shield, tougher than any smartphone glass, A14 Bionic chip, the fastest chip ever in a smartphone, Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording',
      price: 1000,
      url: 'https://picsum.photos/200',
    }, 
    {
      id: 2,
      title: 'Apple iPhone 11 Pro Max 256GB Midnight Green',
      description: '6.5" Super Retina XDR display, A13 Bionic chip, Triple 12MP Ultra Wide, Wide and Telephoto cameras, Night mode, Auto Adjustments, next-generation Smart HDR, 4K video recording with extended dynamic range, 12MP TrueDepth front camera with slow-motion video support for 1080p at 120 fps',
      price: 800,
      url: 'https://picsum.photos/200',
    }
  ]

  return (
      <MainLayout>  
        <CarouselComp />
        <div className="max-w-[1200px] mx-auto">
            <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

            <div className="grid grid-cols-5 gap-4">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
      </MainLayout>
  )
}