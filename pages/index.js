import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'


export default function HomePage() {
    return(
        <>
            <Layout>
                <Head>
                    <title>Home Page</title>
                </Head>
                <Header/>
                
                <Footer/>
            </Layout>
            
        </>    
    )
}
