import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useRef } from 'react'

const SideCart = (props) => {
    const {toggleCart} = props
    const ref = useRef()

  return (
    <div className='sidecart bg-cyan-400 w-56 absolute top-0 right-0 p-10 pt-5 transform transition-transform translate-x-full'>
        <AiFillCloseCircle onClick={toggleCart} className='absolute top-2 right-2 text-zinc-100 text-2xl font-bold cursor-pointer'/>
        <h2 className='font-bold'>My Cart</h2>
        <hr className='mb-2 mt-1'/>
        <ol>
            <li>
                <span>Item 1 - 200</span><br />
                <span>Item 1 - 200</span><br />
                <span>Item 1 - 200</span>
            </li>
            <li>
                <span>Item 1 - 200</span><br />
                <span>Item 1 - 200</span><br />
                <span>Item 1 - 200</span>
            </li>
        </ol>
    </div>
  )
}

export default SideCart