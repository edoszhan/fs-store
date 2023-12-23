"use client"
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'


export default function TopMenu() {
    return (
        <> 
        <div id="TopMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul
                    id = "TopMenuLeft"
                    className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                >
                    <li className="relative px-3">
                        <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                            <div>Login</div>
                            <BsChevronDown></BsChevronDown>
                        </Link>

                        <div
                            id="AuthDropdown"
                            className="absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
                        >
                            <div className='flex items-center justify-start gap-1 p-3'>
                                <img width={50} src="https://picsum.photos/200/300"/>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}