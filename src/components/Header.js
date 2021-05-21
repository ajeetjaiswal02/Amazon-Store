import React from 'react'
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Top Navigation* */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-3">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                       src="https://links.papareact.com/f90"
                       width={150}
                       height={40}
                       objectFit="contain"
                       className="cursor-pointer"
                    />
                </div>

                {/* Search * */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right section after search* */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello ajeet J</p>
                        <p className="font-extrabold md:text">Accounts & Lists</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text">& Orders</p>
                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/* Bottom nav* */}
            <div className="flex items-center space-x-5 p-2 pl-6 bg-amazon_blue-light text-sm text-white">
                <p className="link font-semibold flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link font-semibold">
                    Fresh
                </p>
                <p className="link font-semibold">
                    Mobiles
                </p>
                <p className="link font-semibold">
                    Amazon Pay
                </p>
                <p className="link font-semibold">
                    Gifts Card
                </p>
                <p className="link font-semibold hidden md:inline-flex">
                    Home Improvement
                </p>
                <p className="link font-semibold hidden md:inline-flex">
                    Gift Ideas
                </p>
                <p className="link font-semibold hidden md:inline-flex">
                    Pet Supply
                </p>
                <p className="link font-semibold hidden lg:inline-flex">
                    Health & Personal Care
                </p>
                <p className="link font-semibold hidden lg:inline-flex ">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/400x39-SWM_With-disclaimer_JPN._CB669638753_.jpg" alt="xxx" />
                </p>

            </div>
        </header>

    )
}

export default Header
