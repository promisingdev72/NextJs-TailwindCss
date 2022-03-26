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
            <div className='hidden primary-back sm:flex'>
                <div className = 'pl-0 pr-44 pt-6 pb-2.5 ml-auto'>
                    <ul className="flex">
                        <li className="mr-4 lg:mr-12 flex items-center">
                            <IoLogoTwitter className="text-white text-2xl"/>
                        </li>
                        <li className="mr-4 lg:mr-11 flex items-center">
                            <GrFacebookOption className="text-white text-2xl"/>
                        </li>
                        <li className="mr-8 lg:mr-32 flex items-center">
                            <IoLogoYoutube className="text-white text-2xl"/>
                        </li>
                        <li className="mr-6 flex items-center">
                            <IoMail className="text-white text-2xl"/>
                        </li>
                        <li className="mr-12 relative flex items-center">
                            <IoNotifications className="text-white text-2xl"/>
                            <span className="absolute top-0 right-0 text-white bg-gray-200 rounded-full w-3 h-3 text-xs text-center">2</span>
                        </li>
                        <li className="mr-6 flex relative items-center">
                            <input type='text' className="focus: outline-none placeholder:italic rounded-full pl-3 pr-8 h-8 lg-80 w-60 input-back text-white border border-white"></input>
                            <IoSearch className="text-white text-2xl absolute right-2 top-1"/>
                        </li>
                        <li className="mr-6 flex items-center">
                            <IoPersonCircle className="text-white text-3xl"/>
                        </li>
                        <li className="min-w-fit flex items-center">
                            <Image src={Flag}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex pl-0 pr-0 pb-2 sm:pl-0 lg:pl-44 sm:pr-2 lg:pr-24 lg:pb-8 sm:pb-4">
                <div className="min-w-fit hidden lg:flex">
                    <Image src={Logo}/>
                </div>
                <div className="flex flex-1 justify-between sm:block pt-2 pl-4 pr-2 sm:pt-3 lg:pt-9 lg:pl-16 sm:pl-4">
                    <div className="font-BarlowRegular text-2xl lg:text-8xl sm:text-4xl logo-text-color">
                        KAMONA
                    </div>
                    <ul className="hidden sm:pt-4 lg:pt-12 pt-2 sm:flex">
                        <li className="mr-0 sm:mr-4 sm:12 lg:mr-32 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Qui sommes-nous ?
                        </li>
                        <li className="mr-4 lg:mr-32 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Actualités
                        </li>
                        <li className="mr-2 lg:mr-16 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Notre histoire
                        </li>
                        <li className="mr-2 lg:mr-14 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Les sections
                        </li>
                        <li className="mr-2 lg:mr-14 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Adhérer
                        </li>
                        <li className="mr-2 lg:mr-16 font-BarlowBold nav-text-color text-xm lg:text-xl">
                            Contact
                        </li>
                        <li className="font-BarlowBold nav-text-color text-xm lg:text-xl">
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