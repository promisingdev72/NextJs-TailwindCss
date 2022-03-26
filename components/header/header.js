import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Flag from '../../public/images/uk-flag.png'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'



export default function Header() {
    return (
        <>
            {/* xl,lg,sm */}
            <div className='primary-back sm:flex'>
                <div className = 'pl-0 pr-44 pt-6 pb-2.5 ml-auto'>
                    <ul className="flex">
                        <li className="mr-12">
                            <IoLogoTwitter className="text-white text-2xl"/>
                        </li>
                        <li className=" mr-11">
                            <GrFacebookOption className="text-white text-2xl"/>
                        </li>
                        <li className="mr-32">
                            <IoLogoYoutube className="text-white text-2xl"/>
                        </li>
                        <li className="mr-6">
                            <IoMail className="text-white text-2xl"/>
                        </li>
                        <li className="mr-12 relative">
                            <IoNotifications className="text-white text-2xl"/>
                            <span className="absolute top-0 right-0 text-white bg-gray-200 rounded-full w-3 h-3 text-xs text-center">2</span>
                        </li>
                        <li className="mr-6 flex relative ">
                            <input type='text' className="focus: outline-none placeholder:italic rounded-full pl-3 pr-8 h-8 w-80 input-back text-white border border-white"></input>
                            <IoSearch className="text-white text-2xl absolute right-2 top-1"/>
                        </li>
                        <li className="mr-6">
                            <IoPersonCircle className="text-white text-3xl mr-6"/>
                        </li>
                        <li className="min-w-fit">
                            <Image src={Flag}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex pl-0 pr-0 pb-2 sm:pl-24 sm:pr-44 sm:pb-8">
                <div className="hidden sm:block sm:min-w-fit">
                    <Image src={Logo}/>
                </div>
                <div className="flex flex-1 justify-between sm:block pt-2 pl-4 pr-2 sm:pt-9 sm:pl-16">
                    <div className="font-BarlowRegular text-4xl sm:text-8xl logo-text-color">
                        KAMONA
                    </div>
                    <ul className="hidden sm:pt-12 pt-2 sm:flex">
                        <li className="mr-4 sm:mr-32 font-BarlowBold nav-text-color text-lg sm:text-xl">
                            Qui sommes-nous ?
                        </li>
                        <li className="mr-4 xl:mr-32 font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Actualités
                        </li>
                        <li className="mr-2 xl:mr-16 font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Notre histoire
                        </li>
                        <li className="mr-2 xl:mr-14 font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Les sections
                        </li>
                        <li className="mr-2 xl:mr-14 font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Adhérer
                        </li>
                        <li className="mr-2 xl:mr-16 font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Contact
                        </li>
                        <li className="font-BarlowBold nav-text-color text-lg xl:text-xl">
                            Faire un don
                        </li>
                    </ul>
                    <div className="flex text-4xl sm:hidden">
                        <IoMenu className="ml-auto primary-color"/>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}