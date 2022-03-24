import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { FaFacebookF } from "react-icons/fa";


export default function HomePage() {
    return(
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <Header/>
            
            <Footer/>
        </>    
    )
}
