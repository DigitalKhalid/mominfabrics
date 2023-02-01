import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill, BsFillTrashFill } from 'react-icons/bs'
import { useRef } from 'react'
import SideCart from './SideCart'

const Navbar = () => {
    const ref = useRef()
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <div>
            <header className="text-black body-font w-full">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src='/logo.png' alt='Momin Fabrics' width={140} height={25} ></Image>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 font-bold flex flex-wrap items-center text-base justify-center">
                        <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">Catagories</Link>
                        <Link href='/shop' className="mr-5 hover:text-gray-900">Shop</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">My Account</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">Logout</Link>
                    </nav>

                </div>
                <AiOutlineShoppingCart onClick={toggleCart} className='text-4xl absolute top-4 right-3 text-green-600 font-bold' />
                <hr />

                <div ref={ref} className='sidecart h-full bg-sky-500 w-80 absolute top-0 right-0 p-5 transform transition-transform translate-x-full'>
                    <AiFillCloseCircle onClick={toggleCart} className='absolute top-2 right-2 text-gray-100 text-2xl font-bold cursor-pointer' />
                    <h2 className='font-bold text-gray-100 text-xl'>My Cart</h2>
                    <hr className='mt-1' />
                    <ol className='list-decimal pl-4 text-gray-100'>
                        <li className='pt-2'>
                            <div className='flex'>
                                <div className='w-2/3'>Item 1 - 200</div>
                                <div className='w-1/3 text-center flex justify-between items-center pl-2'><AiFillMinusCircle className='cursor-pointer text-amber-400' />01<AiFillPlusCircle className='cursor-pointer text-amber-400' /></div>
                            </div>
                            <div className="w-full text-right font-bold mt-2">Rs. 2500.00</div>
                            <hr className='mt-1' />
                        </li>
                        <li className='pt-2'>
                            <div className='flex'>
                                <div className='w-2/3'>Item 1 - 200</div>
                                <div className='w-1/3 text-center flex justify-between items-center pl-2'><AiFillMinusCircle className='cursor-pointer text-amber-400' />01<AiFillPlusCircle className='cursor-pointer text-amber-400' /></div>
                            </div>
                            <div className="w-full text-right font-bold mt-2">Rs. 2500.00</div>
                            <hr className='mt-1' />
                        </li>
                    </ol>

                    <div className='text-right text-white mt-2 font-bold'>Total Amount: Rs. 5000.00</div>

                    <div className='flex justify-between absolute bottom-4'>
                        <button class="flex border-0 py-1 px-4 mx-4 text-black bg-amber-400 focus:outline-none hover:bg-amber-300 rounded"><BsFillTrashFill className='mt-1 mr-1'/>Clear Cart</button>
                        <button class="flex border-0 py-1 px-4  text-black bg-amber-400 focus:outline-none hover:bg-amber-300 rounded"><BsFillBagCheckFill className='mt-1 mr-1' />Checkout</button>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar