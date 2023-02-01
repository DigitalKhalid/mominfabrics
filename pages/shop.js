import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={400} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full shadow-lg m-3 mt-4">
              <a className="block relative rounded overflow-hidden">
                <Image width={200} height={300} alt="ecommerce" className="object-cover object-center block m-auto" src="/product.png"/>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Shop